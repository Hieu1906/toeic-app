import { Col, message, Row, Skeleton } from "antd";
import _ from "lodash";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import "./Footer.css";
export class Footer extends BaseComponent<{}, {}> {
  render() {
    return (
      <div style={{ marginTop: 75 }}>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        {/*---- Include the above in your HEAD tag --------*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
        <footer id="dk-footer" className="dk-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="dk-footer-box-info">
                  <a href="index.html" className="footer-logo">
                    <img
                      src="images/footer_logo.png"
                      alt="footer_logo"
                      className="img-fluid"
                    />
                  </a>
                  <p
                    className="footer-info-text"
                    style={{ color: "white!important" }}
                  >
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </p>
                  <div className="footer-social-link">
                    <h3>Follow us</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Social link */}
                </div>
                {/* End Footer info */}
                {/* <div className="footer-awarad">
                  <img src="images/icon/best.png" />
                  <p>Best Design Company 2019</p>
                </div> */}
              </div>
              {/* End Col */}
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-us">
                      <div className="contact-icon">
                        <i className="fa fa-map-o" aria-hidden="true" />
                      </div>
                      {/* End contact Icon */}
                      <div className="contact-info">
                        <h3>Số 1 Đại Cồ Việt</h3>
                        <p>Hai Bà Trưng -Hà Nội</p>
                      </div>
                      {/* End Contact Info */}
                    </div>
                    {/* End Contact Us */}
                  </div>
                  {/* End Col */}
                  <div className="col-md-6">
                    <div className="contact-us contact-us-last">
                      <div className="contact-icon">
                        <i
                          className="fa fa-volume-control-phone"
                          aria-hidden="true"
                        />
                      </div>
                      {/* End contact Icon */}
                      <div className="contact-info">
                        <h3>+84 03493948883</h3>
                        <p>Gọi cho chúng tôi</p>
                      </div>
                      {/* End Contact Info */}
                    </div>
                    {/* End Contact Us */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Contact Row */}
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="footer-widget footer-left-widget">
                      <div className="section-heading">
                        <h3>Useful Links</h3>
                        <span className="animate-border border-black" />
                      </div>
                      <ul>
                        <li>
                          <a href="#">Về chúng tôi</a>
                        </li>
                        <li>
                          <a href="#">Dịch vụ</a>
                        </li>
                        <li>
                          <a href="#">Khóa học</a>
                        </li>
                        <li>
                          <a href="#">Giảng viên viên</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Liên hệ </a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Thành tựu</a>
                        </li>
                        <li>
                          <a href="#">Câu Hỏi</a>
                        </li>
                      </ul>
                    </div>
                    {/* End Footer Widget */}
                  </div>
                  {/* End col */}
                  <div className="col-md-12 col-lg-6">
                    <div className="footer-widget">
                      <div className="section-heading">
                        <h3>Subscribe</h3>
                        <span className="animate-border border-black" />
                      </div>
                      <p>
                        {/* Don’t miss to subscribe to our new feeds, kindly fill the form below. */}
                        Reference site about Lorem Ipsum, giving information on
                        its origins, as well.
                      </p>
                      <form action="#">
                        <div className="form-row">
                          <div className="col dk-footer-form">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email Address"
                            />
                            <button type="submit">
                              <i className="fa fa-send" />
                            </button>
                          </div>
                        </div>
                      </form>
                      {/* End form */}
                    </div>
                    {/* End footer widget */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
              {/* End Col */}
            </div>
            {/* End Widget Row */}
          </div>
          {/* End Contact Container */}
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <span>
                    Toeic sinh viên HUST, Website ôn thi Toeic miễn phí
                  </span>
                </div>
                {/* End Col */}
                <div className="col-md-6">
                  <div className="copyright-menu">
                    <ul>
                      <li>
                        <a href="#">Trang chủ</a>
                      </li>
                      <li>
                        <a href="#">Chính sách</a>
                      </li>
                      <li>
                        <a href="#">Điều khoản</a>
                      </li>
                      <li>
                        <a href="#">Liên hệ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Copyright Container */}
          </div>
          {/* End Copyright */}
          {/* Back to top */}
          <div id="back-to-top" className="back-to-top">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="btn btn-dark"
              title="Back to Top"
              style={{ display: "block" }}
            >
              <i className="fa fa-angle-up" />
            </button>
          </div>
          {/* End Back to top */}
        </footer>
      </div>
    );
  }
}
