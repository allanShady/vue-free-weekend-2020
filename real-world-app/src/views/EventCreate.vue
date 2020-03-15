<template>
    <div>
        <h4>Create an Event, {{user.name}}</h4>
        <p>This event was created by: {{user.id}}</p>

        <p>{{getEventById(2)}}</p>

        <p>There are {{ catLength }} Categories</p>
    </div>
</template>

<script>
import { mapState , mapGetters } from 'vuex';

export default {
    computed: {
        /*getEventById() {
            return this.$store.getters.getEventById;    
        },*/

        catLength(){
            return this.$store.getters.catLength
        },
        ...mapGetters(['getEventById']),
        ...mapState(['user', 'categories'])
    }
}
</script>