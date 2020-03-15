<template>
    <div>
        <h4>Create an Event, {{user.name}}</h4>
        <p>This event was created by: {{user.id}}</p>

        <span>Categories</span>
        <ul>
            <li v-for="cat in categories" :key="cat"> {{cat}}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        
        ...mapState(['user', 'categories'])
    }
}
</script>