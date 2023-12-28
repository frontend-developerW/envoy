
'use client'

import Tariffs from '../UiComponents/Tariffs'
import Contact from '../UiComponents/Contact'
import Footer from '../UiComponents/ElementComponents/Footer'
import Navbar from '../UiComponents/ElementComponents/Navbar'
import AgreementBody from '../UiComponents/AgreementBody'
import { useSelector, useDispatch } from 'react-redux'
const Agreement = () => {
    const t = useSelector((state) => state.counter.value)

    return (
        <div className='container'>
            <main>
                <Navbar t={t} />
                <AgreementBody t={t} />
                <Tariffs t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </main>
        </div>
    )
}

export default Agreement


