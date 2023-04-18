import React, { useState } from 'react'
import './index.scss'
import ModalComponent from '../Modal';

export default function PostUpdate() {
  // handle modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // handle status
  const [status, setStatus] = useState('');
  const handleStatus = (e) => setStatus(e.target.value);

  // api
  const sendStatus = () => {
    alert('send status to firebase')
  };

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button onClick={showModal} className='open-post-modal'>Start a Post</button>
      </div>
      <ModalComponent 
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        status={status}
        handleStatus={handleStatus}
        sendStatus={sendStatus}
      />
    </div>
  );
}
