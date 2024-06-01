import React, { useState } from 'react'
import './Size.scss'
import { motion } from 'framer-motion'
import { RiCloseCircleLine } from 'react-icons/ri'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function Size({ HandleShow, ID, refetch }) {
    const [LoadingButton, setLoadingButton] = useState(false);

    const validationSchema = Yup.object({
        NewSize: Yup.string().required("Add new Size is required")
    })

    const SendNameUpdate = async (values) => {
        setLoadingButton(true)
        await axios.patch(`http://localhost:3000/app/Update/${ID}`, {
            key: "size",
            result: values.NewSize
        }, {
            headers: {
                token: reactLocalStorage.get("token")
            }
        },
        ).then(async () => {
            setLoadingButton(false);
            await refetch();
            HandleShow();
        }).catch((err) => {
            console.log(err);
        })
    }

    const Formik = useFormik({
        initialValues: {
            NewSize: ""
        }, validationSchema,
        onSubmit: SendNameUpdate
    });

    return <>
        <motion.div className="popupSize" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}>
            <motion.div className="formSize" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}>
                <div className="close align-self-end">
                    <RiCloseCircleLine onClick={HandleShow} />
                </div>
                <form className='mt-5' onSubmit={Formik.handleSubmit}>
                    <label htmlFor="NewSize">New Size</label>
                    <input type="text" className="form-control" id="NewSize" name="NewSize"
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.NewSize && Formik.touched.NewSize ?
                        <div className="alert alert-danger py-2 mt-2">{Formik.errors.NewSize}</div> : null}

                    {LoadingButton ? <button type='button' className='btn bg-main text-light mt-2'>
                        <i className='fas fa-spinner fa-spin '></i>
                    </button> :
                        <button className='btn mt-3' type='submit'>Submit</button>}
                </form>
            </motion.div>
        </motion.div >
    </>
}
