<template>
<div class="container">

  

  <div class="container text-center">
    
    <div class="historyContainer container text-center">
        
        <span class="history">

            <h3><u>Number Trivia</u></h3>
            {{triviaInformation}}
            
        </span>


    </div>
  </div>

  <div class="queryBtn container text-center">
      <input type="text" placeholder="Enter Random Number" v-model="enteredNumber">
      <button @click="callNetflixEvent" class="bigbtn btn">Number Trivia</button>
  </div>



</div>
</template>

<script>
import axios from 'axios'
import lodash from 'lodash'



export default {
    data() {
        return {
           enteredNumber: '',
            
            triviaInformation: 'Click The Trivia Button!'
            
        }
    },

    
    

    methods: 
    
    {
       
        callNetflixEvent: _.debounce(function() {
          
            var app = this;
            // var config = {
            // headers: { }
            // };
            axios.get('http://numbersapi.com/' + this.enteredNumber )
                .then(function(response){
                    console.log(response.data);
                    app.triviaInformation = response.data;
                })
        
        }, 500) 
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
