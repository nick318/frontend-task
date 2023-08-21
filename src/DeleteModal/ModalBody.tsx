import alertIcon from '../assets/alert.svg';

interface ModalBodyProps {
  onClose: () => void;
  title?: string;
  description?: string;
}

export const ModalBody = ({ onClose, title, description }: ModalBodyProps) => {
  return (
    <div>
      <img src={alertIcon} alt="AlertIcon" />
      <p>{title}</p>
      <p>{description}</p>
      <div>
        <button onClick={onClose}>
          Cancel
        </button>
        <button onClick={onClose}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ModalBody