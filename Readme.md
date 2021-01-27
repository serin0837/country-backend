## Description

I created REST API from scratch and used country data from this [API](https://restcountries.eu/).

## API Endpoint

- /countries -> get, post
- /imaginarycountries -> get, post
- /imaginarycountries/(countryid) -> delete, patch(update)
- /countries/(countryname)-> get
- /countries/(countryid)-> update, delete
- /region/(regionname)-> get

## Technologies

- Front end: Responsive website built with React, Router, Axios and Bootstrap.
  [🔗Live](https://world-traveller.netlify.app/)

- Back end: Server made with Express and MongoDB.
  [🔗Live](https://country-back.herokuapp.com/api/countries)
  [💻Code](https://github.com/serin0837/country-backend)

## Potential Issue

- Data security in MongoDB
