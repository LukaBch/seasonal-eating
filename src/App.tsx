import { useState } from "react";
import MonthSelector from "./MonthSelector";
import EatableFruits from "./EatableFruits";

export interface ISeasonalEatingProps {}

interface IMonthProps {
  value: number;
  label: string;
}

function App() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);

  const handleMonthChange = (newMonth: IMonthProps) => {
    setSelectedMonthIndex(newMonth.value);
  };
  return (
    <>
      <MonthSelector
        selectedMonthIndex={selectedMonthIndex}
        onMonthChange={handleMonthChange}
      />
      <EatableFruits selectedMonthIndex={selectedMonthIndex} />
    </>
  );
}

export default App;
