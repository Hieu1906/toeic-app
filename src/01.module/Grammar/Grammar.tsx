import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { Button, Col, Select } from "antd";
import { RedoOutlined } from "@ant-design/icons";
import styles from "./Grammar.module.scss";
import { Input, Space } from "antd";
import { Radio } from "antd";
import { grammarService } from "../../00.common/02.service/grammarService";
import { GrammarItem } from "../../00.common/01.model/Grammar";
import _ from "lodash";
import { Link } from "react-router-dom";
import { ROUTER } from "../../00.common/const";
const { Search } = Input;

interface GrammarProps {}

interface GrammarState {
  allData: GrammarItem[];
  option: string;
}
const { Option } = Select;
export default class GrammarCom extends BaseComponent<
  GrammarProps,
  GrammarState
> {
  private allData: GrammarItem[] = [];
  constructor(props: GrammarProps) {
    super(props);
    this.state = {
      allData: [],
      option: "Level",
    };
    this.onMount(async () => {
      await this.getAllData();
    });
  }

  async getAllData() {
    let allData = await grammarService.getAll<GrammarItem>("Grammar", "");
    this.allData = allData;
    this.setState({
      allData,
    });
  }

  renderItem(
    allData: GrammarItem[],
    infor?: { level: number; numberStars: "⭐" | "⭐⭐" | "⭐⭐⭐ " },
    titleCategory?: string
  ) {
    let data: GrammarItem[] = allData;
    if (infor) {
      data = allData.filter((item) => {
        return item.Level == infor.level;
      });
    }
    return (
      <div
        style={{ width: "100%" }}
        className={styles.grammar__container__content}
      >
        <h3 className={styles.grammar__container__content__header}>
          {infor ? `Cấp độ ${infor.level} ${infor.numberStars}` : titleCategory}
        </h3>

        <div className={styles.grammar__container__content__wapperItems}>
          {data.map((item) => (
            <Col
              span={4}
              className={styles.grammar__container__content__wapperItems__item}
            >
              <div
                className={
                  styles.grammar__container__content__wapperItems__item__block1
                }
              >
                <img
                  src={item.ImgUrl}
                  style={{
                    height: 56,
                    width: 56,
                    borderRadius: "50%",
                    marginBottom: 20,
                  }}
                />
                {item.Title}
              </div>
              <Link to={item.UrlCode}>
                <div
                  className={
                    styles.grammar__container__content__wapperItems__item__block2
                  }
                >
                  Học
                </div>
              </Link>
            </Col>
          ))}
        </div>
      </div>
    );
  }

  renderItemFlowCategory(allData: GrammarItem[]) {
    let groupsData = _.groupBy(allData, "Category");
    let keys = Object.keys(groupsData);
    let values = Object.values(groupsData);
    let dataFlowCategory = keys.map((item, index) => {
      return {
        Title: item,
        value: values[index],
      };
    });

    return (
      <div>
        {dataFlowCategory.map((item) =>
          this.renderItem(item.value, undefined, item.Title)
        )}
      </div>
    );
  }

  render() {
    return (
      <div className={styles.grammar}>
        <div className={styles.grammar__container}>
          <div className={styles.grammar__container__header}>
            <div className={styles.grammar__container__header__title}>
              Ngữ pháp PRO - Lộ trình học của bạn
            </div>
            <div className={styles.grammar__container__header__navigation}>
              <div
                // style={{ backgroundColor: "#00BAFF" }}
                className={styles.grammar__container__header__navigation__item}
              >
                <a
                  href="https://tienganhmoingay.com/ngu-phap-tieng-anh/ngu-phap-tieng-anh-cot-loi-cau-truc-cau/"
                  target="_blank"
                >
                  <strong>Bước 1</strong>
                  <div style={{ marginTop: 7 }}>Cấu trúc câu cơ bản</div>
                </a>
              </div>
              <div
                className={styles.grammar__container__header__navigation__item}
              >
                <a
                  href="https://tienganhmoingay.com/ngu-phap-tieng-anh/ngu-phap-tieng-anh-cot-loi-cau-truc-cau/"
                  target="_blank"
                >
                  <strong> Bước 2</strong>
                  <div style={{ marginTop: 7 }}>Cấu trúc câu chi tiết</div>
                </a>
              </div>
              <div
                className={styles.grammar__container__header__navigation__item}
              >
                <a
                  href="https://tienganhmoingay.com/ngu-phap-tieng-anh/ngu-phap-tieng-anh-cot-loi-cau-truc-cau/"
                  target="_blank"
                >
                  <strong>Bước 3</strong>
                  <div style={{ marginTop: 7 }}>Các điểm ngữ pháp chi tiế</div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.grammar__container__divider}></div>
          <div className={styles.grammar__container__search}>
            <div className={styles.grammar__container__search__choice}>
              Các chủ để ngữ pháp ở dưới đây đang được sắp xếp:
              <Radio.Group
                defaultValue={"Level"}
                onChange={(e) => {
                  this.setState({
                    option: e.target.value,
                  });
                }}
              >
                <Space direction="vertical">
                  <Radio
                    className={styles.grammar__container__search__choice}
                    value={"Level"}
                  >
                    Từ cơ bản đến nâng cao
                  </Radio>
                  <Radio
                    className={styles.grammar__container__search__choice}
                    value={"Category"}
                  >
                    Theo các thành phần trong câu
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
            <div style={{ display: "flex", width: "45%" }}>
              <Search
                style={{ width: "90%", marginRight: 10 }}
                placeholder="Tìm kiếm 1 chủ đề ngữ pháp"
                enterButton
                onSearch={async (value) => {
                  let dataFilter = this.state.allData.filter((item) => {
                    let a = item.Title.toLocaleLowerCase();
                    return a.indexOf(value.toLocaleLowerCase()) > -1;
                  });

                  await this.setState({
                    allData: dataFilter,
                  });
                }}
              />
              <Button
                type="primary"
                icon={<RedoOutlined />}
                onClick={() => {
                  this.setState({
                    allData: this.allData,
                  });
                }}
              />
            </div>
          </div>
          {this.state.option == "Level" ? (
            <>
              {this.renderItem(this.state.allData, {
                level: 1,
                numberStars: "⭐",
              })}
              {this.renderItem(this.state.allData, {
                level: 2,
                numberStars: "⭐⭐",
              })}
              {this.renderItem(this.state.allData, {
                level: 3,
                numberStars: "⭐⭐⭐ ",
              })}
            </>
          ) : (
            <> {this.renderItemFlowCategory(this.state.allData)}</>
          )}
        </div>
      </div>
    );
  }
}
