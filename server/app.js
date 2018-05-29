var express = require('express'),
	bodyParser = require('body-parser')
	morgan = require('morgan')
	cors = require('cors');

var categoryCtrl = require('./apiControllers/categoryController'),
	productCtrl = require('./apiControllers/productController'),
	userCtrl = require('./apiControllers/userController');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	// res.end('hello from nodejs');
	var ret = {
		msg: 'hello from nodejs api'
	};
	res.json(ret);
});

app.use('/categories', categoryCtrl);
app.use('/users', userCtrl);
app.use('/products', productCtrl);

app.listen(80, () => {
	console.log('API running on port 80');
});