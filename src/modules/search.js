import getData from "./getData";
import renderGoods from "./renderGoods";
import {searchFilter} from "./filters";

const searchInput = document.querySelector('.search-wrapper_input');

const search = () => {

    searchInput.addEventListener('input', () => {
        const value = searchInput.value;
        console.log(value);
        getData().then((data) => {
            renderGoods(searchFilter(data, value));
        });
    });
};

export default search;