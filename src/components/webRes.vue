<template>
  <div id="webRes">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">前端资源</mt-tab-item>
        <mt-tab-item id="2">后端资源</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container class="resList" v-model="selected">
        <mt-tab-container-item id="1">
            <ul class="webList">
              <li>
                <img src="../assets/2-16031Q55436222.jpg"/>
                <div class="title">我该怎么努力才能不被别人叫美女</div>
                <p class="abstract">文|萌薇 图|来自网络，侵立删 ▋ 美女只是一种代号，并不是真的夸你美 一直以来，我对“美女”这个称呼很反感。 第...</p>
             </li>
            </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'content ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>

  </div>
</template>

<script>
  export default {
    name: 'webRes',
    data () {
      return {
        selected:'1'
      }
    },
  }
</script>

<style lang="scss">
  #webRes {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .resList{
    margin-top:10px;
  }
  .webList {
    position: relative;
    min-height: 100%;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
    >li{
      >img{
         margin: 15px 0;
         width:100%;
       }
     }
  }
</style>
