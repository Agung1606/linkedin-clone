import { firestore } from '../firebaseConfig'
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
  setDoc,
  orderBy
} from "firebase/firestore";
import { toast } from 'react-toastify';

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore,"users");
let likeRef = collection(firestore, 'likes');
let commentsRef = collection(firestore, "comments")

// store a new post
export const postStatus = async (object) => {
  addDoc(postsRef, object)
    .then(() => {
      toast.success("Document has been added successfully");
    })
    .catch((error) => {
      toast.error(error.message.replace("Firebase: Error", ""));
    });
};

// update post
export const updatePost = (id, status, postImage) => {
  try {
    let docToUpdate = doc(postsRef, id);
    updateDoc(docToUpdate, { status, postImage });
    toast.success("Post has been updated!");
  } catch (error) {
    console.log(error);
  }
};

// delete post
export const deletePost = (id) => {
  try {
    let docToDelete = doc(postsRef, id);
    deleteDoc(docToDelete);
    toast.success("Post has been deleted");
  } catch (error) {
    console.log(error);
  }
};

// store user data
export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    })
};

// get status
export const getPostsStatus = async (setAllStatus) => {
  const q = query(postsRef, orderBy('timeStamp'))
  onSnapshot(q, (response) => {
    setAllStatus(
      response.docs.map((post) => {
        return { ...post.data(), id: post.id };
      })
    );
  });
};

// get single status
export const getSinglePostStatus = (setAllStatus, id) => {
  const singlePostQuery = query(postsRef, where("userID", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatus(
      response.docs.map((post) => {
        return { ...post.data(), id: post.id }
      })
    )
  });
};

// get all user
export const getAllUsers = (setAllUsers) => {
  onSnapshot(userRef, (response) => {
    setAllUsers(
      response.docs.map((user) => {
        return { ...user.data(), id: user.id };
      })
    );
  });
};

// get single user
export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((post) => {
        return { ...post.data(), id: post.id }
      })[0]
    )
  });
};

// get current user
export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs.map((user) => {
        return { ...user.data(), id: user.id }
      }).filter((item) => {
        return item.email === localStorage.getItem('userEmail')
      })[0]
    );
  });
};

// edit profile
export const editProfile = async (userID, payload) => {
  let userToEdit = doc(userRef, userID);

  updateDoc(userToEdit, payload)
    .then(() => {
      toast.success('Profile has been updated successfully')
    })
    .catch((error) => {
      console.log(error);
    })
};

// like post
export const likePost = (userID, postID, isLiked) => {
  try {
    let docToLike = doc(likeRef, `${userID}_${postID}`);
    if(isLiked) {
      deleteDoc(docToLike);
    } else {
      setDoc(docToLike, { userID, postID })
    }
  } catch (error) {
    console.log(error);
  }
};

// get if user has liked 
export const getLikesByUser = (userID, postID, setIsLiked, setLikesCount) => {
  try {
    let likeQuery = query(likeRef, where("postID", "==", postID));

    onSnapshot(likeQuery, (response) => {
      let likes = response.docs.map((doc) => doc.data());
      let likesCount = likes?.length;

      const isLiked = likes.some((like) => like.userID === userID);

      setLikesCount(likesCount);
      setIsLiked(isLiked);
    });
  } catch (error) {
    console.log(error);
  }
};

// post comment
export const postComment = (postID, comment, timeStamp, name) => {
  try {
    addDoc(commentsRef, {
      postID,
      comment,
      timeStamp,
      name
    });
  } catch (error) {
    console.log(error);
  }
};

// get post's comment
export const getComments = (postID, setComments) => {
  try {
    let singlePostQuery = query(commentsRef, where('postID', '==', postID));

    onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });

      setComments(comments);
    });
  } catch (error) {
    console.log(error);
  }
};