<template>
  <header-component/>

  <main class="content">
    <events-component/>
    <kitchen-menu/>
    <banquets-tourists/>
    <equipment-component/>
  </main>

  <footer-component/>
</template>

<script>
  import {FooterComponent, HeaderComponent,  EventsComponent, KitchenMenu, BanquetsTourists, EquipmentComponent } from './components/main.js'

  export default{
    name: "App",
    components: {
      HeaderComponent,
      FooterComponent,
      EventsComponent,
      KitchenMenu,
      BanquetsTourists,
      EquipmentComponent
    }
  }
</script>
