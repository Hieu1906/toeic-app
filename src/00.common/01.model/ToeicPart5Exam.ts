import firebase from "firebase";
export interface ToeicPart5Exam{
    KeyDoc:string;
    Title:string;
    Time:number;
    Creator:{Title:string;Id:string};
    View:number;
    DoExam:number;
    CountItem:number;
    LookUpKeyDoc:string[];
    Created:firebase.firestore.Timestamp
}