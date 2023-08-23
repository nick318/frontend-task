import { Fragment } from 'react';
import { Modal } from '../Modal/Modal.tsx';

export const App = () => {
  const button = (handleOpen: () => void) => (
    <button onClick={handleOpen}>Open Modal</button>
  );
  return (
    <Fragment>
      <Modal renderContent={button} />
    </Fragment>
  );
};

export default App;
