import CardsItem from "../CardsItem";
import { testCardsData } from "../../data.js";

const MainColumn = () => {
  return (
    <>
      {testCardsData.map((card) => (
        <div className="main__column column">
          <div className="{card.status}">
            <p>Без статуса</p>
          </div>
          <div className="cards">
            <CardsItem
              key={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MainColumn;
