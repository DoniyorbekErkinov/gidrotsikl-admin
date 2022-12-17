import { useFormik } from "formik";
import styled from "styled-components"

function ReactFormikComponent(params) {    
    const initialValues = {
        address: '',
        phone: ""
    }
    const onSubmit = values => {
        console.log(values);
    }
    const validate = (values) => {
        let errors = {}

        if(!values.address) {
            errors.address = 'Required'
        }

        if(!values.phone) {
            errors.phone = 'Required'
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    })
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 15}}>
            <h1 className="mt-5">I am React formik</h1>
            <Form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        type='text' 
                        id="address" 
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    {formik.touched.address && formik.errors.address ? <span className="text-xs text-red-500">{formik.errors.address} *</span> : null}
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        className="shadow-lg p-5" 
                        type='number' 
                        id="phone" 
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}    
                    />
                    {formik.touched.phone && formik.errors.phone ? <span className="text-xs text-red-500">{formik.errors.phone} *</span> : null}
                </div>
                <button className="bg-blue-500 mt-4" type="submit">
                    Submit
                </button>
            </Form>
        </div>
    )
}
const Form = styled.form`
    width: 50%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: lightgrey;
    justify-content: center;
    border-radius: 16px;
    div {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        label {
            margin: 10px 0px;
        }
        input {
            height: 35px;
            border-radius: 5px;
        }
    }
    button {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        height: 35px;
        border-radius: 5px;
        margin-top: 20px;
    }
`;
export default ReactFormikComponent