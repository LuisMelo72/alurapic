<template>

    <div>
        <h1 class="centralizado">Cadastro</h1>
        <h2 class="centralizado"></h2>

        <form @submit.prevent="grava()">
            <div class="controle">
                <label for="titulo">TÍTULO</label>
                <input id="titulo"
                       autocomplete="off"
                       v-model.lazy="foto.titulo" />

                <!--
                Sem o uso do v-model
                @input="foto.titulo = $event.target.value"
                :value="foto.titulo"
                -->

            </div>

            <div class="controle">
                <label for="url">URL</label>
                <input id="url"
                       autocomplete="off"
                       v-model.lazy="foto.url" />
                <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo" />
            </div>

            <div class="controle">
                <label for="descricao">DESCRIÇÃO</label>
                <textarea id="descricao"
                          autocomplete="off"
                          v-model="foto.descricao">
                </textarea>
            </div>

            <div class="centralizado">
                <meu-botao label="GRAVAR" type="submit"/>
                <router-link to="/">
                    <meu-botao label="VOLTAR" type="button"/>
                </router-link>
            </div>

        </form>
    </div>

</template>

<script>

    import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
    import Botao from '../shared/botao/Botao.vue';
    import Foto from '../../domain/foto/Foto';

    export default {

        components: {

            'imagem-responsiva': ImagemResponsiva,
            'meu-botao': Botao
        },

        data(){

            return {

                foto: new Foto()

            }

        },

        methods :{

            grava(){

                this.$http.post('v1/fotos', this.foto)
                    .then(() => this.foto = new Foto(), erro => console.log(erro));

            }

        }

    }

</script>
<style scoped>

    .centralizado {
        text-align: center;
    }
    .controle {
        font-size: 1.2em;
        margin-bottom: 20px;

    }
    .controle label {
        display: block;
        font-weight: bold;
    }

    .controle label + input, .controle textarea {
        width: 100%;
        font-size: inherit;
        border-radius: 5px
    }

    .centralizado {
        text-align: center;
    }

</style>