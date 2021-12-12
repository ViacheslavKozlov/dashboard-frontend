// import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import ReactPaginate from "react-paginate";
import Card from "../card/Card";
import InfoCard from "../infoCard/InfoCard";
import CreateEditCard from "../createEditCard/CreateEditCard";
import { CardListStyled } from "./CardListStyled";

const CardList = ({
  isCreateFormShown = false,
  onCloseForm = null,
  cards,
  isInfoCardShown = false,
}) => {
  return (
    <>
      <CardListStyled>
        {isCreateFormShown && (
          <li className="cardListItem">
            <CreateEditCard handleHideCard={onCloseForm} />
          </li>
        )}

        {isInfoCardShown && (
          <InfoCard title="To add a new card, click the button in the lower right corner" />
        )}

        {cards.map(
          ({
            id,
            isChallenge,
            difficulty,
            category,
            taskDate,
            taskName,
            completed,
          }) => (
            <li className="cardListItem" key={id}>
              <Card
                id={id}
                isChallenge={isChallenge}
                difficulty={difficulty}
                category={category}
                taskDate={taskDate}
                taskName={taskName}
                isCompleted={completed}
              />
            </li>
          )
        )}
      </CardListStyled>

      {/* {cards.length > perPage && (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={pageRange}
          marginPagesDisplayed={marginPages}
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={breakLabel}
          breakClassName={"break-me"}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )} */}
    </>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      isChallenge: PropTypes.bool.isRequired,
      difficulty: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      taskDate: PropTypes.string.isRequired,
      taskName: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;