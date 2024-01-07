"use client";
import React from "react";
import { useSelector } from "react-redux";

import Tariffs from "../UiComponents/Tariffs";
import Competition from "../UiComponents/Competition";
import GlobalProxy from "../UiComponents/GlobalProxy";
import PopularVariants from "../UiComponents/PopularVariants";
import Feedback from "../UiComponents/Feedback";
import HowToUse from "../UiComponents/HowToUse";
import PaymentType from "../UiComponents/PaymentType";
import Refferal from "../UiComponents/Refferal";
import Faq from "../UiComponents/Faq";
import Contact from "../UiComponents/Contact";
import Footer from "../UiComponents/ElementComponents/Footer";
import Navbar from "../UiComponents/ElementComponents/Navbar";
import ResidentProxy from "../UiComponents/ResidentProxy";
import DynamicBanner from "../UiComponents/DynamicBanner";
import { useSearchParams } from 'next/navigation';
const InsideComponent = ({ params }) => {
    const t = useSelector((state) => state.counter.value);
    const router = useSearchParams();
    const  quert = router.get('pid');
    console.log('------>',quert)
    return (
        <div className="container">
            <main>
                {/* <h1>{pid}</h1> */}
                <Navbar t={t} />
                <DynamicBanner t={t} />
                <ResidentProxy t={t} />
                <Tariffs t={t} />
                <Competition t={t} />
                <GlobalProxy t={t} />
                <PopularVariants t={t} />
                <Feedback t={t} />
                <HowToUse t={t} />
                <PaymentType t={t} />
                <Refferal t={t} />
                <Faq t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </main>
        </div>
    );
};
export default InsideComponent
