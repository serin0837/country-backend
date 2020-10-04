run mongo db locally
"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"

# mongoDB Atlas < youtube: yoursTRULY>

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

# mongoDB Schema Design

## Relational vs MongoDB Schema Design Approaches by Joe Karlsson

- relational : table, model data independent of queries, normalize in the 3rd form
- no relation(mongoDB) : key-value pairs, no rules, no process, no algorithm
- consideration of mongoDB: how to store the data, Query performance, Design a schema that works for your application

## Embeding vs Referencing

1. Embed
   ex)
   {id:
   name:
   ssn:
   address:[
   {street:
   city:},
   {street:
   city:}
   ]
   }

- Embedding is good retrieve all data with a single query
- Large docs all in once is not good

2. Referencing

- brake to smaller document
  ex) {
  name:
  manufacturer:
  catalog_number:
  parts:[objectid("aaa"),objectid("bbb")]
  }
  {
  id:objectid("bbb")
  partno:
  name:
  }
  {
  id:objectid("aaa")
  partno:
  name:
  }

## Types of Relationships

- one to one
- one to few
  - like few address ? embed data-> this would be default(embedding)
- one to many
  - use reference
- one to squillions
  - use reference
- many to many (two ways references)
  - ex) person:{
    id:objectid(aaf1)
    name:
    tasks:[
    objectid(s)
    objectid(b)
    ]
    }

tasks:
{
objectid(s):
desc:
due_date:
owners:[
objectid(aaf1),
]
}

# backlog

- 10.02.20 deploy error with heroku
- how to connect with mongodb? in heroku? -> I don't need to do anything as long as it connect to mongodb atals
- cors policy issue -> fix with this code
  `npm install cors --save`
  `var cors = require('cors')`
  `app.use(cors()) // Use this after the variable declaration`
