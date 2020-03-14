console.log('main.js file loaded into HTML');

let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks - 1',
        image: 'assets/img/vmSocks-green-onWhite.jpg',
        altText: 'A pair of sucks',
        productInfo: 'https://brave-hugle-f2518f.netlify.com'
    }
});