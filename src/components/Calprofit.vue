<template>
  <div>
    <div>
            <label for="list">รายละเอียด:  </label>
            <input type="text" v-model="form.detail">
    </div>

    <div class="amount">
            <label for="amount">จำนวน: </label>
            <input type="text" v-model="form.amount">
    </div>

    <div class="income"> 
      <input type="radio" id="income" name="category" value="100" >
      <label for="income">รายรับ</label>
      <input type="radio" id="expenses" name="category" value="100" >
      <label for="expenses">รายจ่าย</label>
    </div>
    
    

    <div class="date">
    <label for="date">Date: </label>
      <input type="date" id="date" name="date" v-model="form.date">
    </div>

    <button @click="addRecord">Add</button><br>

    
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
        addRecord(){
            let payload = {
                detail: this.form.detail,
                income: this.form.income,
                expenses: this.from.expenses,
                date: this.form.date
            }

            console.log(payload)
            UpdateStore.dispatch("addRecord",payload)
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
</style>
