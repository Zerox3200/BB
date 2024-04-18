import React, { Suspense } from 'react'
import './Home.scss';
import Loading from '../../components/Loading/Loading';

const Intro = React.lazy(() => import("../../components/Intro/Intro"));

export default function Home() {
    return <>
        <div className="Home">
            <Suspense fallback={<Loading />}>
                <Intro />
            </Suspense>
        </div>
    </>
}
