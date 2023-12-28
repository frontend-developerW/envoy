
'use client'
import { useSelector, useDispatch } from 'react-redux'
import Banner from '../UiComponents/Banner'
import Tariffs from '../UiComponents/Tariffs'
import Contact from '../UiComponents/Contact'
import Footer from '../UiComponents/ElementComponents/Footer'
import Navbar from '../UiComponents/ElementComponents/Navbar'
import ProxyCountries from '../UiComponents/ProxyCountries'

const Monitoring = () => {
    const t = useSelector((state) => state.counter.value)

    return (
        <div className='container'>
            <main>
                <Navbar t={t} />
                <Banner t={t} />
                <ProxyCountries t={t} />
                <Tariffs t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </main>
        </div>
    )
}

export default Monitoring


