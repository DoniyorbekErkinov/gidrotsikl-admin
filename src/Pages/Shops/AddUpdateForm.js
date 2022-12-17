import { useFormik } from "formik";
import ContentComponent from "../../Components/Content.component";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { database } from "../../firebase/firebase";
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";

function AddUpdateForm({toggleModal, singleData}) {
    const { t } = useTranslation()
    const colRef = collection(database, "shops")
    const initialValues = {
        address: singleData ? singleData.address : "",
        phone: singleData ? singleData.phone : ""
    }
    const onSubmit = values => {
        if(!singleData.id) {
            addDoc(colRef, {
                address: values.address,
                phone: values.phone,
                createdTa: serverTimestamp(),
                countOfProducts: 0,
                products: []
            }).then(() => {
                toggleModal()
                const id = toast.success(t('messages.saved'))    
                toast.update(id, {
                    type: "success", 
                    autoClose: 2500,
                }); 
            }).catch((error) => {
                let errorId = toast.error(error.message)            
                toast.error(errorId, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2500,
                });
            }).finally(() => {
                toggleModal()
            })
        } else {
            const docRef = doc(database, 'shops', singleData.id)
            updateDoc(docRef, {
                ...singleData,
                address: values.address,
                phone: values.phone,
            }).then(() => {
                toggleModal()
                const id = toast.success(t('messages.edited'))    
                toast.update(id, {
                    type: "success", 
                    autoClose: 2500,
                }); 
            }).catch((error) => {
                let errorId = toast.error(error.message)            
                toast.error(errorId, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2500,
                });
            }).finally(() => {
                toggleModal()
            })
        }
    }
    const validate = (values) => {
        let errors = {}

        if(!values.address) {
            errors.address = t('errors.required')
        }

        if(!values.phone) {
            errors.phone = t('errors.required')
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    })
    return (
        <ContentComponent styles={{width: '50%', margin: '0 auto', marginTop: -150, position: 'relative'}}>
            <button style={{position: 'absolute', right: 15, fontSize: 30}} onClick={() => toggleModal()}>x</button>
            <form className="mt-5 flex flex-col py-5" onSubmit={formik.handleSubmit}>
                <div className="mt-3 flex flex-col">
                    <label htmlFor="address">Address</label>
                    <input
                        className="shadow-md p-2 mt-2 border-2 rounded-xl" 
                        type='text' 
                        id="address" 
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    {formik.touched.address && formik.errors.address ? <span className="text-xs text-red-500">{formik.errors.address} *</span> : null}
                </div>
                <div className="mt-3 flex flex-col">
                    <label htmlFor="phone">Phone</label>
                    <input
                        className="shadow-md p-2 mt-2 border-2 rounded-xl" 
                        type='number' 
                        id="phone" 
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}    
                    />
                    {formik.touched.phone && formik.errors.phone ? <span className="text-xs text-red-500">{formik.errors.phone} *</span> : null}
                </div>
                <button className="bg-blue-400 text-white py-1 px-3 rounded-md mt-4 shadow-lg" type="submit">
                    {t('actions.save')}
                </button>
            </form>
        </ContentComponent>
    )
}
export default AddUpdateForm;