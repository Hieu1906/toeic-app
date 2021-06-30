// eslint-disable-next-line

import {
  Modal,
  FormInstance,
  Form,
  Row,
  Col,
  Input,
  Select,
  Button,
} from "antd";

import React from "react";

import _, { pick } from "lodash";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ANSWER_PART1 } from "../../../00.common/const";
import { storage } from "../../../firebase.config.js";
import { toeicPart6Service } from "../../../00.common/02.service/toeicPart6Service";
const { TextArea } = Input;
interface ModalToeicPart6Props {
  onSave: () => void;
}

interface ModalToeicPart6State {
  visible: boolean;
  item?: any;
  loading: boolean;
}
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const { Option } = Select;
export default class ModalToeicPart6 extends BaseComponent<
  ModalToeicPart6Props,
  ModalToeicPart6State
> {
  private initialState = {
    visible: false,
    loading: false,
    item: undefined,
  };

  private formRef = React.createRef<FormInstance>();
  constructor(props: ModalToeicPart6Props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
    };
  }
  async delete(item) {
    this.setState({
      loading: true,
    });

    await toeicPart6Service.delete("ToeicPart6", item.KeyDoc);
   

    this.setState(this.initialState as any);
    this.props.onSave();
  }
  async openModal(item?: any) {
    await this.setState({
      loading: true,
      visible: true,
    });
    if (item) {
      await this.setState({
        item,
      });

      this.formRef.current!.setFieldsValue({
        Title: item.Title,
        Level: item.Level,
        Answer1: item.Question1.Answer,
        Answer2: item.Question2.Answer,
        Answer3: item.Question3.Answer,
        Answer4: item.Question4.Answer,

        Select1A: item.Question1.SelectA.Title,
        Select1B: item.Question1.SelectB.Title,
        Select1C: item.Question1.SelectC.Title,
        Select1D: item.Question1.SelectD.Title,

        Select2A: item.Question2.SelectA.Title,
        Select2B: item.Question2.SelectB.Title,
        Select2C: item.Question2.SelectC.Title,
        Select2D: item.Question2.SelectD.Title,

        Select3A: item.Question3.SelectA.Title,
        Select3B: item.Question3.SelectB.Title,
        Select3C: item.Question3.SelectC.Title,
        Select3D: item.Question3.SelectD.Title,

        Select4A: item.Question4.SelectA.Title,
        Select4B: item.Question4.SelectB.Title,
        Select4C: item.Question4.SelectC.Title,
        Select4D: item.Question4.SelectD.Title,
      });
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

      let itemSave = {
        Title: value.Title,
        Level: value.Level,
        Question1: {
          Answer: value.Answer1,
          indexQuestion: 1,
          SelectA: {
            Title: value.Select1A,
            Value: "1000",
          },
          SelectB: {
            Title: value.Select1B,
            Value: "0100",
          },
          SelectC: {
            Title: value.Select1C,
            Value: "0010",
          },
          SelectD: {
            Title: value.Select1D,
            Value: "0001",
          },
        },
        Question2: {
          Answer: value.Answer2,
          indexQuestion: 2,
          SelectA: {
            Title: value.Select2A,
            Value: "1000",
          },
          SelectB: {
            Title: value.Select2B,
            Value: "0100",
          },
          SelectC: {
            Title: value.Select2C,
            Value: "0010",
          },
          SelectD: {
            Title: value.Select2D,
            Value: "0001",
          },
        },
        Question3: {
          Answer: value.Answer3,
          indexQuestion: 3,
          SelectA: {
            Title: value.Select3A,
            Value: "1000",
          },
          SelectB: {
            Title: value.Select3B,
            Value: "0100",
          },
          SelectC: {
            Title: value.Select3C,
            Value: "0010",
          },
          SelectD: {
            Title: value.Select3D,
            Value: "0001",
          },
        },
        Question4: {
          Answer: value.Answer4,
          indexQuestion: 4,
          SelectA: {
            Title: value.Select4A,
            Value: "1000",
          },
          SelectB: {
            Title: value.Select4B,
            Value: "0100",
          },
          SelectC: {
            Title: value.Select4C,
            Value: "0010",
          },
          SelectD: {
            Title: value.Select4D,
            Value: "0001",
          },
        },
      };
      if (this.state.item) {
        await toeicPart6Service.update(
          "ToeicPart6",
          this.state.item.KeyDoc,
          itemSave
        );
      } else {
        await toeicPart6Service.save("ToeicPart6", "", itemSave);
      }
      this.setState(this.initialState as any);

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
        title={`Thêm mới câu hỏi part 4`}
        visible={this.state.visible}
        closable={true}
        onCancel={() => {
          this.setState({
            visible: false,
          });
        }}
        footer={footer}
        onOk={async () => {
          await this.saveItem();
        }}
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
            <Col span={24}>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Đề bài"
                name={"Title"}
                rules={[{ required: true }]}
              >
                <TextArea style={{ marginLeft: 10 }} rows={10} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                labelCol={{ span: 5 }}
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
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item labelCol={{ span: 24 }} label="Câu 1">
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Đáp án A"
                  name={"Select1A"}
                  rules={[{ required: true }]}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Đáp án B"
                  name={"Select1B"}
                  rules={[{ required: true }]}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Đáp án C"
                  name={"Select1C"}
                  rules={[{ required: true }]}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Đáp án D"
                  name={"Select1D"}
                  rules={[{ required: true }]}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Câu trả lời"
                  name={"Answer1"}
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder={"Chọn đáp án đúng"}
                    style={{ width: "100%", marginLeft: 10 }}
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
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                label="Câu 2"
              >
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án A"
                  name={"Select2A"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án B"
                  name={"Select2B"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án C"
                  name={"Select2C"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án D"
                  name={"Select2D"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Câu trả lời"
                  name={"Answer2"}
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder={"Chọn đáp án đúng"}
                    style={{ width: "100%", marginLeft: 10 }}
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
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item labelCol={{ span: 24 }} label="Câu 3">
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án A"
                  name={"Select3A"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án B"
                  name={"Select3B"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án C"
                  name={"Select3C"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án D"
                  name={"Select3D"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Câu trả lời"
                  name="Answer3"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder={"Chọn đáp án đúng"}
                    style={{ width: "100%", marginLeft: 10 }}
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
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item labelCol={{ span: 24 }} label="Câu 4">
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án A"
                  name={"Select4A"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án B"
                  name={"Select4B"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án C"
                  name={"Select4C"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true }]}
                  labelCol={{ span: 6 }}
                  label="Đáp án D"
                  name={"Select4D"}
                >
                  <TextArea style={{ marginLeft: 10 }} />
                </Form.Item>
                <Form.Item
                  labelCol={{ span: 6 }}
                  label="Câu trả lời"
                  name="Answer4"
                  rules={[{ required: true }]}
                >
                  <Select
                    placeholder={"Chọn đáp án đúng"}
                    style={{ width: "100%", marginLeft: 10 }}
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
              </Form.Item>
            </Col>

            <Col span={12}>
              <div
                style={{
                  marginTop: 100,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ width: "-webkit-fill-available" }}
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FPactice%2FToeicPart6%2Fpart6.jpg?alt=media&token=7ec69d82-34cf-40a5-990d-068f8b57ebf2"
                  }
                />
              </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
