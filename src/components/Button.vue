<template>
<div class="container">

  

  <div class="container text-center">
    
    <div class="historyContainer container text-center">
        
        <span class="history">

            <h3><u>Today in History</u></h3>
            {{historyStuff}}
            
            </span>
    </div>
  </div>

  <div class="queryBtn container text-center">
      <button @click="callNetflixEvent" class="bigbtn btn">History</button>
  </div>



</div>
</template>

<script>
import axios from 'axios'

var d = new Date();
// document.getElementById("demo").html = d.toDateString();

export default {
    data() {
        return {
            d: Date(),
            
            historyStuff: 'Click The History Button!',
            
        }
    },

    
    

    methods: 
    
    {
       
        callNetflixEvent() {
            var app = this;
            this.historyStuff = 'Click The History Button!';
            // var config = {
            // headers: { }
            // };
            axios.get('http://numbersapi.com/6/9/date' )
                .then(function(response){
                    console.log(response.data);
                    app.historyStuff = response.data;
                })
        }
    }
}

</script>

<style>
    .history{
        font-size: 3em;
        font-family: 'Raleway', sans-serif;
    }

    .historyContainer{
        width: 680px;
        height: auto;
        background-color: green;
        color: white;
        padding: 5%;
        border-radius: 40px;
    }

    .queryBtn{
        margin-top: 3%;
    }

    .bigbtn{
        width: 200px;
        height: 50px;
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        background-color: orange;
        color: white;
    }


</style>
