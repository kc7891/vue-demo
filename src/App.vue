<template>
  <div id="app">
    <nav-link></nav-link>
    <router-view  class="contents" :memos="memos" @add="add" @remove="remove" :count="3" @update="update"></router-view>
  </div>
</template>
<script>
  import NavLink from './components/NavLink'
  export default {
    name : 'app',
    data() {
      return {
        memos: [
          {
            id: 1,
            text: 'test',
            date: '2016-10-28',
            tags: ['tag1','tag2']
          },
          {
            id: 2,
            text: 'test2',
            date: '2016-11-28',
            tags: ['tag2','tag3']
          },
          {
            id: 3,
            text: 'test2',
            date: '2016-10-29',
            tags: ['tag1','tag2']
          },
          {
            id: 4,
            text: 'test3',
            date: '2016-11-30',
            tags: ['tag2','tag3']
          }
        ]
      }
    },
    computed: {
      nextId() {
        return this.memos.reduce((id, memo) => {
            return id < memo.id ? memo.id : id
          }, 0) + 1
      }
    },
    methods: {
      add(newMemo) {
        newMemo.id = this.nextId
        this.memos.push(newMemo)
      },
      remove(id) {
        const index = this.memos.findIndex((memo) => {
          return memo.id === id
        })
        this.memos.splice(index, 1)
      },
      update(data) {
        const id = parseInt(data.id, 10)
        const index = this.memos.findIndex((memo) => {
          return memo.id === id
        })
        this.memos.splice(index, 1, data)
      }
    },
    components: {
      NavLink
    }
  }
</script>
<style lang="scss">
  @import '../static/styles.css';
  html, body {
    color : #555;
    margin : 0;
    padding : 0;
    height : 100vh;
  }
  #app {
    height : 100%;
    display : flex;
    .contents {
      height : 100%;
      flex-grow : 1;
      overflow: scroll;
      box-sizing: border-box;
    }
  }
</style>