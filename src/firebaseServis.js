import firebase from "./config";

const functions = firebase.app().functions("europe-west3");
export function signInWithEmail(creds) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
}

export const updateBatch = ({ id, lis }) => {
  const updateBatchCallable = functions.httpsCallable("updateBatch");
  return updateBatchCallable({ id, lis });
};
