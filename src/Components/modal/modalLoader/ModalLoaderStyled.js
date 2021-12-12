import styled from "styled-components";
export const ModalLoaderStyled = styled.div`
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1200;
  }

  .Modal {
    max-width: calc(70vw - 48px);
    max-height: calc(110vh - 24px);
  }
`;
