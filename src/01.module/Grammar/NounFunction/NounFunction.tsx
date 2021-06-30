import { Button } from "antd";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import styles from "./NounFunction.module.scss";
import { LikeOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../00.common/const";
import { Footer } from "../../Footer/Footer";
import { CommentComp } from "../../../00.common/00.components/Comment/CommentComp";
export class NounFunction extends BaseComponent<{}, {}> {
  render() {
    return (
      <>
        <div className={styles.NounFuntion}>
          <div className={styles.NounFuntion__container}>
            <div className={styles.NounFuntion__container__header}>
              <h1 className={styles.NounFuntion__container__header__title}>
                Chức năng của Danh từ trong câu
              </h1>
              <div>
                {" "}
                <Button type="primary" icon={<LikeOutlined />}>
                  Thích
                </Button>{" "}
                <Button type="primary" icon={<ShareAltOutlined />}>
                  Chia sẻ
                </Button>
              </div>
              <div
                className={styles.NounFuntion__container__header__iconWrapper}
              >
                <img
                  height={75}
                  src="https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FLogo%2Flogo.png?alt=media&token=70db5d87-b189-48aa-84e4-8eec35f15158"
                />
                <div style={{ width: "60%", color: "#333;" }}>
                  Bài viết này được biên soạn bởi Toeic Sinh viên Hust, nơi phát
                  triển
                  <Link to={ROUTER.DE_THI}>
                    <a>Chương trình luyện thi TOEIC </a>
                  </Link>{" "}
                  số 1 hiện nay.
                </div>
              </div>

              <img
                className={styles.NounFuntion__container__header__img}
                src={
                  "https://tienganhmoingay.com/media/images/uploads/2018/07/05/chuc_nang_danh_tu.png"
                }
              />
              <div style={{ display: "flex", width: "100%", marginTop: 30 }}>
                <div className={styles.NounFuntion__container__tableContent}>
                  <p className={styles.NounFuntion__container__p}>
                    <br></br>
                    <span style={{ fontSize: 20 }}>
                      <strong>Mục lục:</strong>
                    </span>
                  </p>
                  <ol className={styles.NounFuntion__container__ul}>
                    <li className={styles.NounFuntion__container__li}>
                      <a
                        className={
                          styles.NounFuntion__container__tableContent__a
                        }
                        href="#chu-ngu"
                      >
                        (Cụm) Danh từ làm chủ ngữ trong câu
                      </a>
                    </li>
                    <li className={styles.NounFuntion__container__li}>
                      <a
                        className={
                          styles.NounFuntion__container__tableContent__a
                        }
                        href="#tan-ngu"
                      >
                        (Cụm) Danh từ làm tân ngữ của động từ
                      </a>
                    </li>
                    <li className={styles.NounFuntion__container__li}>
                      <a
                        className={
                          styles.NounFuntion__container__tableContent__a
                        }
                        href="#gioi-tu"
                      >
                        (Cụm) Danh từ làm tân ngữ của giới từ
                      </a>
                    </li>
                    <li className={styles.NounFuntion__container__li}>
                      <a
                        className={
                          styles.NounFuntion__container__tableContent__a
                        }
                        href="#bo-ngu"
                      >
                        (Cụm) Danh từ làm bổ ngữ
                      </a>
                    </li>
                    <li className={styles.NounFuntion__container__li}>
                      <a
                        className={
                          styles.NounFuntion__container__tableContent__a
                        }
                        href="#phan-loai"
                      >
                        Phân loại danh từ trong tiếng Anh
                      </a>
                    </li>
                    <li className={styles.NounFuntion__container__li}>
                      <a
                        className={
                          styles.NounFuntion__container__tableContent__a
                        }
                        href="#tong-ket"
                      >
                        Tổng kết
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
              <h2 className={styles.NounFuntion__container__h2}>
                {" "}
                1. (Cụm) Danh từ làm chủ ngữ trong câu
              </h2>
              <p className={styles.NounFuntion__container__p}>
                Vị trí: Thường sẽ đứng đầu câu, trước động từ được chia ở thì.
                <br></br>
                Để biết chủ ngữ ở đâu, chúng ta chỉ cần biết động từ chia thì
                nằm ở đâu trong câu, thì chủ ngữ sẽ nằm ở&nbsp;trước đó.
              </p>
              <p className={styles.NounFuntion__container__p}>Ví dụ:</p>
              <ul>
                <li className={styles.NounFuntion__container__li}>
                  <p className={styles.NounFuntion__container__p}>
                    <b>
                      <ul className={styles.NounFuntion__container__ul}>
                        Cats
                      </ul>
                    </b>
                    &nbsp;love to sit in boxes. = Mèo rất thích ngồi ở bên trong
                    những chiếc hộp.<br></br>→ Động từ chia thì là love →{" "}
                    <ul className={styles.NounFuntion__container__ul}>
                      <strong>Cats</strong>
                    </ul>{" "}
                    là danh từ đóng vai trò chủ ngữ của câu.
                  </p>
                </li>
                <li className={styles.NounFuntion__container__li}>
                  <p className={styles.NounFuntion__container__p}>
                    <strong>
                      The{" "}
                      <ul className={styles.NounFuntion__container__ul}>
                        exhibition
                      </ul>{" "}
                      of Roman paintings
                    </strong>{" "}
                    has attracted many art students. =&nbsp;Buổi triễn lãm tranh
                    La Mã thu hút rất nhiều sinh viên mỹ thuật.<br></br>→ Động
                    từ chia thì là has attracted → Cụm{" "}
                    <strong>
                      the{" "}
                      <ul className={styles.NounFuntion__container__ul}>
                        exhibition
                      </ul>{" "}
                      of Roman paintings
                    </strong>
                    &nbsp;là một cụm danh từ và là chủ ngữ của câu; trong đó,
                    danh từ chính của cụm là chữ{" "}
                    <ul className={styles.NounFuntion__container__ul}>
                      <strong>exhibition</strong>
                    </ul>
                    .
                  </p>
                </li>
                <li className={styles.NounFuntion__container__li}>
                  <p className={styles.NounFuntion__container__p}>
                    From Monday to Friday,{" "}
                    <strong>
                      new{" "}
                      <ul className={styles.NounFuntion__container__ul}>
                        episodes
                      </ul>
                    </strong>{" "}
                    will be aired on the channel. = Từ thứ hai đến thứ sáu, các
                    tập phim mới sẽ được chiếu trên kênh này.<br></br>→ Động từ
                    chia thì là will be aired → Cụm{" "}
                    <strong>
                      new&nbsp;
                      <ul className={styles.NounFuntion__container__ul}>
                        episodes
                      </ul>
                    </strong>
                    &nbsp;là một cụm danh từ và là chủ ngữ của câu; trong đó,
                    danh từ chính của cụm là chữ{" "}
                    <ul className={styles.NounFuntion__container__ul}>
                      <strong>episodes</strong>
                    </ul>
                    .&nbsp;<br></br>
                    Lưu ý là: from Monday to Friday chỉ là thời gian của hành
                    động, bổ sung ý nghĩa cho cả câu nên chúng ta không xem nó
                    là một phần của chủ ngữ.
                  </p>
                </li>
              </ul>
              <img
                className={styles.NounFuntion__container__header__img}
                src={
                  "https://tienganhmoingay.com/media/images/uploads/2018/08/23/construction_1.png"
                }
              />
              <h2 className={styles.NounFuntion__container__h2}>
                2. (Cụm) Danh từ làm tân ngữ của động từ
              </h2>
              <p className={styles.NounFuntion__container__p}>
                Vị trí: Thường sẽ đứng sau động từ của câu.
              </p>
              <p className={styles.NounFuntion__container__p}>
                Lưu ý là có một số động từ thì bắt buộc có tân ngữ, còn có một
                số động từ thì không được có tân ngữ. Đây là một chủ đề khó hơn,
                nếu bạn muốn tìm hiểu thêm thì bạn có thể học ở bài{" "}
                <a href="https://tienganhmoingay.com/ngu-phap-tieng-anh/noi-dong-tu-ngoai-dong-tu/">
                  Nội động từ &amp; Ngoại động từ
                </a>{" "}
                nhé!
              </p>
              <p className={styles.NounFuntion__container__p}>Ví dụ:</p>
              <ul>
                <li className={styles.NounFuntion__container__li}>
                  <p className={styles.NounFuntion__container__p}>
                    I want to choose&nbsp;
                    <strong>the suitable makeup&nbsp;</strong>
                    <u>
                      <strong>products</strong>
                    </u>
                    <strong>&nbsp;</strong>for my skin<strong>. =</strong>
                    &nbsp;Tôi muốn chọn những sản phẩm trang điểm đúng phù hợp
                    cho da của tôi.<br></br>→ Cụm&nbsp;
                    <strong>the suitable makeup&nbsp;</strong>
                    <u>
                      <strong>products</strong>
                    </u>
                    &nbsp;là một cụm danh từ và là tân ngữ của động từ{" "}
                    <strong>choose</strong>.
                  </p>
                </li>
                <li className={styles.NounFuntion__container__li}>
                  <p className={styles.NounFuntion__container__p}>
                    All students must sign up to get{" "}
                    <u>
                      <strong>permission</strong>
                    </u>
                    <strong> </strong>to attend the workshop. =&nbsp;Tất cả sinh
                    viên&nbsp;phải đăng ký&nbsp;để được phép tham dự buổi hội
                    thảo.<br></br>→ Cụm{" "}
                    <u>
                      <b>permission</b>
                    </u>
                    &nbsp;là một cụm danh từ và là tân ngữ của động từ{" "}
                    <strong>get</strong>.
                  </p>
                </li>
              </ul>
              <img
                alt="I want to choose&nbsp;the suitable makeup&nbsp;products&nbsp;for my skin."
                className={styles.NounFuntion__container__header__img}
                src="https://tienganhmoingay.com/media/images/uploads/2018/08/23/makeup.png"
                style={{ width: 371, height: 300 }}
              ></img>
              <p style={{ textAlign: "center" }}>
                <strong>
                  I want to choose the suitable makeup products for my skin.
                </strong>
              </p>
              <h2 className={styles.NounFuntion__container__h2}>
                3. (Cụm) Danh từ làm tân ngữ của giới từ
              </h2>
              <p>Vị trí: Đứng sau giới từ.</p>
              <p>Ví dụ:</p>
              <ul>
                <li>
                  <p>
                    My mother has just received a wedding invitation from{" "}
                    <strong>
                      my <u>uncle</u>
                    </strong>
                    . = Mẹ tôi mới nhận được thiệp mời đám cưới&nbsp;từ chú tôi.
                    <br></br>→ Cụm&nbsp;<strong>my&nbsp;</strong>
                    <u>
                      <strong>uncle</strong>
                    </u>
                    &nbsp;là một cụm danh từ và là tân ngữ của giới&nbsp;từ{" "}
                    <strong>from</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    The famous writer wrote about{" "}
                    <strong>
                      his unusual <u>childhood</u>
                    </strong>{" "}
                    in his new book. = Nhà văn nổi tiếng viết về tuổi thơ bất
                    thường của ông ấy trong quyển sách mới.<br></br>→ Cụm&nbsp;
                    <strong>his unusual&nbsp;</strong>
                    <u>
                      <strong>childhood</strong>
                    </u>
                    &nbsp;là một cụm danh từ và là tân ngữ của giới&nbsp;từ{" "}
                    <strong>about</strong>.
                  </p>
                </li>
              </ul>
              <img
                alt="I want to choose&nbsp;the suitable makeup&nbsp;products&nbsp;for my skin."
                className={styles.NounFuntion__container__header__img}
                src="https://tienganhmoingay.com/media/images/uploads/2018/08/23/letter_wedding_invitation.png"
                style={{ width: 371, height: 300 }}
              ></img>
              <p style={{ textAlign: "center" }}>
                <strong>
                  My mother has just received a wedding invitation from my
                  uncle.
                </strong>
              </p>
            </div>
            <CommentComp
              colectionName={"Grammar_NounFunction"}
              colectionReaction={"Grammar_NounFunction_RC"}
              width={500}
            />
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
