import styled from 'styled-components';
import { colors } from '../shared/constants/colorConstants';

export const ModalBodyContainer = styled.div`
  background-color: ${colors.gray0};
  border-radius: 12px;
  padding: 24px;
  min-height: 296px;
  max-width: 400px;
`;

export const Title = styled.p`
margin-top: 16px;
font-weight: 600;
line-height: 28px;
font-size: 18px;
text-wrap: wrap;
color: 
font-family: 'OpenSans-SemiBold'
`;

export const Description = styled.p`
  border-color: ${colors.gray85};
  color: ${colors.gray85};
  line-height: 20px;
  margin-top: 5px;
  text-wrap: wrap;
  font-size: 14px;
  font-weight: 400;
  font-family: 'OpenSans-Regular';
`;

export const ButtonsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const ModalButton = styled.button`
  flex-wrap: wrap;
  transition: all 0.3s;
  padding: 10px 18px;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 600;
  flex: 1;
  cursor: pointer;
  width: 170px;
  height: 44px;
`;

export const CancelButton = styled(ModalButton)`
  border: 1px solid;
  border-color: ${colors.gray25};
  color: ${colors.gray100};
  background-color: ${colors.gray0};

  &:hover {
    background-color: ${colors.gray6};
  }

  &:active {
    background-color: ${colors.gray12};
  }

  &:focus {
    background-color: ${colors.gray0};
    box-shadow:
      0px 0px 0px 4px ${colors.gray3},
      0px 1px 2px 0px ${colors.shadow0};
  }

  &:disabled {
    background-color: ${colors.gray25};
  }
`;

export const DeleteButton = styled(ModalButton)`
color:  ${colors.gray0};
background-color:  ${colors.red110};

&:hover,
&:active {
    background-color: ${colors.red120};
}

&:focus {
    background-color: ${colors.red110};
    box-shadow: 0px 0px 0px 4px ${colors.red10};, 0px 1px 2px 0px ${colors.shadow0};
}

&:disabled {
    background-color: ${colors.red40};
}
`;
