import React from "react";
import "./sass/main.css";
import "./sass/_grid.css";
export default class Practice1 extends React.Component {
  render() {
    return (
      <div className="practicepart1">
        <div className="container">
          <h1>Tổng Quan Về Danh Từ Trong Tiếng Anh</h1>
          <p>
            Danh từ trong tiếng Anh có thể được phân loại thành các loại là:
          </p>
          <ul>
            <li>Danh từ số ít & Danh từ số nhiều</li>
            <li>Danh từ đếm được & Danh từ không đếm được</li>
          </ul>
          <h2>1. Danh từ số ít & Danh từ số nhiều</h2>
          <div className="practicepart1-question">
            <p>
              <strong>✅ Tóm tắt:</strong>
              <p>
                Khác với tiếng Việt, danh từ trong tiếng Anh có 2 dạng khác
                nhau: số ít và số nhiều.
              </p>
              <p>
                Nếu chúng ta nói đến số lượng từ 2 trở lên thì bắt buộc dùng
                danh từ số nhiều.
              </p>
              <p>Các trường hợp danh từ số nhiều:</p>
              <ul>
                <li>Thông thường: Thêm -s hoặc -es vào danh từ số ít</li>
                <li>Một số danh từ có dạng số nhiều bất quy tắc</li>
                <li>Một số danh từ có dạng số nhiều giống dạng số ít</li>
              </ul>
            </p>
          </div>
          <h3>1. Danh từ số ít & Danh từ số nhiều là gì?</h3>
          <p>Trong tiếng Việt, danh từ không bao giờ biến đổi theo số lượng:</p>
          <ul>
            <li>
              Anh ấy có một <strong>cây viết</strong>.
            </li>
            <li>
              Tôi có hai <strong>cây viết.</strong>.
            </li>
          </ul>
          <p>
            Danh từ "cây viết" luôn luôn là "cây viết", dù cho số lượng là 1 cây
            viết hay 2 cây viết.
          </p>
          <p>
            Tiếng Anh thì lại có sự phân biệt giữa số lượng 1 và số lượng từ 2
            trở lên:
          </p>
          <p>
            Nếu số lượng là 1 thì chúng ta <strong>bắt buộc phải</strong> dùng{" "}
            <strong>danh từ ở dạng số ít:</strong>{" "}
          </p>
          <ul>
            <li>
              <p>He has a pen.</p>
              <p>Anh ấy có một cây viết.</p>{" "}
            </li>
          </ul>
          <p>
            Nếu số lượng từ 2 trở lên thì chúng ta <strong>bắt buộc</strong>{" "}
            phải dùng <strong>danh từ ở dạng số nhiều:</strong>{" "}
          </p>
          <ul>
            <li>
              <p>
                I have two <strong>pens.</strong>
              </p>
              <p>Tôi có hai cây viết.</p>
            </li>
          </ul>
          <img src="https://tienganhmoingay.com/media/images/uploads/2018/06/28/pens.png" />
          <p>
            Tuy nhiên, đối với phần lớn danh từ trong tiếng Anh thì dạng số ít
            và dạng số nhiều khá giống nhau. Đa phần thì dạng số nhiều có thể
            được suy ra dễ dàng tự dạng số ít, ví dụ:
          </p>
          <ul>
            <li>pen → pens</li>
            <li>cat → cats</li>
            <li>tomato → tomatoes</li>
          </ul>
          <p>
            Chúng ta sẽ cùng tìm hiểu quy tắc biến đổi từ danh từ số ít sang
            danh từ số nhiều như thế nào nhé:
          </p>
          <h3>2. Quy tắc biến đổi danh từ số ít thành danh từ số nhiều</h3>
          <h4>Trường hợp 1: Thêm -s hoặc -es vào danh từ số ít</h4>
          <p>
            Đối với hầu hết các danh từ trong tiếng Anh, chúng ta chỉ cần thêm
            đuôi{" "}
          </p>
          <p>
            Vậy khi nào thì thêm -s, khi nào thì thêm -es? Hãy cùng xem bảng tóm
            tắt các trường hợp sau đây:
          </p>
          <table>
            <tr style={{ background: "#00baff", color: "#fff" }}>
              <th>Danh từ số ít</th>
              <th>Danh từ số nhiều</th>
            </tr>
            <tr>
              <th>Hầu hết các danh từ</th>
              <th>
                <p>Thêm -s:</p>
                <ul>
                  <li>dog → dogs (con chó)</li>
                  <li>bird → birds (con chim)</li>
                  <li>hand → hands (bàn tay)</li>
                </ul>
              </th>
            </tr>
            <tr>
              <th>
                Hầu hết các danh từ tận cùng bằng chữ -ch, -s, -sh, -x, -z
              </th>
              <th>
                <p>Thêm -es:</p>
                <ul>
                  <li>box → boxes (cái hộp)</li>
                  <li>bus → buses (xe buýt)</li>
                  <li>match → matches (que diêm)</li>
                </ul>
                <p>Tuy nhiên nếu chữ -ch phát âm là /k/ thì thêm -s:</p>
                <ul>
                  <li>stomach → stomachs (bụng)</li>
                </ul>
                <p>Một số trường hợp số nhiều không thêm -es:</p>
                <ul>
                  <li>means → means (phương tiện)</li>
                  <li>series → series (sê-ri)</li>
                  <li>species → species (loài)</li>
                  <li>fish → fish (cá)</li>
                </ul>
              </th>
            </tr>
            <tr>
              <th>Các danh từ tận cùng bằng chữ -y</th>
              <th>
                <p>
                  Nếu trước -y là một phụ âm, đổi chữ -y thành -i, rồi thêm -es:
                </p>
                <ul>
                  <li>family → families (gia đình)</li>
                  <li>baby → babies (em bé)</li>
                  <li>party → parties (bữa tiệc)</li>
                </ul>
                <p>Nếu trước -y là một nguyên âm, thêm -s bình thường:</p>
                <ul>
                  <li>boy → boys (con trai)</li>
                  <li>key → keys (chìa khóa)</li>
                  <li>toy → toys (đồ chơi)</li>
                </ul>
              </th>
            </tr>
            <tr>
              <th>Các danh từ tận cùng bằng chữ -o</th>
              <th>
                <p>Hầu hết các danh từ tận cùng bằng -o đều thêm -s:</p>
                <ul>
                  <li>zero → zeros (số không)</li>
                  <li>solo → solos (ca sỹ hát đơn)</li>
                  <li>studio → studios (studio)</li>
                </ul>
                <p>Một số ít thì thêm -es:</p>
                <ul>
                  <li>hero → heroes (anh hùng)</li>
                  <li>tomato → tomatoes (cà chua)</li>
                  <li>potato → potatoes (khoai tây)</li>
                </ul>
              </th>
            </tr>
            <tr>
              <th>Hầu hết các danh từ tận cùng bằng chữ -f hoặc -fe</th>
              <th>
                <p>Đổi chữ -f thành -v rồi thêm -es:</p>
                <ul>
                  <li>knife → knives (con dao)</li>
                  <li>half → halves (nửa)</li>
                  <li>shelf → shelves (kệ)</li>
                </ul>
                <p>Một số trường hợp ngoại lệ:</p>
                <ul>
                  <li>chef → chefs (đầu bếp)</li>
                  <li>chief → chiefs (người đứng đầu)</li>
                  <li>roof → roofs (mái nhà)</li>
                </ul>
              </th>
            </tr>
          </table>
          <h4>Trường hợp 2: Dạng số nhiều biến đổi bất quy tắc</h4>
          <p>
            Có một số danh từ trong tiếng Anh không biến đổi thành dạng số nhiều
            bằng cách thêm -s hay -es.
          </p>
          <p>
            Nghe thì có vẻ hơi rắc rối, nhưng vì đây là những danh từ phổ biến
            nên bạn sẽ gặp đi gặp lại liên tục, chẳng mấy chốc bạn sẽ nhớ các
            danh số nhiều đặc biệt này thôi!
          </p>
          <p>Dưới đây là một số danh từ phổ biến:</p>
          <ul>
            <li>man → men (đàn ông)</li>
            <li>woman → women (phụ nữ)</li>
            <li>child → children (đứa trẻ)</li>
            <li>person → people (người)</li>
            <li>foot → feet (bàn chân)</li>
            <li>tooth → teeth (răng)</li>
            <li>mouse → mice (con chuột)</li>
          </ul>
          <img
            src="https://tienganhmoingay.com/media/images/uploads/2018/06/29/men_mice.png"
            alt=""
          />
          <p>
            Ngoài ra, các từ tiếng Anh có nguồn gốc từ những ngôn ngữ khác thì
            có thể có 2 dạng số nhiều: dạng thêm -s/-es và dạng số nhiều mượn từ
            ngôn ngữ gốc:
          </p>
          <ul>
            <li>antenna → antennae hoặc antennas (ăng-ten)</li>
            <li>cactus → cacti hoặc cactuses (cây xương rồng)</li>
            <li>formula → formulae hoặc formulas (công thức)</li>
            <li>millennium → millennia hoặc millenniums (thiên niên kỷ)</li>
            <li>vân vân...</li>
          </ul>
          <p>
            Những danh từ này thì chúng ta học đến đâu nhớ đến đó là được, không
            cần phải học một lượt hết những danh từ kiểu như vậy, vì sẽ khó nhớ
            và rất dễ nhầm lẫn!
          </p>
          <h4>Trường hợp 3: Dạng số nhiều không biến đổi so với dạng số ít</h4>
          <p>
            Bên cạnh đó, có một số danh từ có dạng số ít và số nhiều y hệt nhau.
            Điều khá thú vị là những từ này thường là danh từ chỉ động vật:
          </p>
          <ul>
            <li>fish → fish (con cá)</li>
            <li>quail → quail (chim cút)</li>
            <li>sheep → sheep (con cừu)</li>
            <li>shrimp → shrimp (con tôm)</li>
          </ul>
          <img
            src="https://tienganhmoingay.com/media/images/uploads/2018/06/29/fish_sheep.png"
            alt=""
          />
          <p>Ngoài ra, cũng có một số từ khác rơi vào trường hợp này:</p>
          <ul>
            <li>means → means (phương tiện)</li>
            <li>series → series (sê-ri)</li>
            <li>species → species (loài)</li>
          </ul>
          <h2>2. Ngữ pháp liên quan đến Danh từ số ít & Danh từ số nhiều</h2>
          <p>
            Danh từ số ít & Danh từ số nhiều có ảnh hưởng đến ngữ pháp ở hai
            mặt:
          </p>
          <ul>
            <li>
              Nếu danh từ có số lượng từ 2 vật hoặc 2 người trở lên, chúng ta
              BẮT BUỘC phải dùng dạng số nhiều.
            </li>
            <li>
              Trong các từ hạn định, một số từ chỉ có thể đi với danh từ số ít,
              một số chỉ có thể đi với danh từ số nhiều, một số từ có thể đi với
              cả hai.
            </li>
            <li>
              Nếu danh từ đóng vai trò chủ ngữ, thì động từ sẽ phải biến đổi tùy
              theo danh từ là số ít hay số nhiều.
            </li>
          </ul>
          <p>
            Điểm cuối cùng là cực kỳ quan trọng trong ngữ pháp tiếng Anh. Dưới
            đây là bảng tóm tắt cách chia động từ theo danh từ số ít và số
            nhiều:
          </p>
          <table>
            <tr>
              <th></th>
              <th>Động từ số ít</th>
              <th>Động từ số nhiều</th>
            </tr>
            <tr>
              <th>
                Động từ <strong>to be</strong> ở các thì hiện tại
              </th>
              <th>is</th>
              <th>are</th>
            </tr>
            <tr>
              <th>Động từ to be ở các thì quá khứ</th>
              <th>was</th>
              <th>were</th>
            </tr>
            <tr>
              <th>Các động từ thường khác ở các thì hiện tại</th>
              <th>(thêm đuôi -s hoặc -es) Ví dụ: works, washes</th>
              <th>(dạng nguyên mẫu) Ví dụ: work, wash</th>
            </tr>
            <tr>
              <th>Động từ khiếm khuyết (như will, can, may,...)</th>
              <th>(dạng nguyên mẫu) Ví dụ: will, can, may</th>
              <th>(dạng nguyên mẫu) Ví dụ: will, can, may</th>
            </tr>
          </table>
          <h2>
            3. Một số trường hợp đặc biệt về Danh từ số ít và Danh từ số nhiều
          </h2>
          <div className="practicepart1-question">
            <p>
              <strong>✅ Tóm tắt:</strong>
            </p>
            <p>Có một số trường hợp đặc biệt cần lưu ý để tránh nhầm lẫn:</p>
            <ul>
              <li>
                Có những danh từ chỉ có dạng số nhiều, không có dạng số ít
              </li>
              <li>
                Có những danh từ tận cùng là -s nhưng lại là danh từ số ít
              </li>
            </ul>
          </div>
          <h4>
            TH đặc biệt 1: Những danh từ chỉ có dạng số nhiều, không có dạng số
            ít
          </h4>
          <p>
            Trong tiếng Anh có một số danh từ chỉ có dạng số nhiều mà không có
            dạng số ít, vì chúng thường là những vật dụng có 2 phần giống nhau.
          </p>
          <p>Dưới đây là một số ví dụ điển hình:</p>
          <ul>
            <li>
              <p>Quần áo:</p>
              <ul>
                <li>jeans (quần jean)</li>
                <li>pyjamas (đồ ngủ)</li>
                <li>pants (quần)</li>
                <li>shorts (quần ngắn)</li>
              </ul>
            </li>
            <li>
              <p>Dụng cụ:</p>
              <ul>
                <li>binoculars (ống nhòm)</li>
                <li>headphones (tai nghe)</li>
                <li>glasses (mắt kính)</li>
                <li>scissors (cây kéo)</li>
              </ul>
            </li>
          </ul>
          <img
            src="https://tienganhmoingay.com/media/images/uploads/2018/06/29/pyjamas_binoculars.png"
            alt=""
          />
          <p>
            Ngoài ra, chúng ta cũng có một số danh từ chỉ có dạng số nhiều khác
            như:
          </p>
          <ul>
            <li>belongings (hành lý)</li>
            <li>clothes (quần áo)</li>
            <li>congratulations (lời chúc mừng)</li>
            <li>earnings (thu nhập)</li>
            <li>goods (hàng hóa)</li>
            <li>savings (tiền tiết kiệm)</li>
            <li>stairs (cầu thang)</li>
            <li>surroundings (những thứ xung quanh)</li>
            <li>thanks (lời cảm ơn)</li>
          </ul>
          <h4>
            TH đặc biệt 2: Những danh từ tận cùng là -s nhưng lại là danh từ số
            ít
          </h4>
          <p>
            Cần tránh nhầm lẫn những danh từ sau đây là số nhiều. Sau đây là một
            số ví dụ điển hình:
          </p>
          <ul>
            <li>news (tin tức)</li>
            <li>mathematics (toán học)</li>
            <li>physics (vật lý)</li>
            <li>aerobics (thể dục nhịp điệu)</li>
            <li>gymnastics (thể dục dụng cụ)</li>
            <li>politics (chính trị)</li>
          </ul>
          <img
            src="https://tienganhmoingay.com/media/images/uploads/2018/06/29/news_maths.png"
            alt=""
          />
          <h2>4. Danh từ đếm được & Danh từ không đếm được</h2>
          <div className="practicepart1-question">
            <p>
              <strong>✅ Tóm tắt:</strong>
            </p>
            <p>
              Danh từ không đếm được là những danh từ không thể đếm số lượng 1,
              2, 3 cái được mà chỉ có thể đo lường thông qua một đơn vị khác.
            </p>
            <p>Ví dụ:</p>
            <ul>
              <li>
                <strong>water</strong> = nước (danh từ không đếm được)
              </li>
              <li>
                <strong>a glass of water</strong> = một ly nước (đo lường thông
                qua đơn vị là cái ly)
              </li>
            </ul>
          </div>
          <h3>1. Danh từ đếm được & Danh từ không đếm được là gì?</h3>
          <p>
            Chúng ta đã tìm hiểu về các danh từ số ít và danh từ số nhiều ở
            trên. Những danh từ này có đặc điểm chung là chúng có thể đếm được
            số lượng (1 người, 2 quả táo, 10 con mèo), vì vậy chúng được gọi
            chung là những <strong>danh từ đếm được</strong>
          </p>
          <p>
            Trong tiếng Anh còn có một loại danh từ nữa là
            <strong>danh từ không đếm được</strong>. Những danh từ này không thể
            đếm số lượng 1, 2, 3 cái được mà chỉ có thể đo lường thông qua một
            đơn vị khác.
          </p>
          <p>
            Một ví dụ điển hình là <strong>water </strong>(nước). Ngay cả trong
            tiếng Việt cũng không thể đếm 1 nước, 2 nước đúng không nào. Chúng
            ta chỉ có thể đo lường thông qua các đơn vị như 1 ly nước, 1 lít
            nước, một ít nước, rất nhiều nước, vân vân...
          </p>
          <ul>
            <li>a glass of water (1 ly nước)</li>
            <li>one liter of water (1 lít nước)</li>
            <li>some water (một ít nước)</li>
            <li>a lot of water (rất nhiều nước)</li>
          </ul>
          <img
            src="https://tienganhmoingay.com/media/images/uploads/2018/06/29/water_glass_of_water.png"
            alt=""
          />
          <h3>2. Ví dụ các danh từ không đếm được</h3>
          <ul>
            <li>
              <p>Chất liệu</p>
              <ul>
                <li>paper (giấy)</li>
                <li>plastic (nhựa)</li>
                <li>wood (gỗ)</li>
              </ul>
            </li>
            <li>
              <p>Thức ăn</p>
              <ul>
                <li>food (thức ăn)</li>
                <li>bread (bánh mì)</li>
                <li>butter (bơ)</li>
                <li>cheese (phô mai)</li>
                <li>meat (thịt)</li>
                <li>rice (gạo)</li>
                <li>salt (muối)</li>
                <li>sugar (đường)</li>
              </ul>
            </li>
            <li>
              <p>Thức uống</p>
              <ul>
                <li>beer (bia)</li>
                <li>coffee (cà phê)</li>
                <li>milk (sữa)</li>
                <li>tea (trà)</li>
                <li>water (nước)</li>
                <li>wine (rượu)</li>
              </ul>
            </li>
            <li>
              <p>Các danh từ trừu tượng</p>
              <ul>
                <li>courage (lòng cam đảm)</li>
                <li>fear (nỗi sợ hãi)</li>
                <li>happiness (hạnh phúc)</li>
                <li>experience (kinh nghiệm)</li>
                <li>knowledge (kiến thức)</li>
              </ul>
            </li>
          </ul>
          <img
            src="https://tienganhmoingay.com/media/images/uploads/2018/06/29/cheese_wood.png"
            alt=""
          />
          <h2>5. Đặc điểm ngữ pháp của danh từ không đếm được</h2>
          <p>Danh từ không đếm được có các đặc điểm ngữ pháp sau:</p>
          <ul>
            <li>
              Danh từ không đếm được không có dạng số ít hay số nhiều gì cả, chỉ
              có 1 dạng duy nhất.
            </li>
            <li>
              Trong các từ hạn định, chỉ có một số từ mới đi kèm được với danh
              từ không đếm được.
            </li>
            <li>
              Nếu danh từ không đếm được đóng vai trò chủ ngữ, thì động từ sẽ
              được chia theo dạng số ít.
            </li>
          </ul>
          <table>
            <tr>
              <th></th>
              <th>Động từ số ít</th>
            </tr>
            <tr>
              <th>Động từ to be ở các thì hiện tại</th>
              <th>is</th>
            </tr>
            <tr>
              <th>Động từ to be ở các thì quá khứ</th>
              <th>was</th>
            </tr>
            <tr>
              <th>Động từ to have ở các thì hiện tại</th>
              <th>has</th>
            </tr>
            <tr>
              <th>Các động từ thường khác ở các thì hiện tại</th>
              <th>(thêm đuôi -s hoặc -es) Ví dụ: works, washes</th>
            </tr>
            <tr>
              <th>Động từ khiếm khuyết (như will, can, may,...)</th>
              <th>(dạng nguyên mẫu) Ví dụ: will, can, may</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
