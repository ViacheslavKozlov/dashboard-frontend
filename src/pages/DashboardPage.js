import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CardList from "../Components/cardList/CardList";
import Icon from "../Components/Icon";
import Loaders from "../Components/loader/Loader";
import ModalLoader from "../Components/modal/modalLoader/ModalLoader";
import SectionMainPage from "../Components/todaySection/SectionMainPage";
import TodaySection from "../Components/todaySection/TodaySection";
import {
  getActiveCardsOperation,
  getDoneCardsOperation,
} from "../redux/cards/cardsOperations";
import {
  getActiveTodayCardsSelector,
  getActiveTomorrowCardsSelector,
  getChallengeCardsSelector,
  getDoneCardsSelector,
  getIsLoadingSelector,
} from "../redux/cards/cardsSelectors";
import { DashboardPageStyled } from "./DashboardPageStyled";

const DashboardPage = () => {
  const [doneIsShown, setDoneIsShown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveCardsOperation());
  }, [dispatch]);

  const onShowDone = () => {
    setDoneIsShown(!doneIsShown);

    if (doneCards.length < 1 && !doneIsShown) {
      dispatch(getDoneCardsOperation());
    }
  };
  const activeTodayCards = useSelector(getActiveTodayCardsSelector);
  const activeTomorrowCards = useSelector(getActiveTomorrowCardsSelector);
  const doneCards = useSelector(getDoneCardsSelector);
  const challengeCards = useSelector(getChallengeCardsSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  const getSorted = (list) => {
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
  const todayCards = [
    ...getSorted(activeTodayCards),
    ...getSorted(challengeCards),
  ];
  return (
    <DashboardPageStyled>
      {isLoading && (
        <ModalLoader>
          <Loaders size={100} />
        </ModalLoader>
      )}
      <h1>Dashboard page</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              LoginPge
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" exact>
              RegPage
            </NavLink>
          </li>
        </ul>
      </nav>
      <TodaySection cards={todayCards} />
      <SectionMainPage
        title="TOMORROW"
        cardList={getSorted(activeTomorrowCards)}
      />
      <section className="sectionDone">
        <div className="lineWrapper">
          <button className="btnDone" onClick={onShowDone}>
            DONE
            <Icon
              className="IconDone"
              name={doneIsShown ? "triangle-up" : "triangle-down"}
              size={12}
            />
          </button>
        </div>

        {doneIsShown && <CardList cards={doneCards} />}
      </section>
    </DashboardPageStyled>
  );
};

export default DashboardPage;
