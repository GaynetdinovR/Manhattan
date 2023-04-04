<template>
    <section class="equipment block">

        <h2 class="equipment__title h2">
            техрайдер
        </h2>

        <div class="equipment__wrap">

            <ul class="equipment__list">
                <equipment-item v-for="title of equipment" :key="title" :title="title"/>
            </ul>

            <div class="equipment__personnel">

                <h3 class="equipment-personnel__title h3">
                    Звукорежиссеры клуба Manhattan
                </h3>

                <template v-for="person of persons" :key="person">
                    <equipment-person :info="person"/>
                </template>

            </div>

        </div>
    </section>
</template>

<script>
    import EquipmentItem from "./components/EquipmentItem.vue";
    import EquipmentPerson from "./components/EquipmentPerson.vue";
    
    export default{
        name: 'EquipmentComponent',
        data(){
            return{
                equipment: [
                    'Loudspeakers',
                    'Amplifier',
                    'Foh',
                    'Backline',
                    'Microphone set',
                    'DJ equipment'
                ],
                persons: [
                    {
                        name: 'Изотов Константин',
                        img: 'images/content/man-1.jpg'
                    },
                    {
                        name: 'Давид Хозиев',
                        img: 'images/content/man-2.jpg'
                    }
                ]
            }
        },
        components: {
            EquipmentItem,
            EquipmentPerson
        }
    }
</script>