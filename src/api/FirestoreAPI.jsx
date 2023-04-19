import { firestore } from '../firebaseConfig'
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore'
import { toast } from 'react-toastify';

let postsRef = collection(firestore, "posts");
let userRef = collection(firestore,"users");

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
  onSnapshot(postsRef, (response) => {
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