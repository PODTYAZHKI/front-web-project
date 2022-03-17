<template>
  <div>
    <main>
      <!-- Hero -->
      <section class="section section-header text-dark pb-md-8">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 text-center mb-5 mb-md-7">
              <h1 class="display-2 font-weight-bolder mb-4">АнтиТокс</h1>
              <p class="lead mb-4 mb-lg-5">
                Текст - это также часть нашей культуры. И мы готовы помочь вам
                сделать его чистым от токсичности.
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
            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" @click="goTo('toxicity')" style="cursor: pointer;">
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
            <div class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" @click="goTo('qna')" style="cursor: pointer;">
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
            <div class="col-12 col-md-6 col-lg-4" @click="goTo('use')" style="cursor: pointer;">
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
      <section class="section section-lg" id="about">
        <div class="container">
          <!-- <div class="row justify-content-center mb-5 mb-lg-7">
            <div class="col-12 col-lg-8 text-center">
              <h2 class="h1 mb-4">Учись вместе с нами</h2>
              <p class="lead">
                Self-Service Analytics or ad hoc reporting gives users the
                ability to develop rapid reports, empowering users to analyze
                their data.
              </p>
            </div>
          </div> -->
          <div class="row row-grid align-items-center mb-5 mb-lg-7">
            <div class="col-12 col-lg-5">
              <h2 class="mb-4">Учись вместе с нами</h2>
              <p>
                С момента основания компании в 2023 году наши квалифицированные
                специалисты упорно работают, чтобы оказывать лучшие услуги в
                отрасли.
              </p>
              <p>
                Наши предложения составляются с учетом конкретных потребностей и
                задач. Развивайтесь с нами и развивайте свой навык написания
                текстов
              </p>
              <!-- <a href="#" class="btn btn-dark mt-3 animate-up-2">
                Learn More
                <span class="icon icon-xs ml-2">
                  <i class="fas fa-external-link-alt"></i>
                </span>
              </a> -->
            </div>
            <div class="col-12 col-lg-6 ml-lg-auto">
              <img
                src="./assets/img/illustrations/scene-3.svg"
                class="w-100"
                alt=""
              />
            </div>
          </div>
          <div class="row row-grid align-items-center mb-5 mb-lg-7">
            <div class="col-12 col-lg-5 order-lg-2">
              <h2 class="mb-4">Открой мир родного языка!</h2>
              <p>
                Узнавай о последних событиях в мире филологов и событиях связанных с этим в нашем сервисе! Читай о новых публикациях и авторах.
              </p>
              <p>
                Изучай уроки по темам. Олимпиады, диктанты, изменения в языках, всем этим можно и нужно делиться

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
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 mb-4">
              <div class="card border-light p-4">
                <div class="card-body">
                  <h2 class="display-2 mb-2">98%</h2>
                  <span
                    >Средняя оценка удовлетворенности, полученная за последний год.</span
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
              <div class="card border-light p-4">
                <div class="card-body">
                  <h2 class="display-2 mb-2">24/7</h2>
                  <span> Наша служба поддержки всегда поможет вам в чате или по электронной почте.</span>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 mb-4">
              <div class="card border-light p-4">
                <div class="card-body">
                  <h2 class="display-2 mb-2">20k+</h2>
                  <span
                    >Extension installs from the two major mobile app
                    stores.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="section section-sm py-0">
        <div class="container">
          
          <div class="row text-center">
            <div class="col d-flex justify-content-center flex-wrap">
              <a
                href="#"
                aria-label="Stripe brand logo"
                class="icon icon-xl icon-dark mr-4 mr-sm-5"
                data-toggle="tooltip"
                data-placement="top"
                title="Stripe"
              >
                <span class="fab fa-stripe"></span>
              </a>
              <a
                href="#"
                aria-label="Digg brand logo"
                class="icon icon-xl icon-dark mr-4 mr-sm-5"
                data-toggle="tooltip"
                data-placement="top"
                title="Digg"
              >
                <span class="fab fa-digg"></span>
              </a>
              <a
                href="#"
                aria-label="FedEx brand logo"
                class="icon icon-xl icon-dark mr-4 mr-sm-5"
                data-toggle="tooltip"
                data-placement="top"
                title="FedEx"
              >
                <span class="fab fa-fedex"></span>
              </a>
              <a
                href="#"
                aria-label="Ember brand logo"
                class="icon icon-xl icon-dark mr-4 mr-sm-5"
                data-toggle="tooltip"
                data-placement="top"
                title="Ember"
              >
                <span class="fab fa-ember"></span>
              </a>
              <a
                href="#"
                aria-label="Beyond brand logo"
                class="icon icon-xl icon-dark mr-4 mr-sm-5"
                data-toggle="tooltip"
                data-placement="top"
                title="Beyond"
              >
                <span class="fab fa-d-and-d-beyond"></span>
              </a>
              <a
                href="#"
                aria-label="AngryCreative brand logo"
                class="icon icon-xl icon-dark"
                data-toggle="tooltip"
                data-placement="top"
                title="AngryCreative"
              >
                <span class="fab fa-angrycreative"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="section bg-soft" id="download">
        <figure
          class="position-absolute top-0 left-0 w-100 d-none d-md-block mt-n3"
        >
          <svg
            class="fill-soft"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 43.4"
            style="enable-background: new 0 0 1920 43.4"
            xml:space="preserve"
          >
            <path
              d="M0,23.3c0,0,405.1-43.5,697.6,0c316.5,1.5,108.9-2.6,480.4-14.1c0,0,139-12.2,458.7,14.3 c0,0,67.8,19.2,283.3-22.7v35.1H0V23.3z"
            ></path>
          </svg>
        </figure>
        <div class="container">
          <div class="row row-grid align-items-center">
            <div class="col-12 col-lg-6">
              <span class="h5 text-muted mb-2 d-block">Download App</span>
              <h2 class="display-3 mb-4">Get started in seconds</h2>
              <p class="lead text-muted">
                Quickly connect to tools and services such as Google Analytics,
                Intercom or Github to track, measure and optimize performance.
              </p>
              <div class="mt-4 mt-lg-5">
                <a
                  href="#"
                  class="btn btn-dark btn-download-app mb-xl-0 mr-2 mr-md-3"
                >
                  <span class="d-flex align-items-center">
                    <span class="icon icon-brand mr-2 mr-md-3"
                      ><span class="fab fa-apple"></span
                    ></span>
                    <span class="d-inline-block text-left">
                      <small class="font-weight-normal d-none d-md-block"
                        >Available on</small
                      >
                      App Store
                    </span>
                  </span>
                </a>
                <a href="#" class="btn btn-dark btn-download-app">
                  <span class="d-flex align-items-center">
                    <span class="icon icon-brand mr-2 mr-md-3"
                      ><span class="fab fa-google-play"></span
                    ></span>
                    <span class="d-inline-block text-left">
                      <small class="font-weight-normal d-none d-md-block"
                        >Available on</small
                      >
                      Google Play
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="col-12 col-lg-5 ml-lg-auto">
              <img
                class="d-none d-lg-inline-block"
                src="./assets/img/illustrations/scene-3.svg"
                alt="Mobile App Illustration"
              />
            </div>
          </div>
        </div>
      </div> -->
    </main>

    <!-- <footer class="footer py-5 pt-lg-6">
      <div class="sticky-right">
        <a
          href="#home"
          class="
            icon icon-primary icon-md
            btn btn-icon-only btn-white
            border border-soft
            shadow-soft
            animate-up-3
          "
        >
          <span class="fas fa-chevron-up"></span>
        </a>
      </div>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-4">
            <p>
              Swipe is a beautiful and free one page Bootstrap 5 Template
              created to showcase your awesome mobile app.
            </p>
            <ul class="social-buttons mb-5 mb-lg-0">
              <li>
                <a
                  href="https://twitter.com/themesberg"
                  aria-label="twitter social link"
                  class="icon icon-md icon-twitter mr-3"
                >
                  <span class="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/themesberg/"
                  class="icon icon-md icon-facebook mr-3"
                  aria-label="facebook social link"
                >
                  <span class="fab fa-facebook"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/themesberg"
                  aria-label="github social link"
                  class="icon icon-md icon-github mr-3"
                >
                  <span class="fab fa-github"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/themesberg"
                  class="icon icon-md icon-dribbble"
                  aria-label="dribbble social link"
                >
                  <span class="fab fa-dribbble"></span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-2 mb-5 mb-lg-0">
            <span class="h5">Themesberg</span>
            <ul class="footer-links mt-2">
              <li>
                <a target="_blank" href="https://themesberg.com/blog">Blog</a>
              </li>
              <li>
                <a target="_blank" href="https://themesberg.com/products"
                  >Products</a
                >
              </li>
              <li>
                <a target="_blank" href="https://themesberg.com/about"
                  >About Us</a
                >
              </li>
              <li>
                <a target="_blank" href="https://themesberg.com/contact"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-4 mb-5 mb-lg-0">
            <span class="h5 mb-3 d-block">Subscribe</span>
            <form action="#">
              <div class="form-row mb-2">
                <div class="col-12">
                  <input
                    type="email"
                    class="form-control mb-2"
                    placeholder="example@company.com"
                    name="email"
                    aria-label="Subscribe form"
                    required
                  />
                </div>
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-dark shadow-soft btn-block"
                    data-loading-text="Sending"
                  >
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </form>
            <p class="text-muted font-small m-0">No spam. Pinky swear.</p>
          </div>
        </div>
        <hr class="bg-light my-2" />
        <div class="row pt-2 pt-lg-5">
          <div class="col mb-md-0">
            <a
              href="https://themesberg.com"
              target="_blank"
              class="d-flex justify-content-center"
            >
              <img
                src="./assets/img/themesberg.svg"
                height="25"
                class="mb-3"
                alt="Themesberg Logo"
              />
            </a>
            <div
              class="
                d-flex
                text-center
                justify-content-center
                align-items-center
              "
              role="contentinfo"
            >
              <p class="font-weight-normal font-small mb-0">
                Copyright © Themesberg 2019-<span class="current-year"
                  >2020</span
                >. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer> -->
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

<style scoped>
@import url("./vendor/@fortawesome/fontawesome-free/css/all.min.css");
@import url("./css/swipe.css");
</style>
