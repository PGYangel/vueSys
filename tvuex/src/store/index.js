import Vue from 'vue'
import Vuex from 'vuex'
import module1 from '@/store/moduls/m1'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        module1
    },
    state: {
        count: 0,
        count3: 3,
        todos: [
            {id: 1, text: 'abc', done: true},
            {id: 3, text: 'abc', done: true},
            {id: 2, text: '123', done: false}
        ]
    },
    getters: {
        myduleNum: state => state.module1.myduleNum,
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },
    mutations: {
        addCount (state) {
            state.count++
        },
        addCount2 (state, n) {
            state.count += n
        }
    },
    actions: {
        actionAddCount (context) {
            setTimeout(() => {
                context.commit('addCount')
            }, 1000)
        },
        // 使用解构方法简化代码
        actionAddCount2 ({commit}) {
            commit('addCount')
        },
        actionAddCount3 ({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('addCount')
                    resolve()
                }, 1000)
            })
        }
    }
})

export default store
