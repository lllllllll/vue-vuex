<template>
  <div class="Main">
    <H1>Hello {{ msg }}</H1>
    <div class="data-counter">{{ count }}</div>
    <button @click="btnAdd()">+</button> | <button @click="btnDec()">-</button>
    <h1>Lists</h1>
    <div class="lists-item">
      <div v-for="(item, index) in lists" :key="index">{{index}} - {{item.title}}</div>
    </div>
    <hr>
    <h1>List True {{listTrueLength}}</h1>
    <div class="lists-item">
      <div v-for="(item, index) in listTrue" :key="index">{{index}} - {{item.title}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      msg: 'Main'
    }
  },
  methods: {
    // btnAdd() {
    //   this.$store.commit('increment');
    // },
    // btnDec() {
    //   this.$store.commit('decrement');
    // },
    ...mapMutations(['increment', 'decrement']),
    ...mapMutations({btnAdd: 'increment', btnDec: 'decrement'}),
  },
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    // lists() {
    //   return this.$store.state.lists;
    // },
    // ...mapState({
    //   count: state => state.count,
    //   lists: state => state.lists,
    // }),
    ...mapState(['count', 'lists']),
    // listTrue() {
    //   return this.$store.getters.listTrue;
    // },
    // listTrueLength() {
    //   return this.$store.getters.listTrueLength;
    // },
    ...mapGetters(['listTrue', 'listTrueLength']),
  }
}
</script>

<style>

</style>