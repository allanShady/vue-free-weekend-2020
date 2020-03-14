console.log('main.js file loaded into HTML');

let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks - 1',
        image: 'assets/img/vmSocks-green-onWhite.jpg',
        altText: 'A pair of sucks',
        productInfo: 'https://brave-hugle-f2518f.netlify.com',
        inStock: 0,
        details: ['80% cottons', '20% polyester', 'Genders-neutral'],
        variants: [
            {id: 1, color: 'green'},
            {id: 2, color: 'blue'},
            {id: 3, color: 'red'}
        ],
        sizes:['S', 'M', 'L', 'XL', 'XXL']
    }
});