<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>

<script>
import Stock from './Stock'
export default {
  name: "Stocks",
  components: { Stock },
  data() {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 110 },
        { id: 2, name: 'Google', price: 120 },
        { id: 3, name: 'Apple', price: 130 },
        { id: 4, name: 'Twitter', price: 140 },
      ]
    }
  }
}
</script>

<style scoped>

</style>