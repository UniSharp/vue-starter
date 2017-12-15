<template lang="pug">
  .index
    u-banner
    .container
      section
        h2 Cards
        .row
          .col-6.col-md-4.col-lg-3(:key="i", v-for="i in 12")
            .card.mb-4
              img.card-img-top(:src="`https://picsum.photos/300/200?random=${i}`")
              .card-body
                h4.card-title Card title
                p.card-text Some quick example text to build on the card title and make up the bulk of the card's content.
                a.btn.btn-primary(href="#") Go somewhere

      section
        h2 Card with Navigation
        .card
          .card-header
            ul.nav.nav-tabs.card-header-tabs
              li.nav-item
                a.nav-link.active(id="nav-home-tab", data-toggle="tab", href="#nav-home", role="tab", aria-controls="nav-home", aria-selected="true") Home
              li.nav-item
                a.nav-link(id="nav-profile-tab", data-toggle="tab", href="#nav-profile", role="tab", aria-controls="nav-profile", aria-selected="true") Profile
              li.nav-item
                a.nav-link(id="nav-contact-tab", data-toggle="tab", href="#nav-contact", role="tab", aria-controls="nav-contact", aria-selected="true") Contact
          .card-body
            .tab-content
              #nav-home.tab-pane.fade.show.active(role="tabpanel", aria-labelledby="nav-home-tab")
                h4.card-title Home
                p.card-text
                  | Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
                  | Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim.
                  | Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat.
                  | Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit.
                  | Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore.
                  | Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
              #nav-profile.tab-pane.fade(role="tabpanel", aria-labelledby="nav-profile-tab")
                h4.card-title Profile
                p.card-text
                  | Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit.
                  | Magna duis labore cillum sint adipisicing exercitation ipsum.
                  | Nostrud ut anim non exercitation velit laboris fugiat cupidatat.
                  | Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi.
                  | Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit.
                  | Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
              #nav-contact.tab-pane.fade(role="tabpanel", aria-labelledby="nav-contact-tab")
                h4.card-title Contact
                p.card-text
                  | Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do.
                  | Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat.
                  | Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor.
                  | Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim.
                  | Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore.
                  | Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet.
                  | Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat.
                  | Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.
</template>

<script>
  import UBanner from '~/components/Banner.vue'

  export default {
    components: { UBanner }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  section + section {
    margin-top: 2rem;
  }
</style>
