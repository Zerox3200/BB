import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import Search from '../../components/Search/Search'
import { Helmet } from "react-helmet";
import './Contact.scss';
import { NavContext } from '../../Context/NavContext';
export default function Contactus() {
    const [loading, setloading] = useState(false)
    const { margin } = useContext(NavContext);

    function loginsubmit(values) {
        console.log(values);
        setloading(true);
    };

    let validationSchema = Yup.object({
        name: Yup.string().required("name is required").min(3, "min length is 3"),
        email: Yup.string().required("email is required").email("invalid email"),
        reason: Yup.string().required("reson required")
            .oneOf(["i have an issue", "i have a feedback", "i have a suggestion", "i want to collaborate"]),
        subject: Yup.string().min(5).required("subject required"),
        message: Yup.string().min(10).required("message required")
    })

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            reason: "i have an issue",
            subject: "",
            message: "",
        }, validationSchema, onSubmit: loginsubmit,

    })

    return (
        <section className={margin ? "ContactUs ContactMarined" : "ContactUs ContactConstant"}>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Search />

            <div className="cotact-container container">

                <div className="contact-text">

                    <h2 className='font-color fw-bold'>Contact Us</h2>
                    <p className='font-color fs-6 fw-bold '>Assalamu Alaykum,<br />
                        We would like to hear from you.
                    </p>
                </div>

                <div className="row contact-main">

                    <div className="contact-form col-md-5 col-sm-12">
                        <form onSubmit={formik.handleSubmit}>

                            <div className='my-2'>
                                <input className='form-control' placeholder="name" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="name" id="name" />
                                {formik.errors.name && formik.touched.name &&
                                    <div className="alert alert-danger py-2 mt-2">{formik.errors.name}</div>}
                            </div>

                            <div className='my-2'>
                                <input className='form-control' placeholder="email" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="email" />
                                {formik.errors.email && formik.touched.email &&
                                    <div className="alert alert-danger py-2 mt-2">{formik.errors.email}</div>}
                            </div>

                            <div className='my-2'>
                                <select className='form-select' onBlur={formik.handleBlur} onChange={formik.handleChange} name="reason" id="reason">
                                    <option className='font-color' value="i have an issue">I have an issue</option>
                                    <option className='font-color' value="i have a feedback">I have a feedback</option>
                                    <option className='font-color' value="i have a suggestion">I have a suggestion</option>
                                    <option className='font-color' value="i want to collaborate">I want to collaborate</option>
                                </select>
                                {formik.errors.reason && formik.touched.reason &&
                                    <div className="alert alert-danger py-2 mt-2">{formik.errors.reason}</div>}
                            </div>

                            <div className='my-2'>
                                <input className='form-control' placeholder="Subject title" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="subject" />
                                {formik.errors.subject && formik.touched.subject &&
                                    <div className="alert alert-danger py-2 mt-2">{formik.errors.subject}</div>}
                            </div>

                            <div className='my-2'>
                                <textarea className='form-control' placeholder="Message" name="message" id="message" onBlur={formik.handleBlur} onChange={formik.handleChange} rows="10" cols="30">

                                </textarea>
                                {formik.errors.message && formik.touched.message &&
                                    <div className="alert alert-danger py-2 mt-2">{formik.errors.message}</div>}
                            </div>


                            {loading ? <div className="text-end">
                                <button className='btn bg-main text-light' disabled>
                                    <i className='fas fa-spin fa-spinner'></i>
                                </button>
                            </div>
                                :
                                <div className="submition text-end">
                                    <button type='submit' className='btn bg-main text-light'
                                        disabled={!(formik.dirty && formik.isValid)}>Submit</button>
                                </div>
                            }
                        </form>
                    </div>

                    <div className="contact-info col-md-4 col-sm-12 ">
                        <h3 className='title mb-3 fw-bold'>Our contact info :</h3>
                        <span className='d-block font-color fs-5'>Email : email@deenbook.co.uk</span>
                        <span className='d-block font-color fs-5'>Phone : +00011234578901</span>
                        <span className='d-block font-color fs-5'>Facebook : @deenbook</span>
                        <span className='d-block font-color fs-5'>Youtube : @deenbook</span>
                    </div>
                </div>

            </div>

        </section>
    )
}
