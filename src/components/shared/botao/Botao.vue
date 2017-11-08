<template>
    <button @click="disparaAcao()" class="botao botao-perigo" :type="type">{{ label }}</button>
</template>

<script>
    export default {

        props: ['type', 'label', 'confirmacao'],

        methods: {

            disparaAcao(){

                console.log(typeof(this.confirmacao));

                if(this.confirmacao){

                    if(confirm('Confirma operação?')){

                        this.$emit('botaoAtivado');

                    }

                } else {

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