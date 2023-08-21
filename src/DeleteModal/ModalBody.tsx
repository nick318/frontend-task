import alertIcon from '../assets/alert.svg';
import { CancelButton, DeleteButton, Description, ModalBodyContainer, Title } from './Styles';

interface ModalBodyProps {
  onClose: () => void;
  title?: string;
  description?: string;
}

export const ModalBody = ({ onClose, title, description }: ModalBodyProps) => {
  return (
    <ModalBodyContainer>
      <img src={alertIcon} alt="AlertIcon" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
        <DeleteButton onClick={onClose}>Delete</DeleteButton>
      </div>
    </ModalBodyContainer>
  );
};

export default ModalBody;
