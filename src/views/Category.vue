<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div v-for="(i, index) in this.$store.state.posts_sample" :key="i">

            <div>
              <h2 class="text-h4 font-weight-bold mt-4">{{i.category}}</h2>

              <!-- <h4 class="text-h6">Some category description goes here</h4> -->
            </div>

            <v-divider class="my-4"></v-divider>

            <v-row>
              <v-col cols="12" md="6" lg="4" v-for="j in 3" :key="j">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      hover
                      :to=getRoute(index+1)
                    >
                      <v-img
                        :src="i.image"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="200px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      >
                        <v-card-text>
                          <v-btn color="accent">{{i.category}}</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <div class="text-h5 font-weight-bold primary--text mb-2">
                          {{i.title}}
                        </div>

                        <div class="text-body-1 py-4" v-if="i.subtitle">
                          {{i.subtitle}}
                        </div>

                        <div class="d-flex align-center">
                          <v-avatar color="accent" size="36">
                            <v-icon dark>mdi-grease-pencil</v-icon>
                          </v-avatar>

                          <div class="pl-2">Иван Иванов · 22 Июля 2019</div>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>

      <v-col>
        <div>
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Категории",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  methods: {
    getRoute(i) {
      return `/detail/${i}`
    }
  }
};
</script>
