<template>
  <div class="corpo">

      <menu-sistema :rotas="routes" />

      <transition name="pagina">
          <router-view></router-view>
      </transition>

  </div>
</template>

<script>

    import { routes } from './routes';
    import Menu from './components/shared/menu/Menu.vue';

    export default {

        components: {

            'menu-sistema': Menu,

        },

        data() {

            return {

                routes

            }

        }

    }

</script>


<style>
    /*src="vue-material/dist/vue-material.css"*/
    .corpo {
        font-family: Helvetica, sans-serif;
        width: 96%;
        margin: auto;
    }

    .pagina-enter, .pagina-leave-active {
        opacity: 0;
    }

    .pagina-enter-active, .pagina-leave-active {
        transition: opacity .4s;
    }

</style>
