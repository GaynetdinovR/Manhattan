<template>
    <footer class="footer block">
        
        <about-component />

        <div class="footer__wrap">

            <span class="footer__copyright">
                Copyright © 2023. Все права защищены.
            </span>

            <span class="footer__authors">
                Разработано RadmirGn
            </span>
            
        </div>

    </footer>
</template>
<script>
    import AboutComponent from './components/AboutComponent.vue';

    export default{
        name: 'FooterComponent',
        components:{
            AboutComponent
        }
    }
</script>