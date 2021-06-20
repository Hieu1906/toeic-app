import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import styles from "./Part5.module.scss";
interface Part5State {}

interface Part5Props {}

export class ParPart5 extends BaseComponent<Part5Props, Part5State> {
  constructor(props: Part5Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.Part5Container}>
        <div className={styles.Part5Container__Content}>
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
              Mẹo thi TOEIC Part 5 : Điền vào chỗ trống
            </h1>
            <div className={styles.Part2Container__Content__introduce}>
              <p className={styles.Part5Container__Content__introduce__text_p}>
                Trước khi đi vào các mẹo thi TOEIC&nbsp;cụ thể, chúng ta cần
                hiểu Part 5 có nội dung như thế nào:
              </p>
              <ul className={styles.Part5Container__Content__ul}>
                <li className={styles.Part5Container__Content__li}>
                  <p
                    className={
                      styles.Part5Container__Content__introduce__text_p
                    }
                  >
                    Sẽ có từ 8-10 câu hỏi về từ vựng, 9-10&nbsp;câu hỏi về từ
                    loại và 10-13&nbsp;câu hỏi về ngữ pháp khác. Do đó, "chiến
                    lược" lâu dài trong phần này là mở rộng vốn{" "}
                    <a href="https://tienganhmoingay.com/600-tu-vung-toeic/">
                      từ vựng
                    </a>{" "}
                    của mình,&nbsp;còn "chiến lược" ngắn hạn là học từ loại.
                  </p>
                </li>
                <li className={styles.Part5Container__Content__li}>
                  <p
                    className={
                      styles.Part5Container__Content__introduce__text_p
                    }
                  >
                    Về mặt ngữ pháp thì part 5&nbsp;thường chỉ xoay quanh những
                    điểm{" "}
                    <a href="https://tienganhmoingay.com/ngu-phap-toeic/">
                      ngữ pháp TOEIC
                    </a>{" "}
                    chính như thì (tense),{" "}
                    <a href="https://tienganhmoingay.com/ngu-phap-tieng-anh/tong-quan-cau-dieu-kien/">
                      câu điều kiện trong tiếng Anh
                    </a>
                    ,{" "}
                    <a href="https://tienganhmoingay.com/ngu-phap-tieng-anh/menh-de-quan-he/">
                      mệnh đề quan hệ
                    </a>
                    ,{" "}
                    <a href="https://tienganhmoingay.com/ngu-phap-tieng-anh/cau-bi-dong/">
                      câu bị động
                    </a>
                    , v.v. Những ngữ pháp nâng cao nếu có cũng khá ít nên có thể
                    tạm bỏ qua.
                  </p>
                </li>
              </ul>

              <p className={styles.Part5Container__Content__introduce__text_p}>
                Part 5&nbsp;là một phần thi tương đối "dễ thở"&nbsp;với nhiều
                người{" "}
                <a
                  href="https://tienganhmoingay.com/luyen-thi-toeic/"
                  target="_blank"
                >
                  luyện thi TOEIC
                </a>
                &nbsp;nhưng cũng đừng vì thế mà bạn chủ quan.
              </p>
              <p className={styles.Part5Container__Content__introduce__text_p}>
                Vậy làm sao để làm phần này vừa nhanh vừa chính xác? Hãy cùng
                tìm hiểu các mẹo làm bài thi TOEIC Part 5&nbsp;trong bài viết
                này nhé!
              </p>
              <p style={{ textAlign: "center" }}>
                (nhấn vào hình để tìm hiểu thêm về mẹo và xem ví dụ)
              </p>
            </div>
          </div>
          <div className={styles.Part5Container__Content__tableOfContents}>
            <div
              className={styles.Part5Container__Content__tableOfContents__row}
            >
              <a
                href="#nhan-vat"
                className={
                  styles.Part5Container__Content__tableOfContents__row__item
                }
              >
                <img
                  height={360}
                  width={360}
                  src={
                    "https://tienganhmoingay.com/media/images/uploads/2017/11/15/meo_thi_toeic_phan_5_1.png"
                  }
                />
              </a>
              <a
                href="#doc-truoc-cau-hoi"
                className={
                  styles.Part5Container__Content__tableOfContents__row__item
                }
              >
                <img
                  height={360}
                  width={360}
                  src={
                    "https://tienganhmoingay.com/media/images/uploads/2017/11/15/meo_thi_toeic_phan_5_2.png"
                  }
                />
              </a>
            </div>
            <div
              className={styles.Part5Container__Content__tableOfContents__row}
            >
              <a
                href="#tranh-bay"
                className={
                  styles.Part5Container__Content__tableOfContents__row__item
                }
              >
                <img
                  height={360}
                  width={360}
                  src={
                    "https://tienganhmoingay.com/media/images/uploads/2017/11/15/meo_thi_toeic_phan_5_3.png"
                  }
                />
              </a>
              <a
                href="#suy-luan"
                className={
                  styles.Part5Container__Content__tableOfContents__row__item
                }
              >
                <img
                  height={360}
                  width={360}
                  src={
                    "https://tienganhmoingay.com/media/images/uploads/2017/11/15/meo_thi_toeic_phan_5_4.png"
                  }
                />
              </a>
            </div>
            <h2 className={styles.Part5Container__Content__textGreen}>
              <a id="tu-loai"></a>Mẹo #1: Xác định từ loại của từ cần điền
            </h2>
            <h3 className={styles.Part5Container__Content__textBlue}>
              Bạn thực hiện mẹo này như thế nào?
            </h3>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Xem trước 4 lựa chọn → xác định loại câu hỏi (từ loại, ngữ pháp,
              từ vựng). Nếu hỏi từ loại hoặc ngữ pháp thì chỉ cần xem ở chỗ cần
              điền và từ xung quanh nó, không cần đọc cả câu.
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Khi biết được đây là câu hỏi về từ loại thì điều đầu tiên cần làm
              là phán đoán xem từ loại còn thiếu là từ loại nào: tính từ, trạng
              từ, danh từ hay động từ. Sau đó, tìm loại từ đó trong 4 phương án.
              Thông thường, những câu hỏi này không cần phải dịch câu.
            </p>
            <h3 className={styles.Part5Container__Content__textBlue}>
              Một số quy tắc để làm nhanh phần này:
            </h3>
            <ul className={styles.Part5Container__Content__ul}>
              <li className={styles.Part5Container__Content__li}>
                Sau giới từ là danh từ (hoặc động từ V_ing sử dụng như danh từ).
              </li>
              <li className={styles.Part5Container__Content__li}>
                Trước danh từ là tính từ.
              </li>
              <li className={styles.Part5Container__Content__li}>
                Trước tính từ là trạng từ.
              </li>
              <li className={styles.Part5Container__Content__li}>
                Giữa to_be và V_ing/Ved là trạng từ.
              </li>
            </ul>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Company officials must disclose their own _____ affairs. -&gt;
              Viên chức công ty phải tiết lộ hết các vấn đề tài chính của họ{" "}
              <br></br>
              A. finance → tài chính (danh từ) <br></br>
              B. financing → (present participle) <br></br>
              C. financial → thuộc tài chính (tính từ) <br></br>
              D. financed → (past participle)
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              <em>Ví dụ:</em>
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Ta thấy trước danh từ affairs cần 1 tính từ. Và "financial
              affiairs" cũng&nbsp;là thuật ngữ kinh doanh chỉ các vấn đề liên
              quan đến tài chính, vậy đáp án đúng phải là C
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              <em>Ví dụ:</em>
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Ms. Kim asks that the marketing team e-mail the final draft to
              _____ before 5 p.m. <br></br>
              A: her <br></br>
              B: she <br></br>
              C: hers <br></br>
              D: herself
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Ms. Kim asks that the marketing team e-mail the final draft to
              _____ before 5 p.m. <br></br>
              A: her <br></br>
              B: she <br></br>
              C: hers <br></br>
              D: herself
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Nhìn 4 phương án thấy toàn bộ là về đại từ (pronouns) → với cụm
              "email cái gì đó đến ai đó" thì chỗ "ai đó" phải là tân ngữ → chọn
              A (làm bài mất 25s)
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h3 className={styles.Part5Container__Content__textBlue}>
              Một cách để biết được các từ trong 4 phương án thuộc loại từ nào
              là nhìn vào hậu tố của chúng.
            </h3>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              <em>Ví dụ:</em>
            </p>
            <ul className={styles.Part5Container__Content__ul}>
              <li className={styles.Part5Container__Content__li}>
                a fast car → fast là tính từ
              </li>
              <li className={styles.Part5Container__Content__li}>
                He drives fast → fast là trạng từ.
              </li>
            </ul>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Để phân biệt, xét xem chúng bổ nghĩa cho thành phần nào trong câu.
              Nếu bổ nghĩa cho danh từ thì là tính từ, còn nếu bổ nghĩa cho động
              từ là trạng từ.&nbsp;
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h3 className={styles.Part5Container__Content__textBlue}>
              Nếu 4 lựa chọn yêu cầu chọn thể đúng của động từ (V_ing, _Ved,
              to_inf, bare_inf), hãy nhìn động từ trước đó để phán đoán.
            </h3>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              <em>Ví dụ:</em>
            </p>
            <ul className={styles.Part5Container__Content__ul}>
              <li className={styles.Part5Container__Content__li}>
                help/make/let&nbsp;+ tân ngữ + bare_inf
              </li>
              <li className={styles.Part5Container__Content__li}>
                admit to do something
              </li>
              <li className={styles.Part5Container__Content__li}>
                avoid doing something
              </li>
            </ul>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h3 className={styles.Part5Container__Content__textBlue}>
              Bài tập ứng dụng:
            </h3>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              What makes Mr. Yansen such an ______ speaker is that he is smart
              and self - aware. <br></br>
              A: effectiveness <br></br>
              B: effected <br></br>
              C: effective <br></br>
              D: effectively
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              <button
                style={{
                  color: "#fff",
                  backgroundColor: "#5bc0de",
                  fontSize: 14,
                  borderRadius: 3,
                  padding: "6px 12px",
                  border: "none",
                }}
              >
                Đáp án và giải thích
              </button>
            </p>
            <h2 className={styles.Part5Container__Content__textGreen}>
              <a id="cac-tu-di-chung"></a>Mẹo thi TOEIC #2: Học các từ thường đi
              chung với nhau
            </h2>
            <h3 className={styles.Part5Container__Content__textBlue}>
              Bạn thực hiện mẹo này như thế nào?
            </h3>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Học một số phrasal verb thông dụng trong ngữ cảnh công sở.
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Ví dụ:
            </p>
            <ul className={styles.Part5Container__Content__ul}>
              <li className={styles.Part5Container__Content__li}>
                fill out = điền vào (đơn)
              </li>
              <li className={styles.Part5Container__Content__li}>
                go over = kiểm tra (văn bản)
              </li>
              <li className={styles.Part5Container__Content__li}>
                back up = trợ giúp, ủng hộ (ai đó)
              </li>
            </ul>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Bạn cũng nên học một số cụm từ hay dùng trong ngữ cảnh công sở.
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Ví dụ:
            </p>
            <ul className={styles.Part5Container__Content__ul}>
              <li className={styles.Part5Container__Content__li}>
                take responsibility for something = be responsible for something
                = chịu trách nhiệm cho việc gì đó
              </li>
              <li className={styles.Part5Container__Content__li}>
                free of charge = miễn phí
              </li>
            </ul>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Chúng ta cùng xem ví dụ sau:
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              The Wellborn Science Museum's new astronomy theater has a seating
              _____ of 250.<br></br>
              A: aptitude<br></br>
              B: capacity<br></br>
              C: demonstration<br></br>
              D: compliance
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Khi nói về dung tích của đồ đựng hoặc sức chứa của một không gian,
              ta dùng cấu trúc "a capacity of".
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h3 className={styles.Part5Container__Content__textBlue}>
              Bài tập ứng dụng{" "}
              <p className={styles.Part5Container__Content__introduce__text_p}>
                &nbsp;
              </p>
            </h3>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Please fill out the part below so you can claim your complimentary
              one-year _____ to Maxim.<br></br>
              A: subscription<br></br>
              B: duration<br></br>
              C: partnership<br></br>
              D: agreement
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              <button
                style={{
                  color: "#fff",
                  backgroundColor: "#5bc0de",
                  fontSize: 14,
                  borderRadius: 3,
                  padding: "6px 12px",
                  border: "none",
                }}
                type="button"
              >
                Đáp án và giải thích
              </button>
            </p>
            <h2 className={styles.Part5Container__Content__textGreen}>
              <a id="thi-dong-tu"></a>Mẹo thi TOEIC #3: Chú ý đến thì của các
              phương án
            </h2>
            <h3 className={styles.Part5Container__Content__textBlue}>
              Bạn thực hiện mẹo này như thế nào?
            </h3>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Các câu hỏi về ngữ pháp chỉ xoay quanh những điểm ngữ pháp căn
              bản. Câu hỏi ngữ pháp về động từ chiếm tỉ lệ khá cao. Do đó, cần
              hiểu rõ cách dùng thì và thể trong 1 câu tiếng Anh. Nên dùng
              phương pháp loại trừ.
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Các manh mối xác định thì của câu: Trạng từ (yesterday, tomorrow,
              recently, v.v); hoặc vào mệnh đề còn lại của câu (chủ điểm Sự hòa
              hợp giữa các thì trong câu).
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              <em>Ví dụ:</em>
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Two years ago, some of the athletes _____ school to pursue a
              professional career or the Olympics.<br></br>
              A: leave<br></br>
              B: left<br></br>
              C: will leave<br></br>
              D: have left&nbsp;
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Nhìn 4 phương án thấy toàn bộ là về thì (tense) → nhìn lên câu hỏi
              để tìm dấu hiệu nhận biết thì trong → thấy có cụm "
              <strong>Two years ago</strong>" → dấu hiệu thì quá khứ đơn → chọn
              B (làm bài mất 25s)
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h3 data-id="side-label-index-12">Bài tập ứng dụng</h3>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Since 1990, our customers _____ with our service.&nbsp;<br></br>
              A. are satisfied&nbsp;<br></br>
              B. have satisfied<br></br>
              C. have been satisfying&nbsp;<br></br>
              D. have been satisfied&nbsp;
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              <button
                style={{
                  color: "#fff",
                  backgroundColor: "#5bc0de",
                  fontSize: 14,
                  borderRadius: 3,
                  padding: "6px 12px",
                  border: "none",
                }}
                type="button"
              >
                Đáp án và giải thích
              </button>
            </p>
            <h2 className={styles.Part5Container__Content__textGreen}>
              <a id="thoi-gian"></a>Mẹo thi TOEIC #4: Quản lý thời gian
            </h2>
            <h3 className={styles.Part5Container__Content__textBlue}>
              Bạn thực hiện mẹo này như thế nào?
            </h3>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Không nên dành quá 30 giây cho 1 câu hỏi trong phần 5 vì bạn cần
              nhiều thời gian để làm phần 7. Nếu sau hơn 1 phút mà vẫn chưa chọn
              được đáp thì hãy tạm để nó qua một bên hoặc đánh đại và nếu cuối
              giờ còn thời gian thì quay lại làm sau.
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Dùng phương pháp 2 lượt: Trả lời trước những câu hỏi dễ, tạm bỏ
              qua những câu hỏi khó. Sau khi kết thúc phần 5 hãy quay lại với
              những câu hỏi chưa trả lời.
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Dùng phương pháp 2 lượt: Trả lời trước những câu hỏi dễ, tạm bỏ
              qua những câu hỏi khó. Sau khi kết thúc phần 5 hãy quay lại với
              những câu hỏi chưa trả lời.
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              &nbsp;
            </p>
            <h2 className={styles.Part5Container__Content__textGreen}>
              Làm bài tập ứng dụng thêm
            </h2>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              Bây giờ bạn&nbsp;hãy thử sức với{" "}
              <strong>10&nbsp;bài tập Part 5</strong>&nbsp;ngay dưới&nbsp;đây
              nhé:&nbsp;
            </p>
            <p className={styles.Part5Container__Content__introduce__text_p}>
              <a
                className={styles.Part5Container__Content__button}
                title="Làm bài tập Phần 2"
              >
                Làm bài tập Part 2
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
