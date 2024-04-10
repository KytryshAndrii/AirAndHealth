import { useState, useEffect } from "react"
import './index.css';
import "leaflet/dist/leaflet.css";
import { Map } from './components/Map';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { ModalWindow } from './components/ModalWindow';
import { WellComeInfo } from './components/modal-fillers/WellCome';

function App() {

  const [isModal, setIsModal] = useState(false)
  const toggleModal = () => {
    setIsModal(!isModal)
  }

  useEffect(()=>{
    setIsModal(true)
  },[])


  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <div className="App">
        <Map/>
        <ModalWindow isModal={isModal} toggleModal={toggleModal} child={<WellComeInfo/>}/>
      </div>
    </I18nextProvider>
  );
}

export default App;
