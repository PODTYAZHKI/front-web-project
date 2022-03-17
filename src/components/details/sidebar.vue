<template>
  <div>
    <div>
      <h3 class="text-h5 font-weight-medium pb-4">Популярные</h3>

      <v-divider></v-divider>

      <div>
        <v-row v-for="(i, index) in this.$store.state.posts" :key="i" class="py-2">
          <v-col cols="12" md="6" lg="5">
            <v-card height="100%" flat>
              <v-img
                :src="getImage(index)"
                :aspect-ratio="16 / 9"
                height="100%"
              ></v-img>
            </v-card>
          </v-col>

          <v-col>
            <post :post="i" />
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Категории</h3>

      <v-divider></v-divider>

      <v-card color="accent" dark flat v-for="i in 4" :key="i" class="my-4">
        <v-card-text
          class="d-flex justify-space-between align-center white--text"
        >
          <h6 class="text-h6">{{getTag(i-1)}}</h6>

          <div class="text-h6">{{Math.floor(Math.random() * 100) + 1}}</div>
        </v-card-text>
      </v-card>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Топ авторов</h3>

      <v-divider></v-divider>

      <div class="pt-4">
        <div class="d-flex align-center mb-6" v-for="i in 3" :key="i">
          <v-avatar color="accent" size="64">
            <v-icon dark x-large>mdi-grease-pencil</v-icon>
          </v-avatar>

          <div class="pl-2">
            <div class="text-h6">{{getName(i-1)}}</div>
            <div class="text-subtitle-1">{{countArticles(i-1)}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Теги</h3>

      <v-divider></v-divider>

      <v-row class="pt-4">
        <v-col v-for="i in 4" :key="i" class="flex-shrink-0" cols="auto">
          <v-chip color="accent">{{`#${getTag(i-1)}`}}</v-chip>
        </v-col>
      </v-row>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Подписки</h3>

      <v-divider></v-divider>

      <v-text-field
        label="Введите Вашу почту"
        solo
        type="email"
        outlined
        flat
        class="pt-4"
      ></v-text-field>
      <v-btn color="accent" block large>Подписаться</v-btn>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    post: () => import("@/components/post")
  },
  data() {
    return {

    }
  },
  methods: {
    getName(i) {
      return this.$store.state.authors[i].name
    },
    countArticles(i) {
      return this.$store.state.authors[i].count
    },
    getTag(i) {
      return this.$store.state.tags[i]
    },
    getImage(i) {
      return this.$store.state.posts_sample[i].image
    }
  }
}
</script>

