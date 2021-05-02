import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import ReactAudioPlayer from "react-audio-player";
import styles from "./ThemeDetail.module.scss";
import { Modal, Button } from "antd";
interface ThemeDetailModalProps {}

interface ThemeDetailModalState {
  visible: boolean;
  item: any;
}

export default class ThemeDetailModalCom extends BaseComponent<
  ThemeDetailModalProps,
  ThemeDetailModalState
> {
  constructor(props: ThemeDetailModalState) {
    super(props);
    this.state = {
      visible: false,
      item: {} as any,
    };
  }

  async openModal(item: any) {
    await this.setState({
      visible: true,
      item,
    });
  }

  render() {
    let { item } = this.state;
    return (
      <Modal
        width={1000}
        title={item.Title}
        visible={this.state.visible}
        closable={true}
        onCancel={() => {
          this.setState({
            visible: false,
          });
        }}
      >
        <div className={styles.themeDetail}>
          <div className={styles.themeDetail__titleIntroduce}>
            Bài 1: Contracts - Hợp Đồng
          </div>

          {this.state.item.Content &&
            this.state.item.Content.length > 0 &&
            (this.state.item.Content as any[]).map((item, index) => (
              <div className={styles.themeDetail__item}>
                <div className={styles.themeDetail__item__index}>
                  {index + 1}
                </div>
                <img
                  className={styles.themeDetail__item__img}
                  src={item.ImgItem}
                />
                <div className={styles.themeDetail__item__infor}>
                  <div>
                    <span className={styles.themeDetail__item__infor__title}>
                      {item.Title}:
                    </span>
                    <span className={styles.themeDetail__item__infor__spelling}>
                      {item.Spelling}
                    </span>
                  </div>
                  <div>
                    <span className={styles.themeDetail__item__infor__bold}>
                      Giải thích:
                    </span>
                    <span>{item.Example}</span>
                  </div>
                  <div>
                    <span className={styles.themeDetail__item__infor__bold}>
                      Từ loại:
                    </span>
                    <span>{item.Category}</span>
                  </div>
                  <div>
                    <span className={styles.themeDetail__item__infor__bold}>
                      Ví dụ:
                    </span>
                    <span>{item.Translate}</span>
                  </div>
                  <div>
                    <span className={styles.themeDetail__item__infor__bold}>
                      {item.Explain}
                    </span>
                  </div>
                  <ReactAudioPlayer
                    src={item.LinkAudio}
                    autoPlay={false}
                    controls
                  />
                </div>
              </div>
            ))}
        </div>
        {/* <div dangerouslySetInnerHTML={{__html: ''}}></div> */}
      </Modal>
    );
  }
}