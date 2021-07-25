<template>
    <div class="table">
        <table class="head">
            <thead>
                <tr>
                    <th>รายละเอียด</th>
                    <th>วัน/เดือน/ปี</th>
                    <th>income</th>
                    <th>expenses</th>
                </tr>
            </thead>
        <tbody class="body">
                <tr v-for="(update, index) in updates" :key="index">
                    <td>{{ update.detail}}</td>
                    <td>{{ update.date}}</td>
                    <td>{{ update.income}}</td>
                    <td>{{ update.expenses}}</td>
                </tr>
        </tbody>
        </table>

    <div class="summary">
            <h4>รายรับ: {{ sumIn() }} || รายจ่าย: {{ sumEx() }}</h4> 
            <h4>คงเหลือ: {{ sumIn() - sumEx() }}</h4>
    </div>

    </div>
</template>

<script>
import UpdateStore from '@/store/update'

export default {
    data(){
        return{
            updates : [],

        }
    },created(){
            this.fetchUpdate()
    },
    methods: {
        fetchUpdate(){
                
            UpdateStore.dispatch("fetchUpdate")
            
            this.updates = UpdateStore.getters.updates
        },
        sumIn() {
            let result = 0
            for(let i=0; i<this.updates.length; i++){
                
                if(this.updates[i].income != ""){
                    result += parseInt(this.updates[i].income)
                }
            
            }
            return result
        },
        sumEx() {
            let result = 0
            for(let i=0;i<this.updates.length;i++){
                
                if(this.updates[i].expenses != ""){
                    result += parseInt(this.updates[i].expenses)
                }
            }
            return result
        }
    }
}
</script>

<style>
    table{
        margin-top: 1%;
        width: 100%;
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid black;
    }
    thead{
        background-color: cadetblue;
    }
    
    .summary{
        margin-top: 4%;
        margin-left: 41%;
        background-color: darksalmon;
        width: 20%;
        border: 2.5px solid black;
        
    }

</style>