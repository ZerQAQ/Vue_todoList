<template>
  <div id="app">
    <mt-header title='TodoList'></mt-header>

    <mt-navbar v-model='navbarSelect'>
      <mt-tab-item id="1">
        todo
      </mt-tab-item>
      
      <mt-tab-item id="2">
        finish
      </mt-tab-item>
    </mt-navbar>
    
    <br>

    <mt-tab-container v-model='navbarSelect'>
      <mt-tab-container-item id="1">
        <mt-cell v-for="(elm, key) in list" v-if="!elm.checked" :title="elm.name">
          <mt-button type='primary' size="small" @click.native="elm.checked=!elm.checked" style="margin-right: 10px;">finish</mt-button>
          <mt-button type="danger" size="small" @click.native="delObj(key)">delete</mt-button>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(elm,key) in list" v-if="elm.checked" :title="elm.name">
          <mt-button type='primary' size="small" @click.native="elm.checked=!elm.checked" style="margin-right: 10px;">unfinish</mt-button>
          <mt-button type="danger" size="small" @click.native="delObj(key)">delete</mt-button>
        </mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>

    <div class="bottom">
      <mt-field placeholder="input todo here" v-model="todo">
        <mt-button type="primary" size="small" @click.native="addTodo()" style="margin-left: 20%;">add</mt-button>
      </mt-field>
    </div>

  </div>
</template>


<script>

  import checkList from "./components/example/pages/checklist.vue"

export default {
  name: 'app',
  data () {
    return {
      todo: '',
      navbarSelect: '1',
      list:[
        {
          name: "owo",
          checked: false
        },
        {
          name: "qwq",
          checked: false
        },
        {
          name: ">w<",
          checked: false
        },
        {
          name: "0.0",
          checked: false
        }
      ]
    }
  },
  methods: {
    delObj(key){
      this.list.splice(key, 1)
    },
    addTodo(){
      if (this.todo == '') return
      this.list.push({
        name: this.todo,
        checked: false
      })
      this.todo = ''
    }
  },
  components: {
    'v-checkList' : checkList
  }
}
</script>


<style lang="scss">
  .bottom{
    position: fixed;
    bottom: 0px;
    width: 95%;
  }
</style>
