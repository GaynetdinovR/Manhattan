<template>
    <article class="about block">

        <h2 class="about__title h2">
            контакты
        </h2>

        <div class="about__wrap">
            <div class="about__contacts">

                <h5 class="about-contacts__title h5">
                    адрес
                </h5>

                <address class="about-contacts__address text">
                    Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)
                </address>

                <h5 class="about-contacts__title h5">
                    телефон
                </h5>

                <span class="about-contacts__phone text">
                    <a href="tel:+78127131945">
                        +7-812-713-19-45
                    </a>
                </span>

                <h5 class="about-contacts__title h5">
                    режим работы
                </h5>

                <span class="about-contacts__work-mode text">
                    Ежедневно с 12:00 до 06:00
                </span>

                <h5 class="about-contacts__title h5">
                    директор
                </h5>

                <span class="about-contacts__director text">
                    Лидия Эмильевна, +7(921) 963-55-50
                </span>

                <h5 class="about-contacts__title h5">
                    арт-директор
                </h5>

                <span class="about-contacts__art-director text">
                    Илиния Ионашко, +7(981) 989-43-30
                </span>

            </div>

            <div class="about__map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37847.53325932535!2d55.9677301!3d53.6385765!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1680190846944!5m2!1sru!2sru" 
                    class="about-map__iframe"
                    allowfullscreen="true" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </div>
        
    </article>
</template>

<script>
    export default{
        name: 'AboutComponent'
    }
</script>