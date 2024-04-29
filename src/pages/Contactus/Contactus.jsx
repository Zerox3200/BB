import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import Search from '../../components/Search/Search'
import { Helmet } from "react-helmet";
import './Contact.scss';
import { NavContext } from '../../Context/NavContext';
import { useTranslation } from 'react-i18next';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function Contactus() {
    const [loading, setloading] = useState(false)
    const { margin } = useContext(NavContext);
    const { t } = useTranslation();
    const MainLanguage = reactLocalStorage.get('lan');

    function loginsubmit(values) {
        console.log(values);
        setloading(true);
    };

    let validationSchema = Yup.object({
        name: Yup.string().required(t("NameRequired")).min(3, t("Minimum")),
        email: Yup.string().required(t("EmailRequired")).email(t("InvalidEmail")),
        reason: Yup.string(),
        subject: Yup.string().min(5, t("SubjectMinimum")).required(t("SubjectRequired")),
        message: Yup.string().min(10, t("MessageMinimum")).required(t("MessageRequired"))
    })

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            reason: MainLanguage === "ar" ? "لدي مشكله" : MainLanguage === "tr" ? 'bir sorunum var' : 'I have a feedback',
            subject: "",
            message: "",
        }, validationSchema, onSubmit: loginsubmit,

    })

    return (
        <section className={margin ? "ContactUs ContactMarined" : "ContactUs ContactConstant"}>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <Search />

            <div className="cotact-container container">

                <div className={MainLanguage === 'ar' ? "contact-text col-md-6 col-sm-12 Right" :
                    "contact-text col-md-6 col-sm-12"}>

                    <h2 className='font-color fw-bold'>{t("Contact")}</h2>
                    <p className='font-color fs-6 fw-bold '>{t("ContactUSGreeting")},<br />
                        {t("ContactUSGreeting2")}.
                    </p>
                </div>

                <div className="row contact-main">

                    <div className="contact-form col-md-5 col-sm-12">
                        <form onSubmit={formik.handleSubmit}>

                            <div className='my-2'>
                                <input className='form-control' placeholder={t("name")} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="name" id="name" />
                                {formik.errors.name && formik.touched.name &&
                                    <div className="alert alert-danger py-2 mt-2">{formik.errors.name}</div>}
                            </div>

                            <div className='my-2'>
                                <input className='form-control' placeholder={t("email")} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="email" />
                                {formik.errors.email && formik.touched.email &&
                                    <div className="alert alert-danger py-2 mt-2">{formik.errors.email}</div>}
                            </div>

                            <div className='my-2'>
                                <select className='form-select' onBlur={formik.handleBlur} onChange={formik.handleChange} name="reason" id="reason">
                                    <option className='font-color' value={t("Choice1")}>{t("Choice1")}</option>
                                    <option className='font-color' value={t("Choice2")}>{t("Choice2")}</option>
                                    <option className='font-color' value={t("Choice3")}>{t("Choice3")}</option>
                                    <option className='font-color' value={t("Choice4")}>{t("Choice4")}</option>
                                </select>
                                {formik.errors.reason && formik.touched.reason &&
                                    <div className="alert alert-danger py-2 mt-2">{formik.errors.reason}</div>}
                            </div>

                            <div className='my-2'>
                                <input className='form-control' placeholder={t("SubjectTitle")} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="subject" />
                                {formik.errors.subject && formik.touched.subject &&
                                    <div className="alert alert-danger py-2 mt-2">{formik.errors.subject}</div>}
                            </div>

                            <div className='my-2'>
                                <textarea className='form-control' placeholder={t("Message")} name="message" id="message" onBlur={formik.handleBlur} onChange={formik.handleChange} rows="10" cols="30">

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

                    <div className={MainLanguage === 'ar' ? "contact-info col-md-4 col-sm-12 Right" : "contact-info col-md-4 col-sm-12"}>
                        <h3 className='title mb-3 fw-bold'>{t("ContactInfo")}:</h3>
                        <span className='d-block font-color fs-5'>{t("ContactInfoEmail")} : email@deenbook.co.uk</span>
                        <span className='d-block font-color fs-5'>{t("ContactInfoPhoneNumber")} : +00011234578901</span>
                        <span className='d-block font-color fs-5'>{t("ContactInfoFacebook")} : @deenbook</span>
                        <span className='d-block font-color fs-5'>{t("ContactInfoYoutube")} : @deenbook</span>
                    </div>
                </div>

            </div>

        </section>
    )
}
