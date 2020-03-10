<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ count }}</h2>
    <h2>{{ count3 }}</h2>
    <h2>{{ myduleNum }}</h2>
    <p>
      <button
        type="button"
        @click="upNum">更改
      </button>
    </p>
    <p>
      <button
        type="button"
        @click="upNum2">更改2
      </button>
    </p>
    <p>
      <button
        type="button"
        @click="upNum4">更改4
      </button>
    </p>
    <p>
      <button
        type="button"
        @click="upNum5">更改5
      </button>
    </p>
    <p>
      <button
        type="button"
        @click="upNum6">更改6
      </button>
    </p>
  </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
            ...mapState(['count', 'count3']),
            ...mapGetters(['myduleNum'])
        },
        methods: {
            upNum () {
                console.log(this.$store.getters.doneTodos)
                this.$store.commit('addCount')
            },
            upNum2 () {
                this.$store.commit('addCount2', 2)
            },
            upNum4 () {
                this.$store.dispatch('actionAddCount')
            },
            upNum5 () {
                this.$store.dispatch('actionAddCount3').then(() => {
                    console.log('完成')
                })
            },
            upNum6 () {
                this.$store.commit('addCount3')
                alert('asdf')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h1,
    h2 {
        font-weight: normal;
    }
</style>
