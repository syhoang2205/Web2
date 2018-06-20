-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th6 20, 2018 lúc 08:35 AM
-- Phiên bản máy phục vụ: 5.7.21
-- Phiên bản PHP: 5.6.35

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

DROP TABLE IF EXISTS `danhmucsp`;
CREATE TABLE IF NOT EXISTS `danhmucsp` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TENDM` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

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

DROP TABLE IF EXISTS `daugia`;
CREATE TABLE IF NOT EXISTS `daugia` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `MASP` int(11) NOT NULL,
  `GIA` double NOT NULL,
  `NGDG` int(11) NOT NULL,
  `NGAY` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `FK_DauGiaSanPham` (`MASP`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ketquadg`
--

DROP TABLE IF EXISTS `ketquadg`;
CREATE TABLE IF NOT EXISTS `ketquadg` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `MASP` int(11) NOT NULL,
  `GIA` double NOT NULL,
  `NGDG` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaitk`
--

DROP TABLE IF EXISTS `loaitk`;
CREATE TABLE IF NOT EXISTS `loaitk` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TENLOAI` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `loaitk`
--

INSERT INTO `loaitk` (`ID`, `TENLOAI`) VALUES
(1, 'ADMIN'),
(2, 'PERSON');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE IF NOT EXISTS `sanpham` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NGUOIBAN` int(11) NOT NULL,
  `TENSP` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `MADM` int(11) NOT NULL,
  `GIAKHOIDIEM` double NOT NULL,
  `GIABAN` int(11) NOT NULL,
  `BUOCNHAY` double NOT NULL,
  `MOTA` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `TRANGTHAI` int(11) NOT NULL DEFAULT '2',
  `NGAYBD` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `NGAYKT` datetime NOT NULL,
  `HINH` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `FK_SanPhamDanhMuc` (`MADM`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `sanpham`
--

INSERT INTO `sanpham` (`ID`, `NGUOIBAN`, `TENSP`, `MADM`, `GIAKHOIDIEM`, `GIABAN`, `BUOCNHAY`, `MOTA`, `TRANGTHAI`, `NGAYBD`, `NGAYKT`, `HINH`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'IPhone X', 2, 700000, 20000000, 100000, 'Điện Thoại IP X', 1, '2018-06-01 10:00:00', '2018-10-17 11:00:00', 'ipx.jpg', '2018-05-31 17:07:08', '2018-10-01 17:07:08'),
(2, 1, 'IPhone 8P', 2, 400000, 15000000, 100000, 'Điện Thoại IP 8 Plus', 1, '2018-06-01 05:00:00', '2018-11-01 04:00:00', 'ip8p.jpg', '2018-05-31 17:07:08', '2018-05-31 17:07:08'),
(3, 1, 'IPhone 8', 2, 700000, 10000000, 100000, 'Điện Thoại IP 8', 1, '2018-06-01 19:00:00', '2018-10-01 00:00:00', 'ip8.jpg', '2018-05-31 17:07:08', '2018-05-31 17:07:08'),
(4, 1, 'MacBook Pro', 1, 1200000, 25000000, 100000, 'Máy Tính Xách Tay Macbook Pro 15', 1, '2018-05-03 07:00:00', '2018-05-11 07:00:00', 'mbr.jpg', '2018-04-30 17:07:08', '2018-05-31 17:07:08'),
(17, 1, 'Xiaomi Mi4', 2, 1100000, 4000000, 100000, 'Made In China', 1, '2018-06-19 22:33:58', '2018-06-26 22:33:58', 'mi4.jpg', '2018-06-19 15:33:58', '2018-06-19 15:33:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
CREATE TABLE IF NOT EXISTS `taikhoan` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `HOTEN` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `MAIL` text NOT NULL,
  `PASSWORD` varchar(100) NOT NULL,
  `DIACHI` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  `LOAITK` int(11) NOT NULL,
  `TINHTRANG` int(11) NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  KEY `FK_TaiKhoanLoaiTaiKhoan` (`LOAITK`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `taikhoan`
--

INSERT INTO `taikhoan` (`ID`, `HOTEN`, `MAIL`, `PASSWORD`, `DIACHI`, `LOAITK`, `TINHTRANG`, `createdAt`, `updatedAt`) VALUES
(1, 'Evans Ray Kyle', 'ndhoang011097@gmail.com', '617556d92b2c180265653996a4b882a6', 'C2A Buu Long', 2, 1, '2018-06-15 15:41:30', '2018-06-15 15:41:30'),
(2, 'Quản Trị Viên', 'Admin@gmail.com', '21232f297a57a5a743894a0e4a801fc3', '++++++++++++++++++++++', 1, 1, '2018-06-18 19:25:15', '2018-06-18 19:25:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xntinhtrang`
--

DROP TABLE IF EXISTS `xntinhtrang`;
CREATE TABLE IF NOT EXISTS `xntinhtrang` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `TENTT` text CHARACTER SET utf8 COLLATE utf8_general_mysql500_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `xntinhtrang`
--

INSERT INTO `xntinhtrang` (`ID`, `TENTT`) VALUES
(1, 'Đã Xác Nhận'),
(2, 'Chưa Xác Nhận');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
