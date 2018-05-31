var express = require('express'),
	bodyParser = require('body-parser')
	morgan = require('morgan')
	cors = require('cors');

var sanphamCtrl = require('./apiControllers/SanPhamController');
var danhmucCtrl = require('./apiControllers/DanhMucController');
var tinhtrangCtrl = require('./apiControllers/TinhTrangController');
var taikhoanCtrl = require('./apiControllers/TaiKhoanController');
var loaitkCtrl = require('./apiControllers/LoaiTKController');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	var ret = {
		msg: 'hello from nodejs api'
	};
	res.json(ret);
});

app.use('/sanpham', sanphamCtrl);
app.use('/danhmuc', danhmucCtrl);
app.use('/tinhtrang', tinhtrangCtrl);
app.use('/taikhoan', taikhoanCtrl);
app.use('/loaitk', loaitkCtrl);

app.listen(500, () => {
	console.log('API running on port 500');
});