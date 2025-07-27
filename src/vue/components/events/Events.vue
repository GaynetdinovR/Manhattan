<template>
    <section class="events block">

        <div class="events__event">
            <h2 class="events-event__title h2">
                true. fontanka. underground.
            </h2>
        </div>

        <div class="events__list">

            <div class="events-list__controls">

                <button class="events-list__tab" @click="switchActiveTag" v-bind:class="{ 'events-list__tab--active': isActiveTags[0] }">
                    ближайшие
                </button>

                <button class="events-list__tab" @click="switchActiveTag" v-bind:class="{ 'events-list__tab--active': isActiveTags[1] }">
                    скоро
                </button>

            </div>

            <div class="events-list__table">

                <div class="events-list__item">
                    <img src="images/content/image-2.jpg" alt="event" class="events-list-item__img">
                </div>

                <div class="events-list__item">
                    <img src="images/content/image-3.jpg" alt="event" class="events-list-item__img">
                </div>
                
                <div class="events-list__item">
                    <img src="images/content/image-4.jpg" alt="event" class="events-list-item__img">
                </div>

                <div class="events-list__item">
                    <img src="images/content/image-5.jpg" alt="event" class="events-list-item__img">
                </div>

            </div>

        </div>

    </section>
</template>

<script>
    export default{
        name: 'EventsComponent',
        data(){
            return{
                isActiveTags: [true, false],
            }
        },
        methods:{
            switchActiveTag(){
                this.isActiveTags[0] = !this.isActiveTags[0]
                this.isActiveTags[1] = !this.isActiveTags[1]
            }
        }
    }
</script>