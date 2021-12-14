import styled from "styled-components";

export const CardListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 10px;
  padding: 0;
  list-style: none;
  margin: 0 auto;

  .cardListItem {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  }
`;
