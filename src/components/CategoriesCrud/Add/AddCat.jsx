import { useFormik } from 'formik'
import React, { useState } from 'react'
import './AddCat.scss';
import * as Yup from 'yup'
import axios from 'axios';

export default function AddCat() {
    const [loading, setLoading] = useState(false);
    const [Error, setError] = useState(null);

    const validationSchema = Yup.object({
        name: Yup.string().required("Category name is required"),
        catIcon: Yup.mixed()
            .test("File_Type", "Category image should be svg only!!", (value) =>
                value && ['image/svg+xml'].includes(value.type))
            .test("File_Size", "Image size should be less than 200 KB",
                (value) => value && value.size <= 200 * 1024).required("Category Image ")
    });

    const AddCategory = async (values) => {
        setLoading(true);
        const CatFormData = new FormData();
        CatFormData.append('name', values.name);
        CatFormData.append('catIcon', values.catIcon);
        await axios.post("http://localhost:3000/Categories/CreateCat", CatFormData, {
            headers: {
                token: localStorage.getItem("token")
            }
        }).then((res) => {
            if (res.data.success) {
                setError(null)
                setLoading(false)
            } else if (!res.data.success) {
                setError(res.data.Message)
                setLoading(false)
            }
        }).catch((err) => {
            setLoading(false);
            setError(err.message);
        });
    }

    const Formik = useFormik({
        initialValues: {
            name: "",
            catIcon: ""
        }, validationSchema
        , onSubmit: AddCategory
    });
    const HandleIcon = (event) => {
        const IconImage = event.target.files[0];
        Formik.setFieldValue("catIcon", IconImage)
    }

    return <form className='CatForm' onSubmit={Formik.handleSubmit}>
        <h1 className='h5 form-label mt-4 font-color'>Add Categoty</h1>
        {Error === null ? null : <div className="alert alert-danger py-2 mt-2">{Error}</div>}
        <div className="Add_Cat d-flex flex-column">
            <label htmlFor="CatName" className='form-label mt-3 font-color'>Category Name</label>
            <input type="text" name="name" className='form-control' id='CatName'
                onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
            {Formik.errors.name && Formik.touched.name ?
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.name}</div> : null}
        </div>

        <div className="Add_Cat_Image d-flex flex-column">
            <label htmlFor="CatImage" className='form-label mt-3 font-color'>Category Name</label>
            <input type="file" name="catIcon" className='form-control' id='CatImage'
                onChange={HandleIcon} />
            {Formik.errors.catIcon && Formik.touched.catIcon ?
                <div className="alert alert-danger py-2 mt-2">{Formik.errors.catIcon}</div> : null}
        </div>
        {loading ? <button type='button' className='btn bg-main text-light mt-3'>
            <i className='fas fa-spinner fa-spin '></i>
        </button> : <button className='btn bg-main text-light mt-3'>Add Category</button>}

    </form>
}
