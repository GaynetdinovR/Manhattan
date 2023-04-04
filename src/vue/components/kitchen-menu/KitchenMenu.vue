<template>
    <section class="kitchen-menu block">

        <h2 class="kitchen-menu__title h2">
            кухня
        </h2>

        <div class="kitchen-menu__menu">

            <button class="button button--orange button--arrow-left kitchen-menu__arrow-left">
                <img src="images/icons/arrow.svg" alt="arrow">
            </button>

            <div class="kitchen-menu__menu-col">
                <template v-for="(menuItem, index) of menu" :key="menuItem">
                    <menu-item v-if="index < 4" :menuItem="menuItem"/>
                </template>
            </div>

            <div class="kitchen-menu__menu-col">
                <template v-for="(menuItem, index) of menu" :key="menuItem">
                    <menu-item v-if="index > 3" :menuItem="menuItem"/>
                </template>
            </div>

            <button class="button button--orange button--arrow-right kitchen-menu__arrow-right">
                <img src="images/icons/arrow.svg" alt="arrow">
            </button>

        </div>

        <button class="kitchen-menu__button button button--orange"> 
            Все меню
        </button>

    </section>
</template>

<script>
    import menu from './data/menu.json';

    import MenuItem from './components/MenuItem.vue';

    export default{
        name: 'KitchenMenu',
        data(){
            return{
                menu: menu["menu"]
            }
        },
        components:{
            MenuItem,
        }
    }
</script>