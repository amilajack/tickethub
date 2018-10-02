var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('buy');
});

router.get('/gooMap', function(req, res, mext){
	var shippingMethod = req.query.shippingMethod;
	console.log(shippingMethod);
	switch(shippingMethod){
		case 'ups'	: res.send("Your shipping method is UPS"); break;
		case 'fedEx': res.send("Your shipping method is FedEx"); break;
		case 'uber'	: res.render("map"); break;
	}
});

module.exports = router;
