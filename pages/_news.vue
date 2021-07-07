<template>
<div>
  <div justify="center" align="center" class="text--primary my-2">поиск по фразе: {{$store.state.news}}</div>
<div v-for=" (item) in $store.state.newsItems"
            :key="item.id">
  <v-card v-if="item.id == $route.params.news" class="my_card my-8">
        <v-card-title >

         id= {{item.id}},  Aвтор новости: {{$store.state.firstName}} {{$store.state.lastName}} 
          
        </v-card-title>
        
        <v-card-text>
         Дата публикации: {{new Date(item.date*1000)}}
         <hr class="my-3">
        </v-card-text> 
         <v-card-text >
         {{item.text}}
          
        </v-card-text>

 <v-card
    elevation="24"
    max-width="444"
    class="mx-auto"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="true"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="350"
    >
      <v-carousel-item
        v-for="(slide) in $store.state.photos"
        :key="slide"
      >
        <v-img
          :src="`${slide.photo_604}`"
          height="100%"
          
        >
        </v-img>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            
          </v-row>
        
      </v-carousel-item>
    </v-carousel>
    
  </v-card>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="secondary"
            nuxt
            to="/result"
          >
            To News list
          </v-btn>
        </v-card-actions>
      </v-card>

  
  </div>
</div>
</template>





