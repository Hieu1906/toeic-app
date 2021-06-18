import firebase from "firebase";
import ReactAudioPlayer from "react-audio-player";
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";
import { BaseComponent } from "./BaseComponent";
import { UploadOutlined } from "@ant-design/icons";
import { storage } from "../../firebase.config.js";
interface UploadFileState {
  filenames: any[];
  downloadURLs: any[];
  isUploading: boolean;
}
interface UploadFileProps {
  type: "img" | "audio";
  refDocLib: string;
  result: (value: any[]) => void;
  onLoading?: (loading: boolean) => void;
  showImg?: boolean;
}

export class UploadFile extends BaseComponent<
  UploadFileProps,
  UploadFileState
> {
  constructor(props: UploadFileProps) {
    super(props);
    this.state = {
      filenames: [],
      downloadURLs: [],
      isUploading: false,
    };
  }
  // hàm này sẽ được gọi khi khi truyền value vào từ form bất kì
  getSourceFromForm(url: string) {
    this.setState({
      downloadURLs: [url],
    });
  }

  handleUploadStart = () => {
    this.setState({
      isUploading: true,
    });
    this.props.onLoading!(true);
  };

  handleUploadError = (error) => {
    this.setState({
      isUploading: false,
      // Todo: handle error
    });
    console.error(error);
  };

  handleUploadSuccess = async (filename) => {
    const downloadURL = await firebase
      .storage()
      .ref(`CommonDoc/${this.props.refDocLib}`)
      .child(filename)
      .getDownloadURL();
    if (this.state.downloadURLs && this.state.downloadURLs.length > 0) {
      storage.refFromURL(this.state.downloadURLs[0]).delete();
    }
    await this.setState((oldState) => ({
      filenames: [filename],
      downloadURLs: [downloadURL],
      uploadProgress: 100,
      isUploading: false,
    }));
    this.props.result(this.state.downloadURLs);
    this.props.onLoading!(false);
  };

  render() {
    return (
      <div>
        <CustomUploadButton
          accept={this.props.type == "img" ? "image/*" : "audio/*"}
          storageRef={firebase
            .storage()
            .ref(`CommonDoc/${this.props.refDocLib}`)}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          style={{
            backgroundColor: "#33ABE5",
            color: "white",
            padding: 10,
            borderRadius: 4,
            marginBottom: 10,
            width: "100%",
          }}
        >
          Choose {this.props.type == "img" ? "Image" : "Audio"}{" "}
          <UploadOutlined />
        </CustomUploadButton>

        <div style={{ marginTop: 30 }}>
          {this.props.showImg !== false && this.props.type == "img" && (
            <div>
              {this.state.downloadURLs.map((downloadURL, i) => {
                return (
                  <img key={i} src={downloadURL} height={150} width={200} />
                );
              })}
            </div>
          )}
          {this.props.type == "audio" && (
            <div>
              {this.state.downloadURLs.length > 0 &&
                this.state.downloadURLs.map((downloadURL, i) => {
                  return (
                    <ReactAudioPlayer
                      key={i}
                      src={downloadURL}
                      autoPlay={false}
                      controls
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    );
  }
}
