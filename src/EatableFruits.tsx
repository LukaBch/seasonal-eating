import { fruits } from "./constants";

export interface IEatableFruitsProps {
  selectedMonthIndex: number;
}

export default function EatableFruits(props: IEatableFruitsProps) {
  const eatableFruitNameList = fruits
    .filter(({ good }) => good.includes(props.selectedMonthIndex))
    .map(({ name }) => name);
  if (eatableFruitNameList.length === 0) {
    return <div>Aucun fruit n'est de saison ce mois-ci !</div>;
  }
  if (eatableFruitNameList.length === 1) {
    return (
      <div>
        L'unique fruit de saison ce mois-ci est {eatableFruitNameList[0]}
      </div>
    );
  }
  return <div>Les fruits de saison sont {eatableFruitNameList.join(", ")}</div>;
}
