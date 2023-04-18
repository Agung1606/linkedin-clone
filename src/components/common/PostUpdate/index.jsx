import React, { useMemo, useState } from 'react'
import './index.scss'
import ModalComponent from '../Modal';
// api
import { postStatus, getStatus } from '../../../api/FirestoreAPI';

export default function PostUpdate() {
  // handle modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // handle status
  const [status, setStatus] = useState('');
  const handleStatus = (e) => setStatus(e.target.value);

  // all status
  const [allStatus, setAllStatus] = useState([]);

  // api
  const sendStatus = async () => {
    await postStatus(status)
    closeModal()
    setStatus('')
  };

  useMemo(() => {
    getStatus(setAllStatus)
  }, [])

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button onClick={showModal} className="open-post-modal">
          Start a Post
        </button>
      </div>
      <ModalComponent
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        status={status}
        handleStatus={handleStatus}
        sendStatus={sendStatus}
      />

      <div>
        {allStatus.map((post) => (
          <div key={post.id}>
            <p>{post.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
