import React from "react";
import "./sass/_grid.css";
import "./sass/main.css";

export default class Part7 extends React.Component {
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
        </div>
      </div>
    );
  }
}
