const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: {
    type: String,
  },
  capital: {
    type: String,
  },
  region: {
    type: String,
  },
  population: {
    type: Number,
  },
  flag: {
    type: String,
  },
});

const Country = mongoose.model("country", CountrySchema);
const ImaginaryCountry = mongoose.model("imaginaryCountry", CountrySchema);

module.exports = { Country, ImaginaryCountry };

// {"name":"Falkland Islands (Malvinas)",
// "topLevelDomain":[".fk"],
// "alpha2Code":"FK",
// "alpha3Code":"FLK",
// "callingCodes":["500"],
// "capital":"Stanley",
// "altSpellings":["FK","Islas Malvinas"],
// "region":"Americas",
// "subregion":"South America",
// "population":2563,
// "latlng":[-51.75,-59.0],
// "demonym":"Falkland Islander",
// "area":12173.0,
// "gini":null,
// "timezones":["UTC-04:00"],
// "borders":[],
// "nativeName":"Falkland Islands",
// "numericCode":"238",
// "currencies":[{"code":"FKP","name":"Falkland Islands pound","symbol":"£"}],
// "languages":[{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],
// "translations":{"de":"Falklandinseln","es":"Islas Malvinas","fr":"Îles Malouines","ja":"フォークランド（マルビナス）諸島","it":"Isole Falkland o Isole Malvine","br":"Ilhas Malvinas","pt":"Ilhas Falkland","nl":"Falklandeilanden [Islas Malvinas]","hr":"Falklandski Otoci","fa":"جزایر فالکلند"},
// "flag":"https://restcountries.eu/data/flk.svg",
// "regionalBlocs":[{"acronym":"USAN","name":"Union of South American Nations",
// "otherAcronyms":["UNASUR","UNASUL","UZAN"],
// "otherNames":["Unión de Naciones Suramericanas","União de Nações Sul-Americanas","Unie van Zuid-Amerikaanse Naties","South American Union"]}],
// "cioc":""},
