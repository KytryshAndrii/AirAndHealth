import { useEffect, useState } from 'react';
import { polutionAPI } from '../api/PolutionAPI';
import { dateConverter } from '../utils/DateFormating';

export const AirQualityPopUpInfo = ({ latitude, longitude, name }) => {

  const [pollutionData, setPollutionData] = useState(null);
  const [measureTime, setMeasureTime] = useState(null);
  const [isCustomChartsModal, setIsCustomChartsModal] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await polutionAPI.getCurrentAirPollution(latitude, longitude);
        setPollutionData(data.list[0].components);
        setMeasureTime(dateConverter.convertUnixToDate(data.list[0].dt))
      } catch (error) {
        console.error('Error fetching air pollution data:', error);
      }
    };

    fetchData();
    console.log(pollutionData)
  }, [latitude, longitude]);

  const toggleCustomChartsModal = () => {
    setIsCustomChartsModal(!isCustomChartsModal)
  }

  const getColor = (value, threshold) => {
    if (value < threshold[0]) return 'bg-green-500'; // Good
    if (value >= threshold[0] && value < threshold[1]) return 'bg-yellow-500'; // Fair
    if (value >= threshold[1] && value < threshold[2]) return 'bg-orange-500'; // Moderate
    if (value >= threshold[2] && value < threshold[3]) return 'bg-red-500'; // Poor
    return 'bg-purple-500'; // Very Poor
  };

  return (
    <div className="p-2 w-32 h-fit m-2">
      {pollutionData && (
        <div className='w-full h-full'>
          <div className='flex flex-col'>
            <h2 className="text-xl font-semibold mb-1">Air Quality:</h2>
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="w-full text-md font-semibold mb-2">By date: {measureTime}</p>
          </div>
          <ul className='font-semibold text-sm'>
            <li className='flex flex-row justify-between p-1'>
              SO2: <span className={`rounded px-2 ${getColor(pollutionData.so2, [0, 20, 80, 250])}`}>{pollutionData.so2}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              NO2: <span className={`rounded px-2 ${getColor(pollutionData.no2, [0, 40, 70, 150])}`}>{pollutionData.no2}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              PM10: <span className={`rounded px-2 ${getColor(pollutionData.pm10, [0, 20, 50, 100])}`}>{pollutionData.pm10}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              PM2.5: <span className={`rounded px-2 ${getColor(pollutionData.pm2_5, [0, 10, 25, 50])}`}>{pollutionData.pm2_5}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              O3: <span className={`rounded px-2 ${getColor(pollutionData.o3, [0, 60, 100, 140])}`}>{pollutionData.o3}</span>
            </li>
            <li className='flex flex-row justify-between p-1'>
              CO: <span className={`rounded px-2 ${getColor(pollutionData.co, [0, 4400, 9400, 12400])}`}>{pollutionData.co}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

