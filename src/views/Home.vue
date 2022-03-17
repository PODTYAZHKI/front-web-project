<template>
  <div>
    <div>
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in this.$store.state.posts_sample"
          :key="i"
          :src="item.image"
          reverse-transition="fade-transition"
          transition="fade-transition"
          class="hide-delimiter-background"
        >
          <v-card :to="getRoute(i + 1)">
            <v-img
              :src="item.image"
              gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
              :aspect-ratio="16 / 9"
              height="500px"
              dark
            >
              <v-card-text class="fill-height d-flex align-end">
                <v-row class="flex-column">
                  <v-col>
                    <v-btn color="accent" to="category">{{
                      item.category
                    }}</v-btn>
                  </v-col>
                  <v-col cols="12" md="10" lg="8" xl="7">
                    <h2 class="text-h3 py-3" style="line-height: 1.2">
                      {{ item.title }}
                    </h2>
                  </v-col>
                  <v-col class="d-flex align-center">
                    <v-avatar class="elevation-4" color="accent">
                      <v-icon large>mdi-grease-pencil</v-icon>
                    </v-avatar>

                    <div class="text-h6 pl-2">
                      {{ `${item.author} · ${item.date}` }}
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-img>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </div>

    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          

          <div class="pt-16">
            <h2 class="text-h4 font-weight-bold">Последние посты</h2>

            <div>
              <v-row
                v-for="(i, index) in this.$store.state.posts"
                :key="i"
                class="py-4"
              >
                <v-col cols="12" md="4">
                  <v-card flat height="100%">
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
        </div>
      </v-col>

      <v-col>
        <div class="pt-16">
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
    post: () => import("@/components/post"),
    // statics: () => import("@/components/statics")
  },
  methods: {
    getImage(i) {
      return this.$store.state.posts_sample[i].image;
    },
    getRoute(i) {
      return `/detail/${i}`;
    },
  },
};
</script>
<style lang="scss">
.my-btn {
}
</style>