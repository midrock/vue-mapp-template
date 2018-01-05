import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import menu, { Menu } from './menu';

Vue.use(Vuex);

export interface RootState {
    title: string;
    menu: Menu[];
}

export default new Store<RootState>({
    state: {
        title: 'Vue Mapp',
        menu
    },
    mutations: {
        setTitle(state, data: string) {
            state.title = data;
        }
    }
})
