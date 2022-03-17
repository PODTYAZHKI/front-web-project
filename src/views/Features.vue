<template>
  <div>
    <section class="section section-header text-dark pb-md-8">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 text-center mb-5 mb-md-7">
            <!-- <h1 class="display-2 font-weight-bolder mb-4">АнтиТокс</h1> -->
            <p
              class="lead mb-4 mb-lg-5"
              style="text-align: justify; !important"
            >
              В данном разделе вы можете выбрать и воспользоваться одной из
              интеллектуальных функций нашего сайта. Основной является “Проверка
              на токсичность” где вы можете вставить свой текст и проверить его
              на наличие в нем элементов токсичной речи Вторая функция
              “Интеллектуальный ассистент” позволяет задать вопрос и получить на
              него естественный ответ от нашего ИИ. Так можно написать
              полноценный диалог! А третья наша функция позволит вам сравнить
              насколько текст идентичен другому. Надеемся что наш функционал
              окажется вам полезным, вы всегда можете оставить свой отзыв в
              соответствующем разделе сайта.
            </p>
          </div>
          <div class="col-12 col-md-10 justify-content-center">
            <img
              class="d-none d-md-inline-block"
              src="./assets/img/illustrations/scene.svg"
              alt="Mobile App Mockup"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- TODO: add hoverable effect -->
    <section class="section section-lg py-0">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0"
            @click="goTo('toxicity')"
            style="cursor: pointer"
          >
            <div class="card border-0 bg-white text-center p-1">
              <div class="card-header bg-white border-0 pb-0">
                <div class="icon icon-lg icon-primary mb-4">
                  <img src="@/images/toxic.png" style="width: 40px" />
                </div>
                <h2 class="h3 text-dark m-0">Проверь текст на токсичность</h2>
              </div>
              <div class="card-body">
                <p>Уберем неуместные элементы</p>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0"
            @click="goTo('qna')"
            style="cursor: pointer"
          >
            <div class="card border-0 bg-white text-center p-1">
              <div class="card-header bg-white border-0 pb-0">
                <div class="icon icon-lg icon-primary mb-4">
                  <img src="@/images/assistent.png" style="width: 40px" />
                </div>
                <h2 class="h3 text-dark m-0">Интеллектуальный ассистент</h2>
              </div>
              <div class="card-body">
                <p>Ответит на вопрос на естественном языке</p>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-lg-4"
            @click="goTo('use')"
            style="cursor: pointer"
          >
            <div class="card border-0 bg-white text-center p-1">
              <div class="card-header bg-white border-0 pb-0">
                <div class="icon icon-lg icon-primary mb-4">
                  <img src="@/images/text.png" style="width: 40px" />
                </div>
                <h2 class="h3 text-dark m-0">Проверка на идентичность</h2>
              </div>
              <div class="card-body">
                <p>Сравним текст на совпадение</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goTo(i) {
        this.$router.push({ name: i });
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
