import { OMDBSearchPage, OMDBSearchComplete, OMDBGetByImdbID } from './modules/OMBDWrappper.js';

console.log(await OMDBSearchPage("cars"))
console.log(await OMDBSearchComplete("cars"))
console.log(await OMDBGetByImdbID("cars"))