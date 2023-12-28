'use client'
import { useSelector, useDispatch } from 'react-redux'

import Tariffs from '../UiComponents/Tariffs'
import PaymentType from '../UiComponents/PaymentType'
import Contact from '../UiComponents/Contact'
import Footer from '../UiComponents/ElementComponents/Footer'
import Navbar from '../UiComponents/ElementComponents/Navbar'

const TarifPlans = () => {
    const t = useSelector((state) => state.counter.value)

    return (
        <div className='container'>
            <main>
                <Navbar t={t} />
                <Tariffs t={t} />
                <PaymentType t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </main>
        </div>
    )
}

export default TarifPlans


