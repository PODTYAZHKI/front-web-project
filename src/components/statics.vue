<template>
  <div>
    <v-card class="mx-auto text-center" >
      <v-card-text>
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-sparkline
            :value="stat.posts"
            color="rgba(255, 255, 255, .7)"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item"> {{ item.years }} </template>
          </v-sparkline>
        </v-sheet>
      </v-card-text>

      <v-card-text>
        <div class="text-h4 ">Sales Last 24h</div>
      </v-card-text>

    </v-card>
  </div>
</template>
<script>
export default {
    props: ['stat']
};
</script>
<style lang="">
</style>