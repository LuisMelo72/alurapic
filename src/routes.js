/**
 * Created by luis on 10/26/17.
 */
import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [

    {path: '', component: Home, titulo: 'Home'},
    {path: '/cadastro', component: Cadastro, titulo: 'Cadastro'}

];
