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
        closeBtnProps={{ type: "secondary", size: "sm" }}
        submitBtnProps={{ type: "success", size: "lg" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, a! Omnis
        velit itaque ipsam rem eum? Unde laudantium nemo ab neque fugit
        architecto deserunt, sint odit! Necessitatibus vitae laborum sapiente?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        mollitia natus aut molestias magni nihil ducimus praesentium doloremque!
        Quasi et dolores, eligendi sed soluta temporibus debitis. Voluptatem
        accusamus eaque aspernatur!
      </Modal>
    </>
  );
};

export default Home;
