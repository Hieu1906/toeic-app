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
      //check xem fom đã đủ thông tin cần thiết để lưu chưa
      await this.formRef.current!.validateFields();

      await this.setState({
        loading: true,
      });

      //lấy ra dư liệu từ form
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
      console.log("lỗi nha" + error);
    }
  }

  confirm(item) {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc xóa câu hỏi này không?",
      okText: "Xác nhận",
      cancelText: "Xóa",
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
        Đóng
      </Button>,
      <Button
        onClick={async () => {
          await this.saveItem();
        }}
        type={"primary"}
      >
        Lưu
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
          Xóa
        </Button>
      );
    }
    return (
      <Modal
        width={900}
        title={`Thêm mới câu hỏi part 2`}
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
                  label="Cấp độ "
                  name="Level"
                  rules={[{ required: true, message: "Thiếu thông tin Level!" }]}
                >
                  <Select defaultValue={0} style={{ width: 120 }}>
                    <Option value={1}>
                      <a style={{ color: "#007ACC" }}>Dễ</a>
                    </Option>
                    <Option value={2}>
                      <a style={{ color: "#FFDD00" }}>Trung bình</a>
                    </Option>
                    <Option value={3} style={{ color: "red" }}>
                      Khó
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  initialValue={ANSWER_PART3_4_5.A.value}
                  labelCol={{ span: 6 }}
                  label="Đáp án"
                  name="Answer"
                  rules={[{ required: true, message: "Thiếu thông tin Answer!" }]}
                >
                  <Select style={{ width: 120 }}>
                    <Option value={ANSWER_PART3_4_5.A.value}>
                      <a>Đáp án A</a>
                    </Option>
                    <Option value={ANSWER_PART3_4_5.B.value}>
                      <a>Đáp án B</a>
                    </Option>
                    <Option value={ANSWER_PART3_4_5.C.value}>
                      <a>Đáp án C</a>
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row style={{ marginTop: 15 }}>
              <Col span={12}>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Câu hỏi"
                  rules={[{ message: "Thiếu thông tin title!" }]}
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
