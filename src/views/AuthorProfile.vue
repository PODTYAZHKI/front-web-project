<template >
  <div>
    <v-row>
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <v-card
                      flat
                      :color="white">
                      
                      
                      
                      <v-img
                        :src="this.$store.state.authors[authorId-1].image"
                        :aspect-ratio="16 / 9"
                        gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        height="300px"
                        class="elevation-2"
                        style="border-radius: 16px"
                      ></v-img>

                      <v-card-text class="text-center">
                        <v-avatar color="accent" size="86" class="authors">
                          <v-icon dark size="64">mdi-grease-pencil</v-icon>
                        </v-avatar>

                        <div
                          class="text-h5 font-weight-bold primary--text pt-4"
                        >
                          {{this.$store.state.authors[authorId-1].name}}
                        </div>

                        <div class="text-body-1 py-4">
                          Ultrices sagittis orci a scelerisque. Massa placerat
                          duis ultricies lacus sed turpis tincidunt id.
                        </div>
                        
                        <v-card-actions>

                            <v-btn color="accent pa-2">Подписаться</v-btn>
                            <v-btn color="accent pa-2">Написать</v-btn>
                        </v-card-actions>

                        <div>
                          <v-btn icon>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-twitter</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-youtube</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-instagram</v-icon>
                          </v-btn>
                        </div>
                      </v-card-text>
                    </v-card>
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
    data() {
    return {
      authorId: this.getAuthorId(),
    }
  },
  computed: {
    
  },
  methods: {
    getAuthorId() {
      return this.$route.params.authorId
    }
  }
};
</script>
<style lang="">
</style>