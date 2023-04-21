import React, { useMemo, useState } from 'react'
import './index.scss'
// icons
import {BsFillHandThumbsUpFill, BsHandThumbsUp} from 'react-icons/bs'
import {AiOutlineComment} from 'react-icons/ai'
// api
import { likePost, getLikesByUser, postComment, getComments } from '../../../api/FirestoreAPI'
// helpers
import {getCurrentTimeStamp} from '../../../helper/useMoment'

export default function LikeButton({ userID, postID, currentUser }) {
    // hooks
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    // function
    const handleLike = () => likePost(userID, postID, isLiked);
    const handleShowCommentBox = () => setShowCommentBox(!showCommentBox);
    const getComment = (e) => setComment(e.target.value);
    const addComment = () => {
      postComment(postID, comment, getCurrentTimeStamp('LLL'), currentUser?.name)
      setComment('')
    };

    useMemo(() => {
        getLikesByUser(userID, postID, setIsLiked, setLikesCount);
        getComments(postID, setComments)
    }, [userID, postID]);

    return (
      <div className="like-container">
        <p>{likesCount} People like this post</p>
        <div className="hr-line">
          <hr />
        </div>
        <div className="like-comment">
          <div className="likes-comment-inner" onClick={handleLike}>
            {isLiked ? (
              <BsFillHandThumbsUpFill size={25} color="#0a66c2" />
            ) : (
              <BsHandThumbsUp size={25} />
            )}
            <p className={isLiked ? "blue" : "black"}>Like</p>
          </div>
          <div className="likes-comment-inner" onClick={handleShowCommentBox}>
            <AiOutlineComment
              size={25}
              color={showCommentBox ? "#0a66c2" : "#212121"}
            />
            <p className={showCommentBox ? "blue" : "black"}>Comment</p>
          </div>
        </div>
        {/* comment */}
        {showCommentBox && (
          <>
            <input
              type="text"
              placeholder="Add a Comment"
              className="comment-input"
              name="comment"
              onChange={getComment}
              value={comment}
            />
            <button className='add-comment-btn' onClick={addComment}>
              Add Comment
            </button>

            {comments.length > 0 && (
              comments.map((comment) => (
                <div className='all-comments' key={comment.id}>
                  <p className='name'>{comment.name}</p>
                  <p className='comment'>{comment.comment}</p>
                  <p className='timestamp'>{comment.timeStamp}</p>
                </div>
              ))
            )}
            
          </>
        )}
      </div>
    );
}
