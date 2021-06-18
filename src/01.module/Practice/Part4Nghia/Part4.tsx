import React from "react";
import "./scss/main.css";
import "./scss/_grid.css";

export default class Part4 extends React.Component {
  gotoHandle(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="part4">
         
        <div className="container">
          <h1 className="part4-title">Mẹo thi TOEIC Part 4 : Bài nói chuyện</h1>
          <p className="part4-intro">
            Part 4 - bài nói chuyện là một phần thi tương đối thử thách với
            nhiều người luyện thi TOEIC vì đoạn audio khá dài, đòi hỏi bạn phải
            tập trung. Vậy làm sao để làm phần này vừa nhanh vừa chính xác? Hãy
            cùng tìm hiểu các mẹo làm Part 4 trong bài viết này nhé!
          </p>
          <p className="part4-hint">
            (nhấn vào hình để tìm hiểu thêm về mẹo và xem ví dụ)
          </p>
          <div className="part4-box">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <a href="" onClick={this.gotoHandle}>
                  <img
                    src="https://tienganhmoingay.com/media/images/uploads/2017/11/10/meo_thi_toeic_phan_4_1.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <a href="" onClick={this.gotoHandle}>
                  <img
                    src="https://tienganhmoingay.com/media/images/uploads/2017/11/10/meo_thi_toeic_phan_4_2.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <a href="" onClick={this.gotoHandle}>
                  <img
                    src="https://tienganhmoingay.com/media/images/uploads/2017/11/10/meo_thi_toeic_phan_4_3.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="part4-section1">
            <h1 className="part4-section1__title">
              Mẹo thi TOEIC #1: Đọc trước câu hỏi và Suy luận nội dung của bài
              nói từ câu hỏi
            </h1>
            <p className="part4-section1__question">
              Bạn thực hiện mẹo này như thế nào?
            </p>
            <p className="part4-section1__hint">
                Bạn có đủ thời gian để đọc trước các câu hỏi để có thể dự đoán nội dung của bài nói chuyện và biết trước mình cần chú ý đến những chi tiết nào trong bài nói chuyện bằng cách làm như sau:
            </p>
            <table className='part4-section1__table'>
                <tr>
                    <th>
                        Thời gian
                    </th>
                    <th>
                        Bạn làm gì?
                    </th>
                    <th>
                        Kết quả
                    </th>
                </tr>
                <tr>
                    <th>
                        Đoạn băng đọc hướng dẫn cách làm bài Part 4.
                    </th>
                    <th>
                    Bạn đọc 3 câu hỏi trắc nghiệm của bài nói chuyện đầu tiên của Part 4.
                    </th>
                    <th>
                    Việc đọc trước câu hỏi giúp bạn dự đoán được nội dung của bài nói chuyện và biết mình cần chú ý đến những chi tiết nào trong bài nói chuyện.
                    </th>
                </tr>
                <tr>
                    <th>
                    Đoạn băng đọc bài nói chuyện.
                    </th>
                    <th>
                    Bạn tập trung nghe bài nói chuyện và đánh trắc nghiệm vào Answer Sheet.
                    </th>
                    <th>
                    Bạn làm xong bài nói chuyện này một cách dễ dàng hơn nhờ đã đọc trước câu hỏi.
                    </th>
                </tr>
                <tr>
                    <th>
                    Đoạn băng đọc từng câu hỏi trắc nghiệm của bài nói chuyện.
                    </th>
                    <th>
                    Bạn đọc 3 câu hỏi trắc nghiệm của bài nói chuyện tiếp theo.
                    </th>
                    <th>
                    Việc đọc trước câu hỏi giúp bạn dự đoán được nội dung của bài nói chuyện và biết mình cần chú ý đến những chi tiết nào trong bài nói chuyện.
                    </th>
                </tr>
                <tr>
                    <th>
                    Đoạn băng đọc bài nói chuyện tiếp theo.
                    </th>
                    <th>
                    Bạn tập trung nghe bài nói chuyện và đánh trắc nghiệm vào Answer Sheet.
                    </th>
                    <th>
                    Bạn làm xong bài nói chuyện này một cách dễ dàng hơn nhờ đã đọc trước câu hỏi.
                    </th>
                </tr>
            </table>
            <p>và cứ làm như vậy cho đến hết Part 4!</p>
            <ul>
                <li>Đọc hiểu nghĩa của các câu hỏi:
                    <p>
                    Bạn có thể xem thêm Cách làm các loại câu hỏi trong Part 4.
                    </p>
                </li>
                <li>
                    Hình dung xem nội dung của bài nói chuyện sắp tới hướng đến điều gì và diễn ra ở đâu:
                    <p>Bạn hãy xem tiếp hướng dẫn cách làm qua ví dụ dưới đây nhé!</p>
                </li>
            </ul>
            <p>
                Video hướng dẫn Mẹo số 1:
            </p>
            <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" height="315" src="https://www.youtube.com/embed/hoZLlm1KfDI?rel=0&amp;controls=1&amp;modestbranding=1&amp;showinfo=1" width="560"></iframe>
            <p>Ví dụ:</p>
            <p>Where is the announcement being heard? → Thông báo được tiến hành ở đâu?</p>
            <p>A. At an airport. → tại sân bay </p>
            <p>B. On the plane. → trên máy bay </p>
            <p>C. At a consulate. → tại lãnh sự quán </p>
            <p>D. At a bus station. → trong bến xe buýt </p>
            <p>Nếu chúng ta đọc lướt qua các đáp án ở dưới sẽ thấy có gate, có ticket, passport thì khả năng câu đầu tiên rất cao là bài nói diễn ra ở sân bay, và bài nói chuyện sẽ có khả năng liên quan đến chi tiết cổng lên máy bay.</p>
            <p>Nắm được những yếu tố trên sẽ giúp chúng ta dễ dàng nghe được các ý chính cần để chọn đáp án cho các câu hỏi.</p>
            <h2 className='part4-section1__question'>Bài tập ứng dụng</h2>
              <p>Giờ thì bạn hãy thử ứng dụng mẹo trên vào bài tập sau nhé:</p>
              <p style={{margin:'18px 0'}}>1. Bạn đọc lướt qua các câu hỏi</p>
              <p>Who is listening to this announcement?</p>
              <p>A. Politicians. </p>
              <p>B. Guides.</p>
              <p>C. Diplomats.</p>
              <p>D. Tourists.</p>
              <p style={{marginTop:'18px'}}>How is the group traveling? </p>
              <p>A. By van.</p>
              <p>B. By car. </p>
              <p>C. By bus.</p>
              <p>D. By train.</p>
              <p style={{marginTop:'18px'}}>How long will the group stay at City Hall?</p>
              <p>A. Two hours.</p>
              <p>B. Three hours.</p>
              <p>C. Four hours.</p>
              <p>D. Five hours.</p>
              <p style={{margin:'18px 0'}}>2. Bạn đoán thử xem câu trả lời của câu hỏi thứ nhất là gì nhé. </p>
              <p style={{margin:'18px 0'}}>3. Sau đó nghe lại và kiểm tra.</p>
              <audio ref="audio_tag" src="https://tienganhmoingay.com/static/ToeicTests/audios/Longman_Practice_Tests_Test_3/questions_audios/92_94.mp3" controls/>
              <button className ='part4-section1__btn'>Đáp án và giải thích</button>
          </div>
          <div className="part4-section2">
            <h1 className="part4-section2__title">Mẹo thi TOEIC #2: Nghe và tô đáp án ngay lập tức</h1>
            <h2 className='part4-section2__question'>Bạn thực hiện mẹo này như thế nào?</h2>
            <p>Phải hết sức tập trung khi bài đọc bật lên vì nếu bạn lơ đãng một tí thì có thể sẽ phải đánh lụi cả 3 câu của bài nói đó.</p>
            <p>Ở phần này, cả câu hỏi lẫn đáp án trong phần này vẫn xuất hiện theo đúng thứ tự của bài nghe. Cho nên chúng ta cần nghe nắm ý nhanh và chọn đáp án cho thật mau lẹ.</p>
            <p>Đặc biệt bạn nên thận trọng với các con số trong phần nghe này, rất dễ đánh sai đáp án.</p>
            <p>Ví dụ:</p>
            <p>Bạn sẽ nghe:</p>
            <audio ref="audio_tag" src="https://tienganhmoingay.com/static/ToeicTests/audios/Longman_Practice_Tests_Test_3/questions_audios/86_88.mp3" controls/>
            <p>Where is the announcement being heard? → Thông báo được tiến hành ở đâu?</p>
            <p>A. At an airport. → tại sân bay </p>
            <p>B. On the plane. → trên máy bay </p>
            <p>C. At a consulate. → tại lãnh sự quán </p>
            <p>D. At a bus station. → trong bến xe buýt </p>
            <p style={{margin:'18px 0'}}>What is the gate number? → Đó là cổng số bao nhiêu?</p>
            <p>A. 15. → 15</p>
            <p>B. 16. → 16 </p>
            <p>C. 58. → 58 </p>
            <p>D. 60. → 60</p>
            <p style={{margin:'18px 0'}}>Who can go to the head of the line? → Ai có thể di chuyển lên đầu hàng?</p>
            <p>A. People with passports. → người có hộ chiếu </p>
            <p>B. People with tickets. → người có vé </p>
            <p>C. People with small bags. → người có túi hành lý nhỏ </p>
            <p>D. People with small children. → người có trẻ theo cùng </p>
            <p>Câu hỏi về số cổng sẽ đi trước câu hỏi về người có thể đi lên đầu hàng. Và hãy cẩn thận giữa 16 và 60 trong câu trên nhé.</p>
            <h2 className='part4-section2__question'>Bài tập ứng dụng</h2>
            <p>Giờ thì bạn hãy thử ứng dụng mẹo trên vào bài tập sau nhé:</p>
            <p>1. Bạn nghe</p>
            <audio ref="audio_tag" src="https://tienganhmoingay.com/static/ToeicTests/audios/Longman_Practice_Tests_Test_2/questions_audios/83_85.mp3" controls/>
            <p>What is opening? </p>
            <p>A. The Civic Center </p>
            <p>B. A new golf course </p>
            <p>C. A downtown office </p>
            <p>D. A residential hotel </p>
            <p>What is being offered? </p>
            <p>A. Golf lessons </p>
            <p>B. City apartment </p>
            <p>C. New watches </p>
            <p>D. Club memberships </p>
            <p>What is the cost of a one-year membership? </p>
            <p>A. $600 </p>
            <p>B. $650 </p>
            <p>C. $700 </p>
            <p>D. $1,100</p>
            <p>2. Bạn chọn đáp án.</p>
          </div>
              

          
        </div>
      </div>
    );
  }
}
