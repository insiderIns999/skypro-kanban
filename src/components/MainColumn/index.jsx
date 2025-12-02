import CardsItem from "../CardsItem";

const MainColumn = () => {
  return (
    <>
      <div className="main__column column">
        <div className="column__title">
          <p>Без статуса</p>
        </div>
        <div className="cards">
          <CardsItem />
        </div>
      </div>
    </>
  );
};

export default MainColumn;
