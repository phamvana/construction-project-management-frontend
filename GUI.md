# 🎯 THIẾT KẾ GIAO DIỆN PHÂN HỆ ĐÁNH GIÁ HỒ SƠ DỰ THẦU

---

## 1. Danh sách hồ sơ dự thầu

**Mục tiêu:** Quản lý toàn bộ hồ sơ dự thầu

**UI:**

* Bảng dữ liệu (DataTable)
* Cột:

  * Tên gói thầu
  * Nhà thầu
  * Trạng thái
  * Ngày nộp
  * Điểm
  * Xếp hạng

**Bộ lọc (Filter):**

* Trạng thái:

  * Chưa đánh giá
  * Đang đánh giá
  * Hoàn thành
* Gói thầu

**Chức năng:**

* ➕ Thêm hồ sơ
* 📥 Import Excel
* 📊 Dashboard

---

## 2. Tiếp nhận hồ sơ dự thầu

**UI Form:**

* Tên gói thầu (dropdown)
* Nhà thầu
* File hồ sơ (upload PDF/ZIP)
* Ngày nộp
* Ghi chú

**Tính năng:**

* Drag & drop upload file
* Validate file format
* Preview file trước khi lưu

---

## 3. Chi tiết hồ sơ dự thầu

**Layout 2 cột:**

### Cột trái:

* Thông tin hồ sơ
* Thông tin nhà thầu
* Trạng thái đánh giá

### Cột phải (Tabs):

* Hồ sơ
* Đánh giá
* Tài liệu
* Lịch sử

---

## 4. Đánh giá tính hợp lệ

**UI dạng checklist:**

* ✔ Hồ sơ đầy đủ
* ✔ Đúng mẫu
* ✔ Đúng thời hạn

**Kết quả:**

* Hợp lệ / Không hợp lệ
* Ghi chú đánh giá

---

## 5. Đánh giá năng lực & kinh nghiệm

**UI:**

* Bảng tiêu chí:

  * Kinh nghiệm
  * Nhân sự
  * Dự án tương tự

**Chức năng:**

* Chấm điểm từng tiêu chí
* Tự động tính tổng điểm
* Hiển thị trọng số

---

## 6. Đánh giá kỹ thuật

**UI nâng cao:**

* Tree tiêu chí (expand/collapse)
* Chấm điểm theo từng nhánh
* Trọng số từng tiêu chí

**Tính năng:**

* Upload tài liệu minh chứng
* Gắn file theo từng tiêu chí

---

## 7. Đánh giá tài chính

**UI:**

* Giá dự thầu
* Giá sau hiệu chỉnh
* Công thức tính điểm tự động

**Highlight:**

* Nhà thầu có giá thấp nhất
* Cảnh báo chênh lệch bất thường

---

## 8. Tổng hợp điểm & xếp hạng

**UI Dashboard mini:**

### Bảng tổng hợp:

* Nhà thầu
* Điểm kỹ thuật
* Điểm tài chính
* Tổng điểm
* Xếp hạng

### Biểu đồ:

* Bar chart so sánh nhà thầu
* Ranking visualization

---

## 9. Báo cáo đánh giá

**UI:**

* Preview báo cáo trước khi xuất

**Chức năng:**

* Xuất PDF
* Xuất Word
* Template chuẩn theo quy định

---

## 10. Tài liệu đánh giá (DMS)

**UI dạng Google Drive mini:**

* Folder:

  * Hồ sơ
  * Biên bản
  * File chấm thầu

**Chức năng:**

* Upload / Download
* Versioning file
* Phân quyền truy cập

---

## 11. Workflow phê duyệt

**UI dạng flow:**

* Soạn thảo → Trình duyệt → Phê duyệt → Hoàn thành

**Thông tin:**

* Người duyệt
* Trạng thái hiện tại

**Chức năng:**

* Gửi duyệt
* Phê duyệt
* Từ chối

---

## 12. Lịch sử & Audit Log

**UI dạng timeline:**

* Ai thực hiện
* Thời gian
* Nội dung thay đổi

**Mục tiêu:**

* Minh bạch toàn bộ thao tác hệ thống

---

## 13. Import / Export

**UI:**

### Import Excel:

* Upload file
* Mapping cột dữ liệu

### Export:

* Excel
* PDF

---

## 14. Dashboard thống kê

**UI tổng quan:**

### KPI Cards:

* Tổng số hồ sơ
* Số hồ sơ đã chấm
* Điểm trung bình

### Biểu đồ:

* Pie chart: trạng thái hồ sơ
* Bar chart: xếp hạng nhà thầu

---

# 🎨 GỢI Ý UI/UX CHUNG

* Sử dụng Tab cho từng bước đánh giá
* Stepper cho workflow chấm thầu
* Màu trạng thái:

  * 🟢 Xanh: đạt
  * 🔴 Đỏ: không đạt
  * 🟡 Vàng: đang xử lý
* Sticky header cho bảng dữ liệu
* Auto-save khi nhập điểm

---

# 🚀 GỢI Ý KỸ THUẬT

## Frontend:

* HTML + JavaScript (MVP)
* Hoặc React + Ant Design (khuyến nghị)

## Backend:

* Django REST Framework
* PostgreSQL

---

# 🔥 KẾT LUẬN

Phân hệ nên thiết kế theo:

* Quy trình workflow 1 chiều
* Mỗi bước là một màn hình rõ ràng
* Có tổng hợp điểm tự động
* Có báo cáo & audit đầy đủ

👉 Kết quả đạt được:

* Minh bạch quá trình chấm thầu
* Giảm sai sót thủ công
* Dễ kiểm tra & audit
* Chuẩn hóa quy trình đấu thầu
