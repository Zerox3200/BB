import React, { useState } from 'react'
import './Link.scss'
import { motion } from 'framer-motion'
import { RiCloseCircleLine } from 'react-icons/ri'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

export default function LinkUpdate({ HandleShow, ID, refetch }) {
    const [LoadingButton, setLoadingButton] = useState(false);

    const validationSchema = Yup.object({
        NewAppLink: Yup.string().matches(/(?:https?|ftp):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/, "Please Add Link")
            .required("Link is required")
    })

    const SendNameUpdate = async (values) => {
        setLoadingButton(true)
        await axios.patch(`http://localhost:3000/app/Update/${ID}`, {
            key: "applink",
            result: values.NewAppLink
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
            NewAppLink: ""
        }, validationSchema,
        onSubmit: SendNameUpdate
    });

    return <>
        <motion.div className="popup" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}>
            <motion.div className="Linkform" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 1, type: 'spring' }}>
                <div className="close align-self-end">
                    <RiCloseCircleLine onClick={HandleShow} />
                </div>
                <form className='mt-5' onSubmit={Formik.handleSubmit}>
                    <label htmlFor="NewAppLink">New App Link</label>
                    <input type="text" className="form-control" id="NewAppLink" name="NewAppLink"
                        onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                    {Formik.errors.NewAppLink && Formik.touched.NewAppLink ?
                        <div className="alert alert-danger py-2 mt-2">{Formik.errors.NewAppLink}</div> : null}

                    {LoadingButton ? <button type='button' className='btn bg-main text-light mt-2'>
                        <i className='fas fa-spinner fa-spin '></i>
                    </button> :
                        <button className='btn mt-3' type='submit'>Submit</button>}
                </form>
            </motion.div>
        </motion.div >
    </>
}
