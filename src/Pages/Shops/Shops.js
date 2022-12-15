import styled from "styled-components"
import ContentComponent from "../../Components/Content.component";
import './shop.style.css'
import { database } from "../../firebase/firebase";
import { setDoc, doc, onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
function Shops(params) {   
    const [shops, setShops] = useState([])        
    useEffect(() => {
        const shopsColRef = collection(database, 'shops')
        onSnapshot(shopsColRef, (snapshot) => {
          setShops(snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })))
        })
        console.log(shops);
      },[])
    return (
        <WRAPPER>
            <div className="shop_header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <h1 style={{ fontSize: 20, fontWeight: 600}}>Do'konlar</h1>
                <BUTTON>Add</BUTTON>
            </div>
            <ContentComponent>
                {shops.map(shop => (
                    <div key={shop.id}>
                        <h1>{shop.address}</h1>
                        <p>{shop.phone}</p>
                    </div>
                ))}
            </ContentComponent>
        </WRAPPER>
    )
}
const WRAPPER = styled.div`
    max-width: 1128px !important;
    width: 100%;
    margin: 0 auto !important;
`;
const BUTTON = styled.button`
    width: 100px;
    background: #81edcf;
    height: 34px;
    color: #f6f6f6;
    font-size: 20px;
    font-weight: 600;
    border-radius: 6px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .25);
`;
export default Shops