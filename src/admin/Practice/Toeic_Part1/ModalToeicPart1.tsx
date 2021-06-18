// eslint-disable-next-line
import {
  Modal,
  FormInstance,
  Form,
  Row,
  Col,
  Select,
  Button,
  Spin,
} from "antd";

import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import _, { pick } from "lodash";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { UploadFile } from "../../../00.common/00.components/UploadFile";
import { toeicPart1Service } from "../../../00.common/02.service/toeicPart1Service";
import { ANSWER_PART1 } from "../../../00.common/const";
import { storage } from "../../../firebase.config.js";

interface ModalToeicPart1Props {
  onSave: () => void;
}

interface ModalToeicPart1State {
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
export default class ModalToeicPart1 extends BaseComponent<
  ModalToeicPart1Props,
  ModalToeicPart1State
> {
  private initialState = {
    visible: false,
    loading: false,
    item: undefined,
    ImgUrl: "",
    AudioUrl: "",
  };
  private formRef = React.createRef<FormInstance>();
  private refUploadImg = React.createRef<UploadFile>();
  private refUploadAudio = React.createRef<UploadFile>();
  constructor(props: ModalToeicPart1Props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      ImgUrl: "",
      AudioUrl: "",
    };
  }

  async delete(item) {
    this.setState({
      loading: true,
    });

    await toeicPart1Service.delete("ToeicPart1", item.KeyDoc);
    storage.refFromURL(this.state.item.AudioUrl).delete();
    storage.refFromURL(this.state.item.ImgUrl).delete();
    this.setState(this.initialState as any);
    this.props.onSave();
  }
  async openModal(item?: any) {
    await this.setState({
      visible: true,
      loading: true,
    });
    if (item) {
      await this.setState({
        item,
        AudioUrl: item.AudioUrl,
        ImgUrl: item.ImgUrl,
      });
      let formControlValues = pick(item, ["Level", "Answer"]);
      this.formRef.current!.setFieldsValue(formControlValues);
      this.refUploadImg.current?.getSourceFromForm(item.ImgUrl);
      this.refUploadAudio.current?.getSourceFromForm(item.AudioUrl);
    }
    await this.setState({
      loading: false,
    });
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
      value.ImgUrl = this.state.ImgUrl;
      value.AudioUrl = this.state.AudioUrl;

      if (this.state.item) {
        await toeicPart1Service.update(
          "ToeicPart1",
          this.state.item.KeyDoc,
          value
        );
      } else {
        await toeicPart1Service.save("ToeicPart1", "", value);
      }
      this.setState(this.initialState as any);

      await this.setState(this.initialState as any);
      this.formRef.current!.resetFields();
      this.props.onSave();
    } catch (error) {
      console.log("lỗi nha" + error);
      await this.setState(this.initialState as any);
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
        onClick={() => {
          this.setState(this.initialState as any);
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
        destroyOnClose={true}
        width={900}
        title={`Thêm mới câu hỏi part 1`}
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
        <Spin
          spinning={this.state.loading}
          tip={"Loading"}
          style={{ height: "100%", width: "100%" }}
        >
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
                  labelCol={{ span: 4 }}
                  wrapperCol={{ offset: 1 }}
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
                  labelCol={{ span: 4 }}
                  label="Đáp án"
                  name="Answer"
                  rules={[{ required: true, message: "Thiếu thông tin Answer!" }]}
                >
                  <Select
                    defaultValue={ANSWER_PART1.A.value}
                    style={{ width: 120 }}
                  >
                    <Option value={ANSWER_PART1.A.value}>
                      <a>Đáp án A</a>
                    </Option>
                    <Option value={ANSWER_PART1.B.value}>
                      <a>Đáp án B</a>
                    </Option>
                    <Option value={ANSWER_PART1.C.value}>
                      <a>Đáp án C</a>
                    </Option>
                    <Option value={ANSWER_PART1.D.value}>
                      <a>Đáp án D</a>
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16} style={{ marginTop: 15 }}>
              <Col span={10}>
                <Form.Item labelCol={{ span: 6 }} label=" Ảnh câu hỏi">
                  <UploadFile
                    onLoading={(loading) => {
                      this.setState({
                        loading: loading,
                      });
                    }}
                    ref={this.refUploadImg}
                    type={"img"}
                    result={async (values) => {
                      await this.setState({
                        ImgUrl: values[0],
                      });
                    }}
                    refDocLib={`Pactice/ToeicPart1/Img`}
                  />
                </Form.Item>
              </Col>
              <Col span={14}>
                <Form.Item
                  labelCol={{ span: 7 }}
                  wrapperCol={{ span: 17 }}
                  label="Câu hỏi"
                  rules={[{ message: "Thiếu thông tin title!" }]}
                >
                  <UploadFile
                    onLoading={(loading) => {
                      this.setState({
                        loading: loading,
                      });
                    }}
                    ref={this.refUploadAudio}
                    type={"audio"}
                    result={async (values) => {
                      await this.setState({
                        AudioUrl: values[0],
                      });
                    }}
                    refDocLib={`Pactice/ToeicPart1/Audio`}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Spin>
      </Modal>
    );
  }
}
