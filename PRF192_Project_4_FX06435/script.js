$(document).ready(function () {
  // xác định chỉ mục cho ảnh đầu và anh cuối
  var stt = 0;
  var endImg = $("img.slide:last").attr("idx");

  // xử lý sự kiện cho button
  $("button").click(function () {
    stt = $(this).attr("idx"); // biến stt sẽ nhận chỉ mục của button

    changeImg(stt);
  });

  // xử lý sự kiện cho nút next, nếu stt lớn hơn 3 thì sẽ set lại cho stt = 0
  $("#next").click(function () {
    if (++stt > endImg) {
      stt = 0;
    }

    changeImg(stt);
  });

  // xử lý sự kiện cho nút prev, nếu stt nhỏ hơn 0 thì sẽ set cho stt = 3
  $("#prev").click(function () {
    if (--stt < 0) {
      stt = endImg;
    }

    changeImg(stt);
  });

  // đặt thời gian tự động chuyển slide, cứ sau 5s thì sự kiện click next sẽ diễn ra
  var interval;
  var timer = function () {
    interval = setInterval(function () {
      $("#next").click();
    }, 5000);
  };
  timer();

  function changeImg(stt) {
    $("img.slide").hide(); // ẩn toàn bộ các ảnh
    $("img.slide").eq(stt).fadeIn(500); // hiển thị ảnh có chỉ mục của stt
    $("button").removeClass("active"); // xóa class active với các button
    $("button").eq(stt).addClass("active"); // đặt lại class active cho button

    clearInterval(interval); // clearInterval sẽ ngắt quá trình gọi lại interval sau 1 khoảng thời gian ấn định mà đã thiết lập setInterval ở trên
    timer();
  }
});
