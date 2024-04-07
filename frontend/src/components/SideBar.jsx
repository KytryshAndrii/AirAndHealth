import {useState} from 'react'

export const SideBar = () => {
    
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);

    return(
        <div className="absolute  top-[60%] left-[6%] translate-x-[-70%] translate-y-[-65%] z-10000 w-10 h-[60%] bg-slate-950 shadow-gray-800 rounded-xl caret-transparent cursor-pointer">
           <div className="flex flex-col w-full justify-around p-0">
            </div>
        </div>
    )
}

