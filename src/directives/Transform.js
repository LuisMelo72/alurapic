/**
 * Created by luis on 11/13/17.
 */
import Vue from 'vue';

// pode-se criar usando o Vue.directive tambem
// Vue.directive('meu-transform', {

export default {

    bind(el, binding, vnode){

        let eixo = 0;

        el.addEventListener('dblclick', function () {

            let incremento = binding.value || 90;
            let animacao = binding.modifiers.animacao;
            let reverte = binding.modifiers.reverte;
            let efeito;

            // quando informar na directiva varios valores
            // EX: v-meu-transform="{incremento: 15, animacao: true}"
           /* if(binding.value){

                incremento = binding.value.incremento;
                animacao = binding.value.animacao;

            }*/

           console.log(binding.arg);

           if(!binding.arg
                || binding.arg == 'rotate'){

               if(reverte){

                   eixo -= incremento;

               } else {

                   eixo += incremento;

               }

               efeito = `rotate(${eixo}deg)`;

           } else if(binding.arg == 'scale'){

               efeito = `scale(${incremento})`;

           }


           this.style.transform = efeito;

           if(animacao){

                this.style.transition = 'transform 0.5s';

            }

        });

    }

};