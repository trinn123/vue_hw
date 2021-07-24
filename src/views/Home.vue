<template>
  <div class="home">
    <h1>รายรับ รายจ่าย</h1>
    <calprofit></calprofit>
    <profit-table></profit-table>
  </div>
</template>

<script>

import Calprofit from '@/components/Calprofit.vue'
import ProfitTable from '@/components/ProfitTable.vue'
export default {
  components: {
    Calprofit,
    ProfitTable
  }
}
</script>

<style scoped lang="scss">

h1{
  font-size: 36pt;
  font-family: Arial;
}

</style>
