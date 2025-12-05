import React, { createContext, useEffect, useState } from 'react';

export let CreatCon = createContext()
const Context = ({children}) => {
    let [tableData,setTableData] = useState([])
    let [slideActve,setSlideActive] = useState(false)
    useEffect(()=>{
        fetch('data.json').then(res => res.json()).then(data => setTableData(data))
    },[])
    return (

        <CreatCon.Provider value={[tableData,setTableData,slideActve,setSlideActive]}>
            {children}
        </CreatCon.Provider>
    );
};

export default Context;