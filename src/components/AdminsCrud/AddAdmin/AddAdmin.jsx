import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';
import "./AddAdmin.scss"

export default function AddAdmin() {
    const [loading, setloading] = useState(false);
    const [Error, setError] = useState();

    let addadmin = async (values) => {
        setloading(true)
        await axios.post("http://localhost:3000/auth/CreateAdmin", {
            name: values.name,
            email: values.email,
            password: values.password,
            confirmpassword: values.confirmpassword,
        },
            {
                headers: {
                    token: localStorage.getItem("token")
                }
            }).then(() => {

                setloading(false)
            }).catch((err) => {
                setError(err)
                setloading(false);
            })
    }

    let validationSchema = Yup.object({
        name: Yup.string().required("name id required"),
        email: Yup.string().required("email is required").email('invalid email'),
        password: Yup.string().required("password is required"),
        confirmpassword: Yup.string().required("repassword is required").oneOf([Yup.ref("password")], "password and confirmpassword dont matches"),
    })

    let Formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
        }, onSubmit: addadmin, validationSchema
    })
    return <>
        <div className="mainadd">
            <form className='w-50  mx-auto' onSubmit={Formik.handleSubmit}>
                <h1 className='font-color mx-auto'>Add admin</h1>

                <label className='form-label mt-3 font-color' htmlFor="name">Name:</label>
                <input className='form-control' onBlur={Formik.handleBlur} onChange={Formik.handleChange} type="text" name='name' id='name' />
                {Formik.errors.name && Formik.touched.name &&
                    <div className="alert alert-danger py-2 mt-2">{Formik.errors.name}</div>}

                <label className='form-label font-color' htmlFor="email"> Email:</label>
                <input className='form-control' onBlur={Formik.handleBlur} onChange={Formik.handleChange} type="email" name='email' id='email' />
                {Formik.errors.email && Formik.touched.email &&
                    <div className="alert alert-danger py-2 mt-2">{Formik.errors.email}</div>}

                <label className='form-label font-color' htmlFor="password">Password:</label>
                <input className='form-control' onBlur={Formik.handleBlur} onChange={Formik.handleChange} type="password" name='password' id='password' />
                {Formik.errors.password && Formik.touched.password && <div className="alert alert-danger py-2 mt-2">{Formik.errors.password}</div>}

                <label className='form-label font-color' htmlFor="confirmpassword">Confirmpassword:</label>
                <input className='form-control' onBlur={Formik.handleBlur} onChange={Formik.handleChange} type="confirmpassword" name='confirmpassword' id='confirmpassword' />
                {Formik.errors.confirmpassword && Formik.touched.confirmpassword && <div className="alert alert-danger py-2 mt-2">{Formik.errors.confirmpassword}</div>}


                {loading ? <button type='button' className='btn bg-main text-light mt-3'>
                    <i className='fas fa-spinner fa-spin '></i>
                </button>
                    : <button type='submit'
                        disabled={!(Formik.isValid && Formik.dirty)} className='btn  bg-main text-light mt-3'>Add</button>}
                {Error && <div className="alert alert-danger py-2 mt-2">{Error}</div>}

            </form>

        </div>
    </>

}
