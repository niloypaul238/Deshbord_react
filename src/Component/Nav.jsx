import React, { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import { Link } from 'react-router';
import { CreatCon } from '../ContextApi/Context';

const Nav = () => {
    let [slideActve,setSlideActive] = useContext(CreatCon)
    return (
        <div className='bg-white z-100 justify-between  grid-cols-2 items-center fixed w-full top-0'>
            <div className='flex justify-between items-center w-11/12 mx-auto p-1'>
                <div className='flex gap-x-3 items-center'>
                    <img className='h-15 w-15 rounded-full  object-cover' src="https://i.ibb.co.com/KjTQBRNN/1000017544.jpg" alt="" />
                    <div>
                        <p className='text-xl text-red-700'>@Mumtahina</p>
                        <p className='text-sm text-gray-600'>admin id : 090990</p>
                    </div>
                </div>
                <Link className='flex justify-center items-center border text-sm border-gray-200 gap-x-2 text-red-500 hover:text-white hover:bg-gray-600 px-3 py-1.5 rounded'><FiLogOut /> LogOut</Link>
            </div>
            
            <HiOutlineBars3BottomRight onClick={()=>setSlideActive(!slideActve)} className='float-end mx-3 xl:hidden text-2xl' />
        </div>
    );
};

export default Nav;