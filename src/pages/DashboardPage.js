import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../Components/cardList/CardList";
import Icon from "../Components/Icon";
import Loaders from "../Components/loader/Loader";
import ModalLoader from "../Components/modal/modalLoader/ModalLoader";
import SectionMainPage from "../Components/todaySection/SectionMainPage";
import TodaySection from "../Components/todaySection/TodaySection";
import { getActiveCardsOperation } from "../redux/cards/cardsOperations";
import {
  getActiveTodayCardsSelector,
  getActiveTomorrowCardsSelector,
  getChallengeCardsSelector,
  getDoneCardsSelector,
  getIsLoadingSelector,
  getUnusedCards
} from "../redux/cards/cardsSelectors";
import { DashboardPageStyled } from "./DashboardPageStyled";
import Header from "../Components/header/Header";
import Wrapper from "../Components/wrapper/Wrapper";

const DashboardPage = () => {
  const [doneIsShown, setDoneIsShown] = useState(false);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getActiveCardsOperation());
    },
    [dispatch]
  );

  const onShowDone = () => {
    setDoneIsShown(!doneIsShown);
  };
  const activeTodayCards = useSelector(getActiveTodayCardsSelector);
  const activeTomorrowCards = useSelector(getActiveTomorrowCardsSelector);
  const doneCards = useSelector(getDoneCardsSelector);
  const challengeCards = useSelector(getChallengeCardsSelector);
  const unusedCards = useSelector(getUnusedCards);
  const isLoading = useSelector(getIsLoadingSelector);

  const getSorted = list => {
    return list.sort((a, b) => {
      const dateA = new Date(a.taskDate);
      const dateB = new Date(b.taskDate);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }

      return 0;
    });
  };
  const todayCards = [...getSorted(activeTodayCards), ...getSorted(challengeCards)];
  return (
    <>
      <Header />

      <Wrapper>
        <DashboardPageStyled>
          {isLoading && (
            <ModalLoader>
              <Loaders size={100} />
            </ModalLoader>
          )}
          <TodaySection cards={todayCards} />
          <SectionMainPage title="TOMORROW" cardList={getSorted(activeTomorrowCards)} />

          <SectionMainPage
            // className="unusedContainer"
            title="TIME IS OVER"
            cardList={getSorted(unusedCards)}
          />

          <section className="sectionDone">
            <div className="lineWrapper">
              <button className="btnDone" onClick={onShowDone}>
                DONE
                <Icon className="IconDone" name={doneIsShown ? "triangle-down" : "triangle-up"} size={12} />
              </button>
            </div>

            {doneIsShown && <CardList cards={doneCards} />}
          </section>
        </DashboardPageStyled>
      </Wrapper>
    </>
  );
};

export default DashboardPage;
