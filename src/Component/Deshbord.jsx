import React, { useContext, useEffect, useState } from 'react';
import { BiBarChart, BiCoinStack, BiDownload, BiFilter, BiPlus } from 'react-icons/bi';
import { FaUserSecret } from 'react-icons/fa';
import { CreatCon } from '../ContextApi/Context';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router';

const Deshbord = () => {
        let [tableData,setTableData,slideActve,setSlideActive] = useContext(CreatCon)
        // console.log(tableData);
        let [show,setShow] = useState([])

        useEffect(()=>{
                fetch('data.json').then(res => res.json()).then(data => setShow(data))
            },[])

        let filterTable = (e)=>{
            
           let typeing = e.target.value.toLowerCase()
           if(typeing !== ""){
            let serche = tableData.filter(pro => pro.name.toLowerCase().includes(typeing))
            setShow(serche);
           }else{
            setShow(show)
           }
           
           
        }
    return (
        <div>

           <div className="p-">
      
                {/* Header */}
                <div className='bg-[#c9d8e8] rounded-xl p-4'>
                    <div className="flex  justify-between items-center mb-4">
                        <div>
                        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                        <p className="text-gray-500">Manage your app from your dashboard</p>
                        </div>

                        <button className="flex cursor-pointer items-center gap-2 bg-white shadow px-4 py-2 rounded-lg">
                        Export Data <BiDownload size={18} />
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-[#e8f0ff] p-5 rounded-xl shadow">
                        <div className="flex justify-between items-center">
                            <h2 className="text-gray-500">Total Agencies</h2>
                            <FaUserSecret className="text-purple-500 bg-purple-200 w-10 h-10 p-2 rounded" />
                        </div>
                        <p className="text-3xl font-extrabold mt-2">3</p>
                        <p className="text-green-600 text-sm mt-1">+3 this month</p>
                        </div>

                        <div className="bg-[#e8f4ff] p-5 rounded-xl shadow">
                        <div className="flex justify-between items-center">
                            <h2 className="text-gray-500">Total Coin Sales</h2>
                            <BiCoinStack className="text-blue-500 bg-blue-200 w-10 h-10 p-2 rounded" />
                        </div>
                        <p className="text-3xl font-extrabold mt-2">5.3M</p>
                        <p className="text-green-600 text-sm mt-1">+3 this month</p>
                        </div>

                        <div className="bg-[#e8ffe8] p-5 rounded-xl shadow">
                        <div className="flex justify-between items-center">
                            <h2 className="text-gray-500">Avg Commission</h2>
                            <BiBarChart className="text-green-500 bg-green-200 w-10 h-10 p-2 rounded" />
                        </div>
                        <p className="text-3xl font-extrabold mt-2">10.0%</p>
                        <p className="text-green-600 text-sm mt-1">+3 this month</p>
                        </div>
                    </div>
                </div>
                

                {/* Search + Filter */}
                <div className="flex flex-wrap items-center gap-4 my-4">
                    <input
                    onChange={(e)=>filterTable(e)}
                    type="text"
                    placeholder="Search by agency ID or name"
                    className="flex-1 px-4 py-2 rounded-lg shadow bg-[#c9d8e8] focus:outline-none"
                    />

                    <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
                    <BiFilter size={18} /> Filter
                    </button>

                    <button className="flex items-center hover:bg-[#f35c4e] cursor-pointer gap-2 bg-[#ff6f61] text-white px-4 py-2 rounded-lg shadow">
                    <BiPlus size={18} /> Add Agancy
                    </button>
                </div>

                {/* Table */}
                <div className="bg-[#c9d8e8] border-1 border-white p-3 rounded-xl shadow overflow-auto">
                    <table className="w-full table text-left">
                    <thead className=''>
                        <tr className="text-gray-500 border-b border-white text-sm">
                        <th className="py-2">User ID</th>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Diamonds</th>
                        <th>Beans</th>
                        <th>Coin Sell</th>
                        <th>Coin Buy</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            show.length > 0 && 
                            show.map(( row , i) =>(

                                <tr key={i} className="  border-b border-white text-gray-900">
                                    <td className="py-3">{row.userId}</td>
                                    <td>{row.name.slice(0,9)}...</td>
                                    <td>
                                    <span className="bg-[#dae1e9] px-2 py-1 rounded-md  text-xs">
                                        {row.label}
                                    </span>
                                    </td>
                                    <td>{row.diamonds}</td>
                                    <td>{row.beans}</td>
                                    <td>{row.coinSell}</td>
                                    <td>{row.coinBuy}</td>
                                    <td>{row.location}</td>
                                    <td>
                                    <span className={`px-3 py-1 rounded-full  text-green-800 font-semibold text-xs ${row.status == "active" && 'text-green-800' } ${row.status == "pending" && 'text-yellow-900'}`}>
                                        {row.status}
                                    </span>
                                    </td>
                                    <td>
                                    <button className=" cursor-pointer hover:text-white">
                                        <Link to={`/${row.userId}`}><BsEye size={16} /></Link>
                                    </button>
                                    </td>
                                </tr>
                            )) 
                        }
                    </tbody>

                    </table>
                    {
                        show.length == 0 && <div className='flex flex-col justify-center  items-center'><img className='h-30' src="public/download.png " alt="" /><p className='text-2xl text-gray-400'>No Data Found</p></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Deshbord;