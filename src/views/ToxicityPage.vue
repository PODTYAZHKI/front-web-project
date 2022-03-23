<template>
  <div>
    <!-- <section class="section section-header text-dark pb-md-8">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 text-center mb-5 mb-md-7">
            <h1 class="display-2 font-weight-bolder mb-4">
              Проверка текста на токсичность
            </h1>
          </div>
        </div>
      </div>
    </section> -->
    <div class="row row-grid align-items-center mb-5 mb-lg-7">
      <div class="col-12 col-lg-5 order-lg-2">
        <h2 class="mb-4">Проверка текста на токсичность</h2>
        <p>
          Данный сервис предоставляет пользователям возможность проверки текстов
          сочинений и документов на наличие потенциально токсичных элементов,
          используя алгоритмы искусственного интеллекта
        </p>
        <!-- <a href="#" class="btn btn-dark mt-3 animate-up-2">
                Learn More
                <span class="icon icon-xs ml-2">
                  <i class="fas fa-external-link-alt"></i>
                </span>
              </a> -->
      </div>
      <div class="col-12 col-lg-6 mr-lg-auto">
        <img
          src="./assets/img/illustrations/scene-2.svg"
          class="w-100"
          alt=""
        />
      </div>
    </div>
    <div class="row row-grid align-items-center mb-5 mb-lg-7">
      <v-textarea
          name="input-7-4"
          label="Вставьте текст"
          v-model="toxicity_text"
        ></v-textarea>
    </div>
    <v-btn @click="toxicity()">Проверить</v-btn>
    <div v-if="answer" class="mt-5 ">
      <p v-for="(i, index) in predictions" :key="i.results[0].match">
        {{predictions_labels[index]}}: {{i.results[0].match === true ? "+" : "-"}}
      </p>
      <!-- <p>
        123
      </p> -->
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
// import key from "../../key.txt";
// const ApiLink = "https://translate.api.cloud.yandex.net/translate/v2/translate";
// const folderId = "b1goiou8tkto0joul46k";
// const headers = {
//   "Content-Type": "application/json",
//   Authorization: "Bearer " + key,
// };
// const axios = require("axios");
const toxicity = require("@tensorflow-models/toxicity");
=======
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
>>>>>>> dd6869dca4db9bfefe366e3242bfef2c2b0e84ff
export default {
  data() {
    return {
      toxicity_text: "",
      answer: false,
      predictions: [],
      predictions_labels: [
        'Личностное оскорбление',
        'Брань',
        'Ярко-выраженная токсичность',
        'Угрозы',
        'Токсичность',
        'Непристойные выражения',
        'Оскорбление'
      ]
    }
  },
  methods: {
    // check(){
    //   for (let i of this.predictions) {
    //     if
    //   }
    // },
    // getTranslate(sentences) {
    //   const requestBody = {
    //     folderId: folderId,
    //     texts: sentences,
    //     targetLanguageCode: "en",
    //   };
    //   axios
    //     .post(ApiLink, requestBody, {
    //       headers: headers,
    //     })
    //     .then((response) => {
    //       /*for(var t in response) {
    //         console.log(t)
    //       }*/
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    toxicity() {

      const sentences = this.toxicity_text;
      const threshold = 0.8;
      toxicity.load(threshold).then((model) => {
        // this.getTranslate(sentences);
        model.classify(sentences).then((predictions) => {
          this.predictions = predictions
          console.log(predictions);
          this.answer = true
        });
      });
    },
  },
};
</script>

<style></style>
