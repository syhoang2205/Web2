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
var daugiaCtrl = require('./apiControllers/DauGiaController');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

var staticDir = express.static(
    path.resolve(__dirname, 'upload')
);
app.use(staticDir);

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage: storage
});

app.post('/upload', upload.single("file"), function(req, res) {
    res.json("Up done.");
});

app.get('/', (req, res) => {
    res.json({
        msg: 'ok'
    })
});

app.use('/sanpham', sanphamCtrl);
app.use('/danhmuc', danhmucCtrl);
app.use('/tinhtrang', tinhtrangCtrl);
app.use('/taikhoan', taikhoanCtrl);
app.use('/loaitk', loaitkCtrl);
app.use('/ketquadg', ketquadgCtrl);
app.use('/daugia', daugiaCtrl);

app.listen(500 , () => {
	console.log('API running on port 500');
});