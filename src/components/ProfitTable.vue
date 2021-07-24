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


</style>