import React, { useMemo, useState } from 'react'
import './index.scss'
import { AiOutlineLike } from 'react-icons/ai'
// api
import { likePost, getLikesByUser } from '../../../api/FirestoreAPI'

export default function LikeButton({ userID, postID }) {
    // hooks
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const handleLike = () => likePost(userID, postID, isLiked);

    useMemo(() => {
        getLikesByUser(userID, postID, setIsLiked, setLikesCount);
    }, [userID, postID]);

    return (
      <div className="like-container" onClick={handleLike}>
        <AiOutlineLike size={25} />
        <p>Like</p>
      </div>
    );
}
