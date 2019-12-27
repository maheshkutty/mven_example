<template>
<div id="temp">
    <h1>Weather Forcasting API</h1>
    <h2>{{ tempData.name }}</h2>
    <table class="tempTable">
        <thead>
            <tr>
                <th>Alias</th>
                <th>Value</th>
            </tr>
        </thead>
        <tr>
            <td>Weather Type</td>
            <td>{{tempData.main}}</td>
        </tr>
        <tr>
            <td>Temperture</td>
            <td>{{tempData.temp}}</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>{{tempData.desc}}</td>
        </tr>
    </table>
</div>    
</template>
<script>
import tempAPI from '@/services/tempAPI'
export default {
    name:'temp',
    data(){
        return{
            city:'',
            tempData:{}
        }
    },
    mounted(){
        this.loadTempAPI(this.$route.params.city)
    },
    methods:{
         async loadTempAPI(city){
            var response = await tempAPI(city)
            this.tempData = response.data
         }
    }
}
</script>

<style scoped>
.tempTable ,td.tempTable ,th.tempTable {
    border:1px solid black;
    border-collapse: collapse;
    text-align: center;
}
#temp {
    padding-left:10em;
}
</style>