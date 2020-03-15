<template>
    <div>
        <label>Event Listing</label>
        <event-card v-for="event in events" :key="event.id" :event="event" />
    </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventServices from '@/services/EventServices.js';

export default {
    components: {
        EventCard
    },

    data() {
        return {
            events: []
        }
    },

    created(){
        EventServices.getEvents('/events')
        .then(resp => {
            this.events = resp.data
        })
        .catch(error => console.log(error));
    }
    

}
</script>