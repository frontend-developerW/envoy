'use client'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useSelector } from 'react-redux';
import BodyTarif from './BodyTarif';

function BuyProxy() {
    const t = useSelector((state) => state.counter.value);
    return (
        <div>
            <Sidebar t={t} currentPage={<BodyTarif langs={t}/>} />
        </div>
    )
}

export default BuyProxy