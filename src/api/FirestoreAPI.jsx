import { firestore } from '../firebaseConfig'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { toast } from 'react-toastify';

let dbRef = collection(firestore, "posts");

// store a new post
export const postStatus = async (status) => {
  let object = {
    status,
  };
  addDoc(dbRef, object)
    .then(() => {
      toast.success("Document has been added successfully");
    })
    .catch((error) => {
      toast.error(error.message.replace("Firebase: Error", ""));
    });
};

// get status
export const getStatus = async (setAllStatus) => {
  onSnapshot(dbRef, (response) => {
    setAllStatus(response.docs.map((post) => {
      return {...post.data(), id: post.id }
    }));
  })
};