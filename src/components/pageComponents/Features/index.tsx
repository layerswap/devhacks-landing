import hljs from 'highlight.js';
import { useEffect } from 'react';
import FromTo from './FromTo';
import Onboarding from './Onboarding';
import UserFeatures from './UserFeatures';
import PartnerFeatures from './PartnerFeatures';


const Features = () => {
    // useEffect(() => {
    //     hljs.highlightAll();
    // }, []);

    return (
        <>

            <Onboarding />

            <FromTo />

            <UserFeatures />

            <PartnerFeatures />

        </>

    )
}

export default Features