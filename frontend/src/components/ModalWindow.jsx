
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";


export const ModalWindow = ({isModal, child, toggleModal}) =>{

    const { t, i18n } =  useTranslation();
    const lang = i18n.language;

    const changeLanguage = language => {
        i18n.changeLanguage(language)
        localStorage.setItem("language", language)
    }   

    const renderLanguages = () => {
        return lang === 'en'?
        <div lang="pl" className="p-1" onClick={()=>changeLanguage('pl')}>
            <a rel="nofollow" className="text-2xl font-bold text-slate-900 uppercase cursor-pointer transition-all hover:text-lime-800 ease-in-out duration-[.2s] caret-transparent" key="EN">EN</a>
        </div>
        :
        <div lang="en" className="p-1" onClick={()=>changeLanguage('en')}>
            <a rel="nofollow" className="text-2xl font-bold text-slate-900 uppercase cursor-pointer transition-all hover:text-lime-800 ease-in-out duration-[.2s] caret-transparent" key="PL">PL</a>
        </div>
    }


    return(
        <>
        {isModal ?
            <div className='z-10010 h-screen w-screen fixed top-0 bottom-0 left-0 right-0 caret-transparent ease-in-out duration-[.7s]'>
                <div className="bg-modal-bg h-screen w-screen fixed top-0 bottom-0 left-0 right-0" onClick={()=>toggleModal()}>
                    <div className='z-10020 bg-cream-white text-stone-900 lg:w-[85%] md:w-[45%] sm:w-[65%] w-[92%] h-fit rounded-xl absolute p-3 top-[43%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-auto' onClick={(event)=>event.stopPropagation()}>
                        <FontAwesomeIcon icon={faXmark} className="absolute right-3 top-2 md:w-6 md:h-6 w-2 h-2 hover:text-lime-800 ease-in-out duration-[.2s]" onClick={()=>toggleModal()}/>
                        <div className="absolute left-3 top-2 md:w-5 md:h-5 w-2 h-2 opacity-100 hover:opacity-70 ease-in-out duration-[.2s]">
                            {renderLanguages()}
                        </div>
                        <div className='flex justify-center content-center align-middle'>
                            {child}
                        </div>
                    </div>
                </div>
            </div>
        :<></>}
        </>
    )
}
