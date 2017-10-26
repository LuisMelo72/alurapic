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

      <h1 class="centralizado">{{ titulo }}</h1>

      <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="informe parte do título">

      <ul class="lista-fotos">
          <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
              <meu-painel :titulo="foto.titulo">
                  <img class="imagem-responsiva" :src="foto.url" :alt="foto.alt">
              </meu-painel>
          </li>
      </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {

    components: {

        'meu-painel': Painel

    },
    data() {

        return {
            titulo: 'Bem vindo a Terra Média',
            fotos: [],
            filtro: ''
        }

    },
    computed: {

        fotosComFiltro(){
            if(this.filtro){
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.fotos.filter(foto => exp.test(foto.titulo));
            } else {
                return this.fotos;
            }
        }

    },
    created() {

        this.$http.get('http://localhost:3000/v1/fotos')
            .then(res => res.json())
            .then(fotos => this.fotos = fotos, err => console.log(err));

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

    .centralizado {
        text-align: center;
    }

    .lista-fotos {
        list-style: none;
    }

    .lista-fotos .lista-fotos-item {
        display: inline-block;
    }

    .imagem-responsiva {
        width: 100%;
    }

    .filtro {
        display: block;
        width: 100%;
    }

</style>
