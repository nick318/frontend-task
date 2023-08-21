import alertIcon from '../shared/assets/alert.svg';
import {
  CancelButton,
  DeleteButton,
  Description,
  ModalBodyContainer,
  Title,
  ButtonsContainer,
} from './Styles';

interface ModalBodyProps {
  onClose: () => void;
  isTimeout: boolean;
  title?: string;
  description?: string;
}

export const ModalBody = ({
  onClose,
  title,
  description,
  isTimeout,
}: ModalBodyProps) => {
  return (
    <ModalBodyContainer>
      <img src={alertIcon} alt="AlertIcon" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonsContainer>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <DeleteButton onClick={onClose} disabled={isTimeout}>
          Delete
        </DeleteButton>
      </ButtonsContainer>
    </ModalBodyContainer>
  );
};

export default ModalBody;
