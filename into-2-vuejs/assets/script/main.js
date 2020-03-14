console.log('main.js file loaded into HTML');

let app = new Vue({
    el: '#app',
    data: {
        cart: 0,
        product: 'Socks',
        image: 'assets/img/vmSocks-green-onWhite.jpg',
        altText: 'A pair of sucks',
        productInfo: 'https://brave-hugle-f2518f.netlify.com',
        inStock: true,
        details: ['80% cottons', '20% polyester', 'Genders-neutral'],
        variants: [
            {id: 1, color: 'green', image: 'assets/img/vmSocks-green-onWhite.jpg'},
            {id: 2, color: 'blue', image: 'assets/img/vmSocks-blue-onWhite.jpg'},
        ],
        sizes:['S', 'M', 'L', 'XL', 'XXL']
    },

    methods: {
        addToCart() {
            ++this.cart;
        },

        removeFromCart() {
            
            if(this.cart >= 0)
                --this.cart;
        },

        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
});