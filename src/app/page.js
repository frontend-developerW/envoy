'use client'
import { useSelector, useDispatch } from 'react-redux'


// import Banner from '.'
import Tariffs from './UiComponents/Tariffs'
import Competition from './UiComponents/Competition'
import GlobalProxy from './UiComponents/GlobalProxy'
import PopularVariants from './UiComponents/PopularVariants'
import Feedback from './UiComponents/Feedback'
import HowToUse from './UiComponents/HowToUse'
import PaymentType from './UiComponents/PaymentType'
import Refferal from './UiComponents/Refferal'
import Faq from './UiComponents/Faq'
import Contact from './UiComponents/Contact'
import Footer from './UiComponents/ElementComponents/Footer'
import Navbar from './UiComponents/ElementComponents/Navbar'
import Banner from './UiComponents/Banner'

const Homepage = () => {
  const t = useSelector((state) => state.counter.value)
  return (
    <div className='container'>
      <main>
        <Navbar t={t} />
        <Banner t={t} />
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
  )
}

export default Homepage
