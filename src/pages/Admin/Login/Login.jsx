import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./Login.scss"


export default function Login() {
    const [loading, setloading] = useState(false)

    // yup validation 
    let validationSchema = Yup.object({
        email: Yup.string().required("email is required").email('invalid email'),
        password: Yup.string().required("password is required").matches(/^[A-Z][\w @]{5,8}$/, "invalid password ex(Ahmed123)"),
    })

    // callApi 
    async function loginsubmit(values) {
        setloading(true)
    }
    // Fromik 
    let formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        }, validationSchema, onSubmit: loginsubmit
    })

    return <>
        <section className="Login">
            <div className="login-main ">
                <h1 className='font-color h2'>Login</h1>
                <form onSubmit={formik.handleSubmit}>

                    {/* {apiError && <div className="alert alert-danger">{apiError}</div>} */}

                    <label htmlFor="email" className='form-label'></label>
                    <input className='form-control' onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name='email' id='email' />
                    {formik.errors.email &&
                        <div className="alert alert-danger py-2 mt-2">{formik.errors.email}</div>}

                    <label htmlFor="password" className='form-label'></label>
                    <input className='form-control' onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name='password' id='password' />
                    {formik.errors.password && formik.touched.password &&
                        <div className="alert alert-danger py-2 mt-2">{formik.errors.password}</div>}

                    {loading ? <button type='button' className='btn bg-main text-light mt-2'>
                        <i className='fas fa-spinner fa-spin '></i>
                    </button> : <button type='submit'
                        disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-light mt-2'>Login</button>}
                </form>

            </div>

        </section>
    </>
}
