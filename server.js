const express = require('express');
const path = require('path');
const app = express();

// Lấy cổng do Cloud cấp, nếu chạy ở máy (localhost) thì dùng cổng 3000
const PORT = process.env.PORT || 3000;

// Cấu hình bắt buộc để Server đọc được dữ liệu JSON và dữ liệu từ Form gửi lên
app.use(express.json());
app.use(express.urlencgit pushoded({ extended: true }));

// Lệnh cấu hình gánh toàn bộ file giao diện tĩnh trong thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Mảng tạm thời dùng để lưu trữ danh sách các đơn đặt bàn ngay trên Server
let danhSachDatBan = [];

// API tiếp nhận thông tin từ form đặt bàn (Trang reservation.html sẽ bắn dữ liệu vào đây)
app.post('/api/dat-ban', (req, res) => {
    const { name, phone, date, guests } = req.body;

    // Tên biến được viết hoàn toàn bằng tiếng Việt không dấu để chạy mượt mà trên Cloud
    const donDatBanMoi = {
        id: danhSachDatBan.length + 1,
        name,
        phone,
        date,
        guests,
        thoiGianDat: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })
    };

    // Lưu vào bộ nhớ mảng trên Server
    danhSachDatBan.push(donDatBanMoi);

    // In ra màn hình Terminal của PyCharm hoặc Logs của Render để theo dõi thời gian thực
    console.log("🔥 [Server] Co don dat ban moi tinh:", donDatBanMoi);

    // Phản hồi kết quả thành công về cho trình duyệt của khách
    res.json({
        success: true,
        message: `Chúc mừng đơn đặt bàn của anh/chị ${name} đã được ghi nhận thành công trên hệ thống!`
    });
});

// API để mình lấy toàn bộ danh sách khách đã đặt bàn
app.get('/api/danh-sach', (req, res) => {
    res.json(danhSachDatBan);
});

app.listen(PORT, () => {
    console.log(`Server đang chạy mượt mà tại cổng: ${PORT}`);
});