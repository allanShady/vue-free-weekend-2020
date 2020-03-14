Vue.component('product', {
    template: `<div class="product">
    <div class="product-image">
        <img :src="image" :alt="altText">
    </div>

    <div class="product-info">
        <h1> {{ title }} </h1>
        <p v-if="inStock">In Stock</p>
        <p v-else :class="{ }">Out of Stock</p>
        <p>Shipping: {{shipping}}</p>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>

        <label for="size">Select the size</label>
        <ul>
            <li v-for="size in sizes">{{size}}</li>
        </ul>
        <div class="color-box" 
            v-for="(variant, index) in variants" 
            :key="variant.id"
            :style="{ backgroundColor: variant.color}"
            @mouseover="updateProduct(index)"
        >
        </div>

        <button @click="addToCart" 
            :disabled="!inStock" 
            :class="{ disabledButton: !inStock}"
            >
            Add to cart
        </button>

        <button :disabled="!inStock" 
        :class="{ disabledButton: !inStock}" @click="removeFromCart">Remove one</button>
        
        
        <a :href="productInfo"> Visit our oficial site</a>
    </div>
</div>`,
props: {
    premium: {
        type: Boolean,
        required: true,
        default: false
    }
},

data() {
    return {
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
    }
},

methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariantIndex].id)
    },

    removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariantIndex].id)       
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
    },

    shipping() {
        return this.premium ? 'Free' : 4.32
    }
}
});

let app = new Vue({
    el: '#app',
    
    data: {
        premium: true,
        cart: []
    },

    methods: {
        addToCart(id) {
            this.cart.push(id);
        },

        removeFromCart(id) {

            if(this.cart.length > 0 && id > 0) {
                const indexOfElementToRemove = this.cart.indexOf(id);

                if(indexOfElementToRemove > - 1)
                this.cart.splice(indexOfElementToRemove, 1);
            }
        }
    }
});