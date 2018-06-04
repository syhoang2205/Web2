-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 04, 2018 lúc 08:06 AM
-- Phiên bản máy phục vụ: 10.1.31-MariaDB
-- Phiên bản PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qldaugia`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `danhmucsp`
--

CREATE TABLE `danhmucsp` (
  `ID` int(11) NOT NULL,
  `TENDM` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `danhmucsp`
--

INSERT INTO `danhmucsp` (`ID`, `TENDM`, `createdAt`, `updatedAt`) VALUES
(1, 'Laptop', '2018-05-31 15:59:39', '2018-05-31 15:59:39'),
(2, 'Moblie', '2018-05-31 15:59:39', '2018-05-31 15:59:39');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `daugia`
--

CREATE TABLE `daugia` (
  `ID` int(11) NOT NULL,
  `MASP` int(11) NOT NULL,
  `MAIL` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `GIA` double NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ketquadg`
--

CREATE TABLE `ketquadg` (
  `ID` int(11) NOT NULL,
  `MASP` int(11) NOT NULL,
  `MAIL` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `GIA` double NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaitk`
--

CREATE TABLE `loaitk` (
  `ID` int(11) NOT NULL,
  `TENLOAI` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `loaitk`
--

INSERT INTO `loaitk` (`ID`, `TENLOAI`) VALUES
(1, 'ADMIN'),
(2, 'Người mua hàng'),
(3, 'Người Bán Hàng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

CREATE TABLE `sanpham` (
  `ID` int(11) NOT NULL,
  `TENSP` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `MADM` int(11) NOT NULL,
  `GIAKHOIDIEM` double NOT NULL,
  `MOTA` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `TRANGTHAI` int(11) NOT NULL,
  `NGAYBD` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `NGAYKT` datetime NOT NULL,
  `HINH` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`ID`, `TENSP`, `MADM`, `GIAKHOIDIEM`, `MOTA`, `TRANGTHAI`, `NGAYBD`, `NGAYKT`, `HINH`, `createdAt`, `updatedAt`) VALUES
(1, 'IPhone X', 2, 10000000, 'Điện Thoại IP X', 1, '2018-06-01 10:00:00', '2018-10-17 11:00:00', '', '2018-05-31 17:07:08', '2018-10-01 17:07:08'),
(2, 'IPhone 8P', 2, 9000000, 'Điện Thoại IP 8 Plus', 1, '2018-06-01 05:00:00', '2018-11-01 04:00:00', '', '2018-05-31 17:07:08', '2018-05-31 17:07:08'),
(3, 'IPhone 8', 2, 8000000, 'Điện Thoại IP 8', 1, '2018-06-01 19:00:00', '2018-10-01 00:00:00', '', '2018-05-31 17:07:08', '2018-05-31 17:07:08'),
(4, 'MacBook Pro', 1, 20000000, 'Máy Tính Xách Tay Macbook Pro 15', 1, '2018-06-03 07:00:00', '2018-11-14 00:00:00', '', '2018-05-31 17:07:08', '2018-05-31 17:07:08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

CREATE TABLE `taikhoan` (
  `ID` int(11) NOT NULL,
  `HOTEN` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `MAIL` text NOT NULL,
  `PASSWORD` varchar(10) NOT NULL,
  `DIACHI` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `LOAITK` int(11) NOT NULL,
  `TINHTRANG` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xntinhtrang`
--

CREATE TABLE `xntinhtrang` (
  `ID` int(11) NOT NULL,
  `TENTT` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `xntinhtrang`
--

INSERT INTO `xntinhtrang` (`ID`, `TENTT`) VALUES
(1, 'Đã Xác Nhận'),
(2, 'Chưa Xác Nhận');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `danhmucsp`
--
ALTER TABLE `danhmucsp`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `daugia`
--
ALTER TABLE `daugia`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_DauGiaSanPham` (`MASP`);

--
-- Chỉ mục cho bảng `ketquadg`
--
ALTER TABLE `ketquadg`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `loaitk`
--
ALTER TABLE `loaitk`
  ADD PRIMARY KEY (`ID`);

--
-- Chỉ mục cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_SanPhamDanhMuc` (`MADM`);

--
-- Chỉ mục cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_TaiKhoanLoaiTaiKhoan` (`LOAITK`);

--
-- Chỉ mục cho bảng `xntinhtrang`
--
ALTER TABLE `xntinhtrang`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `danhmucsp`
--
ALTER TABLE `danhmucsp`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `daugia`
--
ALTER TABLE `daugia`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `ketquadg`
--
ALTER TABLE `ketquadg`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `loaitk`
--
ALTER TABLE `loaitk`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `taikhoan`
--
ALTER TABLE `taikhoan`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `xntinhtrang`
--
ALTER TABLE `xntinhtrang`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
