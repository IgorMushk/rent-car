import { styled as muiStyled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

export const StylesButton = muiStyled(Button)(({ width }) => ({
  padding: '12px 0 12px 0',
  width: width,
  borderRadius: '12px',
  color: 'var(--primeryWhite)',
  backgroundColor: 'var(--lightBlue)',
  '&:hover': {
    backgroundColor: 'var(--darkBlue)',
  },
}));

export const Text = styled.span`
  color:var(--primeryWhite);
  font-size: 14px;
  font-weight: 600;
  line-height: 143%;
  text-transform: none;
`;
