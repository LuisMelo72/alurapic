/**
 * Created by luis on 11/13/17.
 */
import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode){

        let eixo = 0;

        el.addEventListener('dblclick', function () {

            let incremento = binding.value || 90;
            let animacao = binding.modifiers.animacao;
            let reverte = binding.modifiers.reverte;

            // quando informar na directiva varios valores
            // EX: v-meu-transform="{incremento: 15, animacao: true}"
           /* if(binding.value){

                incremento = binding.value.incremento;
                animacao = binding.value.animacao;

            }*/

           if(reverte){

               eixo -= incremento;

           } else {

               eixo += incremento;

           }

           this.style.transform = `rotate(${eixo}deg)`;

           if(animacao){

                this.style.transition = 'transform 0.5s';

            }

        });

    }

});