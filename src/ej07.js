import { getCurrencyAbbreviation } from "currency-map-country";
import { getCountryByAbbreviation } from "currency-map-country";
let country = getCountryByAbbreviation("CZ")
console.log(getCurrencyAbbreviation(country))
