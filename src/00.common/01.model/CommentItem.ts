import firebase from "firebase";
export interface CommentItem {
  KeyDoc?: string;
  Email: string;
  LoginName: string;
  Uid: string;
  PhotoUrl?: string;
  ParentId?: string;
  Content: string;
  JobTitle: string;
  Created?: firebase.firestore.Timestamp;
}
