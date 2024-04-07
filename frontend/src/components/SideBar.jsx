import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartPie, faInfo} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";

export const SideBar = () => {

    const { t, i18n } =  useTranslation();
    const lang = i18n.language; 

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    
    const changeLanguage = language => {
        i18n.changeLanguage(language)
        localStorage.setItem("language", language)
      }      

    const handleSideBarOpening = () =>{
        setIsSideBarOpen(!isSideBarOpen)
    }

    const renderLanguages = () => {
        return lang === 'en'?
        <div lang="pl" className="p-1 mb-5" onClick={()=>changeLanguage('pl')}>
            <a rel="nofollow" className="text-xl font-bold text-slate-100 uppercase cursor-pointer transition-all opacity-70 hover:opacity-100 ease-in-out duration-[.2s] caret-transparent" key="EN">EN</a>
            <hr className={`${isSideBarOpen? 'w-7' : 'w-full'} border-2 mt-2 transition-all duration-300 ease-in-out`}></hr>
        </div>
        :
        <div lang="en" className="p-1 mb-5" onClick={()=>changeLanguage('en')}>
            <a rel="nofollow" className="text-xl font-bold text-slate-100 uppercase cursor-pointer transition-all opacity-70 hover:opacity-100 ease-in-out duration-[.2s] caret-transparent" key="PL">PL</a>
            <hr className={`${isSideBarOpen? 'w-4' : 'w-full'} border-2 mt-2 transition-all duration-300 ease-in-out`}></hr>
        </div>
    }


    return(
        <div className={`absolute float-left top-[60%] left-[4%] translate-x-[-30%] translate-y-[-65%] z-10000 h-[60%] w-12 bg-slate-950 shadow-gray-800 shadow-lg rounded-3xl caret-transparent cursor-pointer`}  style={{direction: 'ltr'}}onClick={handleSideBarOpening}>
           <div className={`h-full float-left ${isSideBarOpen ? 'w-64 rounded-lg' : 'w-12 rounded-2xl'} bg-slate-950 shadow-slate-900 shadow-inner transition-all duration-300 ease-in-out`}>
           <div className="flex flex-col w-full justify-around p-2 content-center" onClick={(event)=>{event.stopPropagation()}}>
                {renderLanguages()}
                <a className="text-white mb-4">
                    <FontAwesomeIcon icon={faChartPie} className="md:w-8 md:h-8 w-4 h-4 opacity-100 hover:opacity-70 ease-in-out duration-[.2s]"/>
                    <hr className={`${isSideBarOpen? 'w-8' : 'w-full'} border-2 mt-1 transition-all duration-300 ease-in-out`}></hr>
                </a>
                <a className="text-white mb-4 opacity-100 hover:opacity-70 ease-in-out duration-[.2s]">
                    <FontAwesomeIcon icon={faInfo} className="md:w-8 md:h-8 w-4 h-4"/>
                    <hr className={`${isSideBarOpen? 'w-8' : 'w-full'} border-2 mt-1 transition-all duration-300 ease-in-out`}></hr>
                </a>
            </div>
            </div>
        </div>
    )
}

