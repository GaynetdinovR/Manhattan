<template>
    <header class="header block">

        <div class="logo header__logo">
            <a class="logo__img">
                <img src="images/logo.png" alt="logo" class="logo__img">
            </a>
        </div>

        <button class="header__menu-btn" :class="{'header__menu-btn--change': showMenu}" @click="showMenu = !showMenu">
            <div></div>
            <div></div>
            <div></div>
        </button>

        <nav class="header__nav header__phone-menu" v-show="showMenu">

            <ul class="header-nav__list">

                <li class="header-nav-list__item">
                    <a class="header-nav-list__link link">
                        Главная
                    </a>
                </li>
                
                <li class="header-nav-list__item">
                    <a class="header-nav-list__link link">
                        Меню
                    </a>
                </li>
                
                <li class="header-nav-list__item">
                    <a class="header-nav-list__link link">
                        Афиша
                    </a>
                </li>
                
                <li class="header-nav-list__item">
                    <a class="header-nav-list__link link">
                        О нас
                    </a>
                </li>
                
                <li class="header-nav-list__item">
                    <a class="header-nav-list__link link">
                        Галлерея
                    </a>
                </li>
                
                <li class="header-nav-list__item">
                    <a class="header-nav-list__link link">
                        Новости
                    </a>
                </li>

            </ul>

        </nav>

        <button class="header__button button button--orange-border">
            Бронирование
        </button>

    </header>
</template>

<script>
    export default{
        name: 'HeaderComponent',
        data(){
            return{
                showMenu: this.checkScreenWidth()
            }
        },
        methods:{
            checkScreenWidth(){
                return !(window.innerWidth < 931)
            }
        }
    }
</script>