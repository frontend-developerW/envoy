'use client'
import { useSelector, useDispatch } from 'react-redux'
import Banner from '../UiComponents/Banner'
import Tariffs from '../UiComponents/Tariffs'
import PopularVariants from '../UiComponents/PopularVariants'
import Contact from '../UiComponents/Contact'
import Footer from '../UiComponents/ElementComponents/Footer'
import Navbar from '../UiComponents/ElementComponents/Navbar'
import DynamicBanner from '../UiComponents/DynamicBanner'

const UseCases = () => {
    const t = useSelector((state) => state.counter.value)

    return (
        <div className='container'>
            <main>
                <Navbar t={t} />
                <DynamicBanner t={t} />
                <div className="pt-10">
                    <PopularVariants allVariants={true} t={t} />
                </div>
                <Tariffs t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </main>
        </div>
    )
}

export default UseCases


