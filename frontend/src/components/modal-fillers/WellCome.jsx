import { useTranslation } from "react-i18next";


export const WellComeInfo = () => {
    const {t} =  useTranslation();

    return(
        <div className="flex justify-center content-center w-[60%] h-full pt-10 pb-10 pl-4 pr-4">
            <div class="w-full"> 
                <h1 class="text-3xl font-bold mb-4">🌬️ {t('Strona monitorowania jakości powietrza')}</h1> 
                <p class="text-lg mb-6 font-medium">{t('Witamy na naszej stronie, gdzie możesz łatwo uzyskać dostęp do najbardziej aktualnych informacji na temat jakości powietrza w Twoim regionie. Naszym celem jest uczynienie monitorowania jakości powietrza jak najbardziej wygodnym i efektywnym dla Ciebie.')}</p> 
                <div class="mb-6"> 
                    <h2 class="text-xl font-semibold mb-2">🌍 {t('Funkcje')}:</h2> 
                    <ul class="text-lg list-disc pl-6 font-medium"> 
                        <li class="mb-2">{t('Wybór kraju: Aby wybrać kraj, wystarczy dwukrotnie kliknąć wybrany kraj na mapie.')}</li> 
                        <li class="mb-2">{t('Cofanie działań: Aby cofnąć działania, wystarczy kliknąć raz w puste miejsce na mapie.')}</li> 
                        <li class="mb-2">{t('Wyszukiwanie miejsca: Jeśli nie możesz znaleźć swojego miejsca na mapie, możesz wyszukać go, wprowadzając nazwę w górnym menu strony.')}</li> 
                        <li class="mb-2">{t('Uzyskiwanie informacji: Aby uzyskać szczegółowe informacje na temat jakości powietrza w wybranym regionie, kliknij na znaczniki na mapie lub skorzystaj z bocznego panelu.')}</li> 
                    </ul> 
                </div> 
                <p class="text-lg font-medium">{t('Dołącz do naszej społeczności i bądź częścią naszego wysiłku dla czystego powietrza dla wszystkich!')}</p> 
            </div>
        </div>
    )
} 