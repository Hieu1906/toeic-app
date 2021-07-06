import React, { useRef } from "react";
import { createRef } from "react";
import "./sass/Part6.css";
import "./sass/_grid.css";
import { CommentComp } from "../../../00.common/00.components/Comment/CommentComp";
import { Footer } from "../../Footer/Footer";
interface Part6State {
  input?: any;
  temp?: boolean;
}
export default class Part6 extends React.Component<{}, Part6State> {
  // button: React.RefObject<any>;
  constructor(props) {
    super(props);
    this.state = {
      temp: false,
    };
  }
  componentDidMount() {
    let abc = document.querySelectorAll("button");
    let output = document.querySelectorAll(".part6-answer");
    for (let i = 0; i < abc.length; i++) {
      let status = true;
      abc[i].addEventListener("click", () => {
        if (status) {
          output[i].classList.add("active");
          status = false;
        } else {
          output[i].classList.remove("active");
          status = true;
        }
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="part6">
          <h1 className="part6-title">
            Mẹo thi TOEIC Part 6 : Điền vào đoạn văn
          </h1>
          <p>
            Part 6 gồm 16 câu trắc nghiệm, chia thành 4 đoạn văn; mỗi đoạn gồm 4
            câu hỏi. Loại câu hỏi trong phần này cũng tương tự như part 5, là
            hỏi về từ loại, ngữ pháp cũng như từ vựng. Mỗi câu sẽ có một chỗ
            trống và nhiệm vụ của bạn là tìm từ thích hợp nhất đề điền vào chỗ
            trống. Đối với người luyện thi TOEIC , part 6 có thể được xem là
            "phần mở rộng" của part 5.
          </p>
          <p>
            Nội dung phần này thường là về một văn bản ngắn, quảng cáo, thông
            báo, ghi chú, email, thư từ, fax, hướng dẫn và nhiều loại văn bản
            phổ biến trong đời sống hàng ngày.
          </p>
          <p>
            Chính vì dạng câu hỏi của part 6 cũng tương tự như phần 5 nên bạn
            vẫn áp dụng được những mẹo thi TOEIC của part 5 được.
          </p>
          <h2>Bạn thực hiện các mẹo này như thế nào?</h2>
          <p>
            Tóm tắt lại một số mẹo thi TOEIC áp dụng cho part 5 và có thể áp
            dụng cho part 6:
          </p>
          <ul>
            <li>
              <strong>Xác định từ loại cần điền:</strong>
              Khi biết được đây là câu hỏi về từ loại thì điều đầu tiên cần làm
              là phán đoán xem từ loại còn thiếu là từ loại nào: tính từ, trạng
              từ, danh từ hay động từ. Sau đó, tìm loại từ đó trong 4 phương án.
              Thông thường, những câu hỏi này không cần phải dịch câu.
            </li>
            <li>
              <strong>
                Học các từ thường đi chung với nhau (collocations):
              </strong>
              Chúng ta sẽ nói jealous of somebody chứ không nói jealous with
              somebody như khi chúng ta dịch từ tiếng Việt sang Anh.
            </li>
            <li>
              <strong>Lưu ý thì của các câu:</strong>
              Nếu trong câu có dấu hiệu như in 2020, thì chắc hẳn động từ trong
              câu phải chia ở một trong những thì tương lai chứ không thể nào là
              quá khứ được.
            </li>
            <li>
              <strong>Việc phán đoán nhanh, loại trừ các đáp án sai:</strong>
              dựa vào các mẹo nhỏ sẽ giúp chúng ta tiết kiệm được rất nhiều thời
              gian làm part 6 để chúng ta tập trung làm part 7 cho tốt.
            </li>
          </ul>
          <p>Ngoài ra, dưới đây là 1 số mẹo dành riêng cho Part 6: </p>
          <ul>
            <li>
              <strong>Đọc ngay vào chỗ bài hỏi và nội dung các đáp án:</strong>
              Khi làm bài ở part 6, chúng ta cần đọc ngay vào chỗ bài hỏi, không
              cần đọc cả bài. Sau đó, xác định loại câu hỏi bài đưa ra (từ loại,
              ngữ pháp, từ vựng).
            </li>
            <li>
              <strong>Đọc ngay vào chỗ bài hỏi và nội dung các đáp án:</strong>
              Khi làm bài ở part 6, chúng ta cần đọc ngay vào chỗ bài hỏi, không
              cần đọc cả bài. Sau đó, xác định loại câu hỏi bài đưa ra (từ loại,
              ngữ pháp, từ vựng).
            </li>
            <li>
              Nếu hỏi về từ loại hoặc ngữ pháp thì chỉ cần
              <strong style={{ marginLeft: "8px" }}>
                xem ở chỗ cần điền và từ xung quanh nó, không cần đọc cả câu.
              </strong>
              Trong trường hợp câu đó chưa cung cấp đủ thông tin để trả lời, hãy
              đọc những câu xung quanh đó để giúp chọn phương án đúng (thường là
              những câu phía trên).
            </li>
            <li>
              Theo cấu trúc đề thi TOEIC mới 2021 năm 2019, sẽ có 1 câu trong
              bài Part 6 yêu cầu bạn
              <strong style={{ marginLeft: "8px" }}>
                chọn cả một câu vào chỗ trống
              </strong>
              , thay vì chỉ một từ.
              <p>
                Khác với việc điền một từ, khi điền một câu vào đoạn văn, bạn
                cần xem các câu xung quanh chỗ trống này (thường là câu liền
                trước và câu liền sau) để hiểu được ý nghĩa cơ bản của đoạn văn
                rồi điền câu hợp nghĩa nhất vào giữa. Loại câu hỏi này sẽ yêu
                cầu bạn phải hiểu đoạn văn nhiều hơn và mất thời gian làm bài
                hơn lúc trước một chút.
              </p>
            </li>
          </ul>
          <p>
            <strong>Video hướng dẫn Mẹo thi Part 6:</strong>
          </p>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0KlC00h5x98"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>
            <em>Ví dụ 1:</em>
          </p>
          <p>To: Brent Howard</p>
          <p>From: Mio Tanisawa</p>
          <p>Subject: Order #5821</p>
          <p>Date: February 2</p>
          <p>Mr. Howard:</p>
          <p>
            We have ______ your fax order for a case of hanging file folders. We
            have in stock the style of folders you requested, but you did not
            specify a color on the order form. We currently carry the Pro Stock
            Hanging File Folder in black, navy blue, light gree, and orange.
          </p>
          <div className="part6-question">
            <p>A. canceled = hủy bỏ</p>
            <p>B. purchased = mua</p>
            <p>C. received = nhận</p>
            <p>D. fulfilled = hoàn thành</p>
          </div>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>
              Câu có chỗ trống này cần chúng ta đọc 2 câu kế tiếp để hiểu nội
              dung đang nói về việc người viết thông báo đã nhận được đơn đặt
              hàng. Từ đó có thể chọn C.
            </p>
          </div>
          <p>
            If you could please get back to me with your ______ before the end
            of the day today, I will make sure that your order is processed in
            time for delivery by the end of the week.
          </p>
          <div className="part6-question">
            <p>A. prefer = thích hơn (động từ)</p>
            <p>B. purchased = mua</p>
            <p>C. received = nhận</p>
            <p>D. fulfilled = hoàn thành</p>
          </div>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>
              Sau tính từ sở hữu YOUR ta cần một danh từ, nên ta chọn ngay D.
            </p>
          </div>
          <p>
            Please let me know if you are in need of any other office products
            at this time. You may respond to this e-mail or call me ______ at
            425-555-0166, ext. 42.
          </p>
          <div className="part6-question">
            <p>A. directing = hướng dẫn (V-ing)</p>
            <p>B. directly = một cách trực tiếp (trạng từ)</p>
            <p>C. direction = hướng dẫn (danh từ)</p>
            <p>D. directed = được hướng dẫn (V3)</p>
          </div>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>
              Ta cần 1 trạng từ bổ sung ý nghĩa cho động từ CALL, nên ta chọn B.
            </p>
          </div>
          <p>Warm regards,</p>
          <p>Mio Tanisawa</p>
          <p>Customer Relations</p>
          <p>All Paper industries</p>
          <p>
            <em>Ví dụ 2:</em> Câu 134 dưới đây là một ví dụ cho loại câu hỏi
            điền một câu trong Part 6 này. Chúng ta phải nhìn vào câu trước và
            câu sau của chỗ trống này để chọn được đáp án thích hợp.
          </p>
          <img
            src="http://www.iibc-global.org/library/default/toeic/test/lr/about/format/sample06/img/part6_no131_134.jpg"
            alt=""
          />
          <p>
            <strong>131.</strong>
          </p>
          <p>(A) interest = hứng thú (danh từ/động từ)</p>
          <p>(B) interests = hứng thú (danh từ số nhiều/động từ thêm s)</p>
          <p>(C) interested = hứng thú (tính từ)</p>
          <p>(D) interesting = thú vị (tính từ)</p>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>
              Đáp án là: C. Trước danh từ employees cần điền tính từ.
              Interesting là thú vị, còn interested là hứng thú bởi/quan tâm tới
              điều gì đó. Các buổi tập huấn (training sessions) dành cho những
              nhân viên nào quan tâm, nên chọn C.
            </p>
          </div>
          <p>
            <strong>132.</strong>
          </p>
          <p>(A) develop = phát triển</p>
          <p>(B) raise = nâng lên</p>
          <p>(C) open = mở</p>
          <p>(D) complete = hoàn thành</p>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>
              Đáp án là: A. Ta có cụm{" "}
              <strong>develop understanding of something</strong>, nghĩa là phát
              triển hiểu biết về cái gì.
            </p>
          </div>
          <p>
            <strong>133.</strong>
          </p>
          <p>(A) After all = Sau tất cả</p>
          <p>(B) For = Vì/Để</p>
          <p>(C) Even so = Ngay cả như vậy</p>
          <p>(D) At the same time = Trong cùng lúc đó</p>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>
              Đáp án là: A. Ta có cụm{" "}
              <strong>develop understanding of something</strong>, nghĩa là phát
              triển hiểu biết về cái gì.
            </p>
          </div>
          <p>
            <strong>134.</strong>
          </p>
          <p>
            (A) Let me explain our plans for on-site staff training. = Hãy để
            tôi giải thích kế hoạch của chúng tôi cho việc đào tạo nhân viên tại
            chỗ.
          </p>
          <p>
            (B) We hope that you will strongly consider joining us. = Chúng tôi
            mong mọi người sẽ nghiêm túc cân nhắc việc tham gia
          </p>
          <p>
            (C) Today’s training session will be postponed until Monday. = Buổi
            tập huấn hôm nay sẽ được hoãn lại cho đến thứ Hai.
          </p>
          <p>
            (D) This is the first in a series of such lectures. = Đây là bài đầu
            tiên trong một loạt các bài giảng như vậy.
          </p>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>
              Chúng ta phải nhìn vào câu trước và câu sau của chỗ trống này để
              chọn được đáp án thích hợp:
            </p>
            <ul>
              <li>
                <p>
                  <strong>Câu trước:</strong>
                  For that reason, we are urging experienced project leaders to
                  attend each one of the interactive seminars that will be held
                  throughout the coming month. = Vì lý do này, chúng tôi đề xuất
                  các trưởng nhóm dự án giàu kinh nghiệm phải dự mỗi buổi chuyên
                  đề tương tác được tổ chức xuyên suốt tháng tới.
                </p>
              </li>
              <li>
                <p>
                  <strong>Câu sau:</strong>
                  Thank you for your support. = Cảm ơn sự hỗ trợ của mọi người.
                  Đây là câu kết email.
                </p>
              </li>
            </ul>
            <p>Thử phân tích từng đáp án nhé:</p>
            <ul>
              <li>
                Đáp án (A) không hợp vì chỗ trống này là hết email rồi, không có
                chỗ để "explain our plans".
              </li>
              <li>Đáp án (C) không hợp vì không liên quan đến bài này.</li>
              <li>
                Đáp án (D) không hợp vì bài không có nhắc gì đến "lectures" cả.
              </li>
              <li>
                Đáp án (B) là thích hợp nhất: "Chúng tôi mong mọi người sẽ
                nghiêm túc cân nhắc việc tham gia".
              </li>
            </ul>
          </div>
          <h2>Bài tập ứng dụng</h2>
          <p>
            <em>Bài tập 1</em>
          </p>
          <p>
            Is dentistry the career for you? Today's dentists have many more
            opportunities than they used to. In the past, a dentist's life was
            predictable. Most were men who would leave home for a few years to
            study at a dental school, then return to their hometown, open up an
            office, and work there their whole life. Most dentists are more
            mobile. Men and women can ______ dental school in different places.
            Some still return to their hometown to work. Others move on to new
            cities.
          </p>
          <div className="part6-question">
            <p>A. will attend </p>
            <p>B. attending</p>
            <p>C. to attend </p>
            <p>D. attend </p>
          </div>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>Đáp án là: D. Sau động từ CAN ta dùng một động từ nguyên mẫu.</p>
          </div>
          <p>
            Dentists today may specialize in one or more areas. Two common ones
            are oral surgery and dental public health. Oral surgery focuses
            ______ treating diseases and problems through operations.
          </p>
          <div className="part6-question">
            <p>A. in</p>
            <p>B. at </p>
            <p>C. on </p>
            <p>D. to </p>
          </div>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>Đáp án là C. Sau từ FOCUS ta dùng giới từ ON </p>
          </div>
          <p>
            Dental public health concentrates on improving the dental health of
            a community. For example, these dentists ______ to schools to teach
            children how to brush their teeth. Some dentists work only in their
            specialty areas while others do both general and specialty work.{" "}
          </p>
          <div className="part6-question">
            <p>A. go </p>
            <p>B. went</p>
            <p>C. had gone</p>
            <p>D. would go</p>
          </div>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>
              Đáp án là A. Câu dẫn chứng một hành động có thật của các nha sỹ,
              nên ta dùng hiện tại đơn với động từ nguyên mẫu.{" "}
            </p>
          </div>
          <p>
            <em>Bài tập 2</em>
          </p>
          <p>Lakeview Railway Onboard Bicycle Policy</p>
          <p>
            Would you like to use your bicycle to explore the Lakeview Corridor
            Scenic Area? Our trains have the equipment you need to safely
            transport your bike. When booking your ticket, just remember that
            reservations are required for both you and your bicycle. Reserve
            your bicycle spot early. There are a limited number of storage racks
            on each train. You are responsible for stowing your bike securely.
            _____. Lakeview Railway does not take responsibility for bicycles
            lost or damaged aboard our trains.
          </p>
          <div className="part6-question">
            <p>A. Folding bicycles have become more common. </p>
            <p>B. Additional service fees may apply. </p>
            <p>C. You can obtain route maps at most stations.</p>
            <p>D. You must also supply your own bike lock.</p>
          </div>
          <button>Đáp án và giải thích</button>
          <div className="part6-answer">
            <p>
              Đáp án là D. Ta thấy câu trước chỗ trống có nhắc đến việc người
              gửi xe đạp phải gấp xe lại gọn gàng, nên có thể hình dung được câu
              sau vẫn sẽ đề cập đến quy định khi gửi xe. Ngoài ra, câu sau có
              nói Lakeview Railway sẽ không chịu trách nhiệm cho việc xe đạp bị
              mất. Do đó, ta chọn câu "You must also supply your own bike lock"
              để phù hợp với ngữ cảnh.
            </p>
          </div>
          <h1>Làm bài ứng dụng thêm</h1>
          <p>
            Bây giờ bạn hãy thử sức với các bài tập Part 6 ngay dưới đây nhé:
          </p>
          <p style={{textAlign:'center'}}>
            (Nếu chưa có tài khoản, bạn chỉ click vào nút dưới đây để tạo một
            tài khoản miễn phí là có thể làm ngay!)
          </p>
          <p style={{textAlign:'center'}}>
            <a href="#" onClick={(e)=>{
              e.preventDefault()
            }}>Làm bài tập Part 6</a>
          </p>
          <CommentComp
          colectionName={"CommentPart6"}
          colectionReaction={"CommentReactionPart6"}
        />
        </div>
        <Footer />
      </div>
    );
  }
}
