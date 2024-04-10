import { dateConverter } from '../utils/DateFormating';
import { useTranslation } from 'react-i18next';

export const CurrentInfo = ({ data }) => {

  const {t} =  useTranslation();

  const getColor = (value, threshold) => {
    if (value < threshold[0]) return 'bg-green-500'; // Good
    if (value >= threshold[0] && value < threshold[1]) return 'bg-yellow-500'; // Fair
    if (value >= threshold[1] && value < threshold[2]) return 'bg-orange-500'; // Moderate
    if (value >= threshold[2] && value < threshold[3]) return 'bg-red-500'; // Poor
    return 'bg-purple-500'; // Very Poor
  };

  return (
    <div className="w-fit flex flex-wrap justify-center">
      {data ?
        <div className="p-2 w-fit h-fit m-2 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl text-center font-semibold mb-2">{t('Aktualna jakość powietrza')}</h2>
          <p className="text-md text-center font-semibold mb-2">{t('Według daty: ')} {data.list? dateConverter.convertUnixToDate(data.list[0].dt): ''}</p>
          <ul className='flex flex-row font-semibold text-sm'>
            <li className='flex flex-row justify-between p-1'>
              SO2: <span className={`rounded px-2 ${getColor(data.list[0].components.so2, [0, 20, 80, 250])}`}>{data.list[0].components.so2}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              NO2: <span className={`rounded px-2 ${getColor(data.list[0].components.no2, [0, 40, 70, 150])}`}>{data.list[0].components.no2}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              PM10: <span className={`rounded px-2 ${getColor(data.list[0].components.pm10, [0, 20, 50, 100])}`}>{data.list[0].components.pm10}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              PM2.5: <span className={`rounded px-2 ${getColor(data.list[0].components.pm2_5, [0, 10, 25, 50])}`}>{data.list[0].components.pm2_5}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              O3: <span className={`rounded px-2 ${getColor(data.list[0].components.o3, [0, 60, 100, 140])}`}>{data.list[0].components.o3}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              CO: <span className={`rounded px-2 ${getColor(data.list[0].components.co, [0, 4400, 9400, 12400])}`}>{data.list[0].components.co}</span>
            </li>
          </ul>
        </div>
         :<></>}
    </div>
  );
};
