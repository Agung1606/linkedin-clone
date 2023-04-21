import React, { useMemo, useState } from 'react'
import './index.scss'
// icons
import {BsFillHandThumbsUpFill, BsHandThumbsUp} from 'react-icons/bs'
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
      <div className="like-container">
        <p>{likesCount} People like this post</p>
        <div className='hr-line'>
          <hr />
        </div>
        <div className='like-comment'>
          <div className='likes-comment-inner' onClick={handleLike}>
            {isLiked ? (
              <BsFillHandThumbsUpFill size={25} color='#0a66c2' />
            ) : (
              <BsHandThumbsUp size={25} />
            )}
            <p className={isLiked ? 'blue' : 'black'}>Like</p>
          </div>
        </div>
      </div>
    );
}
