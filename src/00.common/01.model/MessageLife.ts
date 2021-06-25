import firebase from "firebase";
export interface MessageLife {
  KeyDoc?: string;
  Title: string;

  FullDescription: string;
  Created: firebase.firestore.Timestamp;
  BannerUrl: string;
  OtherImgUrl: string;
  Author: {
    Name: string;
    JobTitle: string;
    Avatar: string;
  };
}
