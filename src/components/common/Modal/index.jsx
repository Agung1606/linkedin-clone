import React from "react";
import { Modal, Button } from "antd";
import "./index.scss";

export default function ModalComponent({
  isModalOpen,
  closeModal,
  status,
  handleStatus,
  sendStatus
}) {
  // responsiveness
  const handleDisablePost = status.length > 0 ? false : true;
  return (
    <>
      <Modal
        title="Create a post"
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        footer={[
          <Button
            key="submit"
            type="primary"
            disabled={handleDisablePost}
            onClick={sendStatus}
          >
            Post
          </Button>,
        ]}
      >
        <input
          type="text"
          placeholder="What do you want to talk about?"
          className="modal-input"
          value={status}
          onChange={handleStatus}
        />
      </Modal>
    </>
  );
}
