import axios from 'axios';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiCloseCircleLine } from 'react-icons/ri'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { reactLocalStorage } from 'reactjs-localstorage';
import './Info.scss'
import { HostLink } from '../../../Host/Host';

export default function Info({ HandleShow, ID, refetch, DefultLanguage,
    DefultArchitecture, DefultPackageName, DefultReleaseDate, DefultUpdateDate, DefultRequired, DefultVersion, DefultSize }) {
    const [LoadingButton, setLoadingButton] = useState(false);

    const validationSchema = Yup.object({
        AppLanguage: Yup.string().required("App Language is required"),
        AppArchitecture: Yup.string().required("App Architecture is required"),
        AppPackageName: Yup.string().required("App PackageName is required"),
        AppReleaseDate: Yup.string().required("App ReleaseDate is required"),
        AppUpdateDate: Yup.string().required("App UpdateDate is required"),
        AppRequired: Yup.string().required("App Required is required"),
        AppVersion: Yup.string().required("App Version is required"),
        AppSize: Yup.string().required("App Size is required"),
    })

    const SendNameUpdate = async (values) => {
        setLoadingButton(true)
        await axios.patch(`${HostLink}/app/Update/${ID}`, {
            key: "appinfo",
            result: {
                applanguage: values.AppLanguage,
                appsize: values.AppSize,
                appversion: values.AppVersion,
                apprequired: values.AppRequired,
                appUbdateDate: values.AppUpdateDate,
                appReleaseDate: values.AppReleaseDate,
                appArchitecture: values.AppArchitecture,
                appPackageName: values.AppPackageName
            }
        }, {
            headers: {
                token: reactLocalStorage.get("token")
            }
        },
        ).then((res) => {
            setLoadingButton(false);
            refetch();
            HandleShow();
        }).catch((err) => {
            console.log(err);
        })
    }

    const Formik = useFormik({
        initialValues: {
            AppLanguage: "",
            AppArchitecture: "",
            AppPackageName: "",
            AppReleaseDate: "",
            AppUpdateDate: "",
            AppRequired: "",
            AppVersion: "",
            AppSize: ""

        }, validationSchema,
        onSubmit: SendNameUpdate
    });

    return <>
        <motion.div className="popupInfo" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}>
            <motion.div className="Infoform" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}>
                <div className="close align-self-end">
                    <RiCloseCircleLine onClick={HandleShow} />
                </div>
                <form className='mt-5 row' onSubmit={Formik.handleSubmit}>
                    <div className="col-md-6 mt-3">
                        <label htmlFor="AppLanguage">App Language</label>
                        <input type="text" className="form-control" id="AppLanguage" name="AppLanguage"
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} defaultValue={DefultLanguage} />
                        {Formik.errors.AppLanguage && Formik.touched.AppLanguage ?
                            <div className="alert alert-danger py-2 mt-2">{Formik.errors.AppLanguage}</div> : null}
                    </div>

                    <div className="col-md-6 mt-3">
                        <label htmlFor="AppArchitecture">App Architecture</label>
                        <input type="text" className="form-control" id="AppArchitecture" name="AppArchitecture"
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} defaultValue={DefultArchitecture} />
                        {Formik.errors.AppArchitecture && Formik.touched.AppArchitecture ?
                            <div className="alert alert-danger py-2 mt-2">{Formik.errors.AppArchitecture}</div> : null}
                    </div>

                    <div className="col-md-6 mt-3">
                        <label htmlFor="AppPackageName">App Package Name</label>
                        <input type="text" className="form-control" id="AppPackageName" name="AppPackageName"
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} defaultValue={DefultPackageName} />
                        {Formik.errors.AppPackageName && Formik.touched.AppPackageName ?
                            <div className="alert alert-danger py-2 mt-2">{Formik.errors.AppPackageName}</div> : null}
                    </div>

                    <div className="col-md-6 mt-3">
                        <label htmlFor="AppReleaseDate">App Release Date</label>
                        <input type="date" className="form-control" id="AppReleaseDate" name="AppReleaseDate"
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} defaultValue={DefultReleaseDate} />
                        {Formik.errors.AppReleaseDate && Formik.touched.AppReleaseDate ?
                            <div className="alert alert-danger py-2 mt-2">{Formik.errors.AppReleaseDate}</div> : null}
                    </div>

                    <div className="col-md-6 mt-3">
                        <label htmlFor="AppUpdateDate">App Update Date</label>
                        <input type="date" className="form-control" id="AppUpdateDate" name="AppUpdateDate"
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} defaultValue={DefultUpdateDate} />
                        {Formik.errors.AppUpdateDate && Formik.touched.AppUpdateDate ?
                            <div className="alert alert-danger py-2 mt-2">{Formik.errors.AppUpdateDate}</div> : null}
                    </div>

                    <div className="col-md-6 mt-3">
                        <label htmlFor="AppRequired">App Required</label>
                        <input type="text" className="form-control" id="AppRequired" name="AppRequired"
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} defaultValue={DefultRequired} />
                        {Formik.errors.AppRequired && Formik.touched.AppRequired ?
                            <div className="alert alert-danger py-2 mt-2">{Formik.errors.AppRequired}</div> : null}
                    </div>

                    <div className="col-md-6 mt-3">
                        <label htmlFor="AppVersion">App Version</label>
                        <input type="text" className="form-control" id="AppVersion" name="AppVersion"
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} defaultValue={DefultVersion} />
                        {Formik.errors.AppVersion && Formik.touched.AppVersion ?
                            <div className="alert alert-danger py-2 mt-2">{Formik.errors.AppVersion}</div> : null}
                    </div>

                    <div className="col-md-6 mt-3">
                        <label htmlFor="AppSize">App Size</label>
                        <input type="text" className="form-control" id="AppSize" name="AppSize"
                            onChange={Formik.handleChange} onBlur={Formik.handleBlur} defaultValue={DefultSize} />
                        {Formik.errors.AppSize && Formik.touched.AppSize ?
                            <div className="alert alert-danger py-2 mt-2">{Formik.errors.AppSize}</div> : null}
                    </div>
                    {LoadingButton ? <button type='button' className='btn bg-main text-light mt-2'>
                        <i className='fas fa-spinner fa-spin '></i>
                    </button> :
                        <button className='btn mt-3 d-flex justify-content-center align-content-center' type='submit'>
                            Submit</button>}
                </form>
            </motion.div>
        </motion.div >
    </>
}