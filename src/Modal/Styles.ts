import styled from 'styled-components';
import { colors } from '../constants/colorConstants';

export const ModalContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.black0};
  z-index: 100;
  backdrop-filter: blur(4px);
`;
