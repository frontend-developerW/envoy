'use client'
import React from 'react'
import Sidebar from './Components/Sidebar'
import { useSelector } from 'react-redux';
import MyPlans from './Components/MyPlans';

function Cabinet() {
    const t = useSelector((state) => state.counter.value);

    return (
        <div>
            <Sidebar t={t} currentPage={<MyPlans langs={t}/>}/>
        </div>
    )
}

export default Cabinet