import firebase from "firebase";
export interface NewsToeic {
  KeyDoc?: string;
  Title: string;
  Category: { Title: string; Code: string; Color: string };
  ShortDescription: string;
  FullDescription: string;
  Created: firebase.firestore.Timestamp;
  ShowIconNews: boolean;
  BannerUrl: string;
  OtherImgUrl: string;
  Type: "NewsInternal" | "NewsToeic";
  Placement: number;
}
