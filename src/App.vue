<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheNavbar from './components/TheNavbar.vue'
import PricingTable from './components/PricingTable.vue'
import ServiceCard from './components/ServiceCard.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <HelloWorld msg="Mi sitio con Vite + Vue" />
  <ServiceCard />
  <PricingTable />
  <TheFooter />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
