<template>
    <button @click="disparaAcao()" class="botao botao-perigo" :type="type">{{ label }}</button>
</template>

<script>
    export default {

        props: ['type', 'label'],

        methods: {

            disparaAcao(){

                if(confirm('Confirma operação?')){

                    this.$emit('botaoAtivado');

                }

            }

        }

    }
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }

</style>