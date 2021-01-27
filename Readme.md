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
  [💻Code](https://github.com/serin0837/country)

- Back end: Server made with Express and MongoDB.
  [🔗Live](https://country-back.herokuapp.com/api/countries)

## Potential Issue

- Data security in MongoDB
