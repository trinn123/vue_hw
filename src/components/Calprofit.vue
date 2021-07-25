<template>
  <div class="layer">
    <div>
            <label for="list">รายละเอียด:  </label>
            <input type="text" v-model="form.detail" placeholder="Detail">
    </div>

    <div class="income">
            <label for="amount">จำนวนเงินรายรับ: </label>
            <input type="text" v-model="form.income" placeholder="income">
    </div>

    <div class="expenses">
            <label for="amount">จำนวนเงินรายจ่าย: </label>
            <input type="text" v-model="form.expenses" placeholder="expenses">
    </div>

    <div class="date">
    <label for="date">Date: </label>
      <input type="date" id="date" name="date" v-model="form.date">
    </div>

    <button @click="addUpdate">Add</button><br>

    
  </div>
</template>

<script>
import UpdateStore from '@/store/update'
export default {
    data(){
        return{
          updates : [],
            form:{
                detail:"",
                income:"",
                expenses:"",
                date:"",
                }
        }
    },
    methods: {
        clearForm(){
            this.form={
                detail:"",
                income:"",
                expenses:"",
                date:"",
            }
        },
      addUpdate() {
      let payload = {
        detail: this.form.detail,
        income: this.form.income,
        expenses: this.form.expenses,
        date: this.form.date
      }

      console.log(payload)
      UpdateStore.dispatch("addUpdate", payload)
      this.clearForm()    
    }
    }
    
 
}
</script>

<style scoped lang="scss">
.income {
  margin: 1%;
}

.date {
  margin: 1%;
}
.amount {
  margin: 1%;
}
.layer{
  margin-bottom: 4%;
  margin-top: 4%;
  margin-left: 35%;
  background-color: darksalmon;
  height: 150px;
  width: 25%;
  padding: 2%;

  border: 2.5px solid black;
}
button{
  background-color: #008CBA;
  font-size: 20px;
  padding: 10px 24px;
}
</style>
