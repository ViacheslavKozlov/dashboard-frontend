import React from "react";
import PropTypes from "prop-types";
import CardList from "../../Components/cardList/CardList";
import { DashboardPageStyled } from "../../pages/DashboardPageStyled";

const SectionMainPage = ({ title, cardList, className }) => {
  const classList = ["section", className].join(" ");
  return (
    <DashboardPageStyled>
      {cardList.length > 0 && (
        <section className={classList}>
          <h2 className="sectionTitle">{title}</h2>
          <CardList cards={cardList} />
        </section>
      )}
    </DashboardPageStyled>
  );
};

SectionMainPage.propTypes = {
  title: PropTypes.string,
  cardList: PropTypes.array,
};

export default SectionMainPage;
