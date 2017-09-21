<template>
  <div class="index">

    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../assets/logo.png">
        学习资源
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../assets/logo.png">
        IT资讯
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../assets/logo.png">
        交流社区
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../assets/logo.png">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
    <router-view></router-view>




  </div>



</template>

<script>
  import {config,formatXml} from '@/util/util'//记得带上{}花括号
  import { Tabbar, TabItem } from 'mint-ui';

  export default {
  name: 'index',
  data () {
    return {
      selected: 'tab1'
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
