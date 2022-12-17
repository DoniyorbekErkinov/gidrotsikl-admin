import styled from "styled-components"
import ContentComponent from "../../Components/Content.component";
import './shop.style.css'
import { database } from "../../firebase/firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import {  useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ShopsTable from "./ShopsTable";
import AddUpdateForm from "./AddUpdateForm";
import { toast } from "react-toastify";
function Shops() {
    const { t } = useTranslation()  
    const [shops, setShops] = useState([]) 
    const [isModalOpen, setIsModalOpen] = useState(false) 
    const [singleData, setSingleData] = useState({})
    useEffect(() => {
    const shopsColRef = collection(database, 'shops')
    onSnapshot(shopsColRef, (snapshot) => {
        let array = []
        snapshot.docs.forEach((doc) => {
            array.push({...doc.data(), id: doc.id})
        });
        setShops(array);
    })
    }, [])
    function getSingleFile(id) {
        if(id) {
            const docRef = doc(database, 'shops', id)
            onSnapshot(docRef, (doc) => {
                setSingleData({...doc.data(), id: doc.id});
                setIsModalOpen(true)
              })
        } else {
            const id = toast.error(t('messages.login_seccess'))    
            toast.update(id, {
                type: "error", 
                autoClose: 2500,
            }); 
        }
    }
    function closeModal() {
        setIsModalOpen(false)
        setSingleData({})
    }
    function deleteData(id) {
        const docRef = doc(database, 'shops', id)
        deleteDoc(docRef).then(() => {
            const id = toast.success(t('messages.login_seccess'))    
            toast.update(id, {
                type: "success", 
                autoClose: 1500,
            });     
        }).catch((error) => {
            const id = toast.error(error)    
            toast.update(id, {
                type: "error", 
                autoClose: 1500,
            }); 
        })
    }
    const data = useMemo(() => shops, [shops])
    return (
        <WRAPPER>
            <div className="shop_header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <h1 style={{ fontSize: 20, fontWeight: 600}}>{t('shops.title')}</h1>
                <BUTTON onClick={() => setIsModalOpen(true)}>{t("actions.add")}</BUTTON>
            </div>
            <ContentComponent>
                <ShopsTable deleteData={deleteData} getSingleFile={getSingleFile}  shops={data}></ShopsTable>
            </ContentComponent>
            {
                isModalOpen 
                    ?
                <AddUpdateForm singleData={singleData}  toggleModal={closeModal}></AddUpdateForm>
                    : null
            }
        </WRAPPER>
    )
}
const WRAPPER = styled.div`
    max-width: 1128px !important;
    width: 100%;
    margin: 0 auto !important;
    position: relative;
`;
const BUTTON = styled.button`
    width: 100px;
    background: #04AA6D;
    height: 34px;
    color: #f6f6f6;
    font-size: 20px;
    font-weight: 400;
    border-radius: 6px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .25);
`;
export default Shops