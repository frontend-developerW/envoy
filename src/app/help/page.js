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
                <SearchBar lang={t}/>
                <Faq t={t} />
                <Tariffs t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </main>
        </div>
    )
}

export default Help


