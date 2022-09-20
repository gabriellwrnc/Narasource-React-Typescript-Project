import React, { useState } from "react";
import { Modal } from "../../components/Modal";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const approve = () => {
    console.log("approve");
  };

  const toggleModal = () => {
    // Cara 2.1
    // setShowModal(!showModal)

    // Cara 2.2
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <h1>Home Page</h1>
      {/* Cara 1 */}
      {/* <button onClick={() => setShowModal(true)}>Show Modal</button> */}

      <button onClick={() => toggleModal()}>Show Modal</button>
      <Modal
        title="Approve User"
        visible={showModal}
        onClose={() => toggleModal()}
        onSubmit={() => approve()}
        submiText="Approve"
        closeText="Cancel"
      >
        ini adalah children
      </Modal>
    </>
  );
};

export default Home;
