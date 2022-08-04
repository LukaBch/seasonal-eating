import Select from "react-select";
import { months } from "./constants";

export interface IMonthSelectorProps {
  selectedMonthIndex: number;
  onMonthChange: (a: any) => void;
}

export default function MonthSelector(props: IMonthSelectorProps) {
  const options = months.map((month, index) => ({
    value: index,
    label: month,
  }));
  const value = options[props.selectedMonthIndex];
  return (
    <Select value={value} options={options} onChange={props.onMonthChange} />
  );
}

