import { useTranslation } from "react-i18next";

export const Info = () => {
    const { t } =  useTranslation();

    return (
        <div className="flex justify-center content-center w-[80%] h-full pt-10 pb-10 pl-4 pr-4">
            <div className="w-full">
                <h1 className="text-3xl font-bold mb-4">🌍 {t('Informacje o jakości powietrza')}</h1>
                <p className="mb-4 text-lg">{t('Na tej stronie internetowej podajemy informacje o jakości powietrza przy użyciu standardowego wskaźnika jakości powietrza (AQI) [μg/m³], który waha się od 0 do 500 i odzwierciedla poziom zanieczyszczenia atmosferycznego. Każde zanieczyszczenie, takie jak SO2, NO2, PM10, PM2.5, O3 i CO, ma swoje własne normy i wpływ na zdrowie.')}</p>

                <p className="mb-4 text-lg">{t('Naszą misją jest dostarczanie użytkownikom zrozumiałych informacji o tym, jak każde zanieczyszczenie wpływa na ich zdrowie i jakość powietrza wokół nich. Poniżej znajdują się szczegółowe informacje na temat każdego zanieczyszczenia, w tym jego zakresy, normy i wartości AQI:')}</p>

                <div className="mb-8 text-lg">
                    <ul>
                        <li className="mb-4">
                            <strong>{t('SO2 (dwutlenek siarki):')}</strong>
                            <ul className="list-disc pl-6">
                                <li>{t('Opis: Dwutlenek siarki może powstawać w wyniku spalania węgla i ropy naftowej.')}</li>
                                <li>{t('Wpływ: Wysokie poziomy SO2 są związane z chorobami układu oddechowego i ryzykiem sercowo-naczyniowym.')}</li>
                            </ul>
                        </li>

                        <li className="mb-4">
                            <strong>{t('NO2 (dwutlenek azotu):')}</strong>
                            <ul className="list-disc pl-6">
                                <li>{t('Opis: Dwutlenek azotu pochodzi głównie z emisji z pojazdów i źródeł przemysłowych.')}</li>
                                <li>{t('Wpływ: Wysokie poziomy NO2 mogą powodować problemy z oddychaniem i podrażnienie dróg oddechowych.')}</li>
                            </ul>
                        </li>

                        <li className="mb-4">
                            <strong>{t('PM10 (cząstki stałe o średnicy mniejszej niż 10 mikrometrów):')}</strong>
                            <ul className="list-disc pl-6">
                                <li>{t('Opis: PM10 zawiera pył, dym i inne cząstki stałe.')}</li>
                                <li>{t('Wpływ: Te cząsteczki mogą przedostać się do płuc i powodować różne choroby, w tym astmę i choroby sercowo-naczyniowe.')}</li>
                            </ul>
                        </li>

                        <li className="mb-4">
                            <strong>{t('PM2.5 (cząstki stałe poniżej 2,5 mikrometra):')}</strong>
                            <ul className="list-disc pl-6">
                                <li>{t('Opis: Cząsteczki PM2.5 są jeszcze bardziej niebezpieczne, ponieważ ich rozmiary pozwalają im przenikać głęboko do płuc.')}</li>
                                <li>{t('Wpływ: Może to prowadzić do poważnych chorób układu oddechowego, w tym raka i innych schorzeń przewlekłych.')}</li>
                            </ul>
                        </li>

                        <li className="mb-4">
                            <strong>{t('O3 (ozon):')}</strong>
                            <ul className="list-disc pl-6">
                                <li>{t('Opis: Wysokie poziomy ozonu w atmosferze mogą powodować podrażnienie dróg oddechowych.')}</li>
                                <li>{t('Wpływ: Może to pogorszyć stan osób, zwłaszcza dzieci i osób z chorobami układu oddechowego.')}</li>
                            </ul>
                        </li>

                        <li className="mb-4">
                            <strong>{t('CO (tlenek węgla):')}</strong>
                            <ul className="list-disc pl-6">
                                <li>{t('Opis: Tlenek węgla jest wynikiem niepełnego spalania paliwa.')}</li>
                                <li>{t('Wpływ: Wysokie poziomy CO mogą prowadzić do zatrucia, ponieważ może on zastępować tlen we krwi.')}</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('Legenda AQI:')}</h2>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">{t('Nazwa jakościowa')}</th>
                                <th className="px-4 py-2">SO2 (μg/m³)</th>
                                <th className="px-4 py-2">NO2 (μg/m³)</th>
                                <th className="px-4 py-2">PM10 (μg/m³)</th>
                                <th className="px-4 py-2">PM2.5 (μg/m³)</th>
                                <th className="px-4 py-2">O3 (μg/m³)</th>
                                <th className="px-4 py-2">CO (μg/m³)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 bg-green-400">{t('Dobry')}</td>
                                <td className="border px-4 py-2">[0; 20)</td>
                                <td className="border px-4 py-2">[0; 40)</td>
                                <td className="border px-4 py-2">[0; 20)</td>
                                <td className="border px-4 py-2">[0; 10)</td>
                                <td className="border px-4 py-2">[0; 60)</td>
                                <td className="border px-4 py-2">[0; 4400)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 bg-yellow-400">{t('Normalny')}</td>
                                <td className="border px-4 py-2">[20; 80)</td>
                                <td className="border px-4 py-2">[40; 70)</td>
                                <td className="border px-4 py-2">[20; 50)</td>
                                <td className="border px-4 py-2">[10; 25)</td>
                                <td className="border px-4 py-2">[60; 100)</td>
                                <td className="border px-4 py-2">[4400; 9400)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 bg-blue-400">{t('Umiarkowany')}</td>
                                <td className="border px-4 py-2">[80; 250)</td>
                                <td className="border px-4 py-2">[70; 150)</td>
                                <td className="border px-4 py-2">[50; 100)</td>
                                <td className="border px-4 py-2">[25; 50)</td>
                                <td className="border px-4 py-2">[100; 140)</td>
                                <td className="border px-4 py-2">[9400-12400)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 bg-red-400">{t('Zły')}</td>
                                <td className="border px-4 py-2">[250; 350)</td>
                                <td className="border px-4 py-2">[150; 200)</td>
                                <td className="border px-4 py-2">[100; 200)</td>
                                <td className="border px-4 py-2">[50; 75)</td>
                                <td className="border px-4 py-2">[140; 180)</td>
                                <td className="border px-4 py-2 w-40">[12400; 15400)</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 bg-purple-400">{t('Bardzo Zły')}</td>
                                <td className="border px-4 py-2">⩾350</td>
                                <td className="border px-4 py-2">⩾200</td>
                                <td className="border px-4 py-2">⩾200</td>
                                <td className="border px-4 py-2">⩾75</td>
                                <td className="border px-4 py-2">⩾180</td>
                                <td className="border px-4 py-2">⩾15400</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
