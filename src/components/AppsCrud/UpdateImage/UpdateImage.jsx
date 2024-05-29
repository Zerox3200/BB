import axios from 'axios'
import React, { useEffect } from 'react'
import "./UpdateImage.scss"
import { useState } from 'react'
import Loading from '../../Loading/Loading';
import { useFormik } from 'formik';
import { RiCloseCircleLine } from "react-icons/ri";
import * as Yup from 'yup'
import { motion } from 'framer-motion';
import Empty from '../../Empty/Empty';

export default function Updateimage() {

    const [Apps, setApps] = useState([])
    const [loading, setloading] = useState(false)
    const [refetch, setrefetch] = useState(false)

    const [updateicon, setupdateicon] = useState(false)
    const [updatecover, setupdatecover] = useState(false)
    const [updateslider, setupdateslider] = useState(false)

    const [Userid, setUserid] = useState("")
    ///////////////////////////////////// // helprs fn start ///////////////////////
    const handleclose = () => {
        setupdatecover(false)
        setupdateicon(false)
        setupdateslider(false)
    }

    const HandleImagesArray = (event) => {
        const files = Array.from(event.target.files);
        const MainImages = files.filter(file => file.type.startsWith('image'));
        Formik.setFieldValue("appslider", MainImages);
        console.log(MainImages);
    }

    const HandleCoverImage = (event) => {
        const CoverImage = event.target.files[0];
        Formik.setFieldValue("appcover", CoverImage)
        console.log(event);
    }

    const HandleIcon = (event) => {
        const IconImage = event.target.files[0];
        Formik.setFieldValue("appicon", IconImage)
        console.log(IconImage);
    }
    ///////////////////////////////////// // helprs fn end //////////////////////////
    const UpdateimagesApi = async (values) => {
        let Token = localStorage.getItem("token");
        const formData = new FormData();
        // appcover //
        if (values.appcover) {

            formData.append('appcover', values.appcover);
            await axios.patch(`http://localhost:3000/app/UpdateImageappcover/${values.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: Token
                }
            })
            handleclose()
            setrefetch(true)
        }
        // appcover //

        // appslider //
        if (values.appslider && values.appslider.length > 0) {
            values.appslider.forEach((image) => {
                formData.append('appslider', image);
                console.log(image);
            });
            await axios.patch(`http://localhost:3000/app/UpdateImageappslider/${values.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: Token
                }
            })
            handleclose()
            setrefetch(true)
        }
        // appslider //

        // appicon //
        if (values.appicon) {
            formData.append('appicon', values.appicon);
            await axios.patch(`http://localhost:3000/app/UpdateImageappicon/${values.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    token: Token
                }
            }).then((res) => { console.log(res); })
            handleclose()
            setrefetch(true)
        }
        // appicon //
    }

    const Validation = Yup.object({
        appicon: Yup.mixed()
            .test("File_Type", "Invalid!!", (value) => !value || ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
            .test("File_Size", "Image size should be less than 200 KB", (value) => !value || value.size <= 200 * 1024),

        appcover: Yup.mixed()
            .test("File_Type", "Invalid!!", (value) => !value || ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
            .test("File_Size", "Image size should be less than 200 KB", (value) => !value || value.size <= 200 * 1024),

        appslider: Yup.array().of(
            Yup.mixed()
                .test("File_Type", "Invalid!!", (value) => !value || ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
                .test("File_Size", "Image size should be less than 200 KB", (value) => !value || value.size <= 200 * 1024)),
    });



    let Formik = useFormik({
        initialValues: {
        }, onSubmit: UpdateimagesApi, validationSchema: Validation
    })

    async function fetchdata() {
        setloading(true)
        const { data } = await axios.get("http://localhost:3000/app/GetAllApps")
        setApps(data.result)
        setloading(false)
    }
    useEffect(() => {
        fetchdata()
        setrefetch(false)
    }, [refetch])
    return (
        <>
            {loading ? <Loading /> : Apps?.length === 0 ? <Empty /> : <div className='admin-apps'>
                {Apps.map((ele) => {
                    return (
                        <div key={ele._id} className="container">

                            <div className="row app">
                                <div className="appicon col-md-4 col-sm-12">
                                    <img src={`http://localhost:3000/${ele.appicon}`} alt="" />
                                </div>

                                <div className="app-name col-md-4 col-sm-12">
                                    <h1 className='font-color'>{ele.name[0].value}</h1>
                                </div>

                                <div className="row actions justify-content-between">

                                    <span className='col-md-3 col-sm-12 text-light align-items-center' onClick={() => { setUserid(ele._id); setupdatecover(true) }}>
                                        <h6>Update App cover</h6>
                                    </span>

                                    <span className='col-md-3 col-sm-12 text-light align-items-center ' onClick={() => { setUserid(ele._id); setupdateicon(true) }}>
                                        <h6>Update App icon</h6>
                                    </span>

                                    <span className='col-md-3 col-sm-12 text-light align-items-center' onClick={() => { setUserid(ele._id); setupdateslider(true) }}>
                                        <h6>Update slider images</h6>
                                    </span>

                                </div>
                                {updatecover ?
                                    <motion.div className="popup" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8, type: 'spring' }}>
                                        <motion.div className="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                            transition={{ duration: 1, type: 'spring' }}>
                                            <div onClick={handleclose} className="close">
                                                <RiCloseCircleLine />
                                            </div>
                                            <form onSubmit={Formik.handleSubmit}>
                                                <label htmlFor="appcover">Upload New App Cover</label>
                                                <input type="file" className="form-control" name="appcover" id="appcover" onChange={HandleCoverImage} />

                                                <input type="hidden" name="Appid" value={Formik.values.id = Userid} id='Appid' />

                                                <button className='btn' type='submit'>Submit</button>
                                            </form>
                                        </motion.div>
                                    </motion.div >
                                    : updateicon ?
                                        <motion.div className="popup" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                            transition={{ duration: 0.8, type: 'spring' }}>
                                            <motion.div className="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                transition={{ duration: 1, type: 'spring' }}>
                                                <div onClick={handleclose} className="close">
                                                    <RiCloseCircleLine />
                                                </div>
                                                <form onSubmit={Formik.handleSubmit}>
                                                    <label htmlFor="appicon">Upload New App Icon</label>
                                                    <input type="file" className="form-control" id="appicon" name="appicon" onChange={HandleIcon} />

                                                    <input type="hidden" name="Appid" value={Formik.values.id = Userid} id='Appid' />

                                                    <button className='btn' type='submit'>Submit</button>
                                                </form>
                                            </motion.div>
                                        </motion.div >
                                        : updateslider ?
                                            <motion.div className="popup" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                transition={{ duration: 0.8, type: 'spring' }}>
                                                <motion.div className="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                    transition={{ duration: 1, type: 'spring' }}>
                                                    <div onClick={handleclose} className="close">
                                                        <RiCloseCircleLine />
                                                    </div>
                                                    <form onSubmit={Formik.handleSubmit}>
                                                        <label htmlFor="appslider">Upload New slider images</label>
                                                        <input type="file" multiple className="form-control" id="appslider" name="appslider" onChange={HandleImagesArray} />

                                                        <input type="hidden" name="Appid" value={Formik.values.id = Userid} id='Appid' />

                                                        <button className='btn' type='submit' >Submit</button>
                                                    </form>
                                                </motion.div>
                                            </motion.div >
                                            : ''}
                            </div>

                        </div>
                    )
                })
                }
            </div >}
        </>
    )
}
