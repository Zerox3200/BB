import React, { useState } from 'react'
import './News.scss'
import { motion } from 'framer-motion'
import { RiCloseCircleLine } from 'react-icons/ri'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { HostLink } from '../../../Host/Host';


export default function News({ HandleShow, ID, refetch }) {
    const [LoadingButton, setLoadingButton] = useState(false);

    const validationSchema = Yup.object({
        News: Yup.array().min(1, "You should atleast add one new").required("News is required")
    })

    const SendNameUpdate = async (values) => {
        setLoadingButton(true);
        console.log(values);
        await axios.patch(`${HostLink}/app/Update/${ID}`, {
            key: "news",
            result: values.News
        }, {
            headers: {
                token: reactLocalStorage.get("token")
            }
        },
        ).then((res) => {
            console.log(res);
            setLoadingButton(false);
            refetch();
            HandleShow();
        }).catch((err) => {
            console.log(err);
        })
    }

    const Formik = useFormik({
        initialValues: {
            News: ""
        }, validationSchema,
        onSubmit: SendNameUpdate
    });

    const HandleNews = (news) => {
        const MainNews = Array.from(news.target.value.split("-"));
        const SecondNews = MainNews.slice(1).map((ele) => ele.replace(/\n/, ''));
        Formik.setFieldValue("News", SecondNews);
    }

    return <>
        <motion.div className="popupNews" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}>
            <motion.div className="Newsform" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}>
                <div className="close align-self-end">
                    <RiCloseCircleLine onClick={HandleShow} />
                </div>
                <form className='mt-5' onSubmit={Formik.handleSubmit}>
                    <label htmlFor="News">News</label>
                    <p className='alert alert-dark'>Please add [-] before every new</p>
                    <textarea type="text" className="form-control" id="News" name="News" rows='10'
                        onChange={HandleNews} onBlur={Formik.handleBlur} />
                    {Formik.errors.News && Formik.touched.News ?
                        <div className="alert alert-danger py-2 mt-2">{Formik.errors.News}</div> : null}

                    {LoadingButton ? <button type='button' className='btn bg-main text-light mt-2'>
                        <i className='fas fa-spinner fa-spin '></i>
                    </button> :
                        <button className='btn mt-3' type='submit'>Submit</button>}
                </form>
            </motion.div>
        </motion.div >
    </>
}
