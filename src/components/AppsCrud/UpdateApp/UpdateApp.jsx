import React, { Suspense, lazy, useState } from 'react'
import './UpdateApp.scss';
import { useQuery } from 'react-query';
import axios from 'axios';
import { MdModeEdit } from "react-icons/md";
import Loading from '../../Loading/Loading';
import { reactLocalStorage } from 'reactjs-localstorage';
import Empty from '../../Empty/Empty';
import { HostLink } from '../../Host/Host';

const Name = lazy(() => import("./Name/Name"));
const Description = lazy(() => import("./Description/Description"));
const News = lazy(() => import("./News/News"));
const Info = lazy(() => import("./Info/Info"));
const Size = lazy(() => import("./Size/Size"));
const LinkUpdate = lazy(() => import("./Link/Link"));

export default function UpdateApp() {
    const [NameComponent, setNameComponent] = useState(false);
    const [DescComponent, setDescComponent] = useState(false);
    const [NewsComponent, setNewsComponent] = useState(false);
    const [InfoComponent, setInfoComponent] = useState(false);
    const [SizeComponent, setSizeComponent] = useState(false);
    const [LinkComponent, setLinkComponent] = useState(false);

    const [loading, setLoading] = useState(false);

    const [Id, setId] = useState('')

    const GetApps = () => {
        return axios.get(`${HostLink}/app/GetAllApps`)
    }

    const { data: Apps, refetch, isLoading } = useQuery("Get All Apps", GetApps, {
        cacheTime: 3000000
    })

    const ShowName = (id) => {
        setId(id);
        setNameComponent(NameComponent === true ? false : true);
    }

    const ShowDesc = (id) => {
        setId(id);
        setDescComponent(DescComponent === true ? false : true);
    }
    const ShowNews = (id) => {
        setId(id);
        setNewsComponent(NewsComponent === true ? false : true);
    }

    const ShowInfo = (id) => {
        setId(id);
        setInfoComponent(InfoComponent === true ? false : true);
    }

    const ShowSize = (id) => {
        setId(id);
        setSizeComponent(SizeComponent === true ? false : true);
    }

    const ShowLink = (id) => {
        setId(id);
        setLinkComponent(LinkComponent === true ? false : true);
    }

    const UpdateFree = async (id, paid) => {
        setLoading(true);
        await axios.patch(`${HostLink}/app/Update/${id}`, {
            key: "paid",
            result: paid === true ? false : true
        }, {
            headers: {
                token: reactLocalStorage.get("token")
            }
        },
        ).then(() => {
            setLoading(false);
            refetch();
        }).catch((err) => {
            console.log(err);
        })
    }

    return <>
        {NameComponent && <Suspense fallback={<Loading />}>
            <Name HandleShow={ShowName} ID={Id} refetch={refetch} /></Suspense>}

        {DescComponent && <Suspense fallback={<Loading />}>
            <Description HandleShow={ShowDesc} ID={Id} refetch={refetch} /></Suspense>}

        {NewsComponent && <Suspense fallback={<Loading />}>
            <News HandleShow={ShowNews} ID={Id} refetch={refetch} /></Suspense>}

        {InfoComponent && <Suspense fallback={<Loading />}>
            <Info HandleShow={ShowInfo} ID={Id} refetch={refetch} /></Suspense>}

        {SizeComponent && <Suspense fallback={<Loading />}>
            <Size HandleShow={ShowSize} ID={Id} refetch={refetch} /></Suspense>}

        {LinkComponent && <Suspense fallback={<Loading />}>
            <LinkUpdate HandleShow={ShowLink} ID={Id} refetch={refetch} /></Suspense>}

        <div className='UpdateText'>
            {isLoading ? <Loading /> : Apps?.data?.result?.length === 0 ? <Empty /> : Apps?.data?.result.map((App, index) => <div className="UpdateCard card p-3 mt-3" key={index}>
                <div className="card-body d-flex flex-column align-items-start">
                    <div className="w-100 d-flex justify-content-between">
                        <h5 className="card-title">{App?.name[0]?.value}</h5>
                        <MdModeEdit onClick={() => ShowName(App?._id)} />
                    </div>
                    <hr className='w-100' />
                    <div className="w-100 d-flex justify-content-between mt-2">
                        <p className="card-title">{App?.description[0]?.value}</p>
                        <MdModeEdit onClick={() => ShowDesc(App?._id)} />
                    </div>
                    <hr className='w-100' />
                    <div className="w-100 d-flex justify-content-between mt-2">
                        <ul className='list-unstyled'>
                            {App?.news?.en?.map((New, index) => <li key={index}>{New}</li>)}
                        </ul>
                        <MdModeEdit onClick={() => ShowNews(App?._id)} />
                    </div>
                    <hr className='w-100' />
                    <div className="w-100 d-flex justify-content-between mt-2">
                        <ul className='list-unstyled'>
                            <li><b>App Language:</b>  {App?.appinfo?.applanguage}</li>
                            <li><b>App Architecture:</b>  {App?.appinfo?.appArchitecture}</li>
                            <li><b>App Package Name:</b>  {App?.appinfo?.appPackageName}</li>
                            <li><b>App Release Date:</b>  {App?.appinfo?.appReleaseDate}</li>
                            <li><b>App Update Date:</b>  {App?.appinfo?.appUbdateDate}</li>
                            <li><b>App Required:</b>  {App?.appinfo?.apprequired}</li>
                            <li><b>App Version:</b>  {App?.appinfo?.appversion}</li>
                            <li><b>App Size:</b>  {App?.appinfo?.appsize}</li>
                        </ul>
                        <MdModeEdit onClick={() =>
                            ShowInfo(App?._id)} />
                    </div>
                    <hr className='w-100' />
                    <div className="w-100 d-flex justify-content-between mt-2">
                        <p className="card-title"><b>App Size: </b>{App?.size}</p>
                        <MdModeEdit onClick={() => ShowSize(App?._id)} />
                    </div>
                    <hr className='w-100' />
                    <div className="w-100 d-flex flex-column mt-2">
                        <p className="card-title"><b>App Link: </b></p>
                        <span className='position-relative'>{App?.applink}
                            <MdModeEdit onClick={() => ShowLink(App?._id)} className='position-absolute bottom-100 end-0' />
                        </span>
                    </div>
                    <hr className='w-100' />
                    <div className="w-100 d-flex justify-content-between mt-2">
                        <p className="card-title"><b>Free: </b>{App?.paid ? "Yes it's free" : "Not free"}</p>
                        {loading ? <div className='FreeLoading'>
                            <i className='fas fa-spinner fa-spin '></i>
                        </div> : <MdModeEdit onClick={() => UpdateFree(App?._id, App?.paid)} />}
                    </div>

                </div>
            </div>)}

        </div>
    </>
}
