import { MultiSelect } from "react-multi-select-component";

export const MultiToggle = ({options, value, toggle}) => {

  return (
    <div className="text-slate-900 w-full mt-4 font-medium text-lg">
      <p className="m-1 font-semibold text-lg normal-case">Pick a type</p>
      <MultiSelect
        options={options}
        value={value}
        onChange={toggle}
        labelledBy="None"
        disableSearch={false}
        hasSelectAll={false}
      />
    </div>
  );
};