const getData = () => {
    return fetch('https://test-ed41e-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json();
        });
};

export default getData;