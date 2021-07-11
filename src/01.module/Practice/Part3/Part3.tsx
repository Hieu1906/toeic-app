import ReactAudioPlayer from "react-audio-player";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import styles from "./Part3.module.scss";
import { CommentComp } from "../../../00.common/00.components/Comment/CommentComp";
import { Footer } from "../../Footer/Footer";
interface part3State {}

interface part3Props {}

export class ParPart3 extends BaseComponent<part3Props, part3State> {
  constructor(props: part3Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.Part3Container}>
        <div className={styles.Part3Container__Content}>
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
              Mẹo thi TOEIC Part 3 : Đoạn Hội Thoại
            </h1>
            <p className={styles.Part3Container__Content__introduce__text_p}>
              Part 3&nbsp;- Đoạn hội thoại&nbsp;là một phần thi khá "khó nhằn"
              đối với nhiều người{" "}
              <a
                href="https://tienganhmoingay.com/luyen-thi-toeic/"
                target="_blank"
              >
                luyện thi TOEIC
              </a>{" "}
              vì đoạn audio khá dài, và còn có 2-3 người khác nhau cùng nói
              chuyện nữa. Vậy làm sao để làm phần này vừa nhanh vừa chính xác?
              Hãy cùng tìm hiểu các mẹo làm bài thi TOEIC Part 3 trong bài viết
              này nhé!
            </p>
            <p className={styles.Part3Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p style={{ textAlign: "center" }}>
              (nhấn vào hình để tìm hiểu thêm về mẹo và xem ví dụ)
            </p>
            <div className={styles.Part3Container__Content__tableOfContents}>
              <div
                className={styles.Part3Container__Content__tableOfContents__row}
              >
                <a
                  href="#nhan-vat"
                  className={
                    styles.Part3Container__Content__tableOfContents__row__item
                  }
                >
                  <img
                    height={360}
                    width={360}
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart3%2Fmeo_toeic_phan_3_1.webp?alt=media&token=29cd9e4d-885f-415c-9721-3a26b08fefe9"
                    }
                  />
                </a>
                <a
                  href="#doc-truoc-cau-hoi"
                  className={
                    styles.Part3Container__Content__tableOfContents__row__item
                  }
                >
                  <img
                    height={360}
                    width={360}
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart3%2Fmeo_toeic_phan_3_2.webp?alt=media&token=0fdf72b8-c1cb-4706-a556-0cca31c1c352"
                    }
                  />
                </a>
              </div>
              <div
                className={styles.Part3Container__Content__tableOfContents__row}
              >
                <a
                  href="#tranh-bay"
                  className={
                    styles.Part3Container__Content__tableOfContents__row__item
                  }
                >
                  <img
                    height={360}
                    width={360}
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart3%2Fmeo_toeic_phan_3_3.webp?alt=media&token=f24ca2fd-cd78-4a44-8675-02cbe4ce7dff"
                    }
                  />
                </a>
                <a
                  href="#suy-luan"
                  className={
                    styles.Part3Container__Content__tableOfContents__row__item
                  }
                >
                  <img
                    height={360}
                    width={360}
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart3%2Fmeo_toeic_phan_3_4.webp?alt=media&token=7a8ab265-7bbd-466b-bd73-817b2e381c01"
                    }
                  />
                </a>
              </div>
              <h2
                data-id="side-label-index-0"
                className={styles.Part3Container__Content__textGreen}
              >
                <a id="nhan-vat"></a>Mẹo thi TOEIC #1: Theo dõi nội dung cuộc
                hội thoại theo từng nhân vật&nbsp;trong đoạn hội thoại
              </h2>
              <h3
                data-id="side-label-index-1"
                className={styles.Part3Container__Content__textBlue}
              >
                Bạn thực hiện mẹo này như thế nào?
              </h3>
              <h4
                className={styles.Part3Container__Content__h4}
                data-id="side-label-index-2"
              >
                <br></br>
                <strong>Đối với cuộc hội thoại có 2 nhân vật</strong>
              </h4>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Cuộc đối thoại là giữa 1 nam và 1 nữ. Do đó, khi nhớ ý thì cố
                nhớ luôn cả người nói là ai. Một cách để dễ nhớ ý hơn là tự hỏi
                mình là: người đàn ông hay phụ nữ đang ở vai trò nào, người hỏi
                hay người đáp, nếu hỏi thì hỏi gì, đáp thì có thêm ý kiến gì
                không.
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Ban đầu mới tập nghe phần 3 bạn nên tập ghi chú lại nội dung
                bằng cách kẻ một đường thẳng giữa trang giấy và phân bên trái là
                những gì người nam nói, bên phải là những gì người nữ nói, hoặc
                ngược lại. sau đó tập trung nghe và ghi lại những điều từng
                người nói để có thể vừa hiểu nội dung câu chuyện, vừa nắm bắt
                được một ý nào đó là do người nam hay người nữ nói.
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Một khi bạn đã nắm được khái quát cả hai nhân vật của chúng ta
                bàn luận vấn đề gì thì những câu hỏi về cuộc hội thoại diễn ra ở
                đâu hoặc đoạn hội thoại nói về vấn đề gì&nbsp;sẽ chẳng còn là
                vấn đề to tát&nbsp;cho bạn.
              </p>
              <h4>&nbsp;</h4>
              <h4 data-id="side-label-index-3">
                <strong>Đối với cuộc hội thoại có 3 nhân vật</strong>
              </h4>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Điểm khác biệt ở đây&nbsp;chỉ là đoạn hội thoại loại này có 3
                người nói chuyện (2 nam 1 nữ&nbsp;<em>hoặc&nbsp;</em>2 nữ&nbsp;1
                nam), thay vì 2 người (1 nam 1 nữ), còn lại cách thức ra câu hỏi
                vẫn không có gì thay đổi.&nbsp;Vì vậy, chúng ta chỉ cần làm
                giống như cách bạn làm các bài đọc có 2 người nói chuyện.&nbsp;
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Bài tập loại này cũng có gây khó khăn&nbsp;một chút: sẽ có lúc 2
                người nam (hoặc 2 người nữ) nói 2 câu&nbsp;liên tiếp, nên nếu
                bạn không nhận ra được 2 giọng khác nhau thì có khả
                năng&nbsp;lầm tưởng chỉ có 1 người nói. Vì vậy, bạn nên chú ý
                nghe và&nbsp;luyện tập phân biệt giọng nói của người nói.
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Thông thường thì&nbsp;mỗi&nbsp;người nói một&nbsp;giọng khác
                nhau (giọng Anh, giọng Mỹ, giọng Úc, giọng Canada), vì vậy cách
                tốt nhất để phân biệt giọng của 3 người đó là luyện&nbsp;tập
                nghe các giọng khác nhau&nbsp;cho quen.&nbsp;
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                <br></br>
                <strong>Video hướng dẫn Mẹo số 1:</strong>
              </p>
              <p style={{ textAlign: "center" }}>
                <iframe
                  allowFullScreen
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  height="315"
                  src="https://www.youtube.com/embed/lQlpCyV2TQU?rel=0&amp;controls=1&amp;modestbranding=1&amp;showinfo=1"
                  width="560"
                ></iframe>
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                <em>Ví dụ:</em>
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Bạn sẽ nghe câu hỏi:
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                <strong>
                  Q: What does&nbsp;<u>the woman</u>&nbsp;ask for? → Người phụ
                  nữ yêu cầu gì?
                </strong>
                <br></br>
                A.&nbsp;A larger office → Văn phòng lớn<br></br>
                B.&nbsp;A revised contract → Bản hợp đồng chỉnh sửa<br></br>
                C.&nbsp;More time to make a decision → Nhiều thời gian hơn để ra
                quyết định<br></br>
                D.&nbsp;Additional staff to complete a project → Thêm nhân viên
                để hoàn thành dự án
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Nếu phân biệt được ai nói gì thì việc từ đó suy ra ý cũng đỡ vất
                vả hơn.
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Bài tập ứng dụng
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Giờ thì bạn hãy thử&nbsp;ứng dụng mẹo trên vào bài tập sau nhé:
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                1. Bạn nghe:&nbsp;
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                <ReactAudioPlayer
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart3%2F41_43.mp3?alt=media&token=5242e235-4998-4d93-8c53-6c51f642407c"
                  }
                  autoPlay={false}
                  controls
                />
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Câu hỏi
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                What time will the woman leave?&nbsp;<br></br>
                A. 4:00&nbsp;<br></br>
                B. 5:00&nbsp;<br></br>
                C. 5:30&nbsp;<br></br>
                D. 7:00
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Where will the woman go?&nbsp;<br></br>
                A. To the train station&nbsp;<br></br>
                B. To the airport&nbsp;<br></br>
                C. To the office&nbsp;<br></br>
                D. To the bus station&nbsp;
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                What does the man give the woman?&nbsp;<br></br>
                A. A toothbrush&nbsp;<br></br>
                B. A book<br></br>
                C. Some newspapers<br></br>
                D. Some writing paper
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                2. Bạn hãy điền những gì bạn&nbsp;vào đây:
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  What does the man give the woman?&nbsp;<br></br>
                  A. A toothbrush&nbsp;<br></br>
                  B. A book<br></br>
                  C. Some newspapers<br></br>
                  D. Some writing paper
                </p>
              </p>
              <div id="meo-1">
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  4. Đáp án đúng là: 1A, 2B, 3C&nbsp;
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  5. Dịch câu hỏi và đáp án:
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  What time will the woman leave? →&nbsp;Người phụ nữ sẽ rời
                  khỏi vào lúc mấy giờ?<br></br>
                  A. 4:00 →&nbsp;4:00<br></br>
                  B. 5:00 →&nbsp;5:00&nbsp;<br></br>
                  C. 5:30 →&nbsp;5:30&nbsp;<br></br>
                  D. 7:00 →&nbsp;7:00
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Where will the woman go? → Người phụ nữ sẽ đi đâu?<br></br>
                  A. To the train station → Đến ga xe lửa.<br></br>
                  B. To the airport → Đến sân bay.<br></br>
                  C. To the office → Đến ăn phòng.&nbsp;<br></br>
                  D. To the bus station → Đến ga xe buýt.
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  What does the man give the woman? → Người đàn ông đưa người
                  phụ nữ&nbsp;cái gì?<br></br>
                  A. A toothbrush → 1 cái bản chải đánh răng.<br></br>
                  B. A book → 1 quyển sách.<br></br>
                  C. Some newspapers → 1 vài tờ báo.<br></br>
                  D. Some writing paper → Giấy viết.
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  6. Phần ghi chú&nbsp;của bạn về từng lời nói của nhân
                  vật&nbsp;có giúp ích cho bạn trong việc trả lời những câu hỏi
                  trên&nbsp;không?&nbsp;
                </p>
                <h2
                  data-id="side-label-index-4"
                  className={styles.Part3Container__Content__textGreen}
                >
                  <a id="doc-truoc-cau-hoi"></a>Mẹo thi TOEIC #2: Đọc trước câu
                  hỏi trước khi đoạn audio bắt đầu để có thể&nbsp;hình dung đoạn
                  hội thoại đang nói về cái gì.
                </h2>
                <h3
                  data-id="side-label-index-5"
                  className={styles.Part3Container__Content__textBlue}
                >
                  Bạn thực hiện mẹo này như thế nào?
                </h3>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Bạn có đủ thời gian để đọc trước các câu hỏi để có thể dự đoán
                  nội dung của đoạn hội thoại và biết trước mình cần chú ý đến
                  những chi tiết nào trong đoạn hội thoại&nbsp;bằng cách làm như
                  sau:
                </p>
              </div>
              <table className={styles.Part3Container__Content__table}>
                <thead>
                  <tr>
                    <th scope="col">Thời gian</th>
                    <th scope="col">Bạn làm gì?</th>
                    <th scope="col">Kết quả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Đoạn băng đọc hướng dẫn cách làm bài Part 3.</td>
                    <td>
                      Bạn đọc 3 câu hỏi trắc nghiệm của đoạn hội thoại đầu tiên
                      của Part 3.
                    </td>
                    <td>
                      Việc đọc trước câu hỏi giúp bạn dự đoán được nội dung của
                      đoạn hội thoại và biết mình cần chú ý đến những chi tiết
                      nào trong đoạn hội thoại.
                    </td>
                  </tr>
                  <tr>
                    <td>Đoạn băng đọc đoạn hội thoại.</td>
                    <td>
                      Bạn tập trung nghe đoạn hội thoại và đánh trắc nghiệm vào
                      Answer Sheet.
                    </td>
                    <td>
                      Bạn làm xong đoạn hội thoại này một cách dễ dàng hơn nhờ
                      đã đọc trước câu hỏi.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Đoạn băng đọc từng câu hỏi trắc nghiệm của đoạn hội thoại.
                    </td>
                    <td>
                      Bạn đọc 3 câu hỏi trắc nghiệm của đoạn hội thoại tiếp
                      theo.
                    </td>
                    <td>
                      Việc đọc trước câu hỏi giúp bạn dự đoán được nội dung của
                      đoạn hội thoại và biết mình cần chú ý đến những chi tiết
                      nào trong đoạn hội thoại.
                    </td>
                  </tr>
                  <tr>
                    <td>Đoạn băng đọc đoạn hội thoại tiếp theo.</td>
                    <td>
                      Bạn tập trung nghe đoạn hội thoại và đánh trắc nghiệm vào
                      Answer Sheet.
                    </td>
                    <td>
                      Bạn làm xong đoạn hội thoại này một cách dễ dàng hơn nhờ
                      đã đọc trước câu hỏi.
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                và cứ làm&nbsp;như vậy cho đến hết Part 3!
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                &nbsp;
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Cách đọc trước câu hỏi:
              </p>
              <ul className={styles.Part3Container__Content__ul}>
                <li>
                  <p
                    className={
                      styles.Part3Container__Content__introduce__text_p
                    }
                  >
                    <strong>Đọc hiểu&nbsp;nghĩa của các câu hỏi:</strong>
                    <br></br>
                    Bạn có thể xem thêm{" "}
                    <a href="https://tienganhmoingay.com/luyen-nghe-toeic/luyen-nghe-toeic-part-3/">
                      Cách làm&nbsp;3 loại câu hỏi trong Part 3
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <p
                    className={
                      styles.Part3Container__Content__introduce__text_p
                    }
                  >
                    <strong>
                      Hình dung xem nội dung của đoạn hội thoại sắp tới hướng
                      đến điều gì và&nbsp;diễn ra ở đâu
                    </strong>
                    :<br></br>
                    Bạn hãy xem tiếp hướng dẫn cách làm qua ví dụ dưới đây nhé!
                  </p>
                </li>
              </ul>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                <strong>Video hướng dẫn Mẹo số 2:</strong>
              </p>
              <p style={{ textAlign: "center" }}>
                <iframe
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  height="315"
                  src="https://www.youtube.com/embed/sHq7w34kkBA?rel=0&amp;controls=1&amp;modestbranding=1&amp;showinfo=1"
                  width="560"
                ></iframe>
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                <em>Ví dụ:</em>
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Bạn đọc câu hỏi
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                How much money does the man need? → Người đàn ông cần bao nhiêu
                tiền?<br></br>
                A. Fourteen dollars → 14 đô.<br></br>
                B. Fifteen dollars → 15 đô.&nbsp;<br></br>
                C. Forty dollars → 40 đô.<br></br>
                D. Fifty dollars → 50 đô.
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                What does he need the money for? → Anh ta cần tiền để làm gì?
                <br></br>
                A. To buy lunch → Mua bữa ăn trưa.<br></br>
                B. To pay a sales tax → Để trả thuế doanh thu.<br></br>
                C. To pay his taxi fare → Để trả tiền taxi.<br></br>
                D. To buy some reading material → Để mua tài liệu đọc tham khảo.
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                When does the man say he will pay the money back? → Người đàn
                ông nói khi nào anh ta sẽ trả tiền lại?<br></br>
                A. This afternoon → Chiều nay.<br></br>
                B. Tomorrow → Ngày mai.<br></br>
                C. The day after tomorrow → Ngày mốt.<br></br>
                D. Next week → Tuần sau.
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Dựa vào 3 câu hỏi trên chúng ta có thể đoán rằng đoạn hội thoại
                sắp diễn ra sẽ liên quan đến tiền bạc, và cụ thể hơn là người
                đàn ông sẽ mượn tiền người phụ nữ. Nắm được những yếu tố trên sẽ
                giúp chúng ta dễ dàng nghe được các ý chính cần để chọn đáp án
                cho các câu hỏi .
              </p>
              <h3
                data-id="side-label-index-6"
                className={styles.Part3Container__Content__textBlue}
              >
                Bài tập ứng dụng
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Dựa vào 3 câu hỏi trên chúng ta có thể đoán rằng đoạn hội
                  thoại sắp diễn ra sẽ liên quan đến tiền bạc, và cụ thể hơn là
                  người đàn ông sẽ mượn tiền người phụ nữ. Nắm được những yếu tố
                  trên sẽ giúp chúng ta dễ dàng nghe được các ý chính cần để
                  chọn đáp án cho các câu hỏi .
                </p>
              </h3>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                Giờ thì bạn hãy thử&nbsp;ứng dụng mẹo trên vào bài tập sau nhé:
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                1. Bạn đọc câu hỏi
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                How did the woman learn about the man's agency?
              </p>
              <ul className={styles.Part3Container__Content__ul}>
                <li>(A) From a neighbor</li>
                <li>(B) From a magazine</li>
                <li>(C) From a coworker</li>
                <li>(D) From the Internet&nbsp;</li>
              </ul>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                What does the women say she might do before selling her house?
              </p>
              <ul className={styles.Part3Container__Content__ul}>
                <li>(A) Inspect some other properties</li>
                <li>(B) Make some improvements</li>
                <li>(C) Attend a real-estate seminar</li>
                <li>(D) Place an advertisement&nbsp;</li>
              </ul>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                What will the man do when they meet?
                <ul className={styles.Part3Container__Content__ul}>
                  <li>(A) Inspect some other properties</li>
                  <li>(B) Make some improvements</li>
                  <li>(C) Attend a real-estate seminar</li>
                  <li>(D) Place an advertisement&nbsp;</li>
                </ul>
              </p>
              <ul className={styles.Part3Container__Content__ul}>
                <li>(A) Recommend specific changes</li>
                <li>(B) Provide a list of references</li>
                <li>(C) Take photographs</li>
                <li>(D) Sign a contract&nbsp;</li>
              </ul>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                2. Bạn hãy điền những gì bạn&nbsp;vào đây:
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                <textarea>
                  Bạn đoán cuộc hội thoại này sẽ nói về điều gì?
                </textarea>
              </p>
              <p className={styles.Part3Container__Content__introduce__text_p}>
                3. Bạn nghe đoạn hội thoại và xem bạn đoán có đúng không nhé.
              </p>

              <ReactAudioPlayer
                src={
                  "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart3%2F56_58.mp3?alt=media&token=45429033-1d48-4f82-92f2-9d24b6cc9f77"
                }
                autoPlay={false}
                controls
              />
              <div id="meo-2">
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Dựa vào các câu hỏi, đặc biệt là câu hỏi 2 "What does the
                  women say she might do before selling her house?", chúng ta có
                  thể dự đoán cuộc hội thoại này về một vụ bán nhà.
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  &nbsp;
                </p>
                <h2
                  data-id="side-label-index-7"
                  className={styles.Part3Container__Content__textGreen}
                >
                  <a id="tranh-bay"></a>Mẹo thi TOEIC #3: Tránh các bẫy phổ biến
                  trong part 3
                </h2>
                <h3
                  data-id="side-label-index-8"
                  className={styles.Part3Container__Content__textBlue}
                >
                  Bẫy về từ được dùng cùng 1 bài nghe nhưng với ngữ cảnh khác
                  nhau
                </h3>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  <em>Ví dụ:</em>
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Khi bạn nghe cuộc hội thoại sau:
                  <ReactAudioPlayer
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart3%2F56_58.mp3?alt=media&token=45429033-1d48-4f82-92f2-9d24b6cc9f77"
                    }
                    autoPlay={false}
                    controls
                  />
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Trong phần câu hỏi sẽ có câu:
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  When does a man have to complete an assignment?
                </p>
                <ul className={styles.Part3Container__Content__ul}>
                  <li>A. On Thursday.</li>
                  <li>B. On Firday.</li>
                  <li>C. On Saturday.</li>
                  <li>D. On Sunday.</li>
                </ul>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Nếu bạn nghe kĩ sẽ thấy câu: In order to make the Sunday
                  edition, you'll have to give me your final draft on Friday
                  afternoon. Như vậy cả Sunday và Friday đều được nhắc
                  nhưng&nbsp;Sunday là Sunday edition, còn câu trả lời cho câu
                  trên phải là Firday.
                </p>
                <h3
                  data-id="side-label-index-9"
                  className={styles.Part3Container__Content__textBlue}
                >
                  Bẫy về phân biệt ý định của người nói là đồng ý hay từ chối.
                </h3>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Chúng ta phải lắng nghe thật kỹ cả câu, vì đôi khi người nói
                  sẽ dùng các cấu trúc như&nbsp;"We used to, but...." hay "I'd
                  love to but I have to...." thì ban đầu tưởng chừng đồng ý
                  nhưng thật sự là từ chối.
                </p>
                <h3
                  data-id="side-label-index-10"
                  className={styles.Part3Container__Content__textBlue}
                >
                  Bạn thực hiện mẹo này như thế nào?
                </h3>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Đừng cả tin vào một hai từ mà tai chúng ta nghe được, vì đó có
                  thể là bẫy của người ra đề. Thay vào đó hãy cố gắng nghe và
                  nhớ được các chi tiết cụ thể của bài hội thoại để có thể lựa
                  chọn được đáp án chính xác cho câu hỏi.
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  &nbsp;
                </p>
                <h2
                  data-id="side-label-index-11"
                  className={styles.Part3Container__Content__textGreen}
                >
                  <a id="suy-luan"></a>Mẹo thi TOEIC #4: Suy luận từ những dữ
                  kiện dễ
                </h2>
                <h3
                  data-id="side-label-index-12"
                  className={styles.Part3Container__Content__textBlue}
                >
                  Bạn thực hiện mẹo này như thế nào?
                </h3>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Hầu hết các đoạn đối thoại trong phần 3 sẽ bắt đầu bằng một
                  câu hỏi hay một lời yêu cầu. Lắng nghe những gì người nói nói
                  và lời đáp lại đầu tiên bởi nó có thể sẽ trả lời cho câu hỏi
                  đầu tiên của bài.
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Đối với những câu hỏi suy luận thông tin (như: What can be
                  inferred/said/suggested.....?), hãy chú ý lắng nghe những
                  thông tin có liên quan.&nbsp;Như khi đề hỏi ta suy ra được gì
                  từ người phụ nữ, chú ý nghe những gì mà giọng nữ nói để từ đó
                  loại trừ những thông tin không chính xác.
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Và đáp án&nbsp;đúng để chọn có thể dùng từ đồng nghĩa chứ
                  không nhất thiết phải dùng đúng từ có trong bài nói.
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  <em>Ví dụ:</em>
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Bạn&nbsp;nghe và đọc câu hỏi sau:&nbsp;
                  <p
                    className={
                      styles.Part3Container__Content__introduce__text_p
                    }
                  >
                    Khi bạn nghe cuộc hội thoại sau:
                    <ReactAudioPlayer
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart3%2F47_49.mp3?alt=media&token=8eac6734-296d-43fe-bc4c-f7905e20e178"
                      }
                      autoPlay={false}
                      controls
                    />
                  </p>
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  What event are the speakers discussing?
                </p>
                <ul className={styles.Part3Container__Content__ul}>
                  <li>(A) A sports tournament</li>
                  <li>(B) A town election</li>
                  <li>(C) A community fair</li>
                  <li>(D) A concert series&nbsp;</li>
                </ul>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  How will the event be different this year?
                </p>
                <ul className={styles.Part3Container__Content__ul}>
                  <li>(A) The ticket prices have been increased.</li>
                  <li>(B) The location has been changed.</li>
                  <li>(C) It will be open longer hours.</li>
                  <li>(D) It will be held on a different date.&nbsp;</li>
                </ul>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  What problem did the man encounter at last year's event?
                </p>
                <ul className={styles.Part3Container__Content__ul}>
                  <li>(A) There was not enough parking at the site.</li>
                  <li>
                    (B) His car broke down on the way to the event. &nbsp;
                  </li>
                  <li>(C) A road was closed for construction.</li>
                  <li>(D) The driving directions were wrong.&nbsp;</li>
                </ul>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Chúng ta thấy ngay từ câu đầu "I just saw some signs at the
                  supermarket for the annual town fair", người nói đã đề cập đến
                  sự kiện được hỏi ở câu 1.&nbsp;
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Câu hỏi số 2 trong bài nói người ta dùng "I guess the fair's
                  grown so popular that it had to me moved to a new location",
                  moved to a new location rõ ràng chính là ý "The location has
                  been changed." Người ta dùng từ đồng nghĩa move và change ở
                  đây.
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Và chúng ta chỉ có thể suy luận được câu 3 khi để ý những lời
                  người đàn ông nói "Last year it was so crowded. The parking
                  area was completely full when I got there, so I had to park in
                  a spot on the streets almost a mile away."
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  &nbsp;
                </p>
                <h2
                  data-id="side-label-index-13"
                  className={styles.Part3Container__Content__textGreen}
                >
                  Làm bài tập ứng dụng thêm
                </h2>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  Bây giờ bạn&nbsp;hãy thử sức với{" "}
                  <strong>10&nbsp;bài tập Part 3</strong>&nbsp;ngay
                  dưới&nbsp;đây nhé:&nbsp;
                </p>
                <p
                  className={styles.Part3Container__Content__introduce__text_p}
                >
                  <a
                    className={styles.Part3Container__Content__button}
                    title="Làm bài tập Phần 3"
                  >
                    Làm bài tập Part 3
                  </a>
                </p>
              </div>
            </div>
          </div>
          <CommentComp
            colectionName={"CommentPart3"}
            colectionReaction={"Part3_RC"}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
