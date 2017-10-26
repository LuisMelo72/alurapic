<template>
  <div class="corpo">

      <md-card>
          <md-card-header>
              <div class="md-title">
                  Material Design With Vue.js 2 Demo
              </div>
              <div class="md-subhead">
                by CodingTheSmartWay.com
              </div>
          </md-card-header>
      </md-card>

      <router-view></router-view>

  </div>
</template>

<script>

export default {


}

</script>


<style>
    /*src="vue-material/dist/vue-material.css"*/
    .corpo {
        font-family: Helvetica, sans-serif;
        width: 96%;
        margin: auto;
    }

</style>
