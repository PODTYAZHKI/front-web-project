<template>
  <div>
    <section class="section section-header text-dark pb-md-8">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 text-center mb-5 mb-md-7">
            <p class="lead mb-4 mb-lg-5">
              АнтиТокс приглашает вас на страницу пресс-службы, где вы найдете
              свежие пресс-релизы, информацию о последних мероприятиях как
              нашего сообщества, так и в мире филологии. Конкурсы и публикации
              авторов, олимпиады и конференции международного уровня. Обо всем
              этом мы будем сообщать вам в нашем разделе “Ивенты”. Мы всегда
              рады общению с единомышленниками с удовольствием выслушаем ваши
              предложение о публикациях и комментарии.
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
    <section class="section section-lg py-0 mb-5">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0"
            @click="goTo('dictation')"
            style="cursor: pointer"
          >
            <div class="card border-0 bg-white text-center p-1 pb-6">
              <div class="card-header bg-white border-0 pb-0">
                <div class="icon icon-lg icon-primary mb-4">
                  <!-- <img src="@/images/toxic.png" style="width: 40px" /> -->
                </div>
                <h2 class="h3 text-dark m-0">Тотальный диктант</h2>
              </div>
              <!-- <div class="card-body">
                <p>Уберем неуместные элементы</p>
              </div> -->
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0"
            @click="goTo('conference')"
            style="cursor: pointer"
          >
            <div class="card border-0 bg-white text-center p-1 pb-6">
              <div class="card-header bg-white border-0 pb-0">
                <div class="icon icon-lg icon-primary mb-4">
                  <!-- <img src="@/images/assistent.png" style="width: 40px" /> -->
                </div>
                <h2 class="h3 text-dark m-0">Конфиренция в Сызрани</h2>
              </div>
              <!-- <div class="card-body">
                <p>Ответит на вопрос на естественном языке</p>
              </div> -->
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-lg-4"
            @click="goTo('bear')"
            style="cursor: pointer"
          >
            <div class="card border-0 bg-white text-center p-1 pb-6">
              <div class="card-header bg-white border-0 pb-0">
                <div class="icon icon-lg icon-primary mb-4">
                  <!-- <img src="@/images/text.png" style="width: 40px" /> -->
                </div>
                <h2 class="h3 text-dark m-0">Русский медвежёнок</h2>
              </div>
              <!-- <div class="card-body">
                <p>Сравним текст на совпадение</p>
              </div> -->
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
      }
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
}
blockquote {
  font-size: 0.9rem !important;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
