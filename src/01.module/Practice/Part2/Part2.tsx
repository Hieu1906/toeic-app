import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { CommentComp } from "../../../00.common/00.components/Comment/CommentComp";
import styles from "./Part2.module.scss";
import { Footer } from "../../Footer/Footer";
interface part2State {}

interface part2Props {}

export class ParPart2 extends BaseComponent<part2Props, part2State> {
  constructor(props: part2Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.Part2Container}>
        <div className={styles.Part2Container__Content}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "#dc143c", fontSize: 36 }}>
              Luyện Nghe TOEIC Part 2 : Hỏi Đáp
            </h1>
            <img
              className={styles.Part2Container__Content__img}
              src={
                "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart2%2Fcach-lam-toeic-part-2.png?alt=media&token=ad6d6deb-459d-4757-83a3-bc494029beec"
              }
            />
          </div>
          <div className={styles.Part2Container__Content__introduce}>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Part 2 của đề&nbsp;thi TOEIC là một Phần Nghe&nbsp;(Listening) có
              tên gọi là Hỏi Đáp (Questions &amp; Responses).&nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Như bạn có thể đã biết qua bài viết{" "}
              <a href="https://tienganhmoingay.com/thong-tin-toeic/cau-truc-de-thi-toeic/">
                Cấu trúc đề thi TOEIC
              </a>
              , phần 2 sẽ diễn ra như sau:
            </p>
            <ol className={styles.Part2Container__Content__ul}>
              <li className={styles.Part2Container__Content__li}>
                Bạn nghe một câu hỏi hoặc một câu nói
              </li>
              <li className={styles.Part2Container__Content__li}>
                Tiếp theo, bạn sẽ nghe 3 câu nói tương ứng với 3&nbsp;lựa chọn
                A, B,&nbsp;C
              </li>
              <li className={styles.Part2Container__Content__li}>
                Bạn sẽ chọn lựa chọn mà bạn cảm thấy là câu trả lời phù hợp nhất
                với câu hỏi hoặc câu nói bạn nghe ở (1)
              </li>
            </ol>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Đây là phần thi được nhiều người{" "}
              <a href="https://tienganhmoingay.com/luyen-nghe-toeic/?r=luyen-nghe-toeic-part-2">
                luyện nghe TOEIC
              </a>{" "}
              thích vì mỗi câu hỏi đều khá ngắn và không đòi hỏi tập trung cao
              độ.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Tuy nhiên, Phần 2 chiếm đến 25&nbsp;câu trên tổng số 200 câu của
              đề thi TOEIC, một số lượng câu hỏi khá lớn. Để làm tốt 25&nbsp;câu
              này và giành được nhiều điểm nhất có thể,&nbsp;không có cách nào
              tốt hơn là tìm hiểu dạng đề (format đề) và trả lời cho từng dạng
              đề&nbsp;đúng không nào!
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Trong bài viết này, chúng ta sẽ cùng nhận diện 4 dạng câu hỏi
              thông dụng nhất&nbsp;trong Phần 2 của đề thi TOEIC và những câu
              trả lời phổ biến cho từng loại câu hỏi. Cuối cùng, bạn sẽ được
              củng cố những gì mình đã học qua 10&nbsp;bài tập luyện nghe TOEIC
              ngắn.
            </p>
            <p
              className={styles.Part2Container__Content__introduce__text_p}
              style={{ fontWeight: 700, fontSize: 20 }}
            >
              Bắt đầu nào!
            </p>
            <div className={styles.Part2Container__Content__tableOfContents}>
              <p className={styles.Part2Container__Content__introduce__text_p}>
                Mục lục:
              </p>
              <a href="#4-dang-cau-hoi">1. 4 dạng câu hỏi trong Part 2</a>
              <br></br>
              <a href="#wh">2. Câu hỏi Wh (Wh Questions)</a>
              <br></br>
              <a href="#yes-no">3. Câu hỏi Yes/No (Yes/No Questions)</a>
              <br></br>
              <a href="#tag">4. Câu hỏi đuôi (Tag Questions)</a>
              <br></br>
              <a href="#choice">5. Câu hỏi có lựa chọn (Choice Questions)</a>
              <br></br>
              <a href="#bai-tap">6. Bài tập ứng dụng</a>
              <br></br>
              <a href="#luyen-nghe">7. Hướng dẫn luyện nghe TOEIC</a>
            </div>

            <h2
              data-id="side-label-index-0"
              className={styles.Part2Container__Content__textGreen}
            >
              <a id="4-dang-cau-hoi"></a>1. 4 dạng câu hỏi trong Part 2 đề thi
              TOEIC
            </h2>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Ở mỗi câu trong Phần 2 này, đầu tiên bạn sẽ nghe một câu hỏi hoặc
              một câu nói. Nghe thì có vẻ hơi mông lung, nhưng thật ra câu hỏi ở
              phần 2 chỉ có một số dạng quen thuộc.&nbsp;Bạn chỉ cần làm quen
              với những dạng này là bạn đã đi được 50% chặng đường rồi.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Phần 2 của{" "}
              <a href="https://tienganhmoingay.com/de-thi-toeic/">
                đề thi TOEIC
              </a>{" "}
              có 4&nbsp;dạng câu hỏi như sau:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>Câu hỏi "Wh":</strong> những câu hỏi có "
                <a href="https://tienganhmoingay.com/ngu-phap-toeic/chu-de-sentences/">
                  từ hỏi
                </a>
                " như <strong>where</strong>, <strong>when</strong>,{" "}
                <strong>who</strong>, <strong>how</strong>, <strong>why</strong>
                .
                <ul className={styles.Part2Container__Content__ul}>
                  <li>Ví dụ: Where did you go earlier?</li>
                  <li>Dịch: Lúc nãy bạn đi đâu vậy?</li>
                </ul>
              </li>
              <li>
                <strong>Câu hỏi Yes/No:&nbsp;</strong>những&nbsp;câu hỏi mà
                người nghe có thể trả lời <strong>yes</strong> hoặc là{" "}
                <strong>no</strong>.
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    Ví dụ: Are you at home? - Yes, I am cooking in the kitchen.
                  </li>
                  <li>
                    Dịch: Bạn có ở nhà không? - Có, tôi đang nấu ăn trong bếp
                    đây.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Câu hỏi đuôi:</strong> những câu hỏi có đoạn đầu giống
                câu khẳng định nhưng cuối câu thì hỏi thêm "phải không?".
                <ul className={styles.Part2Container__Content__ul}>
                  <li>Ví dụ: You love coffee, don't you?</li>
                  <li>Dịch: Bạn thích cà phê, đúng không?</li>
                </ul>
              </li>
              <li>
                <strong>Câu hỏi có lựa chọn: </strong>những câu hỏi yêu cầu
                người nghe lựa chọn một thứ.
                <ul className={styles.Part2Container__Content__ul}>
                  <li>Ví dụ: Do you like the black dress or the red one?</li>
                  <li>Dịch: Bạn thích cái đầm đen hay đỏ?</li>
                </ul>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Bây giờ chúng ta sẽ "tấn công" từng dạng câu hỏi nhé!
            </p>
            <h2
              className={styles.Part2Container__Content__textGreen}
              data-id="side-label-index-1"
            >
              <a id="wh"></a>2. Câu hỏi "Wh"
            </h2>
            <img
              style={{ width: 500, height: 313 }}
              src="https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart2%2Fwh_questions.webp?alt=media&token=98d8b95b-eeaf-4738-9d9d-868fb2e75013"
            />
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Đối với dạng câu hỏi Wh, bạn sẽ nghe thấy các&nbsp;"từ hỏi" thường
              xuất hiện ở đầu câu&nbsp;như:
            </p>
            <ol className={styles.Part2Container__Content__ul}>
              <li>
                <strong>where =&nbsp;</strong>ở đâu
              </li>
              <li>
                <strong>when =&nbsp;</strong>khi nào
              </li>
              <li>
                <strong>who =&nbsp;</strong>ai
              </li>
              <li>
                <strong>why =&nbsp;</strong>tại&nbsp;sao
              </li>
              <li>
                <strong>how =&nbsp;</strong>như thế nào, bằng cách nào
              </li>
            </ol>
            <h3 className={styles.Part2Container__Content__textBlue}>
              <span style={{ fontSize: 24 }}>❶</span> Where = Ở đâu
            </h3>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Đây là dạng câu hỏi về nơi chốn.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Thông thường, câu trả lời cho câu hỏi này là một{" "}
              <a href="https://tienganhmoingay.com/ngu-phap-tieng-anh/chuc-nang-gioi-tu-trong-cau/">
                <strong>
                  <span style={{ color: "#FFA500" }}>giới từ</span>
                </strong>
              </a>{" "}
              +{" "}
              <span style={{ color: "#008080" }}>
                <strong>địa điểm</strong>
              </span>
              :
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li className={styles.Part2Container__Content__li}>
                <strong>Where </strong>does John live now?<br></br>
                John bây giờ sống <strong>ở đâu</strong>?
              </li>
              <li className={styles.Part2Container__Content__li}>
                <strong>
                  <span style={{ color: "#FFA500" }}>In</span>{" "}
                  <span style={{ color: "#008080" }}>New York</span>.<br></br>
                  <span style={{ color: "#FFA500" }}>Ở</span>{" "}
                  <span style={{ color: "#008080" }}>New York</span>.
                </strong>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Tuy vậy, đôi lúc câu trả lời chỉ nhắc tới{" "}
              <strong>
                <span style={{ color: "#008080" }}>địa điểm</span>
              </strong>
              &nbsp;mà không có{" "}
              <strong>
                <span style={{ color: "#FFA500" }}>giới từ</span>
              </strong>
              :
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li className={styles.Part2Container__Content__li}>
                <strong>Where </strong>can I buy a notebook?<br></br>
                Mình có thể mua một quyển tập <strong>ở đâu</strong>?
              </li>
              <li className={styles.Part2Container__Content__li}>
                Try the{" "}
                <span style={{ color: "#008080" }}>
                  <strong>convenience store</strong>
                </span>
                .<br></br>
                Hãy đến thử{" "}
                <span style={{ color: "#008080" }}>
                  <strong>cửa hàng tiện lợi</strong>
                </span>{" "}
                xem.
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Để chọn đúng được những câu như vậy, chúng ta cần hiểu nghĩa của
              câu.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Để&nbsp;dễ nhận diện câu trả lời đúng một cách tốt hơn&nbsp;hơn,
              bạn hãy học một số{" "}
              <a href="https://tienganhmoingay.com/ngu-phap-tieng-anh/chu-de-gioi-tu-don/">
                giới từ chỉ nơi chốn
              </a>{" "}
              quan trọng sau đây:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                Dùng <strong>at</strong>&nbsp;cho địa chỉ / nơi chốn cụ thể
                <ul className={styles.Part2Container__Content__ul}>
                  <li>at the bus stop = tại trạm xe buýt</li>
                  <li>at the front desk = tại bàn tiếp tân</li>
                  <li>
                    at 22 Cao Thang Street = tại địa chỉ 22 đường Cao Thắng
                  </li>
                </ul>
              </li>
              <li>
                Dùng <strong>on&nbsp;</strong>cho bề mặt
                <ul className={styles.Part2Container__Content__ul}>
                  <li>on the wall = trên tường</li>
                  <li>on the third floor = trên tầng 3</li>
                  <li>on Cao Thang Street = trên đường Cao Thắng</li>
                </ul>
              </li>
              <li>
                Dùng<strong> in&nbsp;</strong>cho một khu vực khép kín
                <ul className={styles.Part2Container__Content__ul}>
                  <li>in the box = trong hộp</li>
                  <li>in the garden = trong vườn</li>
                  <li>in London = ở (trong) Luân Đôn</li>
                </ul>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Ngoài ra có còn một số giới từ chỉ nơi chốn khác như:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>above </strong>= ở bên trên
              </li>
              <li>
                <strong>below </strong>= ở bên dưới
              </li>
              <li>
                <strong>under </strong>= dưới
              </li>
              <li>
                <strong>behind </strong>= sau
              </li>
              <li>
                <strong>in front of </strong>= trước
              </li>
              <li>
                <strong>between </strong>= giữa
              </li>
              <li>
                <strong>next to</strong> = ngay cạnh
              </li>
              <li>
                <strong>by </strong>= bên cạnh
              </li>
              <li>
                <strong>near </strong>= gần
              </li>
            </ul>
            <img
              width={400}
              height={258}
              src={
                "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart2%2Fgioi-tu-chi-noi-chon.png?alt=media&token=a7e65f20-9fcb-47e0-b850-181a6d7e99ce"
              }
            />
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h3 className={styles.Part2Container__Content__textBlue}>
              <span style={{ fontSize: 24 }}>❷</span> When = Khi nào
            </h3>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Đây là dạng câu hỏi về thời điểm.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Thông thường, câu trả lời cho câu hỏi này là một{" "}
              <strong>
                <span style={{ color: "#FFA500" }}>giới từ</span>
              </strong>{" "}
              +{" "}
              <span style={{ color: "#008000" }}>
                <strong>thời điểm </strong>
              </span>
              hoặc{" "}
              <strong>
                <span style={{ color: "#FFA500" }}>giới từ</span>
              </strong>{" "}
              +
              <strong>
                <span style={{ color: "#008000" }}>
                  <strong> </strong>
                </span>
                <span style={{ color: "#008000" }}>thời gian</span>
              </strong>
              :
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>When </strong>is&nbsp;the next flight to New York?
                <br></br>
                Chuyến bay tới New York tiếp theo là <strong>khi nào</strong>?
              </li>
              <li>
                <strong>
                  <span style={{ color: "#FFA500" }}>At</span>{" "}
                  <span style={{ color: "#008000" }}>2:00 PM</span>.<br></br>
                  <span style={{ color: "#FFA500" }}>Vào lúc</span>{" "}
                  <span style={{ color: "#008000" }}>2 giờ chiều</span>.
                </strong>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>When </strong>will I get my blood test results?<br></br>
                <strong>Khi nào </strong>tôi sẽ nhận được kết quả xét nghiệm
                máu?
              </li>
              <li>
                <strong>
                  <span style={{ color: "#FFA500" }}>In </span>
                  <span style={{ color: "#FFA500" }}>two weeks</span>.<br></br>
                  <span style={{ color: "#008000" }}>2 tuần</span>{" "}
                  <span style={{ color: "#FFA500" }}>tới</span>.&nbsp;
                </strong>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Tuy vậy, đôi lúc câu trả lời chỉ nhắc tới{" "}
              <strong>
                <span style={{ color: "#008000" }}>thời điểm</span>
              </strong>
              &nbsp;mà không có{" "}
              <strong>
                <span style={{ color: "#FFA500" }}>giới từ</span>
              </strong>
              :
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>When </strong>did you arrive in Hanoi?<br></br>
                Bạn đến Hà Nội <strong>lúc nào</strong> vậy?
              </li>
              <li>
                <strong>
                  <span style={{ color: "#008000" }}>Last Friday.</span>
                  <br></br>
                  <span style={{ color: "#008000" }}>Thứ sáu tuần trước.</span>
                </strong>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Để chọn đúng được những câu như vậy, chúng ta cần hiểu nghĩa của
              câu.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Để&nbsp;dễ nhận diện câu trả lời đúng hơn, bạn hãy học một số giới
              từ về thời gian&nbsp;quan trọng sau đây:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>
                  in +{" "}
                  <span style={{ color: "#008000" }}>
                    thời điểm (tháng / năm)
                  </span>
                  &nbsp;= vào&nbsp;
                  <span style={{ color: "#008000" }}>
                    thời điểm (tháng / năm)
                  </span>
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>in July = vào tháng 7</li>
                  <li>in 2017 = vào&nbsp;năm 2017</li>
                  <li>in the past = trong quá khứ</li>
                </ul>
              </li>
              <li>
                <strong>
                  on +
                  <span style={{ color: "#008000" }}>
                    {" "}
                    thời điểm (ngày / thứ)
                  </span>
                  &nbsp;= vào{" "}
                  <span style={{ color: "#008000" }}>
                    thời điểm (ngày / thứ)
                  </span>
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <span style={{ color: "#008000" }}>​</span>on Monday = vào
                    thứ hai
                  </li>
                  <li>on December 2nd = vào ngày 2 tháng 12</li>
                  <li>on her birthday = vào ngày sinh nhật của cô ấy</li>
                </ul>
              </li>
              <li>
                <strong>
                  at + <span style={{ color: "#008000" }}>thời điểm</span> = vào{" "}
                  <span style={{ color: "#008000" }}>
                    thời điểm xác định (như giờ đồng hồ&nbsp;hoặc thời điểm cụ
                    thể như giờ trưa)
                  </span>
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>at 2 PM = vào lúc 2 giờ chiều</li>
                  <li>at noon = vào giờ trưa</li>
                  <li>at&nbsp;sunrise = vào lúc mặt trời mọc</li>
                </ul>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Ngoài ra có còn một số giới từ chỉ thời gian&nbsp;khác như:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>
                  before + <span style={{ color: "#008000" }}>thời điểm </span>=
                  trước <span style={{ color: "#008000" }}>thời điểm</span>
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>
                      <span style={{ color: "#008000" }}>​</span>before{" "}
                      <span style={{ color: "#008000" }}>7 PM&nbsp;</span>=
                      trước <span style={{ color: "#008000" }}>7 giờ tối</span>
                    </strong>
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  after + <span style={{ color: "#008000" }}>thời điểm </span>=
                  sau<span style={{ color: "#008000" }}> thời điểm</span>
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>
                      <span style={{ color: "#008000" }}>​</span>after&nbsp;
                      <span style={{ color: "#008000" }}>Monday&nbsp;</span>=
                      sau<span style={{ color: "#008000" }}> thứ hai</span>
                    </strong>
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  by + <span style={{ color: "#008000" }}>thời điểm </span>=
                  trước <span style={{ color: "#008000" }}>thời điểm</span>
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>
                      <span style={{ color: "#008000" }}>​</span>by{" "}
                      <span style={{ color: "#008000" }}>next week&nbsp;</span>=
                      trước <span style={{ color: "#008000" }}>tuần sau</span>
                    </strong>
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  in +{" "}
                  <span style={{ color: "#008000" }}>
                    khoảng&nbsp;thời gian
                  </span>{" "}
                  = sau{" "}
                  <span style={{ color: "#008000" }}>khoảng thời gian</span>
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>
                      <span style={{ color: "#008000" }}>​</span>in{" "}
                      <a color="#008000">two days</a>&nbsp;= sau{" "}
                      <span style={{ color: "#008000" }}>2 ngày</span>
                      <span style={{ color: "#008000" }}> </span>nữa
                    </strong>
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <span style={{ color: "#008000" }}>khoảng thời gian</span> +
                  ago ={" "}
                  <span style={{ color: "#008000" }}>khoảng thời gian</span>{" "}
                  trước
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>
                      <a color="#008000">five years</a> ago ={" "}
                      <span style={{ color: "#008000" }}>5 năm</span>&nbsp;trước
                    </strong>
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  between +{" "}
                  <span style={{ color: "#008000" }}>khoảng thời gian</span> =
                  trong{" "}
                  <span style={{ color: "#008000" }}>khoảng thời gian</span>
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>
                      between&nbsp;<a color="#008000">July and December</a>
                      &nbsp;= trong{" "}
                      <span style={{ color: "#008000" }}>
                        khoảng từ tháng 7 đến tháng 12
                      </span>
                    </strong>
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  during +{" "}
                  <span style={{ color: "#008000" }}>khoảng thời gian</span> =
                  trong suốt&nbsp;
                  <span style={{ color: "#008000" }}>khoảng thời gian</span>
                </strong>
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>
                      <span style={{ color: "#008000" }}>​</span>during&nbsp;
                      <span style={{ color: "#008000" }}>my childhood</span> =
                      trong suốt&nbsp;
                      <span style={{ color: "#008000" }}>tuổi thơ của tôi</span>
                    </strong>
                  </li>
                </ul>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h3 className={styles.Part2Container__Content__textBlue}>
              <span style={{ fontSize: 24 }}>❸</span>&nbsp;Who = Ai
            </h3>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Đây là dạng câu hỏi về người.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Thông thường, câu trả lời cho câu hỏi này là tên một người.
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>Who </strong>is the new manager?<br></br>
                Người quản lý mới là <strong>ai </strong>vậy?
              </li>
              <li>
                <strong>
                  Ms&nbsp;Roberts.<br></br>
                  Cô Roberts.
                </strong>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Bên cạnh đó, câu trả lời cũng có thể là nghề nghiệp hoặc chức vụ
              của một người.
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>Who </strong>were you talking to?<br></br>
                Bạn đã nói chuyện với <strong>ai </strong>vậy?
              </li>
              <li>
                <strong>
                  My boss.<br></br>
                  Sếp của tôi.
                </strong>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h3 className={styles.Part2Container__Content__textBlue}>
              <span style={{ fontSize: 24 }}>❹</span>&nbsp;Why - Vì sao
            </h3>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Đây là dạng câu hỏi về lý do.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Câu trả lời cho câu hỏi này có thể&nbsp;có dạng&nbsp;
              <strong>
                <span style={{ color: "#FFA500" }}>because </span>+{" "}
                <span style={{ color: "#008080" }}>lý do</span>
              </strong>
              .
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>Why </strong>did Mr. Smiths call a meeting today?
                <br></br>
                <strong>Tại sao</strong> anh Smiths muốn họp hôm nay?
              </li>
              <li>
                <span style={{ color: "#FFA500" }}>
                  <strong>Because </strong>
                </span>
                <strong>
                  <span style={{ color: "#008080" }}>
                    we have to discuss the budget
                  </span>
                </strong>
                .<br></br>
                <span style={{ color: "#FFA500" }}>
                  <strong>Vì </strong>
                </span>
                <span style={{ color: "#008080" }}>
                  <strong>chúng ta cần thảo luận về ngân quỹ.</strong>
                </span>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Tuy nhiên, thông thường sẽ không có{" "}
              <span style={{ color: "#FFA500" }}>
                <strong>because </strong>
              </span>
              mà người trả lời chỉ đề cập{" "}
              <strong>
                <span style={{ color: "#008080" }}>lý do</span>
              </strong>{" "}
              thôi.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Tuy nhiên, thông thường sẽ không có{" "}
              <span style={{ color: "#FFA500" }}>
                <strong>because </strong>
              </span>
              mà người trả lời chỉ đề cập{" "}
              <strong>
                <span style={{ color: "#008080" }}>lý do</span>
              </strong>{" "}
              thôi.
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>Why </strong>did he leave early?<br></br>
                Sao anh ấy về sớm vậy?
              </li>
              <li>
                <span style={{ color: "#008080" }}>
                  <strong>
                    His son got into an accident.<br></br>
                    Con trai anh ấy gặp tai nạn.
                  </strong>
                </span>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h3 className={styles.Part2Container__Content__textBlue}>
              <span style={{ fontSize: 24 }}>❺</span> How
            </h3>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Đây là dạng câu hỏi về cách thức của một hành động nào đó.
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                How does this photocopy machine work? = Máy photocopy này hoạt
                động như thế nào?
              </li>
              <li>
                How do you usually go to school? = Bạn thường đến trường bằng
                cách nào?
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Tuy nhiên, thông thường thì&nbsp;câu hỏi có từ{" "}
              <strong>how </strong>trong đề thi TOEIC rất đa dạng về mặt
              ý&nbsp;nghĩa bởi vì <strong>how </strong>thường kết hợp với một
              tính từ khác để tạo ra ý nghĩa mới. Sau đây là một số cụm từ cực
              kỳ&nbsp;thông dụng để bạn ghi nhớ:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                How much = Bao nhiêu
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>How much</strong> is a dozen roses? = Một tá hoa
                    hồng thì<strong> bao nhiêu</strong> tiền?
                  </li>
                </ul>
              </li>
              <li>
                How many = Bao nhiêu
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>How many</strong> people went to the party? ={" "}
                    <strong>Bao nhiêu</strong> người đã đến bữa tiệc?
                  </li>
                </ul>
              </li>
              <li>
                How long = Trong bao lâu
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>How long</strong> does the bus ride take? =&nbsp;Một
                    lượt xe buýt mất <strong>bao lâu</strong>?
                  </li>
                </ul>
              </li>
              <li>
                How often = Bao lâu một lần
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>How often</strong> does he play tennis? =&nbsp;Anh
                    ta chơi quần vợt <strong>bao lâu một lần</strong>?
                  </li>
                </ul>
              </li>
              <li>
                How old = Bao nhiêu tuổi
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>How old</strong> is her sister? = Em gái cô ấy{" "}
                    <strong>bao nhiêu tuổi</strong>?
                  </li>
                </ul>
              </li>
              <li>
                How far = Bao xa
                <ul className={styles.Part2Container__Content__ul}>
                  <li>
                    <strong>How far </strong>is it from Manchester to London? =
                    Từ Manchester đến Luân Đôn thì <strong>bao xa</strong>?
                  </li>
                </ul>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Trong dạng câu hỏi có từ để hỏi WH - Questions, bạn sẽ bắt
              gặp&nbsp;một số câu hỏi khó và bẫy thí sinh. Hãy&nbsp;tham khảo
              thêm các&nbsp;dạng câu hỏi WH - Questions của&nbsp;Part 2 TOEIC dễ
              sai nhất có&nbsp;giải thích chi tiết{" "}
              <a
                href="https://tienganhmoingay.com/luyen-nghe-toeic/toeic-p2-dang-cau-hoi-kho-bay/#wh-questions"
                target="_blank"
              >
                tại đây
              </a>
              .
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h2 data-id="side-label-index-7">
              <a id="yes-no"></a>3. Câu hỏi Yes/No
            </h2>
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart2%2Fyes_no_questions.webp?alt=media&token=ad043189-ffd4-4101-b5cc-af877b5476be"
              }
              width={500}
              height={313}
            />
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Đối với dạng câu hỏi Yes/No, bạn sẽ nghe thấy các trợ động từ hoặc{" "}
              <a href="https://tienganhmoingay.com/ngu-phap-toeic/chu-de-verbs/">
                động từ khiếm khuyết
              </a>{" "}
              đứng ở đầu câu.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Các trợ động từ như <strong>do, have, will</strong> đứng đầu câu
              trong các ví dụ sau:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>Do </strong>you know him? = Bạn có biết anh ấy không?
              </li>
              <li>
                <strong>Did </strong>the children go to school? = Mấy đứa nhỏ có
                đi hông không?
              </li>
              <li>
                <strong>Has </strong>she sent the email? = Cô ấy đã gửi email
                chưa?
              </li>
              <li>
                <strong>Will </strong>you attend the meeting? = Bạn sẽ tham dự
                buổi họp chứ?
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Các động từ khiếm khuyết như <strong>can, should, must</strong>{" "}
              đứng đầu câu trong các ví dụ sau:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>Can </strong>you help me? = Bạn giúp tôi được không?
              </li>
              <li>
                <strong>Should </strong>I call her tonight? Tối nay tôi có nên
                gọi cho cô ấy không?
              </li>
              <li>
                <strong>Must </strong>I do this? = Tôi có phải bắt buộc làm cái
                này không?
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Các câu hỏi ở dạng này thường gây khó khăn cho người{" "}
              <a
                href="https://tienganhmoingay.com/luyen-thi-toeic/"
                target="_blank"
              >
                luyện thi TOEIC
              </a>{" "}
              vì trợ động từ và động từ khiếm khuyết đứng ở đầu câu thường không
              được nhấn âm mà bị đọc lướt qua rất nhanh. Vì thế bạn nên chú ý
              các từ này khi luyện nghe Part 2 nhé.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Câu trả lời cho câu hỏi này có thể&nbsp;có dạng&nbsp;
              <strong>
                <span style={{ color: "#FFA500" }}>Yes/No&nbsp;</span>+{" "}
                <a color="#008080">nói thêm</a>
              </strong>
              .
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>Do </strong>you know him?<br></br>
                Bạn có biết anh ấy không?
              </li>
              <li>
                <strong>
                  <span style={{ color: "#FFA500" }}>Yes</span>,{" "}
                  <span style={{ color: "#008080" }}>he's my cousin</span>.
                  <br></br>
                  <span style={{ color: "#FFA500" }}>Có</span>,{" "}
                  <span style={{ color: "#008080" }}>
                    anh ấy là anh họ của tôi
                  </span>
                  .
                </strong>
              </li>
            </ul>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                <strong>Should </strong>I call her tonight?<br></br>
                Tối nay tôi có nên gọi cho cô ấy không?
              </li>
              <li>
                <strong>
                  <span style={{ color: "#FFA500" }}>No</span>,{" "}
                  <span style={{ color: "#008080" }}>you shouldn't</span>.
                  <br></br>
                  <span style={{ color: "#FFA500" }}>Không</span>,{" "}
                  <span style={{ color: "#008080" }}>bạn không nên</span>.
                </strong>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Tuy nhiên, thông thường câu trả lời sẽ không có{" "}
              <span style={{ color: "#FFA500" }}>
                <strong>Yes/No&nbsp;</strong>
              </span>
              mà người trả lời chỉ thể hiện ý <strong>Yes/No</strong> một cách
              gián tiếp.
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                Did you get my letter?<br></br>
                Bạn đã nhận được thư của tôi chưa?
              </li>
              <li>
                I received it last night.<br></br>
                Tôi nhận được tối hôm qua.
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                Have you met the new boss yet?<br></br>
                Bạn đã gặp sếp mới chưa?
              </li>
              <li>
                I first met her at the company's party.<br></br>
                Tôi gặp cô ấy lần đầu tại buổi tiệc công ty.
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Thông thường đáp án cho&nbsp;câu hỏi Yes/No sẽ bị đặt bẫy hoặc
              không trực tiếp trả lời chính xác câu hỏi&nbsp;làm các&nbsp;bạn dễ
              nhầm lẫn.&nbsp;Để trả lời dạng câu hỏi này tốt hơn, bạn
              xem&nbsp;hướng dẫn chi tiết trả lời cho&nbsp;một số&nbsp;câu hỏi
              Yes/No của&nbsp;Part 2 TOEIC dễ sai nhất&nbsp;
              <a
                href="https://tienganhmoingay.com/luyen-nghe-toeic/toeic-p2-dang-cau-hoi-kho-bay/#yes-no"
                target="_blank"
              >
                tại đây
              </a>
              &nbsp;nhé.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h2
              className={styles.Part2Container__Content__textGreen}
              data-id="side-label-index-8"
            >
              <a id="tag"></a>4. Câu hỏi đuôi
            </h2>
            <img
              width={500}
              height={313}
              src={
                "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart2%2Ftag_questions.webp?alt=media&token=332371ba-d967-4710-9fc0-66ccbb78e8ac"
              }
            />
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Câu hỏi đuôi có bản chất giống như câu hỏi Yes/No, nên cách trả
              lời cũng tương tự như câu hỏi Yes/No, quá&nbsp;khỏe!
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Trả lời có Yes/No:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                You know him, <strong>don't you?</strong>
                <br></br>
                Bạn có biết anh ấy, <strong>đúng không?</strong>
              </li>
              <li>
                <strong>
                  <span style={{ color: "#FFA500" }}>Yes</span>,{" "}
                  <span style={{ color: "#008080" }}>he's my cousin</span>.
                  <br></br>
                  <a style={{ color: "#FFA500" }}>Đúng rồi</a>,{" "}
                  <span style={{ color: "#008080" }}>
                    anh ấy là anh họ của tôi
                  </span>
                  .
                </strong>
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Trả lời gián tiếp không có Yes/No:
            </p>
            <ul className={styles.Part2Container__Content__ul}>
              <li>
                You got my letter, <strong>didn't you?</strong>
                <br></br>
                Bạn đã nhận được thư của tôi rồi <strong>đúng không?</strong>
              </li>
              <li>
                I received it last night.<br></br>
                Tôi nhận được tối hôm qua.
              </li>
            </ul>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Để trả lời dạng câu hỏi đuôi&nbsp;tốt hơn, bạn xem&nbsp;hướng dẫn
              chi tiết cách trả lời cho&nbsp;một số&nbsp;câu&nbsp;dễ sai
              nhất&nbsp;
              <a
                style={{ fontSize: 18 }}
                href="https://tienganhmoingay.com/luyen-nghe-toeic/toeic-p2-dang-cau-hoi-kho-bay/#tag-questions"
                target="_blank"
              >
                tại đây
              </a>
              &nbsp;nhé.
            </p>
            <h2
              data-id="side-label-index-7"
              className={styles.Part2Container__Content__textGreen}
            >
              <a id="bai-tap"></a>3. Bài tập luyện nghe Part 2
            </h2>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Như vậy là bạn vừa học xong cách chọn đáp án cho 2 loại hình ảnh
              phổ biến nhất&nbsp;trong Part 1&nbsp;của đề thi TOEIC&nbsp;rồi.
            </p>
            <p className={styles.Part2Container__Content__introduce__text_p}>
              Bây giờ bạn&nbsp;hãy thử sức với{" "}
              <strong>10&nbsp;bài tập Part 2</strong>&nbsp;ngay dưới&nbsp;đây
              nhé:&nbsp;
            </p>
            <p>
              <a
                className={styles.Part2Container__Content__button}
                title="Làm bài tập Phần 2"
              >
                Làm bài tập Part 2
              </a>
            </p>
          </div>
          <CommentComp
          colectionName={"CommentPart2"}
          colectionReaction={"CommentReactionPart2"}
        />
        </div>
        <Footer />
      </div>
    );
  }
}
