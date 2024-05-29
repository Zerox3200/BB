import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiCloseCircleLine } from 'react-icons/ri'
import './Preview.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'

export default function Preview({ HandleShow, ID, setLoading, refetch }) {
    const [LoadingButton, setLoadingButton] = useState(false);

    const validationSchema = Yup.object({
        AppName: Yup.string().required("Add new name is required"),
        appicon: Yup.mixed()
            .test("File_Type", "Category image should be svg only!!", (value) =>
                value && ['image/svg+xml'].includes(value.type))
            .test("File_Size", "Image size should be less than 200 KB",
                (value) => value && value.size <= 200 * 1024).required("Category Image ")
    })



    const UpdateRequest = async (values) => {
        setLoadingButton(true);
        setLoading(true)
        const UpdateForm = new FormData();
        UpdateForm.append('Category', values.AppName);
        UpdateForm.append('catIcon', values.appicon);
        await axios.patch(`http://localhost:3000/Categories/UpdateCat/${ID}`, UpdateForm, {
            headers: {
                token: reactLocalStorage.get("token")
            }
        }).then((res) => {
            console.log(res);
            setLoading(false);
            setLoadingButton(false)
            refetch();
        }).catch((err) => console.log(err))
    }

    const Formik = useFormik({
        initialValues: {
            AppName: "",
            appicon: ""
        },
        validationSchema,
        onSubmit: UpdateRequest
    })



    const HandleIcon = (event) => {
        const IconImage = event.target.files[0];
        Formik.setFieldValue("appicon", IconImage)
    }




    return <>
        <motion.div className="popup" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}>
            <motion.div className="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}>
                <div className="close align-self-end">
                    <RiCloseCircleLine onClick={HandleShow} />
                </div>
                <form className='mt-5' onSubmit={Formik.handleSubmit}>
                    <label htmlFor="AppName">Category Name</label>
                    <input type="text" className="form-control" id="AppName" name="AppName"
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.AppName && Formik.touched.AppName ?
                        <div className="alert alert-danger py-2 mt-2">{Formik.errors.AppName}</div> : null}

                    <label htmlFor="appicon">Upload New App Icon</label>
                    <input type="file" className="form-control" id="appicon" name="appicon"
                        onChange={HandleIcon} />
                    {Formik.errors.appicon && Formik.touched.appicon ?
                        <div className="alert alert-danger py-2 mt-2">{Formik.errors.appicon}</div> : null
                    }
                    {LoadingButton ? <button type='button' className='btn bg-main text-light mt-2'>
                        <i className='fas fa-spinner fa-spin '></i>
                    </button> :
                        <button className='btn mt-3' type='submit'>Submit</button>}
                </form>
            </motion.div>
        </motion.div >
    </>

}
