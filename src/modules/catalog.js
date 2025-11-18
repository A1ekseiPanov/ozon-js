import renderGoods from "./renderGoods";
import getData from "./getData";
import {categoryFilter} from "./filters";

const btnCatalog = document.querySelector('.catalog-button > button');
const catalogModel = document.querySelector('.catalog');
const catalogModelItems = document.querySelectorAll('.catalog li');

let isOpen = false;

const catalog = () => {

    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen;

        if (isOpen) {
            catalogModel.style.display = 'block';
        } else {
            catalogModel.style.display = '';
        }
    });

    catalogModelItems.forEach((item) => {
        const text = item.textContent;

        item.addEventListener('click', () => {
            getData().then((data) => {
                renderGoods(categoryFilter(data, text));
            });
        });
    });
};

export default catalog;