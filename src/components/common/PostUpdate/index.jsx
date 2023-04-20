import React, { useMemo, useState } from 'react'
import './index.scss'
import ModalComponent from '../Modal';
import PostsCard from '../PostsCard';
// api
import { postStatus, getPostsStatus } from '../../../api/FirestoreAPI';
// time stamp
import { getCurrentTimeStamp } from '../../../helper/useMoment';
// helper
import { getUniqueID } from '../../../helper/getUniqueId';

export default function PostUpdate({ currentUser }) {
  // user email
  const userEmail = localStorage.getItem("userEmail");
  // handle modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // handle status
  const [status, setStatus] = useState("");
  const handleStatus = (e) => setStatus(e.target.value);

  // all status
  const [allPostStatus, setAllPostStatus] = useState([]);

  // api
  const sendStatus = async () => {
    let object = {
      status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postID: getUniqueID(),
      userID: currentUser.id,
    };
    await postStatus(object);
    closeModal();
    setStatus("");
  };

  useMemo(() => {
    getPostsStatus(setAllPostStatus);
  }, []);

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
        {allPostStatus.map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
