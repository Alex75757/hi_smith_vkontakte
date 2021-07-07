# vkontakte_search

## долго упирался в CORS error, пока не поставил local-cors-proxy
далее меняем в url api.vk.com на localhost:8010/proxy и в dev все работает

на beget так CORS error и остался, хотя в vk в настройках приложения и домен и адрес прописывал...

## Задача
Необходимо разработать приложение по поиску новостей во ВКонтакте. Приложение должно
состоять из 3 страниц:
1. Форма поиска.
2. Список найденных новостей по заданной поисковой фразе.
3. Просмотр конкретной новости.
Список полей новости для отображения:
1. Дата публикации.
2. Имя автора.
3. Текст новости.
4. Список фотографий (если они есть) в слайдере под текстом новости с
возможностью просмотра увеличенных изображений в попапе.

Поиск новостей:
Поиск новостей во ВКонтакте должен осуществляться с помощью метода newsfeed.search. При
его использовании не нужны бекенд и авторизация пользователей в социальной сети.
Требования:
1. Стек: Vue.js, Nuxt.js, Vue Router.
2. Визуальная часть на свое усмотрение. Плюсом будет использование библиотеки Vuetify
или Element.


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

