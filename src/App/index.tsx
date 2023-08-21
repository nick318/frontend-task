import { Fragment } from 'react';
import { ModalBody } from '../DeleteModal/ModalBody.tsx';
import text from '../assets/modalText.json';

export const App = () => {
  return (
    <Fragment>
      <button>Open modal</button>
      <ModalBody onClose={() => null} title={text.main} description={text.description} />
    </Fragment>
  );
};

export default App;
