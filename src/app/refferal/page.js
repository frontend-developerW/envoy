'use client'
import { useSelector, useDispatch } from 'react-redux'


import Tariffs from '../UiComponents/Tariffs'
import Contact from '../UiComponents/Contact'
import Footer from '../UiComponents/ElementComponents/Footer'
import Navbar from '../UiComponents/ElementComponents/Navbar'
import CookieBody from '../UiComponents/CookieBody'
import RefferalBody from '../UiComponents/RefferalBody'

const Refferal = () => {
    const t = useSelector((state) => state.counter.value)

    return (
        <div className='container'>
            <main>
                <Navbar t={t} />
                {/* <CookieBody t={t}/> */}
                <RefferalBody />
                <Tariffs t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </main>
        </div>
    )
}

export default Refferal


