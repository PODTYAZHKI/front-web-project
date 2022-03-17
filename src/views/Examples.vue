<template>
  <div>
    <section class="section section-header text-dark pb-md-8">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 text-center mb-5 mb-md-7">
            <p class="lead mb-4 mb-lg-5">
              Здесь собраны самые различные примеры сочинений с 5 по 11 класс
              среднего образования. Мы разделили их для вас на самые популярные
              категории. Читайте и вдохновляйтесь. В скором времени вы сможете
              добавлять и свои прекрасные работы. Русский язык - это общее
              благо, и им надо делиться.
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
            @click="goTo('war')"
            style="cursor: pointer"
          >
            <div class="card border-0 bg-white text-center p-1 pb-6">
              <div class="card-header bg-white border-0 pb-0">
                <div class="icon icon-lg icon-primary mb-4">
                  <!-- <img src="@/images/toxic.png" style="width: 40px" /> -->
                </div>
                <h2 class="h3 text-dark m-0">Сочинение о войне</h2>
              </div>
              <!-- <div class="card-body">
                <p>Уберем неуместные элементы</p>
              </div> -->
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-lg-4"
            @click="goTo('father')"
            style="cursor: pointer"
          >
            <div class="card border-0 bg-white text-center p-1 pb-6">
              <div class="card-header bg-white border-0 pb-0">
                <div class="icon icon-lg icon-primary mb-4">
                  <!-- <img src="@/images/text.png" style="width: 40px" /> -->
                </div>
                <h2 class="h3 text-dark m-0">Сочинение о Отцах и детях</h2>
              </div>
              <!-- <div class="card-body">
                <p>Сравним текст на совпадение</p>
              </div> -->
            </div>
          </div>
          <div
            class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0"
            @click="goTo('love')"
            style="cursor: pointer"
          >
            <div class="card border-0 bg-white text-center p-1 pb-6">
              <div class="card-header bg-white border-0 pb-0">
                <div class="icon icon-lg icon-primary mb-4">
                  <!-- <img src="@/images/assistent.png" style="width: 40px" /> -->
                </div>
                <h2 class="h3 text-dark m-0">Сочинение о Любви</h2>
              </div>
              <!-- <div class="card-body">
                <p>Ответит на вопрос на естественном языке</p>
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
</style>
