import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardList from "../../Components/cardList/CardList";
import { getAllActiveCardsSelector } from "../../redux/cards/cardsSelectors";
import Icon from "../Icon";
import IconButton from "../iconButton/IconButton";
import { DashboardPageStyled } from "../../pages/DashboardPageStyled";

const TodaySection = ({ cards }) => {
  const [createFormShown, setCreateFormShown] = useState(false);
  const editCardEl = useRef(null);

  const handleBtnClick = () => {
    window.scrollTo({
      top: editCardEl.current.offsetTop,
      behavior: "smooth",
    });

    setCreateFormShown(true);
  };

  const allActiveCards = useSelector(getAllActiveCardsSelector);

  return (
    <DashboardPageStyled>
      <section className="section">
        <h2 ref={editCardEl} className="sectionTitle">
          TODAY
        </h2>

        <CardList
          isCreateFormShown={createFormShown}
          onCloseForm={() => setCreateFormShown(false)}
          cards={cards}
          isInfoCardShown={allActiveCards.length < 1 && !createFormShown}
        />
      </section>

      <div className="buttonAddContainer">
        <IconButton
          className="buttonAddCard"
          onClick={handleBtnClick}
          aria-label="Add"
        >
          <Icon className="Icon" name={"plus"} size={15} />
        </IconButton>
      </div>
    </DashboardPageStyled>
  );
};

export default TodaySection;
