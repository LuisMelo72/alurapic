/**
 * Created by luis on 11/13/17.
 */
import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode){

        let eixo = 0;

        el.addEventListener('dblclick', function () {

            eixo += 90;

            this.style.transform = `rotate(${eixo}deg)`;

        });

    }

});