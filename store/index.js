export const store = () => ({
    state: {
      newsItems: [],
      news: '',
      lastName: 'коллектив',
      firstName: 'дружный',
      photos: [],
    }
})
/* eslint-disable no-alert, no-console */    
export const mutations = {
      responseSuccess(state, payload) {
        state.newsItems = payload.response.items
        console.log(`News list is ${state.newsItems}`)
              
      },

      lastNameFind(state, payload) {
        state.lastName = payload.response[0].last_name
        state.firstName = payload.response[0].first_name
        console.log(`фамилия автора = ${state.lastName}`)
      },
      newsToFind(state, payload) {
        state.news = payload
      },
      findPhotos(state, payload) {
        //   for (let i=0; i< payload.length; i++) {
                state.photos = payload
        //   }
        console.log(`фотография к новости = ${state.photos[0].photo_604}`)
      }
      
}  