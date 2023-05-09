# statistics-freshpoint
This is a simple statistical data application built using Node.js and Express.js.
# Installation and launch
1. Clone the repository to your PC;
2. Install the dependencies by typing npm install in the terminal;
3. Start the server by typing node server in the terminal;
4. Open POSTMAN and send a POST request to http://localhost:3000/predict.

# Usage
To send a POST request to POSTMAN, you must specify the request body in JSON format, containing two fields: params and data.
- params must be an object containing the numeric parameters to predict.
- data must be an array of objects with fields timestamp (date in YYYY-MM-DDTHH:mm:ss.sssZ format) and value (numeric value).

# Request body example:
{
	"params":[
		{"name":"changepoint_prior_scale", "value":4},
		{"name":"changepoint_range", "value":0.75},
		{"name":"interval_width", "value":0.75}
	],
	"data": [
			  {
			    "timestamp": "2019-03-18T00:00:00.000Z",
			    "value": 2067
			  },
			  {
			    "timestamp": "2019-03-25T00:00:00.000Z",
			    "value": 2283
			  },
			  {
			    "timestamp": "2019-04-01T00:00:00.000Z",
			    "value": 1929
			  },
              ......
		]
}
# Result
{
    "data": [
        {
            "timestamp": "2018-09-24T00:00:00.000Z",
            "value": 43
        },
        {
            "timestamp": "2018-10-01T00:00:00.000Z",
            "value": 134
        },
        {
            "timestamp": "2018-10-08T00:00:00.000Z",
            "value": 324
        },
        {
            "timestamp": "2018-10-15T00:00:00.000Z",
            "value": 251
        },
        ....
    ]
}