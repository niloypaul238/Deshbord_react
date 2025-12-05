import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const TableDtsls = () => {
    let {id} = useParams()
    let [filterSingleTableData, setFilterSingleTableData] = useState([])
    useEffect(()=>{
                    fetch('data.json').then(res => res.json()).then(data => setFilterSingleTableData(data))
                },[])
    let filterData = filterSingleTableData.filter(tik => tik.userId === Number(id))
    
    return (
        <div>
            {
                filterData.map(tale => {
    //                 "diamonds": 180,
    // "beans": 900,
    // "coinSell": 80,
    // "coinBuy": 120,
    // "location": "Bangladesh",
    // "status": "active"
                    return(
                        <div className='bg-[#c9d8e8]  rounded-xl p-4'>
                            <div className='flex justify-between px-4'>
                                <div></div>
                                <Link to={'/'} className='border rounded  border-purple-900 w-30 text-center py-1 text-white hover:bg-purple-800 bg-purple-900 hover:text-white'>Back</Link>
                            </div> 
                           
                            <div className='flex justify-between mt-5'>
                                 <div>
                                <p className='grid grid-cols-3'><span> User ID</span> <span>:</span> <span>{tale.userId}</span></p>
                                <p className='grid grid-cols-3'><span> Name</span> <span>:</span> <span>{tale.name}</span></p>
                                <p className='grid grid-cols-3'><span> Lavel</span> <span>:</span> <span>{tale.label}</span></p>
                                <p className='grid grid-cols-3'><span> Diamonds</span> <span>:</span> <span>{tale.diamonds}</span></p>
                                <p className='grid grid-cols-3'><span> Beans</span> <span>:</span> <span>{tale.beans}</span></p>
                                <p className='grid grid-cols-3'><span> CoinSell</span> <span>:</span> <span>{tale.coinSell}</span></p>
                                
                            </div>
                            <div className='w-[50%]'>
                                <div>
                                <div className='h-30 w-30 border relative rounded-2xl p-1 bg-white border-gray-700'>
                                    <div className={`absolute w-4 h-4 ${tale.status == 'active' && 'bg-green-600'} ${tale.status == 'pending' && 'bg-yellow-400'} rounded-full right-0 -top-1 border border-white`}></div>
                                    <img src="https://i.ibb.co.com/KjTQBRNN/1000017544.jpg" className='w-full h-full object-cover rounded-2xl' alt="" />
                                </div>
                                <div>
                                    <p>Location : {tale.location}</p>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default TableDtsls;