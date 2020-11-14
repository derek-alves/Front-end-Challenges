import styled from "styled-components";

export const Container = styled.div`
  border-top: 1.3px solid rgba(255, 255, 255, 0.6);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  max-width: 456px;

  h1 {
    margin-bottom: 15px;
  }

  @media (min-width: 456px) {
    ul {
      column-count: 2;

      span {
        font-size: 13px;
      }
    }
  }
`;

export const Minmax = styled.div`
  display: flex;

  span {
    padding-right: 10px;
    color: gray;
    font-size: 13px;
    margin-bottom: 10px;
  }

  @media (min-width: 456px) {
    span {
      font-size: 10px;
    }
  }
`;
