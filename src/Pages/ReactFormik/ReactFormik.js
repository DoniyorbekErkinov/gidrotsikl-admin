import { useFormik } from "formik";
import { Component, useCallback, useEffect, useMemo, useRef, useState } from "react";

import styled from "styled-components"




function ReactFormikComponent(params) {
    /**
     * MAPS
     */    
      
    /**
     * MAPS
     */
    const [langlat, setLangLat] = useState({
        lang: 41.32765251412051,
        lat: 69.25682333687821
    })
    const initialValues = {
        address: '',
        phone: "",
        lang: langlat.lang,
        lat: langlat.lat
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

        if(!values.lang) {
            errors.lang = 'Required'
        }

        if(!values.lat) {
            errors.lat = 'Required'
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    })
    console.log(formik.errors);      
    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 15}}>
            <h1 className="mt-5">I am React formik</h1>
            <Form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="address">Address</label>
                    <input 
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
                        type='number' 
                        id="phone" 
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}    
                    />
                    {formik.touched.phone && formik.errors.phone ? <span className="text-xs text-red-500">{formik.errors.phone} *</span> : null}
                </div>
                <div>
                    <label htmlFor="lang">Longitude</label>
                    <input 
                        type='number' 
                        id="lang" 
                        name="lang"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lang}
                    />
                    {formik.touched.lang && formik.errors.lang ? <span className="text-xs text-red-500">{formik.errors.lang} *</span> : null}
                </div>
                <div>
                    <label htmlFor="lat">Latitude</label>
                    <input 
                        type='number' 
                        id="lat" 
                        name="lat"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lat}
                    />
                    {formik.touched.lat && formik.errors.lat ? <span className="text-xs text-red-500">{formik.errors.lat} *</span> : null}
                </div>
                <button className="bg-blue-500 mt-4" type="submit">
                    Submit
                </button>
            </Form>
            <div style={{width: 800, height: 500, border: '3px solid gray'}}>
          
            </div>
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