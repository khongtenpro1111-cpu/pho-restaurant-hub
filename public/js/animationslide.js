document.addEventListener('DOMContentLoaded', function() {
    $('.menu-slider').slick({
        dots: true,          // Hiển thị các chấm chỉ số
        infinite: true,      // Vòng lặp vô hạn
        speed: 300,          // Tốc độ chuyển slide
        slidesToShow: 1,     // Số lượng slide hiển thị trên màn hình
        slidesToScroll: 1,   // Số lượng slide cuộn mỗi lần
        autoplay: true,      // Bật chế độ tự động
        autoplaySpeed: 3000, // Tốc độ chuyển slide tự động (2 giây)
        arrows: true,        // Hiển thị các mũi tên điều hướng
        pauseOnHover: true   // Dừng tự động khi chuột di chuyển qua slider
    });
});


