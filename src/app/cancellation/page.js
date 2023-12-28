'use client'

import Tariffs from '../UiComponents/Tariffs'
import Contact from '../UiComponents/Contact'
import Footer from '../UiComponents/ElementComponents/Footer'
import Navbar from '../UiComponents/ElementComponents/Navbar'
import TermsBody from '../UiComponents/TermsBody'
import Cancellation from '../UiComponents/CancellationBody'
import { useSelector, useDispatch } from 'react-redux'

const Cancel
    = () => {
        const t = useSelector((state) => state.counter.value)

        return (
            <div className='container'>
                <main>
                    <Navbar t={t} />
                    <Cancellation t={t} />
                    <Tariffs t={t} />
                    <Contact t={t} />
                    <Footer t={t} />
                </main>
            </div>
        )
    }

export default Cancel



