<template>
    <li class="equipment__item">
        <button 
            class="button button--orange equipment__button" 
            :class="{'equipment__button--active': itemActive}" 
            @click="itemActive = !itemActive"
        >

            <h5 class="equipment-item__title">
                {{ title }}
                <div 
                    class="equipment-item__arrow" 
                    :class="{'equipment-item__arrow--active': itemActive}"
                >
                    <img src="images/icons/arrow.svg" alt="arrow">
                </div>
            </h5>

            <ul class="equipment-item__list text">

                <li class="equipment-item__item">
                    Acoustic system BELL Mid 600W x 2
                </li>
                
                <li class="equipment-item__item">
                    Acoustic system BELL Sub 1000W x 2
                </li>

                <li class="equipment-item__item">
                    Front monitor Yamaha SM12V 300w x 2
                </li>

                <li class="equipment-item__item">
                    Backside monitor Dynacord 500W x 2
                </li>

            </ul>


            
        </button>
    </li>
</template>
<script>
    export default{
        name: 'EquipmentItem',
        props: ['title'],
        data(){
            return{
                itemActive: false
            }
        }
    }
</script>