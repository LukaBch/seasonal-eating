import { useState } from "react";
import MonthSelector from "./MonthSelector";

function App() {
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);
  return (
    <MonthSelector
      selectedMonthIndex={selectedMonthIndex}
      onMonthChange={(a) => {
        setSelectedMonthIndex(a.index);
      }}
    />
  );
}

export default App;
