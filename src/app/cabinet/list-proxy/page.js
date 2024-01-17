'use client'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useSelector } from 'react-redux';
import BodyList from './BodyList';

function BuyProxy() {
    const t = useSelector((state) => state.counter.value);
    return (
        <div>
            <Sidebar t={t} currentPage={<BodyList langs={t}/>} />
        </div>
    )
}

export default BuyProxy