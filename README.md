# serverless-express

## Run this repo and deploy on aws
1. Clone this repo
	```
	git clone https://github.com/rahul72925/serverless-express.git
	```
2. Install node modules
3. Install `serverless` module in your system globally
	```
	npm i -g serverless
	```		
4. Configure aws profile in your local
	```
	serverless config credentials --provider aws --key <key> -- secret <secret-key>
	```
5. Deploy on aws
	```
	serverless deploy
	```

## Create a serverless-express project from scratch

1. Create a simple express app `./server.js`
2. Install `serverless` module in your system globally
	```
	npm i -g serverless
	```	 
3. Configure aws profile in your local
	```
	serverless config credentials --provider aws --key <key> -- secret <secret-key>
	```
4.  Create a serverless template for nodejs
	```
	serverless create -t aws-nodejs
	```
	This step will create 2 files `./handler.js`, `./serverless.yml`
5. Install `serverless-http` module in your current directory to wrap `app` 
	```
	yarn add serverless-http
	```
6. Wrap you app instance by `ServerlessHttp`

	```
	./server.js


		const ServerlessHttp = require("serverless-http"); 
		.
		.
		.
		.
		
		// remove or comment this `app.listen` function
		// app.listen(5000,()=>{console.log("server running on 5000"})

		module.exports = ServerlessHttp(app)

	```
7. Import `app` instance in `handler.js`
	```
	const app = require("./server.js")

	module.exports.handler = app
	```
8. Make change according to `serverlesss.yml`  available in this repo
9. Add script in `package.json` for deployment
	```
	"script":{
	"deploy": "serverless deploy"
	}
	``` 
10. Deploy on aws
	```
	yarn deploy
	```
11. It will take few minutes and provide you a running url to check you APIs
