
<template>
<div>
  <v-row>
    <v-col>
      новости на тему :
    </v-col>
    
    <v-col> {{$store.state.news}} <br></v-col>
  </v-row>
  <v-row>
    <v-col>ID</v-col>
   
    <v-col>TEXT</v-col>
   
  </v-row>

<ul
      v-for="(item,id) in $store.state.newsItems"
      :key="id"
      >
       <v-row justify="center" align="center">
         
      <NuxtLink  :to="`${item.id}`">
        <li @click="userData(item.id, item)">{{(item.id)}} </li>
      </NuxtLink>
      <v-col class="text-truncate" >
        {{item.text}}
      </v-col>
    </v-row>  
</ul>
</div>
</template>
<script>
import  axios  from 'axios'
/* eslint-disable no-alert, no-console */
export default {
  
  methods:{
 
   userData(id, item) {
     axios ({
        method: 'get',
        url: 'http://api.vk.com/method/users.get?user_id='
        // url: 'http://localhost:8010/proxy/method/users.get?user_id='
         + id
         + '&access_token=df8e3734b3c68e1d0eb9ed91cf615e961c6bc0f20dcd5307fbf2dbe6f5aec62bbe47ddb5eb95edb9cc584&v=5.52',
             })
          .then(response => {
            console.log("all news")
            console.log(response.data)
           this.$store.commit('lastNameFind', response.data)
          })
          .catch(error => {
          console.log(error)
          })
     
     axios ({
        method: 'get',
        url: 'http://api.vk.com/method/photos.get?owner_id=' 
        // url: 'http://localhost:8010/proxy/method/photos.get?owner_id=' 
        + item.attachments[0].photo.owner_id 
        + '&album_id=' + item.attachments[0].photo.album_id 
        + '&access_token=df8e3734b3c68e1d0eb9ed91cf615e961c6bc0f20dcd5307fbf2dbe6f5aec62bbe47ddb5eb95edb9cc584&v=5.52',
          })
          .then(response => {
            console.log("photo:")
            console.log(response.data)
            if (response.data.response.items.length) {
              this.$store.commit('findPhotos', response.data.response.items)
             }
          })
          .catch(error => {
          console.log(error)
          })
          
         
    },
 
  }
  
}
</script>
