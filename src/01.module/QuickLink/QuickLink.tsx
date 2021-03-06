// eslint-disable-next-line
import "./scss/QuickLink.css";
import { orderBy } from "lodash";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";
import { quickLinkService } from "../../00.common/02.service/quickLinkService";
import { storage } from "../../firebase.config";
import { Link } from "react-router-dom";
import { QuickLink } from "../../00.common/01.model/QuickLink";
interface staeHomepage {
  logo: string;
  img1: string;
  img2: string;
  img3_viewImg: string;
  allQuickLink: QuickLink[];
}

interface propsHomePage {}

export class QuickLinkApp extends BaseComponent<propsHomePage, staeHomepage> {
  constructor(props: propsHomePage) {
    super(props);
    this.state = {
      logo: "",
      img1: "",
      img2: "",
      img3_viewImg: "",
      allQuickLink: [],
    };
    this.onMount(async () => {
      await Promise.all([this.getListQuickLink()]);
      let section = document.querySelectorAll<HTMLElement>(".abc");
      let aniActive = ()=>{
        for (let i = 0; i < section.length; i++) {
          const element = section[i];
          let scrollY = window.scrollY
          let positions = element.offsetTop
          if (scrollY>positions-78) {
            element.classList.add("animation-active")
        }
        }
      }
      window.addEventListener ("scroll",aniActive)

      
      // for (let i = 0; i < section.length - 1; i++) {
      //   const sections = section[i];
      //   let position;
      //   window.addEventListener("scroll", () => {
      //     position = section[i].offsetTop;
      //     section[i].classList.add('xyz')
      //   });
      // }
    });
  }
  
  async getListQuickLink() {
    let allQuickLink = orderBy(
      await quickLinkService.getAll<QuickLink>("QuickLink"),
      "Order",
      "asc"
    );

    this.setState({
      allQuickLink,
    });
  }
  async componentWillMount() {
    await this.getImgUrl();
  }
  async getImgUrl() {
    let [logo, img1, img2, img3_viewImg] = await Promise.all([
      storage.ref().child("CommonDoc/Logo/logo.png").getDownloadURL(),
      storage.ref().child("CommonDoc/ImgHomePage/img1.png").getDownloadURL(),
      storage.ref().child("CommonDoc/ImgHomePage/img2.png").getDownloadURL(),
      storage
        .ref()
        .child("CommonDoc/ImgHomePage/img3_viewImg.png")
        .getDownloadURL(),
    ]);

    this.setState({
      logo,
      img1,
      img2,
      img3_viewImg,
    });
  }

  render() {
    return (
      <div className={`QuickLink`}>
        <div
          className={`QuickLink__block1 abc`}
          style={{ backgroundImage: `url(${this.state.img2})` }}
        >
          <div className={`QuickLink__block1__infor`}>
            <div className={`QuickLink__block1__infor__introText`}>
              ????? luy???n t???p TOEIC phong ph??
            </div>
            <div
              className={`QuickLink__block1__infor__img3_viewImg`}
              style={{ backgroundImage: `url(${this.state.img3_viewImg})` }}
            >
              <div
                className={`QuickLink__block1__infor__img3_viewImg__text`}
              >
                50+ ????? thi th??? TOEIC v?? 7000+ ????? luy???n t???p cho b???n tha h??? luy???n
                thi
              </div>
            </div>
          </div>
          <img
            src={this.state.img1}
            className={`QuickLink__block1__img1`}
          />
          <div className={`QuickLink__block1__infor`}>
            <div className={`QuickLink__block1__infor__introText`}>
              ????p ??n c?? GI???I TH??CH c???n k???
            </div>
            <div
              className={`QuickLink__block1__infor__img3_viewImg`}
              style={{ backgroundImage: `url(${this.state.img3_viewImg})` }}
            >
              <div
                className={`QuickLink__block1__infor__img3_viewImg__text`}
              >
                Gi??p b???n hi???u r?? v?? sao ????p ??n n??y th?? ????ng c??n ????p ??n kia th??
                sai
              </div>
            </div>
          </div>
        </div>
        <div className={`QuickLink__block2 abc`}>
          <div className={`QuickLink__block2__title`}>
            Toeic sinh vi??n HUST c?? t???t c??? m???i th??? b???n c???n ????? luy???n thi TOEIC hi???u
            qu???
          </div>
          <div className={`QuickLink__block2__content`}>
            {this.state.allQuickLink.slice(0, 4).map((item, key) => (
              <div
                key={key}
                className={`QuickLink__block2__content__img3_viewImg`}
                style={{ backgroundImage: `url(${this.state.img3_viewImg})` }}
              >
                <img
                  src={item.ImgUrl}
                  className={
                    `QuickLink__block2__content__img3_viewImg__img`
                  }
                />
              </div>
            ))}
          </div>
          <div className={`QuickLink__block2__content`}>
            {this.state.allQuickLink.slice(4, 8).map((item, key) => (
              <div>
                <div
                  key={key}
                  className={`QuickLink__block2__content__img3_viewImg`}
                  style={{ backgroundImage: `url(${this.state.img3_viewImg})` }}
                >
                  <img
                    src={item.ImgUrl}
                    className={
                      `QuickLink__block2__content__img3_viewImg__img`
                    }
                  />
                </div>
                <div className={`QuickLink__block2__content__title`}>
                  {" "}
                  {item.Title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
