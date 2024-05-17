import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./Login.scss"
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useNavigate } from 'react-router-dom'

// .matches(/^[A-Z][\w @]{5,8}$/, "invalid password ex(Ahmed123)")
export default function Login() {
    const [loading, setloading] = useState(false);
    const [Error, setError] = useState();
    const navigate = useNavigate();

    // yup validation 
    let validationSchema = Yup.object({
        email: Yup.string().required("email is required").email('invalid email'),
        password: Yup.string().required("password is required"),
    })

    // callApi 
    async function loginsubmit(values) {
        setloading(true)
        return await axios.post("http://localhost:3000/auth/login", {
            email: values.email,
            password: values.password
        }).then((res) => {
            setloading(false);

            if (res.data.token) {
                reactLocalStorage.set("token", res.data.token);
                navigate("/DashApps2030")
            }
            setError(res.data)
            return;
        }).catch((err) => {
            setError(err)
            setloading(false);
        })
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

                    <label htmlFor="email" className='form-label mt-3'>Email</label>
                    <input className='form-control' placeholder='Email' onBlur={formik.handleBlur}
                        onChange={formik.handleChange} type="email" name='email' id='email' />
                    {formik.errors.email && formik.touched.email &&
                        <div className="alert alert-danger py-2 mt-2">{formik.errors.email}</div>}

                    <label htmlFor="password" className='form-label mt-3'>Password</label>
                    <input className='form-control' placeholder='Password' onBlur={formik.handleBlur}
                        onChange={formik.handleChange} type="password" name='password' id='password' />
                    {formik.errors.password && formik.touched.password &&
                        <div className="alert alert-danger py-2 mt-2">{formik.errors.password}</div>}

                    {loading ? <button type='button' className='btn bg-main text-light mt-2'>
                        <i className='fas fa-spinner fa-spin '></i>
                    </button> : <button type='submit'
                        disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-light mt-2'>Login</button>}
                    {Error &&
                        <div className="alert alert-danger py-2 mt-2">{Error}</div>}
                </form>

            </div>

        </section>
    </>
}
