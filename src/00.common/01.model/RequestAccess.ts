export interface RequestAccess {
  KeyDoc?: string;
  LoginName: string;
  Uid: string;
  Status: "APPROVE" | "REJECT" | "Pending";
  Permission:string;
}
