'use client'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useSelector } from 'react-redux';
import BodyNoactive from './BodyNoactive';

function BuyProxy() {
    const t = useSelector((state) => state.counter.value);
    return (
        <div>
            <Sidebar t={t} currentPage={<BodyNoactive langs={t}/>} />
        </div>
    )
}

export default BuyProxy