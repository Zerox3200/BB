import React, { useState } from 'react'
import './AddApp.scss';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import SubmitToast from '../../SubmitToast/SubmitToast';

export default function AddApp() {
    const [loading, setLoading] = useState(false);

    const UploadApp = async (values) => {
        console.log(values.appcat);
        setLoading(true);
        const formData = new FormData();
        formData.append('name[0][language]', 'en');
        formData.append('name[0][value]', values.name);
        formData.append('description[0][language]', 'en');
        formData.append('description[0][value]', values.description);

        for (let i = 0; i < values.news.length; i++) {
            formData.append(`news[en][${i}]`, values.news[i]);
        }

        formData.append('appinfo[applanguage]', values.applanguage);
        formData.append('appinfo[appsize]', values.size);
        formData.append('appinfo[appversion]', values.appversion);
        formData.append('appinfo[apprequired]', values.apprequired);
        formData.append('appinfo[appUbdateDate]', values.appUbdateDate);
        formData.append('appinfo[appReleaseDate]', values.appReleaseDate);
        formData.append('appinfo[appArchitecture]', values.appArchitecture);
        formData.append('appinfo[appPackageName]', values.appPackageName);
        formData.append('appcat[en]', values.appcat);
        formData.append('applink', values.applink);
        formData.append('size', values.size);
        formData.append('paid', values.paid);

        if (values.appicon) {
            formData.append('appicon', values.appicon);
        }
        if (values.appcover) {
            formData.append('appcover', values.appcover);
        }
        if (values.appslider && values.appslider.length > 0) {
            values.appslider.forEach((image) => {
                formData.append('appslider', image);
            });
        }

        await axios.post("http://localhost:3000/app/uploadapp", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                token: reactLocalStorage.get("token")
            }
<<<<<<< HEAD
        }).then((err) => { console.log(err); })
=======
        }).then(() => toast(<SubmitToast Message='Upload Application Successfully' />))
>>>>>>> 7d7214036e8573b9d9a77b8619105d14aa953c66

        setLoading(false);
    };

    const Validation = Yup.object({
        name: Yup.string().required("Name is required"),
        appcat: Yup.string(),
        description: Yup.string().min(20, 'Minimum Length is 20').required("Description is require"),
        applink: Yup.string().matches(/(?:https?|ftp):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/, "Please Add Link")
            .required("Link is required"),
        size: Yup.string().required("App Size is required"),
        news: Yup.array().min(1, "You should atleast add one new").required("News is required"),

        appicon: Yup.mixed()
            .test("File_Type", "Invalid!!", (value) => value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
            .test("File_Size", "Image size should be less than 200 KB", (value) => value && value.size <= 200 * 1024),

        appcover: Yup.mixed()
            .test("File_Type", "Invalid!!", (value) => value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
            .test("File_Size", "Image size should be less than 200 KB", (value) => value && value.size <= 200 * 1024),

        appslider: Yup.array().required("App Slider is required").of(
            Yup.mixed()
                .test("File_Type", "Invalid!!", (value) => value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
                .test("File_Size", "Image size should be less than 200 KB \n", (value) => value && value.size <= 200 * 1024)),

        applanguage: Yup.string().required("App Language is required"),
        appversion: Yup.string().required("App Version is required"),
        apprequired: Yup.string().required("App Required is required"),
        appUbdateDate: Yup.string().required("App Update Date is required"),
        appReleaseDate: Yup.string().required("App Release is required"),
        appArchitecture: Yup.string().required("App Architecture is required"),
        appPackageName: Yup.string().required("App Package Name is required"),
        paid: Yup.boolean()
    })

    const Formik = useFormik({
        initialValues: {
            name: "",
            appcat: "",
            description: "",
            applink: "",
            size: "",
            news: [],
            appicon: "",
            appcover: "",
            appslider: [],
            applanguage: "",
            appversion: "",
            apprequired: "",
            appUbdateDate: "",
            appReleaseDate: "",
            appArchitecture: "",
            appPackageName: "",
            paid: false,
        }, onSubmit: UploadApp,
        validationSchema: Validation
    })

    const HandleImagesArray = (event) => {
        const files = Array.from(event.target.files);
        const MainImages = files.filter(file => file.type.startsWith('image'));
        Formik.setFieldValue("appslider", MainImages);
    }

    const HandleCoverImage = (event) => {
        const CoverImage = event.target.files[0];
        Formik.setFieldValue("appcover", CoverImage)
    }

    const HandleIcon = (event) => {
        const IconImage = event.target.files[0];
        Formik.setFieldValue("appicon", IconImage)
    }

    const HandleNews = (news) => {
        const MainNews = Array.from(news.target.value.split("-"));
        const SecondNews = MainNews.slice(1).map((ele) => ele.replace(/\n/, ''));
        Formik.setFieldValue("news", SecondNews);
    }

    const GetAllCats = () => {
        return axios.get("http://localhost:3000/Categories/GetAllCats")
    }

    const { data: Categories } = useQuery("Get Categories", GetAllCats, {
        cacheTime: 3000000,
        onSettled: (data) => {
            Formik.setFieldValue("appcat", data.data?.result[0]?.name?.en)
        }
    })


    return <form className='AddApp container mt-4 m-auto row justify-content-between' onSubmit={Formik.handleSubmit}>
        {Categories?.data?.result?.length === 0 ? <div className='alert alert-danger'>You should add Category</div> : null}
        <div className="mb-3 inputs d-flex flex-column">
            <label className='form-label' htmlFor="Appname">App Name</label>
            <input type="text" placeholder='App name' className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur}
                id="Appname" name='name' aria-describedby="emailHelp" />
            {Formik.errors.name && Formik.touched.name &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.name}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppCat">App Category</label>
            <select className="form-select mt-1" id='AppCat' aria-label="Default select example" name='appcat'
                onChange={Formik.handleChange} onBlur={Formik.handleBlur}>
                {Categories?.data?.result?.length === 0 ?
<<<<<<< HEAD
                    <option>Not Found</option> : <option>choose category</option>}
                {Categories?.data?.result?.map((Category, index) => <option value={Category.name.en} key={index}>{Category.name.en}</option>)}
=======
                    <option>Not Found</option> : Categories?.data?.result?.map((Category, index) =>
                        <option defaultChecked={index === 0 ? true : false} value={Category.name.en} key={index}>{Category.name.en}</option>)}
>>>>>>> 7d7214036e8573b9d9a77b8619105d14aa953c66
            </select>
        </div>

        <div className="mb-3 Descs d-flex flex-column">
            <label htmlFor="AppDesc">App Description</label>
            <textarea className="form-control" placeholder="Descirption" name='description'
                onChange={Formik.handleChange} onBlur={Formik.handleBlur}
                id="AppDesc" rows='10'></textarea>
            {Formik.errors.description && Formik.touched.description &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.description}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppLink">App Link</label>
            <input type="text" placeholder='Store Link' className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur} id="AppLink" name="applink" aria-describedby="emailHelp" />
            {Formik.errors.applink && Formik.touched.applink &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.applink}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppSize">App Size</label>
            <input type="text" placeholder='Size' className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur}
                id="AppSize" name="size" aria-describedby="emailHelp" />

            {Formik.errors.size && Formik.touched.size &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.size}</div>}
        </div>

        <div className="mb-3 Descs d-flex flex-column">
            <label htmlFor="Appname">App News</label>
            <span id="emailHelp" className="form-text">please add [-] before every new like this - new one , - new two , etc</span>
            <textarea className="form-control" placeholder="News" onChange={HandleNews} onBlur={Formik.handleBlur}
                id="AppNews" rows='10' name='news' />

            {Formik.errors.news && Formik.touched.news &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.news}</div>}
        </div>

        <h1 className='h3'>App Info</h1>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppLanguage">App Language</label>
            <input type="text" placeholder='Language' className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur}
                id="AppLanguage" name='applanguage' aria-describedby="emailHelp" />

            {Formik.errors.applanguage && Formik.touched.applanguage &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.applanguage}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppVersion">App Version</label>
            <input type="text" placeholder='Version' className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur}
                id="AppVersion" name="appversion" aria-describedby="emailHelp" />
            {Formik.errors.appversion && Formik.touched.appversion &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.appversion}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppRequired">App Required</label>
            <input type="text" placeholder='Required' className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur}
                id="AppRequired" name="apprequired" aria-describedby="emailHelp" />

            {Formik.errors.apprequired && Formik.touched.apprequired &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.apprequired}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppUpdateDate">App Update Date</label>
            <input type="date" className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur}
                id="AppUpdateDate" name="appUbdateDate" aria-describedby="emailHelp" />

            {Formik.errors.appUbdateDate && Formik.touched.appUbdateDate &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.appUbdateDate}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppReleaseDate">App Release Date</label>
            <input type="date" className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur} id="AppReleaseDate"
                name="appReleaseDate" aria-describedby="emailHelp" />

            {Formik.errors.appReleaseDate && Formik.touched.appReleaseDate &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.appReleaseDate}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppArchitecture">App Architecture</label>
            <input type="text" placeholder='Architecture' className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur} id="AppArchitecture"
                name="appArchitecture" aria-describedby="emailHelp" />

            {Formik.errors.appArchitecture && Formik.touched.appArchitecture &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.appArchitecture}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppPackageName">App Package Name</label>
            <input type="text" placeholder='Package Name' className="form-control mt-1"
                onChange={Formik.handleChange} onBlur={Formik.handleBlur} id="AppPackageName"
                name="appPackageName" aria-describedby="emailHelp" />

            {Formik.errors.appPackageName && Formik.touched.appPackageName &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.appPackageName}</div>}
        </div>

        <h1 className='h3'>App Images</h1>
        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppIcon">App Icon</label>
            <input type="file" className="form-control" id="appicon" onChange={HandleIcon} />

            {Formik.errors.appicon && Formik.touched.appicon &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.appicon}</div>}
        </div>

        <div className="mb-3 inputs d-flex flex-column">
            <label htmlFor="AppCover">App Cover</label>
            <input type="file" className="form-control" id="AppCover" name='appcover'
                onChange={HandleCoverImage} />

            {Formik.errors.appcover && Formik.touched.appcover &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.appcover}</div>}
        </div>

        <div className="mb-3 Descs d-flex flex-column">
            <label htmlFor="AppSlider">App Slider</label>
            <input type="file" className="form-control" id="AppSlider" name='appslider' multiple
                onChange={HandleImagesArray} />

            {Formik.errors.appslider && Formik.touched.appslider &&
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.appslider}</div>}
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" name='paid' className="form-check-input" id="Free"
                checked={Formik.values.paid} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
            <label className="form-check-label" htmlFor="Free">This app is paid</label>
        </div>

        {loading ? <button type='button' className='btn bg-main text-light mt-2'>
            <i className='fas fa-spinner fa-spin '></i>
        </button> : <button type='submit' disabled={!(Formik.isValid && Formik.dirty)} className='btn bg-main text-light mt-2'>Upload App</button>}
    </form>

}
