import { MultyAxisChart } from "../charts/MultyAxisChart"
import { CurrentInfo } from "../CurrentInfo"
import { useTranslation } from 'react-i18next';

export const ChartsGenerator = ({dataOptions, title})=>{

   const {t} =  useTranslation();

    return(
        <div className="bg-zinc-50 fle flex-col content-center w-[96%] h-fit border-2 p-2 m-4 shadow-xl border-slate-400 rounded-2xl">
            <p className="text-xl p-2 m-2 text-center font-semibold uppercase">{title}</p>
            {dataOptions.map((option)=>{
                 if (option.option === 'forecast'){
                    return <MultyAxisChart data={option.data} title={t('Informacje o prognozie')}/>
                 }
                 if (option.option === 'historical'){
                    return <MultyAxisChart data={option.data} title={t('Informacje historyczne')}/>
                 }
                 if (option.option === 'current'){
                    return <div className="flex justify-center"><CurrentInfo data={option.data}/></div>
                 }else{
                    return <></>
                 }
            })}
        </div>
    )
}