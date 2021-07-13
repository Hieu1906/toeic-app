import * as React from "react";
import { Link } from "react-router-dom";
import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { NewsToeic } from "../../../00.common/01.model/NewsToeic";
import { newsToeicService } from "../../../00.common/02.service/NewsToeicService";
import { ROUTER } from "../../../00.common/const";

import styles from "./NewsInternal.module.scss";
interface PopularNewsState {
  allNews: NewsToeic[];
  news1?: NewsToeic;
  news2?: NewsToeic;
  news3?: NewsToeic;
}
interface PopularNewsProps {}
export default class PopularNews extends BaseComponent<
  PopularNewsProps,
  PopularNewsState
> {
  constructor(props: PopularNewsProps) {
    super(props);
    this.state = {
      news1: undefined,
      news2: undefined,
      news3: undefined,

      allNews: [],
    };
    this.onMount(() => {
      this.getData();
    });
  }

  async getData() {
    let allNews = await newsToeicService.getAll<NewsToeic>("NewsToeic");
    let news1 = allNews.filter((item) => {
      return item.Placement == 1 &&item.Type=="NewsInternal";
    });
    let news2 = allNews.filter((item) => {
      return item.Placement == 2 &&item.Type=="NewsInternal";
    });
    let news3 = allNews.filter((item) => {
      return item.Placement == 3 &&item.Type=="NewsInternal";
    });

    this.setState({
      allNews,
      news1: news1[0],
      news2: news2[0],
      news3: news3[0],
    });
  }

  public render(): React.ReactElement<PopularNewsProps> {
    return (
      <div className={styles.popularNewsUpdate}>
        {this.state.news1 ? (
          <div
            onClick={() => {}}
            className={styles.popularNewsUpdate__headNews}
          >
            <Link to={`${ROUTER.NEWSDETAIL}?keyDoc=${this.state.news1.KeyDoc}`}>
              <div className={styles.popularNewsUpdate__headNews__overlay} />
              <img
                className={styles.popularNewsUpdate__headNews__image}
                src={`${this.state.news1!.BannerUrl}?width=586&height=277`}
              />
              {this.state.news1.ShowIconNews && bigNewsIcon}
              <div className={styles.popularNewsUpdate__headNews__infor}>
                <div
                  style={{
                    background: this.state.news1.Category
                      ? this.state.news1.Category.Color
                      : "fa541c",
                  }}
                  className={
                    styles.popularNewsUpdate__headNews__infor__category
                  }
                >
                  {this.state.news1.Category
                    ? this.state.news1.Category.Title
                    : ""}
                </div>
                <div
                  style={{ marginRight: 15 }}
                  className={styles.popularNewsUpdate__headNews__infor__title}
                >
                  {this.state.news1.Title}
                </div>
                <div
                  className={styles.popularNewsUpdate__headNews__infor__View}
                >
                  {iconEye}
                  25 lượt xem
                </div>
              </div>
            </Link>
          </div>
        ) : (
          // <span style={{ width: `auto` }}>
          //   <Empty description={"Không có dữ liệu"} />
          // </span>
          <></>
        )}
        <div className={styles.popularNewsUpdate__news2Col}>
          {this.state.news2 ? (
            <div
              onClick={() => {}}
              className={styles.popularNewsUpdate__news2Col__item}
            >
              <Link
                to={`${ROUTER.NEWSDETAIL}?keyDoc=${this.state.news2.KeyDoc}`}
              >
                {this.state.news2.ShowIconNews && bigNewsIcon}
                <div
                  className={styles.popularNewsUpdate__news2Col__item__overlay}
                />
                <img
                  className={styles.popularNewsUpdate__news2Col__item__image}
                  src={`${this.state.news2.BannerUrl}?width=277&height=277`}
                />
                <div className={styles.popularNewsUpdate__headNews__infor}>
                  <div
                    style={{
                      background: this.state.news2!.Category
                        ? this.state.news2!.Category.Color
                        : "fa541c",
                    }}
                    className={
                      styles.popularNewsUpdate__headNews__infor__category
                    }
                  >
                    {this.state.news2.Category
                      ? this.state.news2!.Category.Title
                      : ""}
                  </div>
                  <div
                    className={styles.popularNewsUpdate__headNews__infor__title}
                  >
                    {this.state.news2!.Title}
                  </div>
                  <div
                    className={styles.popularNewsUpdate__headNews__infor__View}
                  >
                    {iconEye}
                    25 lượt xem
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            // <span style={{ width: `auto` }}>
            //   <Empty description={"Không có dữ liệu"} />
            // </span>
            <></>
          )}
          {this.state.news3 ? (
            <div
              onClick={() => {}}
              className={styles.popularNewsUpdate__news2Col__item}
            >
              <Link
                to={`${ROUTER.NEWSDETAIL}?keyDoc=${this.state.news3.KeyDoc}`}
              >
                {this.state.news3.ShowIconNews && bigNewsIcon}
                <div
                  className={styles.popularNewsUpdate__news2Col__item__overlay}
                />

                <img
                  className={styles.popularNewsUpdate__news2Col__item__image}
                  src={`${this.state.news3.BannerUrl}?width=277&height=277`}
                />

                <div className={styles.popularNewsUpdate__headNews__infor}>
                  <div
                    style={{
                      background: this.state.news3!.Category
                        ? this.state.news3!.Category.Color
                        : "fa541c",
                    }}
                    className={
                      styles.popularNewsUpdate__headNews__infor__category
                    }
                  >
                    {this.state.news3.Category
                      ? this.state.news3!.Category.Title
                      : ""}
                  </div>
                  <div
                    className={styles.popularNewsUpdate__headNews__infor__title}
                  >
                    {this.state.news3.Title}
                  </div>
                  <div
                    className={styles.popularNewsUpdate__headNews__infor__View}
                  >
                    {iconEye}
                    25 lượt xem
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            // <span style={{ width: `auto` }}>
            //   <Empty description={"Không có dữ liệu"} />
            // </span>
            <></>
          )}
        </div>
      </div>
    );
  }
}
const bigNewsIcon = (
  <svg
    className={styles.popularNewsUpdate__headNews__iconNewsPlacement1}
    width="35"
    height="32"
    viewBox="0 0 35 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M0 3.03732H3.78078C3.78855 1.35352 2.9337 0 1.88974 0C0.845786 0 0 1.35999 0 3.03732Z"
        fill="#890303"
      />
      <path
        d="M31.0193 3.03732H34.8001C34.8079 1.35352 33.953 0 32.909 0C31.8651 0 31.0193 1.35999 31.0193 3.03732Z"
        fill="#890303"
      />
      <path
        d="M32.9094 0H1.88989C2.93385 0 3.7887 1.35352 3.78093 3.03732V23.2766C3.78095 23.6335 3.87493 23.984 4.05341 24.293C4.23189 24.602 4.48859 24.8585 4.79769 25.0368L16.3848 31.7267C16.6938 31.9049 17.0442 31.9988 17.4009 31.9988C17.7576 31.9988 18.1081 31.9049 18.417 31.7267L30.0042 25.0368C30.3133 24.8585 30.57 24.602 30.7485 24.293C30.927 23.984 31.0209 23.6335 31.021 23.2766V3.03732C31.0197 1.35999 31.8654 0 32.9094 0Z"
        fill="#D80303"
      />
      <path
        d="M17.2993 30.5029C17.023 30.5034 16.7513 30.4324 16.5105 30.297L5.9375 24.3247C5.69039 24.1847 5.4848 23.9818 5.34168 23.7365C5.19856 23.4912 5.12304 23.2124 5.1228 22.9284V3.4248C5.1228 3.3348 5.15856 3.24848 5.2222 3.18484C5.28584 3.1212 5.37215 3.08545 5.46215 3.08545C5.55216 3.08545 5.63847 3.1212 5.70211 3.18484C5.76575 3.24848 5.8015 3.3348 5.8015 3.4248V22.9284C5.80159 23.0923 5.84515 23.2532 5.92775 23.3947C6.01035 23.5363 6.12903 23.6534 6.27167 23.734L16.8447 29.7064C16.9842 29.7851 17.1417 29.8265 17.3019 29.8265C17.4621 29.8265 17.6196 29.7851 17.7591 29.7064L28.5523 23.5436C28.6937 23.4626 28.8113 23.3457 28.8931 23.2047C28.975 23.0637 29.0183 22.9036 29.0185 22.7406V3.4248C29.0185 3.3348 29.0543 3.24848 29.1179 3.18484C29.1816 3.1212 29.2679 3.08545 29.3579 3.08545C29.4479 3.08545 29.5342 3.1212 29.5978 3.18484C29.6615 3.24848 29.6972 3.3348 29.6972 3.4248V22.738C29.6968 23.0207 29.6219 23.2982 29.48 23.5427C29.3381 23.7871 29.1343 23.9898 28.889 24.1304L18.0958 30.2931C17.8531 30.4311 17.5785 30.5035 17.2993 30.5029Z"
        fill="white"
      />
      <path
        d="M11.8178 19.4003C11.7211 19.4045 11.6262 19.3732 11.551 19.3122C11.5016 19.2732 11.458 19.2274 11.4214 19.1762L9.19365 15.8539V19.1387C9.192 19.2068 9.16418 19.2718 9.11596 19.32C9.06773 19.3682 9.00279 19.3961 8.9346 19.3977H7.66139C7.5932 19.3961 7.52826 19.3682 7.48004 19.32C7.43181 19.2718 7.40399 19.2068 7.40234 19.1387V12.862C7.40234 12.7933 7.42964 12.7274 7.47822 12.6788C7.5268 12.6302 7.59269 12.6029 7.66139 12.6029H8.67167C8.76838 12.5987 8.86329 12.63 8.93849 12.691C8.98774 12.7301 9.03133 12.7759 9.06801 12.827L11.2932 16.1506V12.862C11.2932 12.7933 11.3205 12.7274 11.3691 12.6788C11.4177 12.6302 11.4836 12.6029 11.5523 12.6029H12.8255C12.8942 12.6029 12.9601 12.6302 13.0087 12.6788C13.0572 12.7274 13.0845 12.7933 13.0845 12.862V19.1387C13.0829 19.2068 13.0551 19.2718 13.0068 19.32C12.9586 19.3682 12.8937 19.3961 12.8255 19.3977L11.8178 19.4003Z"
        fill="white"
      />
      <path
        d="M19.3185 17.8461C19.3872 17.8461 19.4531 17.8734 19.5017 17.922C19.5503 17.9706 19.5776 18.0365 19.5776 18.1052V19.1414C19.5776 19.2101 19.5503 19.276 19.5017 19.3245C19.4531 19.3731 19.3872 19.4004 19.3185 19.4004H14.7127C14.6445 19.3988 14.5795 19.3709 14.5313 19.3227C14.4831 19.2745 14.4553 19.2095 14.4536 19.1414V12.8621C14.4536 12.7934 14.4809 12.7275 14.5295 12.6789C14.5781 12.6303 14.644 12.603 14.7127 12.603H19.246C19.3147 12.603 19.3806 12.6303 19.4291 12.6789C19.4777 12.7275 19.505 12.7934 19.505 12.8621V13.8983C19.505 13.967 19.4777 14.0329 19.4291 14.0814C19.3806 14.13 19.3147 14.1573 19.246 14.1573H16.2488V15.2064H19.0284C19.0971 15.2064 19.163 15.2337 19.2115 15.2823C19.2601 15.3309 19.2874 15.3968 19.2874 15.4655V16.5017C19.2874 16.5704 19.2601 16.6363 19.2115 16.6848C19.163 16.7334 19.0971 16.7607 19.0284 16.7607H16.2488V17.8487L19.3185 17.8461Z"
        fill="white"
      />
      <path
        d="M25.42 16.1453L26.0418 12.8606C26.0465 12.8204 26.0593 12.7816 26.0793 12.7465C26.0994 12.7113 26.1262 12.6805 26.1583 12.6559C26.2128 12.6182 26.2773 12.5979 26.3435 12.5977H27.6168C27.6732 12.5983 27.7272 12.6211 27.7671 12.661C27.8071 12.7009 27.8298 12.7549 27.8305 12.8114C27.8298 12.8375 27.8268 12.8635 27.8214 12.8891L26.5676 19.0298C26.5504 19.1326 26.4948 19.2252 26.4122 19.2888C26.3202 19.367 26.2026 19.4085 26.0819 19.4054H25.275C25.2172 19.4079 25.1595 19.3988 25.1053 19.3788C25.051 19.3588 25.0013 19.3282 24.9589 19.2888C24.8825 19.2173 24.8243 19.1285 24.7893 19.0298L24.06 16.8279L23.3308 19.0298C23.2956 19.1284 23.2374 19.2171 23.1612 19.2888C23.1188 19.3282 23.069 19.3587 23.0148 19.3787C22.9606 19.3987 22.9029 19.4078 22.8451 19.4054H22.0382C21.9175 19.4086 21.7999 19.3671 21.7079 19.2888C21.6252 19.2253 21.5696 19.1327 21.5525 19.0298L20.2987 12.8891C20.2928 12.8636 20.2893 12.8375 20.2883 12.8114C20.289 12.7549 20.3117 12.7009 20.3517 12.661C20.3916 12.6211 20.4456 12.5983 20.502 12.5977H21.7753C21.8415 12.5979 21.906 12.6182 21.9605 12.6559C21.9926 12.6805 22.0194 12.7113 22.0395 12.7465C22.0595 12.7816 22.0723 12.8204 22.077 12.8606L22.6988 16.1453L23.2725 14.3864C23.2934 14.3244 23.3226 14.2656 23.3593 14.2115C23.3864 14.1732 23.4233 14.143 23.4662 14.1241C23.5091 14.1052 23.5563 14.0982 23.6028 14.104H24.516C24.5625 14.0982 24.6097 14.1052 24.6526 14.1241C24.6955 14.143 24.7324 14.1732 24.7595 14.2115C24.7961 14.2656 24.8253 14.3245 24.8463 14.3864L25.42 16.1453Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="34.8003" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const iconEye = (
  <svg
    style={{ marginRight: "8px" }}
    width="14"
    height="9"
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.75 1.875C6.53906 1.89844 6.21094 1.94531 6 1.99219C6.09375 2.15625 6.16406 2.46094 6.1875 2.625C6.1875 3.35156 5.57812 3.9375 4.875 3.9375C4.6875 3.9375 4.38281 3.86719 4.24219 3.77344C4.17188 3.98438 4.125 4.28906 4.125 4.5C4.125 5.95312 5.29688 7.125 6.75 7.125C8.20312 7.125 9.375 5.95312 9.375 4.5C9.375 3.07031 8.20312 1.875 6.75 1.875ZM13.4062 4.17188C12.1406 1.6875 9.60938 0 6.75 0C3.86719 0 1.33594 1.6875 0.0703125 4.17188C0.0234375 4.26562 0 4.40625 0 4.52344C0 4.61719 0.0234375 4.75781 0.0703125 4.85156C1.33594 7.33594 3.86719 9 6.75 9C9.60938 9 12.1406 7.33594 13.4062 4.85156C13.4531 4.75781 13.4766 4.61719 13.4766 4.5C13.4766 4.40625 13.4531 4.26562 13.4062 4.17188ZM6.75 7.875C4.42969 7.875 2.29688 6.58594 1.17188 4.5C2.29688 2.41406 4.42969 1.125 6.75 1.125C9.04688 1.125 11.1797 2.41406 12.3047 4.5C11.1797 6.58594 9.04688 7.875 6.75 7.875Z"
      fill="white"
    />
  </svg>
);
