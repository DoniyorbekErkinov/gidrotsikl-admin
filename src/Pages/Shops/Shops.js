import styled from "styled-components"
import ContentComponent from "../../Components/Content.component";
import './shop.style.css'
import { database } from "../../firebase/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import {  useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ShopsTable from "./ShopsTable";
function Shops(params) { 
    const { t } = useTranslation()  
    const [shops, setShops] = useState([])  
     
      useEffect(() => {
        const shopsColRef = collection(database, 'shops')
        onSnapshot(shopsColRef, (snapshot) => {
            let array = []
            snapshot.docs.forEach((doc) => {
                array.push({...doc.data(), id: doc.id})
            });
            setShops(array);
        })
      },[])
    return (
        <WRAPPER>
            <div className="shop_header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <h1 style={{ fontSize: 20, fontWeight: 600}}>{t('shops.title')}</h1>
                <BUTTON>{t("actions.add")}</BUTTON>
            </div>
            <ContentComponent>
                {
                    shops.map((el) =>{ return (
                        <div key={el.id}>
                            <p>{el.address}</p>
                        </div>
                    )})
                }
                {/* <ShopsTable data={shops}></ShopsTable> */}
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