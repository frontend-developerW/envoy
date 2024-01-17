'use client'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useSelector } from 'react-redux';
import BodyDocuments from './BodyDocuments';

function BuyProxy() {
    const t = useSelector((state) => state.counter.value);
    return (
        <div>
            <Sidebar t={t} currentPage={<BodyDocuments langs={t}/>} />
        </div>
    )
}

export default BuyProxy