run mongo db locally
"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"

mongoDB Atlas < youtube: yoursTRULY>

- not locally
- go mongoDB atlas
- create cluster
- database access // serin/ serin0837
- add IP address -> access with everywhere
- go back to cluster click cluster
- copy code
- mongoose.connect change url with this code
- put password and databasename and database name
- and it looks like connected but how can i check?
- I can check in mongo Atlas! post request is working but my locally saved data is just sit locally
- so i just move to atalas!!
- I can see it in heroku

  backlog

- 10.02.20 deploy error with heroku
- how to connect with mongodb? in heroku? -> I don't need to do anything as long as it connect to mongodb atals
- cors policy issue -> fix with this code
  `npm install cors --save`
  `var cors = require('cors')`
  `app.use(cors()) // Use this after the variable declaration`
