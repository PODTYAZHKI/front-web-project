<template>
  <div>
    <v-footer color="primary" dark app absolute>
      <v-container>

        <div class="text-center mt-6">
          Copyright &copy; АнтиТокс
          <div
            class="white--text"
            
            target="_blank"
            rel="noopener noreferrer"
            >PODTYAZHKI (Музычук Сергей), oklopofa (Иван Гаврилов), Agat0r (Ахапкин Сергей)</div
          >
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>
