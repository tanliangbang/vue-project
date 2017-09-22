<template>
  <div id="webRes">
      <mt-navbar v-model="selected" class="navbarTitle" fixed>
        <mt-tab-item id="1">前端资源</mt-tab-item>
        <mt-tab-item id="2">后端资源</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container class="resList" v-model="selected">
        <mt-tab-container-item id="1">
            <ul class="webList">
              <li  v-for="item in [1,2,3,4,5,6,7,8,9,10]">
                <img src="../assets/2-16031Q55436222.jpg"/>
                <div class="title">我该怎么努力才能不被别人叫美女</div>
                <p class="abstract">文|萌薇 图|来自网络，侵立删 ▋ 美女只是一种代号，并不是真的夸你美 一直以来，我对“美女”这个称呼很反感。 第...</p>
                <div> <span>喜欢 5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>评论 50</span></div>
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
    padding-top:20px;
  }
  .navbarTitle{
    div{
      font-size:18px;
      font-weight: bold;
    }
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
       padding: 20px 18px 25px;
       border-bottom: 1px solid #f0f0f0;
       >img{
         margin-top: 15px;
         width:100%;
       }
       div:nth-child(2){
         font-size:18px;
       }
       p{
         margin-top:5px;
         margin-bottom:5px;
       }
       div:nth-child(4){
         text-align: right;
         font-size:12px;
       }
     }
  }
</style>
