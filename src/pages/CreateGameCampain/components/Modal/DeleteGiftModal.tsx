import { Modal } from "antd";
import React from "react";

const DeleteGiftModal = ({
  isOpenModal,
  setOpenModal,
}: {
  isOpenModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleDelGift = () => {};

  return (
    <Modal
      title="Delete gift"
      open={isOpenModal}
      onOk={handleDelGift}
      onCancel={() => setOpenModal(false)}
      // destroyOnClose
    >
      <p>Do you want to delete this one?</p>
    </Modal>
  );
};

export default DeleteGiftModal;
