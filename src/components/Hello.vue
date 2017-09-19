<template>
  <div class="hello">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">

        tab1
      </mt-tab-item>
      <mt-tab-item id="tab2">
        tab2
      </mt-tab-item>
      <mt-tab-item id="tab3">
        tab3
      </mt-tab-item>
      <mt-tab-item id="tab4">
        tab4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import {config,formatXml} from '@/util/util'//记得带上{}花括号
  import { Tabbar, TabItem } from 'mint-ui';

  export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    created (){
      console.log(config)
    },
    components:{Tabbar}

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
