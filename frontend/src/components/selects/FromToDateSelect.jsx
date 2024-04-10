import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FromToDataSelect = ({value, onChange}) =>{

    return (
        <div className="m-2 border-2 border-slate-800 shadow-sm rounded-lg">
            <DatePicker 
                dateFormat="yyy-MM-dd"
                selected={value} 
                onChange={(date) => onChange(date)} 
        />
        </div>
    );
}