'use client'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useSelector } from 'react-redux';
import BodyProfile from './BodyProfile';

function BuyProxy() {
    const t = useSelector((state) => state.counter.value);
    return (
        <div>
            <Sidebar t={t} currentPage={<BodyProfile langs={t}/>} />
        </div>
    )
}

export default BuyProxy