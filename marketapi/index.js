const express= require('express');
const app= express();
const cors =require('cors');
const userRoute= require('./routes/user')
const authRoute= require('./routes/auth')
const productRoute= require('./routes/product')
const orderRoute= require('./routes/order')
const cartRoute= require('./routes/cart')
const mongoose= require('mongoose');
const dotenv = require('dotenv');
const Razorpay = require('razorpay')
const shortid = require('shortid');
const bodyParser = require('body-parser');
const Payment = require('./models/Payment');
const { verifyTokenAndAdmin } = require('./routes/verifyToken');
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Connect to MongoDB")).catch((error)=>console.log(error))
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.json())

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute )
app.use("/api/cart", cartRoute )

const razorpay = new Razorpay({
	key_id: 'rzp_test_BkVywjqSOTnbGg',
	key_secret: '8MzjFnTEMNriQan0JbWTKiJD'
})

app.get('/api/payments', verifyTokenAndAdmin, async(req,res)=>{
try {
   const payments = await Payment.find();
   res.status(200).json(payments)
   
} catch (error) {
    res.status(500).json(error)
    console.log(error)

}
})
app.post('/verification', (req, res) => {
	// do a validation
	const secret = 'suman@mama'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
		res.status(502)
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1

	const options = {
		amount: req.body.amount * 100,
		currency: req.body.currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})
app.use(express.static(path.join(__dirname, "./build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});























app.listen(process.env.PORT || 4000 ,()=>[
    console.log(`server started on ${process.env.PORT || 4000}`)
]) 