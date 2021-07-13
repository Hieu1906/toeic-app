import moment from "moment";
import * as React from "react";
import { Link, Route } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BaseComponent } from "../../00.common/00.components/BaseComponent";

import { NewsToeic } from "../../00.common/01.model/NewsToeic";
import { newsToeicService } from "../../00.common/02.service/NewsToeicService";
import { ROUTER } from "../../00.common/const";

import styles from "./NewsToeic.module.scss";
interface NewsListingStates {
  news1: NewsToeic[];
  news2: NewsToeic[];
  news3: NewsToeic[];
  news4: NewsToeic[];
  allNews: NewsToeic[];
}
interface NewsListingProps {}

moment.locale("vi");
export default class NewsListing extends BaseComponent<
  NewsListingProps,
  NewsListingStates
> {
  constructor(props: NewsListingProps) {
    super(props);
    this.state = {
      news1: [],
      news2: [],
      news3: [],
      news4: [],
      allNews: [],
    };
    this.onMount(() => {
      this.getData();
    });
  }

  async getData() {
    let allNews = await newsToeicService.getAll<NewsToeic>("NewsToeic");
    allNews = allNews.filter((item) => {
      return item.Type == "NewsToeic";
    });
    let news1 = allNews.filter((item) => {
      return item.Placement == 1;
    });
    let news2 = allNews.filter((item) => {
      return item.Placement == 2;
    });

    let news3 = allNews.filter((item) => {
      return item.Placement == 3;
    });

    let news4 = allNews.filter((item) => {
      return item.Placement == 4;
    });

    this.setState({
      allNews,
      news1: news1,
      news2: news2,
      news3: news3,
      news4: news4,
    });
  }
  public renderItem(item: NewsToeic) {
    return (
      <div onClick={() => {}} className={styles.newsListingUpdate__item}>
        <Link to={`${ROUTER.NEWSDETAIL}?keyDoc=${item.KeyDoc}`}>
          <img
            className={styles.newsListingUpdate__item__image}
            src={`${item.BannerUrl}?width=277&height=186`}
          />
        </Link>
        <div className={styles.newsListingUpdate__item__infor}>
          {item.ShowIconNews && iconSmallNews}
          <div
            className={styles.newsListingUpdate__item__infor__inforCategories}
          >
            {item.Category.Title ? item.Category.Title : "Tin tức"}
          </div>
        </div>
        <div className={styles.newsListingUpdate__item__Title}>
          {item.Title}
        </div>
        <div className={styles.newsListingUpdate__item__createdAndView}>
          <div
            className={
              styles.newsListingUpdate__item__createdAndView__inforDate
            }
          >
            {oclock}
            {item.Created &&
              moment(item.Created!.seconds * 1000).fromNow()}{" "}
          </div>
          <div
            className={
              styles.newsListingUpdate__item__createdAndView__inforView
            }
          >
            {iconEye}
            15 lượt xem
          </div>
        </div>
        <div className={styles.newsListingUpdate__item__Content}>
          {item.ShortDescription}
        </div>
      </div>
    );
  }

  public renAllNews(): React.ReactNode {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2500,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        {window.innerWidth > 1023 ? (
          <div className={styles.newsListingUpdate}>
            {this.state.news1 &&
              this.state.news1.length > 0 &&
              this.renderItem(this.state.news1[0])}
            {this.state.news2 &&
              this.state.news2.length > 0 &&
              this.renderItem(this.state.news2[0])}
            {this.state.news3 &&
              this.state.news3.length > 0 &&
              this.renderItem(this.state.news3[0])}
            {this.state.news4 &&
              this.state.news4.length > 0 &&
              this.renderItem(this.state.news4[0])}
          </div>
        ) : (
          <div className={styles.wraperContent}>
            <Slider {...settings}>
              {this.state.allNews.length > 0
                ? this.state.allNews.map((itemNews, index) => {
                    return (
                      <div className={styles.newsListingUpdate}>
                        {this.renderItem(itemNews)}
                      </div>
                    );
                  })
                : ""}
            </Slider>
          </div>
        )}
      </>
    );
  }

  public render() {
    return <>{this.renAllNews()}</>;
  }
}

const iconEye = (
  <svg
    style={{ marginRight: 4 }}
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.25 1.875C7.03906 1.89844 6.71094 1.94531 6.5 1.99219C6.59375 2.15625 6.66406 2.46094 6.6875 2.625C6.6875 3.35156 6.07812 3.9375 5.375 3.9375C5.1875 3.9375 4.88281 3.86719 4.74219 3.77344C4.67188 3.98438 4.625 4.28906 4.625 4.5C4.625 5.95312 5.79688 7.125 7.25 7.125C8.70312 7.125 9.875 5.95312 9.875 4.5C9.875 3.07031 8.70312 1.875 7.25 1.875ZM13.9062 4.17188C12.6406 1.6875 10.1094 0 7.25 0C4.36719 0 1.83594 1.6875 0.570312 4.17188C0.523438 4.26562 0.5 4.40625 0.5 4.52344C0.5 4.61719 0.523438 4.75781 0.570312 4.85156C1.83594 7.33594 4.36719 9 7.25 9C10.1094 9 12.6406 7.33594 13.9062 4.85156C13.9531 4.75781 13.9766 4.61719 13.9766 4.5C13.9766 4.40625 13.9531 4.26562 13.9062 4.17188ZM7.25 7.875C4.92969 7.875 2.79688 6.58594 1.67188 4.5C2.79688 2.41406 4.92969 1.125 7.25 1.125C9.54688 1.125 11.6797 2.41406 12.8047 4.5C11.6797 6.58594 9.54688 7.875 7.25 7.875Z"
      fill="#8C8C8C"
    />
  </svg>
);

const iconSmallNews = (
  <svg
    className={styles.newsListingUpdate__item__iconNewsPlacement1}
    width="25"
    height="16"
    viewBox="0 0 25 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i)">
      <path
        d="M0 0H15.71C20.6806 0 24.71 4.02944 24.71 9V16H8.99999C4.02943 16 0 11.9706 0 7V0Z"
        fill="#FC0018"
      />
    </g>
    <path
      d="M3.1679 10.5495L3.11279 5.65528L4.65768 5.63751C4.65768 5.63751 6.11902 8.52995 6.23813 8.83751H6.25946C6.18479 8.23306 6.12257 5.62506 6.12257 5.62506L7.31902 5.61084L7.37413 10.4997L5.99635 10.5157L4.27724 7.14862C4.31813 7.76195 4.36613 10.5264 4.36613 10.5264L3.1679 10.5495Z"
      fill="white"
    />
    <path
      d="M11.328 8.48392L9.57154 8.49992L9.58221 9.39947L11.5484 9.3888L11.5609 10.4555L8.28265 10.4928L8.22754 5.60391L11.4044 5.56836L11.4169 6.63503L9.55198 6.65636V7.44036L11.3155 7.43325L11.328 8.48392Z"
      fill="white"
    />
    <path
      d="M13.0686 10.4373L11.8899 5.56263L13.2961 5.54663L13.8792 9.07197C13.9148 8.81597 14.441 5.53241 14.441 5.53241L15.8401 5.51641C15.8401 5.51641 16.3646 8.71641 16.4019 9.00619L16.9139 5.50397L18.2419 5.48975L17.0934 10.3929L15.6712 10.4089L15.3174 8.49952C15.2357 8.04975 15.0828 7.03641 15.0828 7.03641C15.0828 7.03641 14.905 8.3093 14.8677 8.50486L14.5121 10.4231L13.0686 10.4373Z"
      fill="white"
    />
    <path
      d="M20.864 10.4302C20.371 10.4302 20.1215 10.1837 20.1156 9.69068C20.1097 9.19765 20.3532 8.94342 20.8463 8.92802C21.3346 8.92802 21.5864 9.1769 21.6018 9.67468C21.6172 10.1725 21.3737 10.4243 20.8711 10.4302H20.864ZM20.3663 8.66668L20.1423 5.46668L21.4916 5.45068L21.3387 8.65068L20.3663 8.66668Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_i"
        x="0"
        y="-0.5"
        width="24.71"
        height="16.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-0.5" />
        <feGaussianBlur stdDeviation="2.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </svg>
);
const oclock = (
  <svg
    style={{ marginRight: 4 }}
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 0.6875C3.28906 0.6875 0.6875 3.28906 0.6875 6.5C0.6875 9.71094 3.28906 12.3125 6.5 12.3125C9.71094 12.3125 12.3125 9.71094 12.3125 6.5C12.3125 3.28906 9.71094 0.6875 6.5 0.6875ZM6.5 11.1875C3.89844 11.1875 1.8125 9.10156 1.8125 6.5C1.8125 3.92188 3.89844 1.8125 6.5 1.8125C9.07812 1.8125 11.1875 3.92188 11.1875 6.5C11.1875 9.10156 9.07812 11.1875 6.5 11.1875ZM7.92969 8.75C8.07031 8.84375 8.23438 8.82031 8.32812 8.67969L8.77344 8.09375C8.86719 7.95312 8.84375 7.78906 8.70312 7.69531L7.15625 6.54688V3.21875C7.15625 3.07812 7.01562 2.9375 6.875 2.9375H6.125C5.96094 2.9375 5.84375 3.07812 5.84375 3.21875V7.08594C5.84375 7.15625 5.86719 7.25 5.9375 7.29688L7.92969 8.75Z"
      fill="#8C8C8C"
    />
  </svg>
);
