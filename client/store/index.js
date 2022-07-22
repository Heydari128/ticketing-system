import {createStore} from 'vuex'
import theme from './theme'

export const getStore = createStore({
    modules: {
        theme
    }
})
export default () => getStore