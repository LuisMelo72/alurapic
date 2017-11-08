<template>
    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="type">{{ label }}</button>
</template>

<script>
    export default {

        //['type', 'label', 'confirmacao', 'estilo'],
        props: {

            type: {
                required: true,
                type: String
            },

            label: {
                required: true,
                type: String
            },

            confirmacao: Boolean,
            estilo: String

        },

        methods: {

            disparaAcao(){

                if(this.confirmacao){

                    if(confirm('Confirma operação?')){

                        this.$emit('botaoAtivado');

                    }

                } else {

                    this.$emit('botaoAtivado');

                }

            }

        },

        computed: {

            estiloDoBotao(){

                if((this.estilo == 'padrao')
                    || !this.estilo){

                    return 'botao-padrao';

                } else if(this.estilo == 'perigo'){

                    return 'botao-perigo';

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