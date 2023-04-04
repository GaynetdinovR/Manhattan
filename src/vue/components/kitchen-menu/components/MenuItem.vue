<template>
    <div class="kitchen-menu__item">

        <div class="kitchen-menu-item__img-wrap">
            <img class="kitchen-menu-item__img" :src='menuItem.image' alt="food">
        </div>

        <div class="kitchen-menu-item__wrap">

            <h5 class="kitchen-menu-item__name h5">
                {{ menuItem.name }}
            </h5>
            
            <div class="kitchen-menu-item__price price">
                {{ menuItem.price }}
            </div>

            <span class="kitchen-menu-item__weight text">
                {{ menuItem.weight }}
            </span>

            <p class="kitchen-menu-item__text text">
                {{ menuItem.description }}
            </p>
            
        </div>

    </div>
</template>
<script>
    export default{
        name: 'MenuItem',
        props: ["menuItem"],
    }
</script>