import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartPie, faInfo, faArrowCircleRight, faCircleXmark, faQuestion} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
import { WellComeInfo } from './modal-fillers/WellCome';
import { ModalWindow } from './ModalWindow';

export const SideBar = () => {

    const { t, i18n } =  useTranslation();
    const lang = i18n.language; 

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    
    const [isModal, setIsModal] = useState(false)
    
    const toggleModal = () => {
        setIsModal(!isModal)
    }
    
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
            <a rel="nofollow" className="text-xl font-bold text-slate-100 uppercase cursor-pointer transition-all opacity-100 hover:opacity-80 ease-in-out duration-[.2s] caret-transparent" key="EN">EN</a>
            <hr className={`${isSideBarOpen? 'w-7' : 'w-full'} border-2 mt-2 transition-all duration-300 ease-in-out`}></hr>
        </div>
        :
        <div lang="en" className="p-1 mb-5" onClick={()=>changeLanguage('en')}>
            <a rel="nofollow" className="text-xl font-bold text-slate-100 uppercase cursor-pointer transition-all opacity-100 hover:opacity-80 ease-in-out duration-[.2s] caret-transparent" key="PL">PL</a>
            <hr className={`${isSideBarOpen? 'w-7' : 'w-full'} border-2 mt-2 transition-all duration-300 ease-in-out`}></hr>
        </div>
    }


    return(
        <>
        <div className={`fixed float-left top-[60%] left-[4%] translate-x-[-30%] translate-y-[-65%] z-10000 h-[60%] w-12 text-cream-white bg-slate-950 shadow-gray-800 shadow-lg rounded-3xl caret-transparent`}  style={{direction: 'ltr'}}>
           <div className={`h-full float-left ${isSideBarOpen ? 'w-64 rounded-lg' : 'w-12 rounded-2xl'} bg-slate-950 shadow-slate-900 shadow-inner transition-all duration-300 ease-in-out`}>
                <a className={`absolute w-fit h-fit ${isSideBarOpen? 'left-60' : 'left-8'} justify-center content-center bg-slate-950 rounded-3xl transition-all duration-300 ease-in-out cursor-pointer`}>
                   { isSideBarOpen ? <FontAwesomeIcon icon={faCircleXmark} className="md:w-5 md:h-5 w-2 h-2 opacity-100 hover:opacity-70 ease-in-out duration-[.2s]" onClick={handleSideBarOpening}/>
                    :  <FontAwesomeIcon icon={faArrowCircleRight} className="md:w-5 md:h-5 w-2 h-2 opacity-100 hover:opacity-70 ease-in-out duration-[.2s]" onClick={handleSideBarOpening}/>
                    }
                </a>
                <div className="flex flex-col w-full justify-around p-2 mt-4 content-center" onClick={(event)=>{event.stopPropagation()}}>
                    {renderLanguages()}
                    <div className='flex flex-row justify-between content-center h-fit w-full opacity-100 hover:opacity-70 ease-in-out duration-[.2s]'>
                        <a className="mb-4 cursor-pointer">
                            <FontAwesomeIcon icon={faChartPie} className="md:w-8 md:h-8 w-4 h-4"/>
                            <hr className={`${isSideBarOpen? 'w-8' : 'w-full'} border-2 mt-1 transition-all duration-300 ease-in-out`}></hr>
                        </a>
                        <p className={`${isSideBarOpen? ' block w-full' : 'hidden'} text-sm p-1 ml-4 mt-2 font-semibold`}>{t('Personalizacja informacji')}</p>
                    </div>
                    <div className='flex flex-row justify-between content-center h-fit w-full opacity-100 hover:opacity-70 ease-in-out duration-[.2s]'>
                        <a className="mb-4 cursor-pointer">
                            <FontAwesomeIcon icon={faInfo} className="md:w-8 md:h-8 w-4 h-4"/>
                            <hr className={`${isSideBarOpen? 'w-8' : 'w-full'} border-2 mt-1 transition-all duration-300 ease-in-out`}></hr>
                        </a>
                        <p className={`${isSideBarOpen? 'block w-full' : 'hidden'} text-sm p-1 ml-4 mt-2 font-semibold`}>{t('Informacja teoretyczna')}</p>
                    </div>
                </div>
                <div className='flex flex-row h-fit w-full opacity-100 hover:opacity-70 ease-in-out duration-[.2s]' onClick={toggleModal}>
                    <a className="absolute bottom-2 cursor-pointer p-2">
                        <FontAwesomeIcon icon={faQuestion} className="md:w-8 md:h-8 w-4 h-4 opacity-100 hover:opacity-70 ease-in-out duration-[.2s]"/>
                    </a>
                    <p className={`absolute bottom-7 left-14 ${isSideBarOpen? 'block' : 'hidden'} text-sm font-semibold w-48`}>{t('Odpowiedzi na pytania')}</p>
                </div>    
            </div>
        </div>
        <ModalWindow isModal={isModal} toggleModal={toggleModal} child={<WellComeInfo/>}/>
        </>
    )
}

