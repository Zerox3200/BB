import React, { Suspense, useContext } from 'react'
import './Home.scss';
import Loading from '../../components/Loading/Loading';
import { Helmet } from 'react-helmet';
import { NavContext } from '../../Context/NavContext';

const Intro = React.lazy(() => import("../../components/Intro/Intro"));

export default function Home() {
    const { margin } = useContext(NavContext);

    return <>
        <section className={margin ? "Home HomeMarined" : "Home HomeConstant"} >
            <Helmet>
                <title>deenbook</title>
            </Helmet>
            <Suspense fallback={<Loading />}>
                <Intro />
            </Suspense>
        </section>
    </>
}
