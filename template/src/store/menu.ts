import { Location } from 'vue-router'

export interface Menu {
    title: String
    route: Location
}

const menu: Menu[] = [
    {
        title: 'Клиенты',
        route: { name: 'clients' }
    }
]

export default menu;
