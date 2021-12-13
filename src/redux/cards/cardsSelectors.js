export const toDoSelector = (state) => state.cards.items;

export const getAllActiveCardsSelector = (state) =>
  state.cards.items.filter(
    ({ completed, taskDate }) =>
      !completed && new Date().getTime() <= new Date(taskDate).getTime()
  );

export const getActiveTodayCardsSelector = (state) =>
  state.cards.items.filter(({ completed, isChallenge, taskDate }) => {
    return (
      !completed &&
      !isChallenge &&
      new Date().getTime() < new Date(taskDate).getTime() &&
      new Date().toLocaleDateString() ===
        new Date(taskDate).toLocaleDateString()
    );
  });

export const getActiveTomorrowCardsSelector = (state) =>
  state.cards.items.filter(({ completed, isChallenge, taskDate }) => {
    return (
      !completed &&
      !isChallenge &&
      new Date().getTime() < new Date(taskDate).getTime() &&
      new Date().getDate() + 1 === new Date(taskDate).getDate()
    );
  });

export const getDoneCardsSelector = (state) =>
  state.cards.items.filter(({ completed }) => completed);

export const getChallengeCardsSelector = (state) =>
  state.cards.items.filter(
    ({ isChallenge, completed, taskDate }) =>
      isChallenge &&
      !completed &&
      new Date().getTime() <= new Date(taskDate).getTime()
  );

export const getUnusedCards = (state) => {
  return state.cards.items.filter(({ completed, taskDate }) => {
    return !completed && new Date().getTime() > new Date(taskDate).getTime();
  });
};

export const getIsLoadingSelector = (state) => state.cards.isLoading;
