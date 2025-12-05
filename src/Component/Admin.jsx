import React, { useContext, useState } from 'react';
import { AiFillRocket, AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';
import { CreatCon } from '../ContextApi/Context';
import { LuChartColumnBig, LuNotebookText } from 'react-icons/lu';
import { PiVideoCamera } from 'react-icons/pi';
import { BsClockHistory } from 'react-icons/bs';
import { FiGift } from 'react-icons/fi';
import { CiSettings } from 'react-icons/ci';
import { MdOutlineSettingsInputHdmi } from 'react-icons/md';
import { RiCopperCoinLine } from 'react-icons/ri';
import { GrOrganization } from 'react-icons/gr';

const Admin = () => {
  let [activeLink, setActiveLink] = useState('Dashboard')
  let [slideActve,setSlideActive] = useContext(CreatCon)

  let activeFun = (e)=>{
    console.log(e);
    setActiveLink(e)
    setSlideActive(!slideActve)
  }
    return (
        <div className={`xl:sticky w-full fixed left-0 top-0 ${slideActve == true ? "left-[-3000px]" : "left-0"} z-120 md:z-120  xl:top-20`}>
         
            <div className="md:w-64 w-[100%] relative  border-white border-[1px] bg-[#b8cfe5]  rounded-xl p-4 flex flex-col">
               <AiOutlineClose onClick={()=>setSlideActive(!slideActve)} className='absolute xl:hidden right-4 hover:rotate-45' />
              {/* Logo Section */}
              <div className="flex items-center gap-2 mb-8 px-2">
                <img 
                  src="public/82fdadb9a18801857437669466bf40f42b60dba5.png" 
                  alt="logo" 
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-lg font-bold text-purple-700">Pen Live</h2>
                  <p className="text-sm text-pink-600 -mt-1">Admin Panel</p>
                </div>
              </div>

              {/* Menu Section */}
              <div>
                <ul>
                    <Link to={"/"} onClick={()=>activeFun('Dashboard')}   className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition ${activeLink == 'Dashboard' && 'text-red-500'}`}><AiOutlineHome />Dashboard</Link>

                      <Link to={'/Agencies'} onClick={()=>activeFun('Agencies')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'Agencies' && 'text-red-500'}`}> <GrOrganization />Agencies</Link>

                      <Link to={'/coinManagement'} onClick={()=>activeFun('Coin Management')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'Coin Management' && 'text-red-500'}`}><RiCopperCoinLine />Coin Management</Link>

                      <Link to={'/liveStreams'} onClick={()=>activeFun('Live Streams')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'Live Streams' && 'text-red-500'}`}><PiVideoCamera />Live Streams</Link>

                      <Link to={'/transationHistroy'} onClick={()=>activeFun('Transaction History')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'Transaction History' && 'text-red-500'}`}><BsClockHistory />Transaction History</Link>

                      <Link to={'/pK_masters'} onClick={()=>activeFun('PK Masters')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'PK Masters' && 'text-red-500'}`}><AiFillRocket />PK Masters</Link>

                      <Link to={'/kycCentre'} onClick={()=>activeFun('Kyc Centre')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'Kyc Centre' && 'text-red-500'}`}><MdOutlineSettingsInputHdmi />Kyc Centre</Link>

                      <Link to={'/moderation'} onClick={()=>activeFun('Moderation')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'Moderation' && 'text-red-500'}`}><LuNotebookText />Moderation</Link>

                      <Link to={'/analiytics'} onClick={()=>activeFun('Analytics')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'Analytics' && 'text-red-500'}`}><LuChartColumnBig />Analytics</Link>

                      <Link to={'/giftsAssets'} onClick={()=>activeFun('Gifts & Assets')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'Gifts & Assets' && 'text-red-500'}`}><FiGift />Gifts & Assets</Link> 

                      <Link to={'/settings'} onClick={()=>activeFun('Settings')} className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer 
                      hover:bg-white/40 transition  ${activeLink == 'Settings' && 'text-red-500'}`}><CiSettings />Settings</Link>  

                </ul>
              </div>

            </div>
        </div>
    );
};

export default Admin;