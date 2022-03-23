<template>
  <v-btn @click="toxicity()">Пример toxicity</v-btn>
</template>

<script>
import key from '../../key.txt'
const ApiLink = "https://translate.api.cloud.yandex.net/translate/v2/translate"
const folderId = "b1goiou8tkto0joul46k"
const headers = {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
  'Authorization': 'Bearer ' + key,
}
const axios = require('axios')
const toxicity = require('@tensorflow-models/toxicity');
export default {
  methods: {
    getTranslate(sentences) {
      const requestBody = {
        "folderId": folderId,
        "texts": sentences,
        "targetLanguageCode": "en"
      }
      axios.post(ApiLink, requestBody, {
          headers: headers
        })
        .then((response) => {
          /*for(var t in response) {
            console.log(t)
          }*/
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    toxicity() {
      var sentences = ["Привет тупое еблище"];
      const threshold = 0.9;
      toxicity.load(threshold).then(model => {
        this.getTranslate(sentences[0].split(" "))
        model.classify(sentences).then(predictions => {console.log(predictions);});
      });
    }
  }
};
</script>

<style></style>
