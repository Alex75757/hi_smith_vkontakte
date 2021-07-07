<template>
 
  <v-row justify="center" align="center" class="wrap">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
           Enter phrase to search:
        </v-card-title>
        <v-card-text>
          <input 
            v-model="findNews"
            type="text" 
            placeholder="type here" 
          >
          <p>
            <br>
             Search result will be after Continue push
          </p>
        </v-card-text>
  
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="secondary"
            
            @click = "onSubmit"
          >
        
            Continue
          </v-btn>
        </v-card-actions>

      </v-card> 
    </v-col>
  </v-row> 

</template>

<script>
import  axios  from 'axios'
/* eslint-disable no-alert, no-console */
export default {
  
   data () {
    return {
        findNews: ''
    }
  }, 
  computed:{
   validationSearch(){
     return (this.findNews.length >= 6 )
   },
  },
  methods:{
    onSubmit (event) {
      event.preventDefault()
      if (!this.validationSearch) {
        alert("Error in input!!! Try again more than 5 letters")
       }
        else {
          console.log("Hi, clever")
          this.$store.commit('newsToFind', this.findNews);
          axios ({
           
            method: 'get',
              url: 'http://api.vk.com/method/newsfeed.search?q='
              // url: 'http://localhost:8010/proxy/method/newsfeed.search?q=' 
              + this.findNews 
               + '&access_token=df8e3734b3c68e1d0eb9ed91cf615e961c6bc0f20dcd5307fbf2dbe6f5aec62bbe47ddb5eb95edb9cc584&v=5.52',
           })
          .then(response => {
            console.log(response.data)
           this.$store.commit('responseSuccess', response.data)
           this.$router.push('/result')  
          })
          .catch(error => {
          console.log(error)
          })
        }
   }    
  }
} 




</script>

<style lang="scss">
input{
  color:rgb(94, 201, 32);
 border: solid 1px whitesmoke;
}
</style>

