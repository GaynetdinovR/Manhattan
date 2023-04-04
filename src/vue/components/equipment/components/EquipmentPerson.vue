<template>
    <div class="equipment-personnel__person">

        <div class="equipment-personnel-person__img-wrap">
            <img :src="info.img" alt="person" class="equipment-personnel-person__img">
        </div>

        <p class="equipment-personnel-person__name text">
            {{ info.name }}
        </p>

        <div class="equipment-personnel-person__contacts">

            <button class="equipment-personnel-person__btn button button--orange-border">
                <img src="images/icons/vk.svg" alt="vk">
            </button>

            <button class="equipment-personnel-person__btn button button--orange-border">
                <img src="images/icons/tg.svg" alt="tg">
            </button>

        </div>

    </div>
</template>

<script>
    export default{
        name: 'EquipmentPerson',
        props: ['info'],
    }
</script>