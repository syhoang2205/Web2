var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	cors = require('cors'),
	multer = require('multer'),
    path = require('path');

var sanphamCtrl = require('./apiControllers/SanPhamController');
var danhmucCtrl = require('./apiControllers/DanhMucController');
var tinhtrangCtrl = require('./apiControllers/TinhTrangController');
var taikhoanCtrl = require('./apiControllers/TaiKhoanController');
var loaitkCtrl = require('./apiControllers/LoaiTKController');
var ketquadgCtrl = require('./apiControllers/KetQuaDGController');
var loginCtrl = require('./apiControllers/LoginController')
var app = express();
app.post('/api/Login',loginCtrl.login);
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

var staticDir = express.static(
    path.resolve(__dirname, 'public')
);
app.use(staticDir);

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './imgs')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage
});

app.get('/', (req, res) => {
    res.json({
        msg: 'ok'
    })
});

app.post('/api/upload', upload.array('photos', 3), (req, res) => {
    res.end('upload done.');
});

app.use('/sanpham', sanphamCtrl);
app.use('/danhmuc', danhmucCtrl);
app.use('/tinhtrang', tinhtrangCtrl);
app.use('/taikhoan', taikhoanCtrl);
app.use('/loaitk', loaitkCtrl);
app.use('/ketquadg', ketquadgCtrl);

app.listen(500, () => {
	console.log('API running on port 500');
});