import React from 'react';

const LiveStreams = () => {
    return (
        <div className='bg-[#c9d8e8] rounded-xl p-4'>
            <div className="flex  justify-between items-center mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Live Streams</h1>
                            <p className="text-gray-500">Manage your app from your Live Streams</p>
                        </div>
            
                        {/* <button className="flex cursor-pointer items-center gap-2 bg-white shadow px-4 py-2 rounded-lg">
                            Export Data <BiDownload size={18} />
                        </button> */}
            </div>
        </div>
    );
};

export default LiveStreams;