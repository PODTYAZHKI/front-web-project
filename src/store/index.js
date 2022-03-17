import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authors: [
      {
        name: 'Иван Иванов',
        count: 27,
        image: 'https://cdn.pixabay.com/photo/2021/12/17/19/15/pet-6877246_1280.jpg',
      },
      {
        name: 'Пётр Петров',
        count: 20,
        image: 'https://cdn.pixabay.com/photo/2021/01/30/20/04/sheltie-5965187_1280.jpg',
      },
      {
        name: 'Семён Семёнов',
        count: 15,
        image: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
      },
      
    ],
    tags: [
      'Фото',
      'Путешествия',
      'Животные',
      'Птицы'
    ],
    categories: [
      ''
    ],
    posts_sample: [
      {
        image: 'https://cdn.pixabay.com/photo/2020/02/07/20/32/cyprus-4828328_1280.jpg',
        category: 'Путешествия',
        title: 'Мальдивы подешевели: что нового ждет туристов на райских островах',
        author: 'Пётр Петров',
        date: '1 января 2022',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2021/01/22/16/55/camera-5940588_1280.jpg',
        category: 'Фото',
        title: '',
        author: 'Пётр Петров',
        date: '2 января 2022',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg',
        category: 'Птицы',
        title: '',
        author: 'Пётр Петров',
        date: '3 января 2022',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg',
        category: 'Животные',
        title: '',
        author: 'Пётр Петров',
        date: '4 января 2022',
      },
    ],
    posts: [
      {
        category: 'Путешествия',
        title: 'Мальдивы подешевели: что нового ждет туристов на райских островах',
        subtitle: 'Сегодня, 1 января, возобновится прямое сообщение между Россией и Мальдивами. Еще вчера билеты на первый рейс можно было купить за 18 800 рублей, что дешево для этого направления. В другие даты перелеты, как правило, уже дороже. Но шикарные отели-курорты завлекают скидками. О том, как попасть на райские острова, сколько это стоит и что там ждет туристов во время пандемии, — в материале РИА Новости.',
        author: 'Пётр Петров',
        date: '1 января 2022',
      },
      {
        category: 'Фото',
        title: 'Как снимать через окно',
        subtitle: '',
        author: 'Иван Иванов',
        date: '5 декабря 2021',
      },
      {
        category: 'Птицы',
        title: 'Секреты пернатого мира',
        subtitle: 'интересные факты о птицах',
        author: 'Пётр Петров',
        date: '10 октября 2021',
      },
      {
        category: 'Животные',
        title: 'Что нового на рынке: выбираем «кошачий городок»',
        subtitle: '',
        author: 'Семён Семёнов',
        date: '20 сентября 2021',
      }
    ],
    stats: [
      {
        name: 'years',
        years: [
          2010,
          2012,
          2014,
          2016,
          2018,
          2020,
          2022
        ],
        posts: [
          20,
          10,
          16,
          48,
          40,
          79,
          10
        ]
      }
    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
