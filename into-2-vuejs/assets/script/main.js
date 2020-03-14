console.log('main.js file loaded into HTML');

let app = new Vue({
    el: '#app',
    data: {
        cart: 0,
        brand: 'Vue mastery',
        product: 'Socks',
        selectedVariantIndex: 0,
        altText: 'A pair of sucks',
        productInfo: 'https://brave-hugle-f2518f.netlify.com',
        details: ['80% cottons', '20% polyester', 'Genders-neutral'],
        variants: [
            {id: 1, color: 'green', image: 'assets/img/vmSocks-green-onWhite.jpg', quantity: 0},
            {id: 2, color: 'blue', image: 'assets/img/vmSocks-blue-onWhite.jpg', quantity: 12},
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

        updateProduct(index) {
            this.selectedVariantIndex = index;
        }
    },

    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        },

        image() {
            return this.variants[this.selectedVariantIndex].image;
        },

        inStock() {
            return this.variants[this.selectedVariantIndex].quantity
        }
    }
});