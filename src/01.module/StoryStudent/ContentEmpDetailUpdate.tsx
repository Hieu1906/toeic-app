import { Col, Divider, Row, Skeleton } from "antd";

import * as _ from "lodash";

import * as React from "react";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { CKEditor5 } from "../../00.common/00.components/ckeditor5/CKEditor";
import { CommentComp } from "../../00.common/00.components/Comment/CommentComp";
import { StoryStudent } from "../../00.common/01.model/StoryStudent";
import { storyStudentService } from "../../00.common/02.service/storyStudentService";
import { Footer } from "../Footer/Footer";
import styles from "./ContentEmpDetailUpdate.module.scss";

interface ContentEmpDetailUpdateProps {}

interface IContentEmployeeDetailState {
  selectedUser?: StoryStudent;

  enable: boolean;
  loading: boolean;
}

export default class ContentEmpDetailUpdate extends BaseComponent<
  ContentEmpDetailUpdateProps,
  IContentEmployeeDetailState
> {
  public constructor(props: any) {
    super(props);
    this.state = {
      enable: false,
      loading: true,
    };
    this.onMount(async () => {
      const keyDoc = this.getParameterByName("keyDoc");
      if (keyDoc) {
        let selectedUser =
          await storyStudentService.getItemByDocId<StoryStudent>(
            "StoryStudent",
            keyDoc
          );
        this.setState({
          selectedUser,
        });
      }

      this.setState({
        loading: false,
      });
    });
  }

  public getParameterByName(name: string, url?: string) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  public render(): React.ReactElement<ContentEmpDetailUpdateProps> {
    return (
      <Skeleton paragraph={{ rows: 15 }} loading={this.state.loading}>
        <div className={styles.contentEmpDetailUpdate}>
          <div className={styles.contentEmpDetailUpdate__Content}>
            {this.state.selectedUser && (
              <div className={styles.contentEmpDetailUpdate}>
                <CKEditor5 value={this.state.selectedUser!.Content} />
              </div>
            )}
          </div>
          <div className={styles.contentEmpDetailUpdate__comment}>
            <CommentComp
              colectionName={`Story_Student_${this.state.selectedUser?.KeyDoc}`}
              colectionReaction={`Story_Student_RC_${this.state.selectedUser?.KeyDoc}`}
            />
          </div>
        </div>
        <Footer />
      </Skeleton>
    );
  }
}
