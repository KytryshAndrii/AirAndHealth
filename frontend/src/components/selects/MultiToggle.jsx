import { MultiSelect } from "react-multi-select-component";
import { useTranslation } from "react-i18next";

export const MultiToggle = ({options, value, toggle}) => {
  const {t} =  useTranslation();
  return (
    <div className="text-slate-900 w-full mt-4 font-medium text-lg">
      <p className="m-1 font-semibold text-lg normal-case">{t('Wybierz tryb')}</p>
      <MultiSelect
        options={options}
        value={value}
        onChange={toggle}
        labelledBy={t("Brak")}
        disableSearch={false}
        hasSelectAll={false}
      />
    </div>
  );
};