
'use client'
import { useSelector, useDispatch } from 'react-redux'
import Tariffs from '../UiComponents/Tariffs'
import Contact from '../UiComponents/Contact'
import Footer from '../UiComponents/ElementComponents/Footer'
import Navbar from '../UiComponents/ElementComponents/Navbar'
import TermsBody from '../UiComponents/TermsBody'

const Cookie = () => {
    const t = useSelector((state) => state.counter.value)

    return (
        <div className='container'>
            <main>
                <Navbar t={t} />
                <TermsBody t={t}/>
                <Tariffs t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </main>
        </div>
    )
}

export default Cookie


