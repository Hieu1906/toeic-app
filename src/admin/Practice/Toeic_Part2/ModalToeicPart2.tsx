// eslint-disable-next-line
import {
  Modal,
  FormInstance,
  Form,
  Row,
  Col,
  Spin,
  Select,
  Button,
} from "antd";

import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import _, { pick } from "lodash";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { UploadFile } from "../../../00.common/00.components/UploadFile";

import { ANSWER_PART3_4_5 } from "../../../00.common/const";
import { storage } from "../../../firebase.config.js";
import { toeicPart2Service } from "../../../00.common/02.service/toeicPart2Service";

interface ModalToeicPart2Props {
  onSave: () => void;
}

interface ModalToeicPart2State {
  visible: boolean;
  item?: any;
  loading: boolean;
  ImgUrl?: string;
  AudioUrl?: string;
}
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const { Option } = Select;
export default class ModalToeicPart2 extends BaseComponent<
  ModalToeicPart2Props,
  ModalToeicPart2State
> {
  private initialState = {
    visible: false,
    loading: false,
    item: undefined,
    ImgUrl: "",
    AudioUrl: "",
  };
  private refUploadAudio = React.createRef<UploadFile>();
  private formRef = React.createRef<FormInstance>();
  constructor(props: ModalToeicPart2Props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      ImgUrl: "",
      AudioUrl: "",
    };
  }

  async openModal(item?: any) {
    await this.setState({
      visible: true,
    });
    if (item) {
      await this.setState({
        item,
        AudioUrl: item.AudioUrl,
        ImgUrl: item.ImgUrl,
      });
      let formControlValues = pick(item, ["Level", "Answer"]);
      this.formRef.current!.setFieldsValue(formControlValues);

      this.refUploadAudio.current?.getSourceFromForm(item.AudioUrl);
    }
    await this.setState({
      loading: false,
    });
  }
  async delete(item) {
    this.setState({
      loading: true,
    });

    await toeicPart2Service.delete("ToeicPart2", item.KeyDoc);
    storage.refFromURL(this.state.item.AudioUrl).delete();
    await this.setState(this.initialState as any);
    this.props.onSave();
  }
  async saveItem() {
    try {
      //check xem fom ???? ????? th??ng tin c???n thi???t ????? l??u ch??a
      await this.formRef.current!.validateFields();

      await this.setState({
        loading: true,
      });

      //l???y ra d?? li???u t??? form
      const value = this.formRef.current!.getFieldsValue();

      value.AudioUrl = this.state.AudioUrl;

      if (this.state.item) {
        await toeicPart2Service.update(
          "ToeicPart2",
          this.state.item.KeyDoc,
          value
        );
      } else {
        await toeicPart2Service.save("ToeicPart2", "", value);
      }

      await this.setState(this.initialState as any);
      this.formRef.current!.resetFields();
      this.props.onSave();
    } catch (error) {
      console.log("l???i nha" + error);
    }
  }

  confirm(item) {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Ba??n co?? ch????c xo??a c??u ho??i na??y kh??ng?",
      okText: "Xa??c nh????n",
      cancelText: "Xo??a",
      onOk: () => {
        this.delete(item);
      },
    });
  }

  render() {
    let { item } = this.state;
    let footer = [
      <Button
        onClick={async () => {
          await this.setState(this.initialState as any);
        }}
        type={"default"}
      >
        ??o??ng
      </Button>,
      <Button
        onClick={async () => {
          await this.saveItem();
        }}
        type={"primary"}
      >
        L??u
      </Button>,
    ];
    if (this.state.item) {
      footer.splice(
        0,
        0,
        <Button
          onClick={() => {
            this.confirm(this.state.item);
          }}
          type="primary"
          danger
        >
          Xo??a
        </Button>
      );
    }
    return (
      <Modal
        width={900}
        title={`Th??m m???i c??u ho??i part 2`}
        visible={this.state.visible}
        closable={true}
        onCancel={() => {
          this.setState({
            visible: false,
          });
        }}
        onOk={async () => {
          this.saveItem();
        }}
        footer={footer}
      >
        {this.state.visible && (
          <Form
            ref={this.formRef}
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={() => {}}
            onFinishFailed={() => {}}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="C????p ?????? "
                  name="Level"
                  rules={[{ required: true, message: "Thi????u th??ng tin Level!" }]}
                >
                  <Select defaultValue={0} style={{ width: 120 }}>
                    <Option value={1}>
                      <a style={{ color: "#007ACC" }}>D????</a>
                    </Option>
                    <Option value={2}>
                      <a style={{ color: "#FFDD00" }}>Trung bi??nh</a>
                    </Option>
                    <Option value={3} style={{ color: "red" }}>
                      Kho??
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  initialValue={ANSWER_PART3_4_5.A.value}
                  labelCol={{ span: 6 }}
                  label="??a??p a??n"
                  name="Answer"
                  rules={[{ required: true, message: "Thi????u th??ng tin Answer!" }]}
                >
                  <Select style={{ width: 120 }}>
                    <Option value={ANSWER_PART3_4_5.A.value}>
                      <a>??a??p a??n A</a>
                    </Option>
                    <Option value={ANSWER_PART3_4_5.B.value}>
                      <a>??a??p a??n B</a>
                    </Option>
                    <Option value={ANSWER_PART3_4_5.C.value}>
                      <a>??a??p a??n C</a>
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row style={{ marginTop: 15 }}>
              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="C??u ho??i"
                  rules={[{ message: "Thi????u th??ng tin title!" }]}
                >
                  <UploadFile
                    onLoading={(loading) => {
                      this.setState({
                        loading,
                      });
                    }}
                    ref={this.refUploadAudio}
                    type={"audio"}
                    result={async (values) => {
                      await this.setState({
                        AudioUrl: values[0],
                      });
                    }}
                    refDocLib={`Pactice/ToeicPart2/Audio`}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}{" "}
      </Modal>
    );
  }
}
