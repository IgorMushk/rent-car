import { styled } from 'styled-components';

export const LoadMore = styled.a`
  display: block;
  margin: 100px auto 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--lightBlue);
  text-decoration-line: underline;
  cursor: pointer;
  transition: transform var(--animation-time) var(--animation-cubic);

  &:hover {
    transform: scale(1.1);
    color: var(--darkBlue);
  }
`;

export const WrapperList = styled.div`
  display: grid;
  justify-content: center;

  grid-template-columns: repeat(1, 274px);
  gap: 50px 29px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 353px);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 274px);
  }
`; 
