import "./App.css";
import "antd/dist/antd.css";
import MultiDatePicker from "./component/multidatepicker/MultiDatePicker";
import YearPicker from "./component/yearpicker/YearPicker";
import { useState } from "react";
import SinglePicker from "./component/SinglePicker.tsx/SinglePicker";

function App() {
  const yearArray = [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
  ];

  return (
    <div className="App">
      <div onScroll={(e)=>{
          console.log("hee")
      }}>
        <MultiDatePicker />
        <SinglePicker />
        <div>
          Hiểu một cách đơn giản, thì toàn bộ resource của web bao gồm các file
          CSS, Javascript, master layout hay cấu trúc web page sẽ được load lần
          đầu tiên khi chúng ta bắt đầu duyệt môt website A nào đó. Ở những lần
          sau, khi chuyển trang khác, client sẽ gửi những ajax request để get dữ
          liệu cần thiết( thường là phần nội dung). Việc này mang đến trải
          nghiệm cho người dùng web tốt hơn, giảm thời gian phải load lại toàn
          bộ trang web cồng kềnh, tiết kiệm băng thông cũng như thời gian chờ
          đợi. Việc này là trái ngược hoàn toàn với trang web truyền thống khi
          toàn bộ trang web phải load lại mỗi khi chuyển trang. Để có cái nhìn
          dễ hiểu hơn, bạn hãy nhìn hình minh họa bên dưới về single page
          application Vùng màu xanh được coi là khung hay master page của 1
          website, Vùng màu đỏ là content của web page sẽ hiển thị và thay thế
          mỗi khi chuyển trang. iểu một cách đơn giản, thì toàn bộ resource của
          web bao gồm các file CSS, Javascript, master layout hay cấu trúc web
          page sẽ được load lần đầu tiên khi chúng ta bắt đầu duyệt môt website
          A nào đó. Ở những lần sau, khi chuyển trang khác, client sẽ gửi những
          ajax request để get dữ liệu cần thiết( thường là phần nội dung). Việc
          này mang đến trải nghiệm cho người dùng web tốt hơn, giảm thời gian
          phải load lại toàn bộ trang web cồng kềnh, tiết kiệm băng thông cũng
          như thời gian chờ đợi. Việc này là trái ngược hoàn toàn với trang web
          truyền thống khi toàn bộ trang web phải load lại mỗi khi chuyển trang.
          Để có cái nhìn dễ hiểu hơn, bạn hãy nhìn hình minh họa bên dưới về
          single page application Vùng màu xanh được coi là khung hay master
          page của 1 website, Vùng màu đỏ là content của web page sẽ hiển thị và
          thay thế mỗi khi chuyển trang. iểu một cách đơn giản, thì toàn bộ
          resource của web bao gồm các file CSS, Javascript, master layout hay
          cấu trúc web page sẽ được load lần đầu tiên khi chúng ta bắt đầu duyệt
          môt website A nào đó. Ở những lần sau, khi chuyển trang khác, client
          sẽ gửi những ajax request để get dữ liệu cần thiết( thường là phần nội
          dung). Việc này mang đến trải nghiệm cho người dùng web tốt hơn, giảm
          thời gian phải load lại toàn bộ trang web cồng kềnh, tiết kiệm băng
          thông cũng như thời gian chờ đợi. Việc này là trái ngược hoàn toàn với
          trang web truyền thống khi toàn bộ trang web phải load lại mỗi khi
          chuyển trang. Để có cái nhìn dễ hiểu hơn, bạn hãy nhìn hình minh họa
          bên dưới về single page application Vùng màu xanh được coi là khung
          hay master page của 1 website, Vùng màu đỏ là content của web page sẽ
          hiển thị và thay thế mỗi khi chuyển trang. iểu một cách đơn giản, thì
          toàn bộ resource của web bao gồm các file CSS, Javascript, master
          layout hay cấu trúc web page sẽ được load lần đầu tiên khi chúng ta
          bắt đầu duyệt môt website A nào đó. Ở những lần sau, khi chuyển trang
          khác, client sẽ gửi những ajax request để get dữ liệu cần thiết(
          thường là phần nội dung). Việc này mang đến trải nghiệm cho người dùng
          web tốt hơn, giảm thời gian phải load lại toàn bộ trang web cồng kềnh,
          tiết kiệm băng thông cũng như thời gian chờ đợi. Việc này là trái
          ngược hoàn toàn với trang web truyền thống khi toàn bộ trang web phải
          load lại mỗi khi chuyển trang. Để có cái nhìn dễ hiểu hơn, bạn hãy
          nhìn hình minh họa bên dưới về single page application Vùng màu xanh
          được coi là khung hay master page của 1 website, Vùng màu đỏ là
          content của web page sẽ hiển thị và thay thế mỗi khi chuyển trang. iểu
          một cách đơn giản, thì toàn bộ resource của web bao gồm các file CSS,
          Javascript, master layout hay cấu trúc web page sẽ được load lần đầu
          tiên khi chúng ta bắt đầu duyệt môt website A nào đó. Ở những lần sau,
          khi chuyển trang khác, client sẽ gửi những ajax request để get dữ liệu
          cần thiết( thường là phần nội dung). Việc này mang đến trải nghiệm cho
          người dùng web tốt hơn, giảm thời gian phải load lại toàn bộ trang web
          cồng kềnh, tiết kiệm băng thông cũng như thời gian chờ đợi. Việc này
          là trái ngược hoàn toàn với trang web truyền thống khi toàn bộ trang
          web phải load lại mỗi khi chuyển trang. Để có cái nhìn dễ hiểu hơn,
          bạn hãy nhìn hình minh họa bên dưới về single page application Vùng
          màu xanh được coi là khung hay master page của 1 website, Vùng màu đỏ
          là content của web page sẽ hiển thị và thay thế mỗi khi chuyển trang.
          iểu một cách đơn giản, thì toàn bộ resource của web bao gồm các file
          CSS, Javascript, master layout hay cấu trúc web page sẽ được load lần
          đầu tiên khi chúng ta bắt đầu duyệt môt website A nào đó. Ở những lần
          sau, khi chuyển trang khác, client sẽ gửi những ajax request để get dữ
          liệu cần thiết( thường là phần nội dung). Việc này mang đến trải
          nghiệm cho người dùng web tốt hơn, giảm thời gian phải load lại toàn
          bộ trang web cồng kềnh, tiết kiệm băng thông cũng như thời gian chờ
          đợi. Việc này là trái ngược hoàn toàn với trang web truyền thống khi
          toàn bộ trang web phải load lại mỗi khi chuyển trang. Để có cái nhìn
          dễ hiểu hơn, bạn hãy nhìn hình minh họa bên dưới về single page
          application Vùng màu xanh được coi là khung hay master page của 1
          website, Vùng màu đỏ là content của web page sẽ hiển thị và thay thế, Javascript, master layout hay cấu trúc web page sẽ được load lần
          đầu tiên khi chúng ta bắt đầu duyệt môt website A nào đó. Ở những lần
          sau, khi chuyển trang khác, client sẽ gửi những ajax request để get dữ
          liệu cần thiết( thường là phần nội dung). Việc này mang đến trải
          nghiệm cho người dùng web tốt hơn, giảm thời gian phải load lại toàn
          bộ trang web cồng kềnh, tiết kiệm băng thông cũng như thời gian chờ
          đợi. Việc này là trái ngược hoàn toàn với trang web truyền thống khi
          toàn bộ trang web phải load lại mỗi khi chuyển trang. Để có cái nhìn
          dễ hiểu hơn, bạn hãy nhìn hình minh họa bên dưới về single page
          application Vùng màu xanh được coi là khung hay master page của 1
          website, Vùng màu đỏ là content của web page sẽ hiển thị và thay thế
          mỗi khi chuyển trang. iểu một cách đơn giản, thì toàn bộ resource của
          web bao gồm các file CSS, Javascript, master layout hay cấu trúc web
          page sẽ được load lần đầu tiên khi chúng ta bắt đầu duyệt môt website
          A nào đó. Ở những lần sau, khi chuyển trang khác, client sẽ gửi những
          ajax request để get dữ liệu cần thiết( thường là phần nội dung). Việc
          này mang đến trải nghiệm cho người dùng web tốt hơn, giảm thời gian
          phải load lại toàn bộ trang web cồng kềnh, tiết kiệm băng thông cũng
          như thời gian chờ đợi. Việc này là trái ngược hoàn toàn với trang web
          truyền thống khi toàn bộ trang web phải load lại mỗi khi chuyển trang.
          Để có cái nhìn dễ hiểu hơn, bạn hãy nhìn hình minh họa bên dưới về
          single page application Vùng màu xanh được coi là khung hay master
          page của 1 website, Vùng màu đỏ là content của web page sẽ hiển thị và
          thay thế mỗi khi chuyển trang. iểu một cách đơn giản, thì toàn bộ
          resource của web bao gồm các file CSS, Javascript, master layout hay
          cấu trúc web page sẽ được load lần đầu tiên khi chúng ta bắt đầu duyệt
          môt website A nào đó. Ở những lần sau, khi chuyển trang khác, client
          sẽ gửi những ajax request để get dữ liệu cần thiết( thường là phần nội
          dung). Việc này mang đến trải nghiệm cho người dù, Javascript, master layout hay cấu trúc web page sẽ được load lần
          đầu tiên khi chúng ta bắt đầu duyệt môt website A nào đó. Ở những lần
          sau, khi chuyển trang khác, client sẽ gửi những ajax request để get dữ
          liệu cần thiết( thường là phần nội dung). Việc này mang đến trải
          nghiệm cho người dùng web tốt hơn, giảm thời gian phải load lại toàn
          bộ trang web cồng kềnh, tiết kiệm băng thông cũng như thời gian chờ
          đợi. Việc này là trái ngược hoàn toàn với trang web truyền thống khi
          toàn bộ trang web phải load lại mỗi khi chuyển trang. Để có cái nhìn
          dễ hiểu hơn, bạn hãy nhìn hình minh họa bên dưới về single page
          application Vùng màu xanh được coi là khung hay master page của 1
          website, Vùng màu đỏ là content của web page sẽ hiển thị và thay thế
          mỗi khi chuyển trang. iểu một cách đơn giản, thì toàn bộ resource của
          web bao gồm các file CSS, Javascript, master layout hay cấu trúc web
          page sẽ được load lần đầu tiên khi chúng ta bắt đầu duyệt môt website
          A nào đó. Ở những lần sau, khi chuyển trang khác, client sẽ gửi những
          ajax request để get dữ liệu cần thiết( thường là phần nội dung). Việc
          này mang đến trải nghiệm cho người dùng web tốt hơn, giảm thời gian
          phải load lại toàn bộ trang web cồng kềnh, tiết kiệm băng thông cũng
          như thời gian chờ đợi. Việc này là trái ngược hoàn toàn với trang web
          truyền thống khi toàn bộ trang web phải load lại mỗi khi chuyển trang.
          Để có cái nhìn dễ hiểu hơn, bạn hãy nhìn hình minh họa bên dưới về
          single page application Vùng màu xanh được coi là khung hay master
          page của 1 website, Vùng màu đỏ là content của web page sẽ hiển thị và
          thay thế mỗi khi chuyển trang. iểu một cách đơn giản, thì toàn bộ
          resource của web bao gồm các file CSS, Javascript, master layout hay
          cấu trúc web page sẽ được load lần đầu tiên khi chúng ta bắt đầu duyệt
          môt website A nào đó. Ở những lần sau, khi chuyển trang khác, client
          sẽ gửi những ajax request để get dữ liệu cần thiết( thường là phần nội
          dung). Việc này mang đến trải nghiệm cho người dù
          mỗi khi chuyển trang.
        </div>
      </div>
    </div>
  );
}

export default App;
