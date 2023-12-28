'use client'
import { useSelector, useDispatch } from 'react-redux'

import Tariffs from '../UiComponents/Tariffs' 
import Faq from '../UiComponents/Faq'
import Contact from '../UiComponents/Contact'
import Footer from '../UiComponents/ElementComponents/Footer'
import Navbar from '../UiComponents/ElementComponents/Navbar' 
import SearchBar from '../UiComponents/ElementComponents/SearchBar'

const Help = () => {
    const t = useSelector((state) => state.counter.value)

    return (
        <div className='container'>
            <main>
                <Navbar t={t} />
                {/* <Banner t={t} /> */}
                {/* <ProxyCountries t={t} /> */}
                {/* <MonitoringPrice t={t} /> */}
                <SearchBar />
                <Faq t={t} />
                <Tariffs t={t} />
                {/* <Competition t={t} /> */}
                {/* <GlobalProxy t={t} /> */}
                {/* <PopularVariants t={t} /> */}
                {/* <Feedback t={t} /> */}
                {/* <HowToUse t={t} /> */}
                {/* <PaymentType t={t} /> */}
                {/* <Refferal t={t} /> */}
                <Contact t={t} />
                <Footer t={t} />
            </main>
        </div>
    )
}

export default Help


