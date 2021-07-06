import React from "react";
import "./sass/_grid.css";
import "./sass/main.css";
import { CommentComp } from "../../../00.common/00.components/Comment/CommentComp";
import { Footer } from "../../Footer/Footer";

export default class Part7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: false,
    };
  }
  componentDidMount() {
    let abc = document.querySelectorAll("button");

    let output = document.querySelectorAll(".part7-answer");

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
        <div className="part7">
          <h1 className="part7-title">
            Mẹo thi TOEIC Part 7 : Đọc hiểu đoạn văn
          </h1>
          <p>
            Part 7 là một phần thi được nhiều người luyện thi TOEIC đánh giá là
            "khó nhằn" nhất cả bài thi TOEIC vì độ dài của nó và mức độ đa dạng
            của ngữ pháp và từ vựng trong phần này. Vậy làm sao để làm phần này
            vừa nhanh vừa chính xác? Hãy cùng tìm hiểu các mẹo làm bài thi TOEIC
            part 7 trong bài viết này nhé!
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="https://tienganhmoingay.com/media/images/uploads/2017/11/17/meo_thi_toeic_phan_7_1.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="https://tienganhmoingay.com/media/images/uploads/2017/11/17/meo_thi_toeic_phan_7_2.png"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="https://tienganhmoingay.com/media/images/uploads/2017/11/17/meo_thi_toeic_phan_7_3.png"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                src="https://tienganhmoingay.com/media/images/uploads/2017/11/17/meo_thi_toeic_phan_7_4.png"
                alt=""
              />
            </div>
          </div>
          <h1>Mẹo thi TOEIC #1: Xác định thứ tự làm bài hợp lý</h1>
          <h2>Bạn thực hiện mẹo này như thế nào?</h2>
          <p>Sau đây là thứ tự làm bài của các câu hỏi trong phần 7:</p>
          <ul>
            <li>
              Đọc câu hỏi trước khi đọc bài → xác định bài muốn hỏi gì → đọc
              đoạn văn và tìm chỗ bài hỏi để đọc kỹ hơn.
            </li>
            <li>
              Trả lời trước các câu hỏi thông tin như: Ai là người…? Ở đâu…? Khi
              nào…? để giúp có cái nhìn tổng quát về bài. Sau đó mới trả lời câu
              hỏi suy luận như: Mục đích…? Ta có thể suy được…? Thông tin KHÔNG
              có trong bài?
            </li>
            <li>
              Thông thường, trừ những câu hỏi mang tính suy luận (ví dụ: Mục
              đích…? Ta có thể suy được…? Thông tin KHÔNG có trong bài?), thứ tự
              câu hỏi trong bài sẽ theo đúng mạch bài viết. Nghĩa là nếu bạn tìm
              được đáp án cho câu hỏi số 1 ở đoạn 1 thì đáp án cho câu hỏi số 2
              sẽ nằm ở những câu hoặc đoạn văn nằm dưới chỗ có đáp án cho câu 1.
            </li>
            <li>
              Riêng đối với Part 7 có đoạn kép hoặc 3 đoạn văn, bạn phải xem
              lướt qua tiêu đề của các đoạn văn là gì để hình dung được bối cảnh
              của các đoạn văn trước khi thực hiện bước đọc câu hỏi bên trên.
              Bước này giúp bạn dễ dàng xác định được đoạn văn nào mình nên chú
              ý đọc sau khi đã đọc nội dung câu hỏi.
            </li>
          </ul>
          <p>
            <em>Ví dụ Part 7 đoạn đơn:</em>
          </p>
          <p>Bạn đọc bài đọc sau:</p>
          <div className="part7-question">
            <p>
              More than 50,000 electronics retailers and distributors are
              expected at the McCormick Convention Center in Chicago starting
              next Saturday. Some 1,300 manufacturers from more than 35
              countries will exhibit their latest high-technology equipment,
              including industrial equipment, office machines, and household
              appliances. The new products won't appear on retailers' shelves
              until next fall, but show attendees will be able to purchase them
              during the show at special prices.
            </p>
            <p>Highlights of the show include the following:</p>
            <p>
              1. Demonstrations of robots designed for household use. Watch
              robots perform everyday household chores. Each day, models from a
              different group of manufacturers will be shown. Hall of Industry,
              3:00-5.00 P.M. daily.
            </p>
            <p>
              2. Talks by product developers representing companies from various
              countries on topics such as The Impact of Electronic Technology on
              business, Future Developments in Technology, How Electronic
              Technology Will Solve Our Transportation Problems, and more. Call
              the Convention Center or visit our website for the speak list.
              Wilson Auditorium, 7:00 P.M nightly.
            </p>
            <p>
              3. Musical equipment demonstrations. Show attendees will be able
              to try out the latest synthesizers, guitars, and other electronic
              musical equipment. Exhibit Hall A, ongoing.
            </p>
            <p>
              4. Inventors of tomorrow, a special hands-on workshop for children
              ages 10-13. Free with the price of admission to the show, but due
              to space limitations, pre-registration is required. Call the
              Convention Center or visit our website to register. Saturday and
              Sunday, 2:00 P.M.
            </p>
            <p>
              Visit the Convention Center website for a complete schedule of
              demonstrations, workshops, and special events going on throughout
              the show.
            </p>
            <p>
              Tickets are available by calling the Convention Center or through
              the Convention Center website. Special prices are available for
              multi-day passes.
            </p>
            <p>Contact us by phone: 800-555-0913 or on the web.</p>
            <p>
              The summer Consumer Electronics Show will continue through June 5.
            </p>
          </div>
          <p>1. What is the main topic of the press release?</p>
          <p>A. The McCormick Convention Center</p>
          <p>B. Chicago's convention centers </p>
          <p>C. Electronics retailers</p>
          <p>D. The Summer Consumer Electronics Show</p>
          <p>2. How many manufacturers are expected? </p>
          <p>A. 1,300</p>
          <p>B. 5,000</p>
          <p>C. 13,000</p>
          <p>D. 50,000</p>
          <p>3. What is on display at the Convention Center? </p>
          <p>A. High-technology products </p>
          <p>B. Distribution of networks </p>
          <p>C. Retail outlets</p>
          <p>D. Shelving samples</p>
          <p>
            Thứ tự trả lời câu hỏi của đoạn văn trên là 2 → 3 → 1 vì câu 2 và 3
            có sẵn thông tin trong bài đọc và theo thứ tự 2 trước 3, còn câu 1
            cần phải đọc qua nội dung của bài và suy luận.
          </p>
          <p>
            <em>Ví dụ Part 7 có 3 đoạn văn:</em>
          </p>
          <p>Bạn đọc bài đọc sau:</p>

          <img
            src="http://www.iibc-global.org/library/default/toeic/test/lr/about/format/sample07_04/img/part7_no196_200.jpg"
            alt=""
          />
          <p>
            <strong>Câu hỏi:</strong>
          </p>
          <p>
            196. In the advertisement, the word “top” in paragraph 1, line 2, is
            closest in meaning to
          </p>
          <p>(A) maximum</p>
          <p>(B) favorite</p>
          <p>(C) important</p>
          <p>(D) upper</p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              "Top" là từ có nhiều nghĩa. Trong đoạn văn này, dựa vào ngữ cảnh
              tờ quảng cáo nói người đọc chọn màu yêu thích, chúng ta chọn đáp
              án (B).
            </p>
          </div>
          <p>197. What are Sparky Paints customers advised to do?</p>
          <p>(A) Apply an adhesive to color samples</p>
          <p>(B) Visit a store to compare paint colors</p>
          <p>(C) Adjust the color on their computer monitor</p>
          <p>(D) Order samples of several similar colors</p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              Ta thấy ý "We recommend ordering several samples in similar
              shades", nghĩa là "Chúng tôi khuyến cáo bạn đặt một vài mẫu có sắc
              màu tương tự nhau." Vì vậy, chúng ta chọn đáp án (D).
            </p>
          </div>
          <p>198. What is most likely true about order #3397 ?</p>
          <p>(A) It arrived within two business days.</p>
          <p>(B) It included an extra sample.</p>
          <p>(C) It was shipped in February.</p>
          <p>(D) It contained four gallons of paint.</p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              Trong đoạn thứ 1 (quảng cáo), chúng ta thấy có ý "We'll ship the
              paint of your choice to arrive at your home within 3-5 business
              days, or within 2 business days for an additional expedited
              shipping fee."
            </p>
            <p>
              Trong đoạn thứ 2 (đơn đặt hàng), chúng ta thấy có "expedited
              shipping" là $18.99, nghĩa là người này có trả "expedited shipping
              fee", vì vậy đơn đặt hàng #3397 nhiều khả năng được giao trong
              vòng 2 ngày làm việc. Ta chọn đáp án (A).
            </p>
          </div>
          <p>199. Which color does Mr. Phan indicate that he likes?</p>
          <p>(A) Caspian Blue</p>
          <p>(B) Deep Sea Blue</p>
          <p>(C) Stormy Blue</p>
          <p>(D) Misty Gray</p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              Trong đoạn thứ 3 (email), ông Phan có nói "Could you send me the
              correct paint, along with additional samples that are close in
              color to SP 722? That sample worked well in my house", nghĩa là
              ông Phan thích màu SP 722, là Stormy Blue. Vì vậy, chúng ta chọn
              đáp án (C).
            </p>
          </div>
          <p>200. What problem does Mr. Phan mention in his e-mail?</p>
          <p>(A) He received the wrong item.</p>
          <p>(B) He was charged the wrong price.</p>
          <p>(C) The delivery time was too long.</p>
          <p>(D) The instructions were too confusing.</p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              Trong đoạn thứ 3 (email), ông Phan có nói "Unfortunately, the
              paint was not the one I had asked for. I had selected color SP 944
              but received SP 945 (Ocean Waves)." nghĩa là ông đã được giao một
              màu sơn khác cái ông muốn. Vì vậy, chúng ta chọn đáp án (A).
            </p>
          </div>
          <p>
            Khi xem lướt qua 3 tiêu đề hoặc phần đầu của 3 đoạn văn trên bạn sẽ
            kết luận được:
          </p>
          <ul>
            <li>Đoạn 1 là 1 mẫu tin quảng cáo của Công ty Sparky Paints.</li>
            <li>
              Đoạn 2 là thông tin đơn hàng trên website của Công ty Sparky
              Paints.
            </li>
            <li>
              Đoạn 3 là email được gửi bởi Arun Phan đến bộ phận Chăm sóc Khách
              hàng của Sparky Paints.
            </li>
          </ul>
          <p>
            Từ đây bạn có thể nắm được bối cảnh của toàn bài như sau: Mẫu tin
            quảng cáo của Công ty Sparky Paints được đăng lên → ông Arun Phan đã
            thấy thông tin và tiến hành đặt hàng trên website của công ty → phát
            sinh một vấn đề nào đó liên quan đến đơn hàng và thông tin quảng cáo
            mà ông Arun Phan cần hỗ trợ/giải quyết nên ông gửi email đến bộ phận
            Chăm sóc Khách hàng của Sparky Paints.
          </p>
          <p>
            Viết dài như vậy thôi nhưng các bạn yên tâm là bước này sẽ diễn ra
            cực kỳ nhanh. Và sau đó, bạn có thể tiến hành các bước trình tự làm
            bài như hướng dẫn và nhanh chóng tìm đọc được vị trí chính xác nội
            dung trả lời cho từng câu hỏi rồi nhé.
          </p>
          <h2>Bài tập ứng dụng</h2>
          <p>Bạn đọc bài sau và cho biết thứ tự trả lời câu hỏi.</p>
          <div className="part7-question">
            <p>
              <strong>International Films, Ltd.</strong>
            </p>
            <p>124 West Houston St., New York, NY 10012</p>
            <p>July 30,20-</p>
            <p>E.Denikos, Inc.</p>
            <p>Earos 42</p>
            <p>Aghia Paraskevi 15342</p>
            <p>Athens, Greece</p>
            <p>Dear Mr. Denikos:</p>
            <p>
              I am writing to you at the request of Ms.Evangelia Makestos, who
              is applying for a position as an assistant in your company.
            </p>
            <p>
              Ms.Maketos worked for me as an assistant during her summer
              vacations for the past three years. My colleagues and I found her
              to be a very
              <strong style={{ marginLeft: "10px" }}>competent</strong>
              and reliable employee. Her duties consisted of typing and copying
              documents, maintaining files, organizing appointment schedules,
              assisting visitors to the office, and other office tasks as they
              arose. She was able to handle multiple tasks and to work
              independently. She always assisted our clients in a knowledgeable,
              professional, and patient manner. In addition, she developed a
              high level of ability in the English language during the time she
              worked and studied in this country. We had hoped to rehire het at
              our company in a permanent position when she finished her business
              course here in New York. However, she has decided to go through
              with her original plan of returning to Greece.
            </p>
            <p>
              We will miss Ms. Makestos here at International Films, but I am
              happy to recommend her as a valuable addition to your company
              staff. Please feel free to contact me at the above address if you
              have any questions or need further information.
            </p>
            <p>Sincerely,</p>
            <p>Elizabeth Hogan, Director</p>
            <p>International Films, Ltd</p>
          </div>
          <p>
            <strong>1. What is Ms.Makestos probably doing?</strong>
          </p>
          <p>A. Job hunting </p>
          <p>B. Quitting her job </p>
          <p>C. Moving to New York </p>
          <p>D. Applying to school </p>
          <p>
            <strong>
              2. The word "competent" in paragraph 2 is closest in meaning to?
            </strong>
          </p>
          <p>A. responsible </p>
          <p>B. friendly</p>
          <p>C. skilled </p>
          <p>D. useful</p>
          <p>
            <strong>
              3. How long did Ms.Makestos work at International Film?{" "}
            </strong>
          </p>
          <p>A. One summer </p>
          <p>B. Three summer</p>
          <p>C. One year </p>
          <p>D. three years</p>
          <p>
            <strong>4. What kind of letter is this?</strong>
          </p>
          <p>A. A letter of complaint </p>
          <p>B. A job inquiry </p>
          <p>C. A letter of recommendation </p>
          <p>D. A request for information</p>
          <p>Thứ tự làm bài của bài tập này sẽ là 2 → 3 → 4 → 1,</p>
          <p>
            Câu 2 và 3 ta có thể lướt nhanh trong đoạn để tìm đáp án đúng, còn
            câu 4 cần chúng ta hiểu ý nghĩa đoạn văn 1 chút và câu 1 đòi hỏi suy
            luận.
          </p>
          <h1>
            Mẹo thi TOEIC #2: Đọc hiểu nhanh câu hỏi và rèn kỹ năng đọc lướt
            (Skim & Scan)
          </h1>
          <h2>Bạn thực hiện mẹo này như thế nào?</h2>
          <p>
            <strong>
              Cách xác định bài muốn hỏi gì: Nhìn từ khóa (key word) từ câu hỏi.
            </strong>
          </p>
          <p>
            <em>Ví dụ:</em>
          </p>
          <ul>
            <li>At what time does the club open? -→ hỏi thời gian mở cửa</li>
            <li>
              What is the price of the guitar? -→ hỏi về giá cả của cây đàn
            </li>
            <li>
              For whom is the invitation intended? -→ Đối tượng mà thư mời nhắm
              đến (hỏi người), v.v..
            </li>
          </ul>
          <p>
            <strong>Rèn kỹ năng skim và scan</strong>
          </p>
          <p>
            Khi biết đề muốn hỏi gì, ta xem lại bài đọc và tìm những đoạn có
            chứa từ khóa có trong câu hỏi (skim). Sau đó, xác định được nội dung
            cần tìm có ở đoạn nào rồi đọc kỹ đoạn đó để tìm được câu trả lời
            đúng (scan).
          </p>
          <p>
            <em>Ví dụ:</em>
          </p>
          <div className="part7-question">
            <p>
              More than 50,000 electronics retailers and distributors are
              expected at the McCormick Convention Center in Chicago starting
              next Saturday. Some 1,300 manufacturers from more than 35
              countries will exhibit their latest high-technology equipment,
              including industrial equipment, office machines, and household
              appliances. The new products won't appear on retailers' shelves
              until next fall, but show attendees will be able to purchase them
              during the show at special prices.
            </p>
            <p>Highlights of the show include the following:</p>
            <p>
              1. Demonstrations of robots designed for household use. Watch
              robots perform everyday household chores. Each day, models from a
              different group of manufacturers will be shown. Hall of Industry,
              3:00-5.00 P.M. daily.
            </p>
            <p>
              2. Talks by product developers representing companies from various
              countries on topics such as The Impact of Electronic Technology on
              business, Future Developments in Technology, How Electronic
              Technology Will Solve Our Transportation Problems, and more. Call
              the Convention Center or visit our website for the speak list.
              Wilson Auditorium, 7:00 P.M nightly.{" "}
            </p>
            <p>
              3. Musical equipment demonstrations. Show attendees will be able
              to try out the latest synthesizers, guitars, and other electronic
              musical equipment. Exhibit Hall A, ongoing.
            </p>
            <p>
              4. Inventors of tomorrow, a special hands-on workshop for children
              ages 10-13. Free with the price of admission to the show, but due
              to space limitations, pre-registration is required. Call the
              Convention Center or visit our website to register. Saturday and
              Sunday, 2:00 P.M.
            </p>
            <p>
              Visit the Convention Center website for a complete schedule of
              demonstrations, workshops, and special events going on throughout
              the show.
            </p>
            <p>
              Tickets are available by calling the Convention Center or through
              the Convention Center website. Special prices are available for
              multi-day passes.
            </p>
            <p>Contact us by phone: 800-555-0913 or on the web.</p>
            <p>
              The summer Consumer Electronics Show will continue through June 5.
            </p>
          </div>
          <p>
            <strong>1. What is the main topic of the press release?</strong>
          </p>
          <p>A. The McCormick Convention Center</p>
          <p>B. Chicago's convention centers </p>
          <p>C. Electronics retailers</p>
          <p>D. The Summer Consumer Electronics Show</p>
          <p>
            <strong>2. How many manufacturers are expected? </strong>
          </p>
          <p>A. 1,300</p>
          <p>B. 5,000</p>
          <p>C. 13,000</p>
          <p>D. 50,000</p>
          <p>
            <strong>3. What is on display at the Convention Center? </strong>
          </p>
          <p>A. High-technology products </p>
          <p>B. Distribution of networks </p>
          <p>C. Retail outlets</p>
          <p>D. Shelving samples</p>
          <p>
            Ta thấy câu 2 từ khóa là "how many manufacturers", vậy ta chỉ cần
            skim những phần có nhắc đến manufacturers và sau đó scan những đoạn
            đó để tìm câu trả lời đúng → chọn A (nội dung ở dòng thứ hai)
          </p>
          <p>
            Tương tự bạn hãy tự skim và scan để trả lời cho câu hỏi số 3 nhé.
          </p>
          <p>
            Đáp án câu 3 là: A (ở đoạn "more than 35 countries will exhibit
            their latest high-technology equipment")
          </p>
          <h1>
            Mẹo thi TOEIC #3: Dùng ngữ cảnh để trả lời những câu hỏi về từ vựng
            hoặc về ý chính của bài
          </h1>
          <h2>Bạn thực hiện mẹo này như thế nào?</h2>
          <p>
            Dùng ngữ cảnh để trả lời những câu hỏi về nghĩa của từ. Dù biết
            nghĩa từ này hay không, hãy nhìn ngữ cảnh xung quanh của từ đó để
            đoán nghĩa.
          </p>
          <p>
            Với những câu hỏi mang tính suy luận, thông tin sẽ không được nói
            trực tiếp trong bài. Khi đó, hãy nhìn những từ và ý trong bài mà
            được nhắc đến trong từng phương án.
          </p>
          <p>
            <em>Ví dụ:</em>
          </p>
          <div className="part7-question">
            <p>
              More than 50,000 electronics retailers and distributors are
              expected at the McCormick Convention Center in Chicago starting
              next Saturday. Some 1,300 manufacturers from more than 35
              countries will exhibit their latest high-technology equipment,
              including industrial equipment, office machines, and household
              appliances. The new products won't appear on retailers' shelves
              until next fall, but show attendees will be able to purchase them
              during the show at special prices.
            </p>
            <p>Highlights of the show include the following:</p>
            <p>
              1. Demonstrations of robots designed for household use. Watch
              robots perform everyday household chores. Each day, models from a
              different group of manufacturers will be shown. Hall of Industry,
              3:00-5.00 P.M. daily.
            </p>
            <p>
              2. Talks by product developers representing companies from various
              countries on topics such as The Impact of Electronic Technology on
              business, Future Developments in Technology, How Electronic
              Technology Will Solve Our Transportation Problems, and more. Call
              the Convention Center or visit our website for the speak list.
              Wilson Auditorium, 7:00 P.M nightly.
            </p>
            <p>
              3. Musical equipment demonstrations. Show attendees will be able
              to try out the latest synthesizers, guitars, and other electronic
              musical equipment. Exhibit Hall A, ongoing.
            </p>
            <p>
              4. Inventors of tomorrow, a special hands-on workshop for children
              ages 10-13. Free with the price of admission to the show, but due
              to space limitations, pre-registration is required. Call the
              Convention Center or visit our website to register. Saturday and
              Sunday, 2:00 P.M.
            </p>
            <p>
              Visit the Convention Center website for a complete schedule of
              demonstrations, workshops, and special events going on throughout
              the show.
            </p>
            <p>
              Tickets are available by calling the Convention Center or through
              the Convention Center website. Special prices are available for
              multi-day passes.
            </p>
            <p>Contact us by phone: 800-555-0913 or on the web.</p>
            <p>
              The summer Consumer Electronics Show will continue through June 5.
            </p>
          </div>
          <p>
            <strong>1. What is the main topic of the press release?</strong>
          </p>
          <p>A. The McCormick Convention Center</p>
          <p>B. Chicago's convention centers </p>
          <p>C. Electronics retailers</p>
          <p>D. The Summer Consumer Electronics Show</p>
          <p>
            <strong>2. How many manufacturers are expected? </strong>
          </p>
          <p>A. 1,300</p>
          <p>B. 5,000</p>
          <p>C. 13,000</p>
          <p>D. 50,000</p>
          <p>
            <strong>3. What is on display at the Convention Center? </strong>
          </p>
          <p>A. High-technology products </p>
          <p>B. Distribution of networks </p>
          <p>C. Retail outlets</p>
          <p>D. Shelving samples</p>
          <p>
            Ta thấy câu 2 từ khóa là "how many manufacturers", vậy ta chỉ cần
            skim những phần có nhắc đến manufacturers và sau đó scan những đoạn
            đó để tìm câu trả lời đúng → chọn A (nội dung ở dòng thứ hai)
          </p>
          <p>
            Tương tự bạn hãy tự skim và scan để trả lời cho câu hỏi số 3 nhé.
          </p>
          <p>
            Đáp án câu 3 là: A (ở đoạn "more than 35 countries will exhibit
            their latest high-technology equipment")
          </p>
          <h1>
            Mẹo thi TOEIC #3: Dùng ngữ cảnh để trả lời những câu hỏi về từ vựng
            hoặc về ý chính của bài
          </h1>
          <p>Bạn thực hiện mẹo này như thế nào?</p>
          <p>
            Dùng ngữ cảnh để trả lời những câu hỏi về nghĩa của từ. Dù biết
            nghĩa từ này hay không, hãy nhìn ngữ cảnh xung quanh của từ đó để
            đoán nghĩa.
          </p>
          <p>
            Với những câu hỏi mang tính suy luận, thông tin sẽ không được nói
            trực tiếp trong bài. Khi đó, hãy nhìn những từ và ý trong bài mà
            được nhắc đến trong từng phương án.
          </p>
          <p>
            <em>Ví dụ:</em>
          </p>
          <div className="part7-question">
            <p>
              More than 50,000 electronics retailers and distributors are
              expected at the McCormick Convention Center in Chicago starting
              next Saturday. Some 1,300 manufacturers from more than 35
              countries will exhibit their latest high-technology equipment,
              including industrial equipment, office machines, and household
              appliances. The new products won't appear on retailers' shelves
              until next fall, but show attendees will be able to purchase them
              during the show at special prices.
            </p>
            <p>Highlights of the show include the following:</p>
            <p>
              1. Demonstrations of robots designed for household use. Watch
              robots perform everyday household chores. Each day, models from a
              different group of manufacturers will be shown. Hall of Industry,
              3:00-5.00 P.M. daily.
            </p>
            <p>
              2. Talks by product developers representing companies from various
              countries on topics such as The Impact of Electronic Technology on
              business, Future Developments in Technology, How Electronic
              Technology Will Solve Our Transportation Problems, and more. Call
              the Convention Center or visit our website for the speak list.
              Wilson Auditorium, 7:00 P.M nightly.{" "}
            </p>
            <p>
              3. Musical equipment demonstrations. Show attendees will be able
              to try out the latest synthesizers, guitars, and other electronic
              musical equipment. Exhibit Hall A, ongoing.
            </p>
            <p>
              4. Inventors of tomorrow, a special hands-on workshop for children
              ages 10-13. Free with the price of admission to the show, but due
              to space limitations, pre-registration is required. Call the
              Convention Center or visit our website to register. Saturday and
              Sunday, 2:00 P.M.
            </p>
            <p>
              Visit the Convention Center website for a complete schedule of
              demonstrations, workshops, and special events going on throughout
              the show.
            </p>
            <p>
              Tickets are available by calling the Convention Center or through
              the Convention Center website. Special prices are available for
              multi-day passes.
            </p>
            <p>Contact us by phone: 800-555-0913 or on the web.</p>
            <p>
              The summer Consumer Electronics Show will continue through June 5.
            </p>
          </div>
          <p>
            <strong>1. What is the main topic of the press release?</strong>
          </p>
          <p>A. The McCormick Convention Center</p>
          <p>B. Chicago's convention centers </p>
          <p>C. Electronics retailers</p>
          <p>D. The Summer Consumer Electronics Show</p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              Đây là một câu dạng suy luận, và nếu để ý chúng ta sẽ thấy bài đọc
              nói đến "show" về "electronics" → đáp án D.
            </p>
          </div>
          <p>Hay trong ví dụ sau:</p>
          <div className="part7-question">
            <p>
              <strong>International Films, Ltd.</strong>
            </p>
            <p>124 West Houston St., New York, NY 10012</p>
            <p>July 30,20-</p>
            <p>E.Denikos, Inc.</p>
            <p>Earos 42</p>
            <p>Aghia Paraskevi 15342</p>
            <p>Athens, Greece</p>
            <p>Dear Mr. Denikos:</p>
            <p>
              I am writing to you at the request of Ms.Evangelia Makestos, who
              is applying for a position as an assistant in your company.
            </p>
            <p>
              Ms.Maketos worked for me as an assistant during her summer
              vacations for the past three years. My colleagues and I found her
              to be a very <strong>competent</strong> and reliable employee. Her
              duties consisted of typing and copying documents, maintaining
              files, organizing appointment schedules, assisting visitors to the
              office, and other office tasks as they arose. She was able to
              handle multiple tasks and to work independently. She always
              assisted our clients in a knowledgeable, professional, and patient
              manner. In addition, she developed a high level of ability in the
              English language during the time she worked and studied in this
              country. We had hoped to rehire het at our company in a permanent
              position when she finished her business course here in New York.
              However, she has decided to go through with her original plan of
              returning to Greece.
            </p>
            <p>
              We will miss Ms. Makestos here at International Films, but I am
              happy to recommend her as a valuable addition to your company
              staff. Please feel free to contact me at the above address if you
              have any questions or need further information.
            </p>
            <p>Sincerely,</p>
            <p>Elizabeth Hogan, Director</p>
            <p>International Films, Ltd</p>
          </div>
          <p>2. The word "competent" in paragraph 2 is closest in meaning to</p>
          <p>A. responsible </p>
          <p>B. friendly</p>
          <p>C. skilled </p>
          <p>D. useful</p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              Nếu bạn không biết nghĩa của từ competent, bạn có thể nhìn vào
              những câu chữ xung quanh để đoán. Chúng ta biết được competent ở
              đây nói về 1 đức tính gì đó của nhân viên, và trong các câu sau đó
              bài đọc hướng đến nói về vấn đề cô Maketos làm rất nhiều việc và
              làm tốt → chúng ta có thể đoán được competent có nghĩa là skilled
              (có tay nghề làm việc cao).
            </p>
          </div>
          <h1>Mẹo #4: Tìm thông tin kỹ và không kết luận quá vội vàng</h1>
          <p>Chúng ta không nên kết luận quá vội vàng khi làm bài Part 7:</p>
          <ul>
            <li>
              Nếu trong bài đọc có thông tin khác với thực tế đời sống thì chúng
              ta cũng phải làm theo, vì câu hỏi trắc nghiệm chỉ hỏi theo bài
              đọc, không hỏi theo đời sống.
            </li>
            <li>
              Nếu trong bài đọc có bảng, biểu đồ, mẫu đơn, phiếu khảo sát, v.v
              thì nên cẩn thận vì phía dưới có thể sẽ có thông tin bổ sung cho
              chúng.
            </li>
            <li>
              Với bài đọc đôi (2 đoạn văn), sẽ có ít nhất một câu hỏi yêu cầu
              bạn phải đọc lại cả 2 bài và liên kết thông tin từ chúng. Do đó mà
              khi đọc tìm ý cho phần này (skim và scan), nên nhìn qua cả 2 bài
              trước khi trả lời.
            </li>
          </ul>
          <div className="part7-question">
            <p>From: Christina van Dijk</p>
            <p>To: Heinz Niebaum</p>
            <p>Subject: Meeting next week</p>
            <p>Dear Heinz,</p>
            <p>
              I am coming to Germany next Wednesday at 10:00 A.M. I will be at
              out office in Berlin. I am free on Thursday at 9:00 A.M. to go to
              Potsdam and meet with you. Are you available then?
            </p>
            <p>
              I'd like to talk about ordering computer systems from your
              company. Our offices in Utrecht and Tillburg are expanding and
              need to upgrade their technology. I'd also like to meet with a
              trainer from your company so that we can work out a training
              package. Also, could you bring a training manual with you?
            </p>
            <p>
              Let me know if you need me to bring anything. Also let me know if
              9:00 isn't good for you. Maybe we can work something out later in
              the day.
            </p>
            <p>Christina</p>
            <p>From: Heinz Niebaum</p>
            <p>To: Christina van Dijk</p>
            <p>Subject: Re: Meeting next week</p>
            <p>Christina,</p>
            <p>
              I'm delighted that you're coming to Germany. It will be very
              convenient for us to meet because I will actually be in Potsdam
              from Tuesday through Friday, so we'll be able to meet at our
              office there on the day you suggested. The time you suggested is a
              bit early for me as I will be meeting with our CEO all morning.
              Are you available to meet at noon? Perhaps we could meet during
              lunch.
            </p>
            <p>
              I will bring the material that you requested. Theodor Eckert, our
              training supervisor, will join us. It would be helpful if you
              could bring some of your company's brochures and a copy of the
              annual report for us. Thank you.
            </p>
            <p>Heinz</p>
          </div>
          <p>
            <strong>1. Where will Heinz and Christina meet? </strong>
          </p>
          <p>A. Berlin</p>
          <p>B. Potsdam </p>
          <p>C. Utrecht </p>
          <p>D. Tillburg</p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              Câu hỏi này yêu cầu chúng ta phải đọc cả 2 email mới biết được họ
              sẽ gặp nhau trong công ty của Heinz ở Potsdam, nên đáp án là B.
            </p>
          </div>
          <p>Tương tự bạn hãy thực hành trên hai câu dưới đây.</p>
          <p>
            <strong>2. What day will they meet? </strong>
          </p>
          <p>A. Tuesday </p>
          <p>B. Wednesday</p>
          <p>C. Thursday </p>
          <p>D. Friday</p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              Đáp án là C. Christina đề nghị gặp vào thứ 5 và Heinz đã đồng ý.
            </p>
          </div>
          <p>
            <strong>
              3. What will Heinz bring to the meeting with Christina?
            </strong>
          </p>
          <p>A. Some computers</p>
          <p>B. A training manual </p>
          <p>C. Some brochure </p>
          <p>D. An annual report </p>
          <button>Đáp án</button>
          <div className="part7-answer">
            <p>
              Đáp án là B. Christina yêu cầu Heinz mang theo sách hướng dẫn tập
              huấn và anh ấy đồng ý.
            </p>
          </div>
          <h1>Làm bài ứng dụng thêm</h1>
          <p>
            Bạn có thể sử dụng các mẹo ở trên vào các bài tập dưới đây để ứng
            dụng thử nhé:
          </p>
          <CommentComp
          colectionName={"CommentPart7"}
          colectionReaction={"CommentReactionPart7"}
        />
        </div>
        <Footer />
      </div>
    );
  }
}
