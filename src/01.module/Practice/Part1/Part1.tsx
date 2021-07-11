import { BaseComponent } from "../../../00.common/00.components/BaseComponent";
import { CommentComp } from "../../../00.common/00.components/Comment/CommentComp";
import { Footer } from "../../Footer/Footer";
import styles from "./Part1.module.scss";
interface part1State {}

interface part1Props {}

export class ParPart1 extends BaseComponent<part1Props, part1State> {
  constructor(props: part1Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.Part1Container}>
        <div className={styles.Part1Container__Content}>
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
              Luyện Nghe TOEIC Part 1 : Mô tả hình ảnh
            </h1>
            <img
              className={styles.Part1Container__Content__img}
              src={
                "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fcach-lam-toeic-part-1.png?alt=media&token=dcc953cc-46b3-473a-964b-2a230f01d60c"
              }
            />
          </div>
          <div className={styles.Part1Container__Content__introduce}>
            <p className={styles.Part1Container__Content__introduce__text_p}>
              Part 1&nbsp;của đề&nbsp;thi{" "}
              <a
                href="https://tienganhmoingay.com/de-thi-toeic/lam-de-thi-thu-toeic/"
                target="_blank"
              >
                TOEIC
              </a>{" "}
              là một Phần Nghe&nbsp;(Listening) có tên gọi là Mô Tả Hình
              Ảnh&nbsp;(Photographs).&nbsp;
            </p>
            <p className={styles.Part1Container__Content__introduce__text_p}>
              Như bạn có thể đã biết qua bài viết{" "}
              <a href="https://tienganhmoingay.com/thong-tin-toeic/cau-truc-de-thi-toeic/">
                Cấu trúc đề thi TOEIC 2021
              </a>
              , phần 1 sẽ diễn ra như sau:
            </p>
            <ol className={styles.Part1Container__Content__introduce__text_p}>
              <li
                className={styles.Part1Container__Content__introduce__text_li}
              >
                Bạn xem một bức hình
              </li>
              <li className={styles.Part1Container__Content__introduce__li}>
                Sau đó, bạn sẽ nghe 4 câu nói tương ứng với 4&nbsp;lựa chọn A,
                B,&nbsp;C, D
              </li>
              <li className={styles.Part1Container__Content__introduce__li}>
                Bạn sẽ chọn lựa chọn mà bạn cảm thấy là mô tả về bức hình đúng
                nhất
              </li>
            </ol>
            <p
              className={styles.Part1Container__Content__introduce__text_p}
              style={{ marginBottom: 30 }}
            >
              Đây là phần thi được rất nhiều người{" "}
              <a href="https://tienganhmoingay.com/luyen-nghe-toeic/?r=luyen-nghe-toeic-part-1">
                luyện nghe TOEIC
              </a>
              &nbsp;yêu thích vì mỗi câu hỏi số lượng câu hỏi ít (đề thi format
              cũ là 10 câu và đề thi format mới&nbsp;từ ngày 01/6/2019 là 6 câu)
              và tương đối đơn giản.
            </p>
            <p
              className={styles.Part1Container__Content__introduce__text_p}
              style={{ marginBottom: 30 }}
            >
              Tuy đơn giản như vậy nhưng cũng không nên chủ quan bạn nhé! Để làm
              tốt 6 câu này và giành được nhiều điểm nhất có thể,&nbsp;bạn chỉ
              cần học được cách trả lời cho 2 kiểu hình ảnh chính của Part 1 mà
              thôi. Sau khi học xong, bạn sẽ được củng cố những gì mình đã học
              qua 10&nbsp;bài tập luyện nghe TOEIC ngắn.
            </p>

            <p className={styles.Part1Container__Content__introduce__text_p}>
              Bắt đầu nào!
            </p>
          </div>

          <div className={styles.Part1Container__Content__tableOfContents}>
            <p className={styles.Part1Container__Content__introduce__text_p}>
              Mục lục:
            </p>
            <a href="#con-nguoi">1. Hình ảnh có con người</a>
            <a href="#vat">2. Hình ảnh chỉ có vật mà không có con người</a>
            <a href="#bai-tap">3. Bài tập ứng dụng</a>
            <a href="#luyen-nghe">4. Hướng dẫn luyện nghe TOEIC</a>
          </div>
          <h2 className={styles.Part1Container__Content__textGreen}>
            <a id="con-nguoi"></a>1. Hình ảnh có con người
          </h2>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Hình có con người chiếm khoảng 70% - 80% câu hỏi trong Part 1 của{" "}
            <a href="https://tienganhmoingay.com/de-thi-toeic/?r=luyen-nghe-toeic-part-1">
              đề thi TOEIC
            </a>
            . Nếu bạn học cách&nbsp;làm bài đối vói hình có con người là bạn đã
            làm tốt 70%~80% Part 1 luôn rồi đấy!
          </p>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Đối với hình có người, khi xem hình, bạn nên xác định
            ngay&nbsp;những chi tiết sau:
          </p>
          <ul className={styles.Part1Container__Content__ul}>
            <li>
              Người trong hình đang thực hiện <strong>hành động</strong> gì?
            </li>
            <li>
              Người trong hình đang ở <strong>vị trí</strong> nào so với những
              vật và người xung quanh?
            </li>
          </ul>
          <h3 className={styles.Part1Container__Content__textBlue}>
            1.&nbsp;Người trong hình đang thực hiện <strong>hành động</strong>{" "}
            gì?
          </h3>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Khi luyện nghe TOEIC, có một số <strong>cấu trúc câu</strong>
            &nbsp;miêu tả hành động của con người mà bạn có thể nghe thấy trong
            các đáp án A B C D là:
          </p>
          <ul className={styles.Part1Container__Content__ul}>
            <li>
              <strong>CHỦ NGỮ</strong>&nbsp;+ is/are + <strong>V-ing</strong> ={" "}
              <strong>CHỦ NGỮ</strong> đang thực hiện{" "}
              <strong>HÀNH ĐỘNG (VERB)</strong>.<br></br>
              Ví dụ:
              <ul className={styles.Part1Container__Content__ul}>
                <li>
                  The man is holding a ball in his hands. = Người đàn ông đang
                  cầm quả bóng trong tay.
                </li>
                <li>
                  The child is running towards the lake. = Đứa trẻ đang chạy về
                  phía hồ nước.
                </li>
              </ul>
            </li>
            <li>
              There + is/are + <strong>CHỦ NGỮ</strong>&nbsp;+{" "}
              <strong>V-ing</strong> = Có <strong>CHỦ NGỮ</strong> đang thực
              hiện hành động <strong>HÀNH ĐỘNG (VERB)</strong>.<br></br>
              Ví dụ:
              <ul className={styles.Part1Container__Content__ul}>
                <li>
                  There is a woman looking at the computer screen.&nbsp;= Có một
                  người phụ nữ đang nhìn vào màn hình máy tính.
                </li>
                <li>
                  There are two men reading books. = Có hai người đàn ông đang
                  đọc sách.
                </li>
              </ul>
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Như bạn có thể thấy, hành động đang thực hiện lúc nào cũng ở dạng{" "}
            <strong>V-ing</strong>, vì vậy các động từ chỉ hành động dưới đây
            đều sẽ được ghi ở dạng <strong>V-ing</strong> để bạn dễ ghi nhớ luôn
            nhé!
          </p>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Ví dụ về sai chủ ngữ:
          </p>
          <img
            width={400}
            height={266}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fsai_chu_ngu.jpg?alt=media&token=bb010844-95e1-4869-956d-fca4bebd87d4"
            }
          />
          <p
            style={{ marginLeft: 40 }}
            className={styles.Part1Container__Content__introduce__text_p}
          >
            Bạn có thể nghe&nbsp;lựa chọn sau:&nbsp;
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 80 }}
          >
            <em>
              There's a woman standing in the picture. = Có một người phụ nữ
              đang đứng trong hình.
            </em>
          </p>
          <p
            style={{ marginLeft: 40 }}
            className={styles.Part1Container__Content__introduce__text_p}
          >
            =&gt; Lựa chọn&nbsp;trên là sai bởi vì trong hình này người đang
            đứng duy nhất là một người đàn ông, tất cả người phụ nữ trong hình
            đều đang ngồi.
          </p>
          <p style={{ marginLeft: 40 }}>
            <em>Ví dụ về sai động từ:</em>
          </p>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fsai_dong_tu.jpg?alt=media&token=7b503c24-110b-419a-ab05-e0195c28ad62"
            }
            width={400}
            height={599}
          />
          <p
            style={{ marginLeft: 40 }}
            className={styles.Part1Container__Content__introduce__text_p}
          >
            Bạn có thể nghe một lựa chọn sau:
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 80 }}
          >
            <em>The man is dancing. = Người đàn ông đang nhảy múa.</em>
          </p>
          <p
            style={{ marginLeft: 40 }}
            className={styles.Part1Container__Content__introduce__text_p}
          >
            =&gt; Lựa chọn trên là sai bởi vì đúng là trong hình có người đàn
            ông, nhưng người này đang chơi đá bóng chứ không phải nhảy múa.
          </p>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            <a id="hanh-dong-con-nguoi"></a>Cách tốt nhất để học về các{" "}
            <strong>hành động</strong> của con người là{" "}
            <strong>học động từ chỉ&nbsp;hành động</strong> theo&nbsp;từng bộ
            phận trên cơ thể. Dưới đây là các từ vựng TOEIC Part 1 mà các bạn
            cần chú ý:
          </p>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            ❶&nbsp;<strong>Toàn thân (whole body)</strong>
          </p>
          <img
            width={512}
            height={533}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Ftu_vung_tieng_anh_co_the_nguoi.png?alt=media&token=558e5125-0596-4ae5-b189-61a64c7a794d"
            }
          ></img>
          <ul
            className={styles.Part1Container__Content__ul}
            style={{ marginTop: 15 }}
          >
            <li>
              <strong>checking </strong>= kiểm tra
            </li>
            <li>
              <strong>cutting </strong>= cắt
            </li>
            <li>
              <strong>dancing </strong>= nhảy múa
            </li>
            <li>
              <strong>driving </strong>= lái xe (ô tô, xe tải)
            </li>
            <li>
              <strong>fixing </strong>= <strong>repairing </strong>= sửa chữa
            </li>
            <li>
              <strong>leaning </strong>= ngả người, dựa người (vào cái gì đó)
            </li>
            <li>
              <strong>lying </strong>= nằm
            </li>
            <li>
              <strong>riding </strong>= lái xe (xe máy, xe đạp), cưỡi ngựa
            </li>
            <li>
              <strong>sitting </strong>= ngồi
            </li>
            <li>
              <strong>standing </strong>= đứng
            </li>
            <li>
              <strong>using </strong>= sử dụng
            </li>
            <li>
              <strong>wearing </strong>= mặc đồ, đội nón, mang găng tay,...
            </li>
            <li>
              <strong>working </strong>= làm việc
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            ❷&nbsp;<strong>Tay (arms + hands)</strong>
          </p>
          <img
            width={360}
            height={194}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Farms_hands.png?alt=media&token=c3640eba-7a08-466d-8eec-6e8ef94479be"
            }
          ></img>
          <ul
            className={styles.Part1Container__Content__ul}
            style={{ marginTop: 15 }}
          >
            <li>
              <strong>clapping </strong>= vỗ tay
            </li>
            <li>
              <strong>grabbing </strong>= nắm
            </li>
            <li>
              <strong>holding </strong>= cầm
            </li>
            <li>
              <strong>knocking </strong>= gõ
            </li>
            <li>
              <strong>lifting </strong>= nâng lên
            </li>
            <li>
              <strong>picking </strong>= nhặt, cầm lên
            </li>
            <li>
              <strong>pointing </strong>= chỉ tay
            </li>
            <li>
              <strong>pressing </strong>= nhấn
            </li>
            <li>
              <strong>pulling </strong>= kéo
            </li>
            <li>
              <strong>pushing </strong>= đẩy
            </li>
            <li>
              <strong>squeezing </strong>= bóp chặt
            </li>
            <li>
              <strong>shaking hands </strong>= bắt tay
            </li>
            <li>
              <strong>stretching </strong>= duỗi tay
            </li>
            <li>
              <strong>throwing </strong>= ném
            </li>
            <li>
              <strong>touching </strong>= chạm
            </li>
            <li>
              <strong>typing </strong>= đánh máy
            </li>
            <li>
              <strong>waving </strong>= vẫy tay
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            ❸&nbsp;<strong>Chân (legs + feet)</strong>
          </p>
          <img
            width={360}
            height={194}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Flegs_feet.png?alt=media&token=456eaf45-4039-4c9e-9932-193eadc91974"
            }
          ></img>
          <ul
            className={styles.Part1Container__Content__ul}
            style={{ marginTop: 15 }}
          >
            <li>
              <strong>crossing the street </strong>= băng qua đường
            </li>
            <li>
              <strong>jumping </strong>= nhảy
            </li>
            <li>
              <strong>kicking </strong>= đá
            </li>
            <li>
              <strong>kneeling </strong>= quỳ
            </li>
            <li>
              <strong>running </strong>= chạy
            </li>
            <li>
              <strong>walking </strong>= đi bộ
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            ❹&nbsp;<strong>Đầu (head)</strong>
          </p>
          <img
            width={360}
            height={194}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fhead.png?alt=media&token=9e4158f5-d168-40fa-ab41-7e360f7b3dc5"
            }
          ></img>
          <ul
            className={styles.Part1Container__Content__ul}
            style={{ marginTop: 15 }}
          >
            <li>
              <strong>nodding </strong>= gật đầu
            </li>
            <li>
              <strong>shaking </strong>= lắc đầu
            </li>
            <li>
              <strong>tilting </strong>= nghiêng đầu
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            ❺&nbsp;<strong>Mắt (eyes)</strong>
          </p>
          <img
            width={360}
            height={194}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Feyes.png?alt=media&token=99527a9a-4096-4050-a782-5c32e5ded7fe"
            }
          />
          <ul
            className={styles.Part1Container__Content__ul}
            style={{ marginTop: 15 }}
          >
            <li>
              <strong>crying </strong>= khóc
            </li>
            <li>
              <strong>looking at</strong> = xem
            </li>
            <li>
              <strong>observing </strong>= quan sát
            </li>
            <li>
              <strong>reading </strong>= đọc
            </li>
            <li>
              <strong>seeing </strong>= nhìn thấy
            </li>
            <li>
              <strong>staring at </strong>= nhìn chằm chằm
            </li>
            <li>
              <strong>watching </strong>= xem (chăm chú)
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            ❻&nbsp;<strong>Mũi (nose)</strong>
          </p>
          <img
            width={360}
            height={194}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fnose.png?alt=media&token=63aec0bb-be3b-4fea-8038-aa2c76f40873"
            }
          />
          <ul
            className={styles.Part1Container__Content__ul}
            style={{ marginTop: 15 }}
          >
            <li>
              <strong>smelling </strong>= ngửi
            </li>
            <li>
              <strong>sneezing </strong>= hắt xì
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            ❼&nbsp;<strong>Miệng (mouth)</strong>
          </p>
          <img
            width={360}
            height={194}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fmouth.png?alt=media&token=72361325-3f5f-4407-98a1-f5856307800d"
            }
          />
          <ul
            className={styles.Part1Container__Content__ul}
            style={{ marginTop: 15 }}
          >
            <li>
              <strong>chewing </strong>= nhai
            </li>
            <li>
              <strong>drinking </strong>= uống
            </li>
            <li>
              <strong>eating </strong>= ăn
            </li>
            <li>
              <strong>frowning </strong>= mếu
            </li>
            <li>
              <strong>laughing </strong>= cười lớn
            </li>
            <li>
              <strong>kissing </strong>= hôn
            </li>
            <li>
              <strong>singing </strong>= hát
            </li>
            <li>
              <strong>smiling </strong>= cười
            </li>
            <li>
              <strong>speaking </strong>= nói
            </li>
            <li>
              <strong>talking </strong>= nói chuyện
            </li>
            <li>
              <strong>tasting </strong>= nếm
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            ❽&nbsp;<strong>Tai (ears)</strong>
          </p>

          <img
            width={360}
            height={194}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fears.png?alt=media&token=d6462fb4-2049-4e13-b7ac-8d20b3f1877f"
            }
          />
          <ul
            className={styles.Part1Container__Content__ul}
            style={{ marginTop: 15 }}
          >
            <li>
              <strong>hearing&nbsp;</strong>= nghe
            </li>
            <li>
              <strong>listening </strong>= lắng nghe
            </li>
          </ul>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            Từ vựng TOEIC Part 1 thiết yếu cũng khá nhiều phải không nào? Vì
            vậy, bạn cứ tranh thủ học dần để nhớ lâu hơn nhé!
          </p>
          <h3 className={styles.Part1Container__Content__textBlue}>
            2. Người trong hình đang ở <strong>vị trí</strong> nào so với những
            vật và người xung quanh?
          </h3>

          <p className={styles.Part1Container__Content__introduce__text_p}>
            Một số cấu trúc miêu tả hành động của con người mà bạn có thể nghe
            thấy trong các đáp án A B C D là:
          </p>
          <ul className={styles.Part1Container__Content__ul}>
            <li>
              <strong>CHỦ NGỮ</strong>&nbsp;+ is/are + <strong>GIỚI TỪ</strong>
              &nbsp;+ <strong>VẬT/NGƯỜI</strong> = <strong>CHỦ NGỮ</strong>
              &nbsp;đang ở...<br></br>
              Ví dụ:
              <ul className={styles.Part1Container__Content__ul}>
                <li>
                  The woman is on the left side of the road. = Người phụ nữ đang
                  ở bên trái đường.
                </li>
              </ul>
            </li>
            <li>
              There + is/are + <strong>CHỦ NGỮ</strong> +{" "}
              <strong>GIỚI TỪ</strong>&nbsp;+ <strong>VẬT/NGƯỜI</strong>{" "}
              =&nbsp;Có&nbsp;<strong>CHỦ NGỮ</strong>&nbsp;ở...<br></br>
              Ví dụ:&nbsp;
              <ul className={styles.Part1Container__Content__ul}>
                <li>
                  There is a woman across the street. = Có một người phụ nữ ở
                  bên kia đường.
                </li>
                <li>
                  There is a man at the bus stop. = Có một người đàn ông ở trạm
                  xe buýt.
                </li>
              </ul>
            </li>
            <li>
              <strong>CHỦ NGỮ</strong>&nbsp;+ is/are + <strong>V-ing</strong> +{" "}
              <strong>GIỚI TỪ</strong>&nbsp;+ <strong>VẬT/NGƯỜI</strong> ={" "}
              <strong>CHỦ NGỮ&nbsp;</strong>đang thực hiện{" "}
              <strong>HÀNH ĐỘNG (VERB)</strong>
              <strong> </strong>ở...<br></br>
              Ví dụ:
              <ul>
                <li>
                  The child is sitting on the grass. = Đứa bé đang ngồi ở trên
                  thảm cỏ.
                </li>
                <li>
                  A woman is standing behind the man. = Một người phụ nữ đang
                  đứng sau lưng người đàn ông.
                </li>
              </ul>
            </li>
            <li>
              There + is/are + <strong>CHỦ NGỮ</strong>&nbsp;+
              <strong> V-ing</strong>&nbsp;+ <strong>GIỚI TỪ&nbsp;</strong>+{" "}
              <strong>VẬT NGƯỜI </strong>= Có <strong>CHỦ NGỮ</strong>&nbsp;đang
              thực hiện <strong>HÀNH ĐỘNG (VERB)​</strong>
              <strong> </strong>ở...<br></br>
              Ví dụ:
              <ul className={styles.Part1Container__Content__ul}>
                <li>
                  There are three men running on the field. = Có ba người đàn
                  ông đang chạy trên sân bóng.
                </li>
                <li>
                  There is a woman swimming in the pool. = Có một người phụ nữ
                  đang bơi trong bể bơi.
                </li>
              </ul>
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            <strong>Để chọn được đáp án đúng</strong>, bạn cần nghe kỹ về vị
            trí&nbsp;của người trong hình. Bên cạnh đó, nếu lựa chọn có nhắc đến
            hành động của người trong hình thì bạn cũng nên cẩn thận để không
            chọn sai, vì nếu vị trí đúng rồi mà hành động sai thì lựa chọn đó
            cũng sai.
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 40 }}
          >
            <em>Ví dụ về sai động từ:</em>

            <img
              style={{ marginLeft: 40 }}
              width={400}
              height={599}
              src={
                "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fsai_dong_tu.jpg?alt=media&token=7b503c24-110b-419a-ab05-e0195c28ad62"
              }
            ></img>
          </p>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Bạn có thể nghe một lựa chọn sau:
          </p>
          <p
            style={{ marginLeft: 80 }}
            className={styles.Part1Container__Content__introduce__text_p}
          >
            Bạn có thể nghe một lựa chọn sau:
            <em>
              The man is sitting on the football field. = Người đàn ông đang
              ngồi trên sân bóng đá.
            </em>
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 40 }}
          >
            =&gt; Lựa chọn trên là sai bởi vì đúng là trong hình có sân bóng đá,
            nhưng người đàn ông đang đá bóng chứ không ngồi.
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 40 }}
          >
            <em>Ví dụ về sai vị trí:</em>
          </p>
          <img
            width={400}
            height={266}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fsai_chu_ngu.jpg?alt=media&token=bb010844-95e1-4869-956d-fca4bebd87d4"
            }
          />
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 40 }}
          >
            Bạn có thể nghe&nbsp;lựa chọn sau:&nbsp;
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 80 }}
          >
            <em>
              A man is standing on the desk. = Một người đàn ông đang đứng trên
              bàn.
            </em>
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 40 }}
          >
            =&gt; Lựa chọn&nbsp;trên là sai bởi vì trong hình này có người đàn
            ông đang đứng, nhưng là đứng bên cạnh cái bàn, chứ không đứng trên
            bàn.
          </p>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            <strong>Vị trí của người trong hình</strong> sẽ được xác định bằng
            các giới từ chỉ nơi chốn, vì vậy bạn nhất định phải&nbsp;
            <strong>
              học một số{" "}
              <a href="https://tienganhmoingay.com/ngu-phap-toeic/chu-de-preps/">
                giới từ
              </a>{" "}
              về nơi chốn
            </strong>{" "}
            quan trọng sau đây:
          </p>
          <ul className={styles.Part1Container__Content__ul}>
            <li>
              <strong>above </strong>= ở bên trên
            </li>
            <li>
              <strong>below </strong>= ở bên dưới
            </li>
            <li>
              <strong>on </strong>= trên bề mặt
            </li>
            <li>
              <strong>under </strong>= dưới
            </li>
            <li>
              <strong>behind </strong>= sau
            </li>
            <li>
              <strong>in front of</strong> = trước
            </li>
            <li>
              <strong>at </strong>= tại
            </li>
            <li>
              <strong>in </strong>= bên trong
            </li>
            <li>
              <strong>between </strong>= giữa
            </li>
            <li>
              <strong>next to </strong>= ngay cạnh
            </li>
            <li>
              <strong>by </strong>= bên cạnh
            </li>
            <li>
              <strong>near </strong>= gần
            </li>
          </ul>
          <img
            width={400}
            height={258}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fgioi-tu-chi-noi-chon.png?alt=media&token=a7e65f20-9fcb-47e0-b850-181a6d7e99ce"
            }
          />
          <h2
            data-id="side-label-index-3"
            className={styles.Part1Container__Content__textGreen}
          >
            <a id="vat"></a>2. Hình chỉ có vật mà không có người
          </h2>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Hình chỉ có vật mà không có người&nbsp;chiếm khoảng 20% -
            30%&nbsp;câu hỏi trong Part 1 của đề thi TOEIC. Đối với loại hình
            ảnh này, khi xem hình, bạn nên xác định ngay&nbsp;những chi tiết
            sau:
          </p>
          <ul className={styles.Part1Container__Content__ul}>
            <li>
              <strong>Có những vật gì </strong>đáng chú ý trong hình?
            </li>
            <li>
              Những vật trong hình đang ở trong<strong> trạng thái gì</strong>?
            </li>
            <li>
              Những vật trong hình có <strong>vị trí </strong>như thế nào với
              nhau?
            </li>
          </ul>

          <h3
            className={styles.Part1Container__Content__textBlue}
            data-id="side-label-index-4"
          >
            1. <strong>Có những vật gì </strong>đáng chú ý trong hình?
          </h3>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Tiếng Anh Mỗi Ngày xin cung cấp cho bạn 40 từ vựng về vật dụng
            thường xuyên xuất hiện nhất trong Part 1 của đề thi TOEIC.
          </p>
          <ul className={styles.Part1Container__Content__ul}>
            <li>
              Vật dụng trong văn phòng:
              <ol>
                <li>
                  <strong>computer </strong>= máy tính
                </li>
                <li>
                  <strong>monitor </strong>= màn hình máy tính
                </li>
                <li>
                  <strong>printer </strong>= máy in
                </li>
                <li>
                  <strong>photocopier </strong>= máy photocopy
                </li>
                <li>
                  <strong>projector </strong>= máy chiếu
                </li>
                <li>
                  <strong>desk </strong>= bàn làm việc
                </li>
                <li>
                  <strong>chair </strong>= ghế
                </li>
                <li>
                  <strong>office </strong>= văn phòng
                </li>
              </ol>
            </li>
            <li>
              Vật dụng trong nhà:
              <ol>
                <li>
                  <strong>table </strong>= bàn
                </li>
                <li>
                  <strong>shelf </strong>= kệ
                </li>
                <li>
                  <strong>door </strong>= cửa
                </li>
                <li>
                  <strong>window </strong>= cửa sổ
                </li>
                <li>
                  <strong>couch </strong>= ghế bành
                </li>
                <li>
                  <strong>lamp </strong>= đèn ngủ
                </li>
                <li>
                  <strong>fan </strong>= quạt
                </li>
                <li>
                  <strong>room </strong>= phòng
                </li>
                <li>
                  <strong>roof </strong>= mái nhà
                </li>
                <li>
                  <strong>drink </strong>= đồ uống
                </li>
                <li>
                  <strong>furniture </strong>= nội thất
                </li>
                <li>
                  <strong>food </strong>= đồ ăn
                </li>
              </ol>
            </li>
            <li>
              Giao thông:
              <ol>
                <li>
                  <strong>car </strong>= xe hơi
                </li>
                <li>
                  <strong>bicycle </strong>= <strong>bike </strong>= xe đạp
                </li>
                <li>
                  <strong>bus </strong>= xe buýt
                </li>
                <li>
                  <strong>train </strong>= tàu lửa
                </li>
                <li>
                  <strong>airplane </strong>= máy bay
                </li>
                <li>
                  <strong>boat </strong>= thuyền
                </li>
                <li>
                  <strong>traffic lights</strong> = đèn giao thông
                </li>
                <li>
                  <strong>street </strong>= đường
                </li>
              </ol>
            </li>
            <li>
              Nơi chốn:
              <ol>
                <li>
                  <strong>restaurant </strong>= nhà hàng
                </li>
                <li>
                  <strong>hotel </strong>= khách sạn
                </li>
                <li>
                  <strong>school </strong>= trường học
                </li>
                <li>
                  <strong>bookstore </strong>= nhà sách
                </li>
                <li>
                  <strong>bus stop </strong>= trạm xe buýt
                </li>
                <li>
                  <strong>station </strong>= nhà ga
                </li>
                <li>
                  <strong>airport </strong>= sân bay
                </li>
              </ol>
            </li>
            <li>
              Công trình kiến trúc:
              <ol>
                <li>
                  <strong>house </strong>= nhà
                </li>
                <li>
                  <strong>tower </strong>= tháp
                </li>
                <li>
                  <strong>building </strong>= tòa nhà
                </li>
                <li>
                  <strong>bridge </strong>= cầu
                </li>
                <li>
                  <strong>fountain </strong>= đài phun nước
                </li>
              </ol>
            </li>
          </ul>
          <h3
            data-id="side-label-index-5"
            className={styles.Part1Container__Content__textBlue}
          >
            2.&nbsp;Những vật trong hình đang ở trong
            <strong> trạng thái gì</strong>?
          </h3>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Một số <strong>cấu trúc câu</strong>&nbsp;miêu tả trạng thái của các
            vật trong hình&nbsp;mà bạn có thể nghe thấy trong các đáp án A B C D
            là:
          </p>
          <ul className={styles.Part1Container__Content__ul}>
            <li>
              <strong>CHỦ NGỮ</strong> + is/are&nbsp;+ <strong>TÍNH TỪ</strong>{" "}
              = <strong>CHỦ NGỮ</strong> thì <strong>TÍNH TỪ</strong>
              <br></br>
              Ví dụ:
              <ul className={styles.Part1Container__Content__ul}>
                <li>The water is rough. = Biển động.</li>
                <li>All the lights are on. = Tất cả các đèn đều đang bật.</li>
              </ul>
            </li>
            <li>
              <strong>CHỦ NGỮ </strong>+ look(s)/appear(s) +{" "}
              <strong>TÍNH TỪ </strong>=&nbsp;<strong>CHỦ NGỮ</strong>
              &nbsp;trông có vẻ <strong>TÍNH TỪ</strong>
              <br></br>
              Ví dụ:
              <ul className={styles.Part1Container__Content__ul}>
                <li>
                  The books on the shelf&nbsp;look old. = Những quyển sách trên
                  kệ trông có vẻ cũ kỹ.
                </li>
                <li>
                  All the seats appear to be full. = Tất cả chỗ ngồi có vẻ đã
                  kín hết.
                </li>
              </ul>
            </li>
            <li>
              <strong>CHỦ NGỮ</strong> + have/has + been +<strong> V3</strong> ={" "}
              <strong>CHỦ NGỮ</strong> đã được/bị <strong>VERB</strong>
              <br></br>
              Ví dụ:
              <ul className={styles.Part1Container__Content__ul}>
                <li>The door has been closed. = Cái cửa đã được đóng lại.</li>
                <li>
                  The chairs have been stacked up. = Những cái ghế đã được xếp
                  chồng lên.
                </li>
              </ul>
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            <strong>Để chọn được đáp án đúng</strong>, bạn cần xem xem chủ ngữ
            và tính từ&nbsp;có miêu tả đúng bức hình không. Nếu đúng cả 2 thứ
            thì chọn, còn nếu sai 1 trong 2 thì không chọn.
          </p>
          <p
            style={{ marginLeft: 40 }}
            className={styles.Part1Container__Content__introduce__text_p}
          >
            <em>Ví dụ về sai chủ ngữ:</em>
          </p>
          <img
            width={400}
            height={266}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fsai_chu_ngu_2_AmUnzDy.jpg?alt=media&token=7faf8fc5-f55b-4252-b0ca-d5347551506b"
            }
          />
          <p
            style={{ marginLeft: 40 }}
            className={styles.Part1Container__Content__introduce__text_p}
          >
            Bạn có thể nghe&nbsp;lựa chọn sau:&nbsp;
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 80 }}
          >
            <em>
              The desktop computer is turned on. = Máy tính để bàn đang bật.
            </em>
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 40 }}
          >
            =&gt; Lựa chọn&nbsp;trên là sai bởi vì trong hình này không có máy
            tính để bàn mà chỉ có laptop.
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 40 }}
          >
            <em>Ví dụ về sai tính&nbsp;từ:</em>
          </p>
          <img
            width={400}
            height={266}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fsai_tinh_tu.jpg?alt=media&token=85edc05f-6ecf-4566-a9f3-8e7ce4326ee3"
            }
          />
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 40 }}
          >
            Bạn có thể nghe một lựa chọn sau:
          </p>
          <p style={{ marginLeft: 80 }}>
            <em>The dining table is empty. = Bàn ăn trống không.</em>
          </p>
          <p
            className={styles.Part1Container__Content__introduce__text_p}
            style={{ marginLeft: 40 }}
          >
            =&gt; Lựa chọn trên là sai bởi vì đúng là có bàn ăn nhưng&nbsp;đang
            có rất nhiều thức ăn trên bàn.
          </p>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            <em>
              <strong>Một mẹo cực hay cho Part 1</strong>
            </em>
            : đối với&nbsp;các&nbsp;câu hỏi hình ảnh&nbsp;KHÔNG&nbsp;có con
            người, tất cả&nbsp;các đáp án&nbsp;dạng "CHỦ NGỮ + are/is +{" "}
            <strong>being</strong> + V3" là SAI hết, ví dụ:
          </p>
          <ul className={styles.Part1Container__Content__ul}>
            <li>
              The room is <strong>being</strong> painted. = Căn phòng đang được
              sơn.
            </li>
            <li>
              A graph is <strong>being</strong> drawn on the board. = Một biểu
              đồ đang được vẽ trên bảng.
            </li>
            <li>
              The documents are <strong>being</strong> organized. = Các tài liệu
              đang được sắp xếp ngăn nắp.
            </li>
            <li>
              The cat is <strong>being</strong> fed. = Con mèo đang được cho ăn.
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Vì sao những câu này chắc chắn sai?&nbsp;Bởi vì "being + V3" diễn tả
            một hành động đang xảy ra với một vật do sự tác động của con người,
            mà trong một bức hình không có con người thì không thể nào có hành
            động gì đang diễn ra được. Mẹo này rất hữu ích đúng không nào!
          </p>
          <h3
            data-id="side-label-index-6"
            className={styles.Part1Container__Content__textBlue}
          >
            3. Những vật trong hình có <strong>vị trí </strong>như thế nào với
            nhau?
          </h3>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Một số cấu trúc miêu tả vị trí của các vật&nbsp;mà bạn có thể nghe
            thấy trong các đáp án A B C D là:
          </p>
          <ul>
            <li>
              CHỦ NGỮ&nbsp;+ is/are + GIỚI TỪ&nbsp;+ VẬT/NGƯỜI = CHỦ
              NGỮ&nbsp;đang ở...<br></br>
              Ví dụ:
              <ul>
                <li>
                  A lamp is under the chair. = Cái đèn ngủ đang ở dưới cái ghế.
                </li>
                <li>
                  The candles are on the table. = Những cái nến đang ở trên bàn.
                </li>
              </ul>
            </li>
            <li>
              There + is/are + CHỦ NGỮ + GIỚI TỪ&nbsp;+ VẬT/NGƯỜI
              =&nbsp;Có&nbsp;CHỦ NGỮ&nbsp;ở...<br></br>
              Ví dụ:&nbsp;
              <ul className={styles.Part1Container__Content__ul}>
                <li>
                  There is a spoon in the sink. = Có một cái thìa ở trong bồn
                  rửa.
                </li>
                <li>
                  There are some paper on the floor. = Có vài tờ giấy ở
                  dưới&nbsp;sàn nhà.
                </li>
              </ul>
            </li>
          </ul>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Cũng như khi xác định vị trí của người trong hình,{" "}
            <strong>vị trí của vật&nbsp;trong hình</strong> sẽ được xác định
            bằng các giới từ chỉ nơi chốn, vì vậy bạn nhất định phải&nbsp;
            <strong>học một số giới từ về nơi chốn</strong> quan trọng sau đây:
          </p>
          <ul className={styles.Part1Container__Content__ul}>
            <li>
              <strong>above </strong>= ở bên trên
            </li>
            <li>
              <strong>below </strong>= ở bên dưới
            </li>
            <li>
              <strong>on </strong>= trên bề mặt
            </li>
            <li>
              <strong>under </strong>= dưới
            </li>
            <li>
              <strong>behind </strong>= sau
            </li>
            <li>
              <strong>in front of</strong> = trước
            </li>
            <li>
              <strong>at </strong>= tại
            </li>
            <li>
              <strong>in </strong>= bên trong
            </li>
            <li>
              <strong>between </strong>= giữa
            </li>
            <li>
              <strong>next to </strong>= ngay cạnh
            </li>
            <li>
              <strong>by </strong>= bên cạnh
            </li>
            <li>
              <strong>near </strong>= gần
            </li>
          </ul>
          <img
            width={400}
            height={258}
            src={
              "https://firebasestorage.googleapis.com/v0/b/toeic-project.appspot.com/o/CommonDoc%2FFrontEndPractice%2FPart1%2Fgioi-tu-chi-noi-chon.png?alt=media&token=a7e65f20-9fcb-47e0-b850-181a6d7e99ce"
            }
          />
          <h2
            data-id="side-label-index-7"
            className={styles.Part1Container__Content__textGreen}
          >
            <a id="bai-tap"></a>3. Bài tập luyện nghe Part 1
          </h2>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Như vậy là bạn vừa học xong cách chọn đáp án cho 2 loại hình ảnh phổ
            biến nhất&nbsp;trong Part 1&nbsp;của đề thi TOEIC&nbsp;rồi.
          </p>
          <p className={styles.Part1Container__Content__introduce__text_p}>
            Bây giờ bạn&nbsp;hãy thử sức với{" "}
            <strong>10&nbsp;bài tập Part 1</strong>&nbsp;ngay dưới&nbsp;đây
            nhé:&nbsp;
          </p>
          <p>
            <a
              className={styles.Part1Container__Content__button}
              title="Làm bài tập Phần 2"
            >
              Làm bài tập Part 1
            </a>
          </p>
          <CommentComp
            colectionName={"CommentPart1"}
            colectionReaction={"Part1_RC"}
          />
         
        </div>
        <Footer />
      </div>
    );
  }
}
