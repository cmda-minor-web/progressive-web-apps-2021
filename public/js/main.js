import {fetchData, getData} from './modules/fetching.js';
import {routeHandler} from './modules/routing.js';
import {renderMovies} from './modules/render.js';
import {renderPeople} from './modules/people.js';

async function init() {
    const data = await fetchData()
    renderMovies(data)
    routeHandler(data);
}
init();

// async function initPeople() {
//     const dataPeople = await getData()
//     renderPeople(dataPeople)
// }
// initPeople()

