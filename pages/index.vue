<template>
  <v-row justify="center" align="center" class="wrap">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline pt-4">
           Welcome to Vkontakte search test Application
        </v-card-title>
        <v-card-text>
          <p>
             Search relised on the base of newsfeed.searh method
          </p>
         
          <p>
            To start push the button and have Fun!
          </p>
          
         <div class="text-xs-right">
            <em><small>&mdash; Alex K</small></em>
          </div>
          <hr class="my-3">
          
          <br>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/search"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<style lang="scss">
.wrap{
  width: 1100px;
  padding: 0px;
}
</style>
