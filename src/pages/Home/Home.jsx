import React, { Suspense, useContext} from 'react'
import './Home.scss';
import Loading from '../../components/Loading/Loading';
import { Helmet } from 'react-helmet';
import { NavContext } from '../../Context/NavContext';

const Intro = React.lazy(() => import("../../components/Intro/Intro"));

export default function Home() {
    const { margin } = useContext(NavContext);

    return <>
        <div className={margin ? "Home HomeMarined" : "Home HomeConstant"} >
            <Helmet>
                <meta charSet="utf-8" />
                <title>deenbook</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="icon" type="svg/x-icon" href="../../Assets/Images/_icon.svg"></link>
            </Helmet>
            <Suspense fallback={<Loading />}>
                <Intro />
            </Suspense>
        </div>
    </>
}
