import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background-color: #f3f6f6;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const ClientHeader = styled.div`
  grid-column: 4/10;

  > h1 {
    height: 32px;
    font-family: Teko;
    font-size: 60px;

    text-align: center;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #0e0e0e;
    text-transform: uppercase;
  }
  > p {
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.59;
    letter-spacing: normal;
    text-align: center;
    color: #0e0e0e;
  }

  @media (max-width: 540px) {
    grid-column: 2/12;
  }
`;

export const LogoWrapper = styled.div`
  /* display: inline-flex;
  flex-direction: space-around; */
  display: flex;
  justify-content: space-around;
  height: 161px;

  img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
`;
export const LogoGrid = styled.div`
  display: grid;
  grid-column: 2/12;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;