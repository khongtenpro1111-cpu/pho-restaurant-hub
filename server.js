const express = require('express');
const path = require('path');
const app = express();

// Lấy cổng do Cloud cấp, nếu chạy ở máy (localhost) thì dùng cổng 3000
const PORT = process.env.PORT || 3000;

// Lệnh cấu hình gánh toàn bộ file giao diện tĩnh trong thư mục public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server đang chạy mượt mà tại cổng: ${PORT}`);
});