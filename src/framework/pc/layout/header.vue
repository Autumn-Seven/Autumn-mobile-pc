<template>
  <div class="header">
    <div class="header-cont">
      <div class="header-logo">
        <img src="~~/pc/logo.gif" alt="">
      </div>
      <div class="address">
        <div class="city" @mouseover="addCtiy" @mouseleave="deletCtiy" >
          <span>广东</span>
          <img src="~~/pc/ico_arrow1.gif" alt="">
          <div v-show="cityShow">
            <ul class="up" style="display: block;"> 
              <li>
                <span>A-G</span>
                <a target="_blank" href="http://bj.189.cn/">北京</a>
                <a target="_blank" href="http://ah.189.cn/">安徽</a>
                <a target="_blank" href="http://www.189.cn/cq">重庆</a>
                <a target="_blank" href="http://fj.189.cn">福建</a>
                <a target="_blank" href="/">广东</a>
                <a target="_blank" href="http://gs.189.cn/">甘肃</a>
                <a target="_blank" href="http://gx.189.cn/">广西</a>
                <a target="_blank" href="http://gz.189.cn/">贵州</a>
              </li>
              <li>
                <span>H-J</span>
                <a target="_blank" href="http://hb.189.cn/">湖北</a>
                <a target="_blank" href="http://hn.189.cn">湖南</a>
                <a target="_blank" href="http://he.189.cn">河北</a>
                <a target="_blank" href="http://ha.189.cn/">河南</a>
                <a target="_blank" href="http://hi.189.cn/">海南</a>
                <a target="_blank" href="http://www.189.cn/hl/">黑龙江</a>
                <a href="http://js.189.cn/">江苏</a>
                <a target="_blank" href="http://jl.189.cn/">吉林</a>
                <a target="_blank" href="http://jx.189.cn/">江西</a>
              </li>
              <li>
                <span>L-S</span>
                <a target="_blank" href="http://ln.189.cn/">辽宁</a>
                <a target="_blank" href="http://nm.189.cn/">内蒙古</a>
                <a target="_blank" href="http://nx.189.cn/">宁夏</a>
                <a target="_blank" href="http://qh.189.cn/">青海</a>
                <a target="_blank" href="http://sd.189.cn/">山东</a>
                <a target="_blank" href="http://sh.189.cn/">上海</a>
                <a target="_blank" href="http://sx.189.cn/">山西</a>
                <a target="_blank" href="http://sn.189.cn/">陕西</a>
                <a target="_blank" href="http://sc.189.cn/">四川</a>
              </li>
              <li>
                <span>T-Z</span>
                <a target="_blank" href="http://tj.189.cn/">天津</a>
                <a target="_blank" href="http://xj.189.cn/">新疆</a>
                <a target="_blank" href="http://xz.189.cn/">西藏</a>
                <a target="_blank" href="http://yn.189.cn/">云南</a>
                <a target="_blank" href="http://zj.189.cn/">浙江</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="region"  @mouseover="addRegion" @mouseleave="deletRegion">
          <span>佛山</span>
          <img src="~~/pc/ico_arrow1.gif" alt="">
          <div v-show="regionShow" class="up" style="display: block;">
            <a href="/common/jump.jsp?goto=0000&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">广东</a>
            <a href="/common/jump.jsp?goto=020&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">广州</a>
            <a href="/common/jump.jsp?goto=0755&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">深圳</a>
            <a href="/common/jump.jsp?goto=0769&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">东莞</a>
            <a href="/common/jump.jsp?goto=0757&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">佛山</a>
            <a href="/common/jump.jsp?goto=0760&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">中山</a>
            <a href="/common/jump.jsp?goto=0752&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">惠州</a>
            <a href="/common/jump.jsp?goto=0750&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">江门</a>
            <a href="/common/jump.jsp?goto=0756&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">珠海</a>
            <a href="/common/jump.jsp?goto=0754&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">汕头</a>
            <a href="/common/jump.jsp?goto=0663&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">揭阳</a>
            <a href="/common/jump.jsp?goto=0768&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">潮州</a>
            <a href="/common/jump.jsp?goto=0660&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">汕尾</a>
            <a href="/common/jump.jsp?goto=0759&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">湛江</a>
            <a href="/common/jump.jsp?goto=0668&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">茂名</a>
            <a href="/common/jump.jsp?goto=0662&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">阳江</a>
            <a href="/common/jump.jsp?goto=0766&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">云浮</a>
            <a href="/common/jump.jsp?goto=0758&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">肇庆</a>
            <a href="/common/jump.jsp?goto=0753&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">梅州</a>
            <a href="/common/jump.jsp?goto=0763&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">清远</a>
            <a href="/common/jump.jsp?goto=0762&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">河源</a>
            <a href="/common/jump.jsp?goto=0751&amp;TB_showTitle=false&amp;height=200&amp;width=300" class="thickbox">韶关</a> 
          </div>
        </div>
      </div>
      <div class="search">
        <div class="search-box">
          <img class="search-icon" src="~~/pc/ico_srh.gif" alt="">
          <input class="search-input" type="text">
          <div class="submit">
            搜索
          </div>
        </div>
        <div class="searchBar">
          <a href="#">销户号码交费</a>
          <a href="#">手机丢失抢救攻略</a>
        </div>
      </div>
      
    </div>
    <div class="menu">
      <div class="menu-cont">
        <div class="menu-title">
          <img src="~~/pc/ico_menu.gif" alt="">
          <span>全部产品及服务</span>          
        </div>
        <ul>               
          <li>
            <a href="#" :class="border==0?'active':''" >
              <div></div>
              首页
            </a>
          </li>
          <li>
            <a href="#" :class="border==1?'active':''">
              <div></div>
              号卡
            </a>
          </li>
          <li>
            <a href="#" :class="border==2?'active':''">
              <div></div>
              宽带光纤
            </a>
          </li>
          <li>
            <a href="#" :class="border==3?'active':''">
              <div></div>
              老用户
            </a>
          </li>
          <li>
            <a href="#" :class="border==4?'active':''">
              <div></div>
              省钱
            </a>
          </li>
          <li>
            <a href="#" :class="border==5?'active':''">
              <div></div>
              自助服务
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      cityShow:false,
      regionShow:false,
      border:0
    }
  },
  methods: {
    addCtiy(){
      this.cityShow = true;
    },
    deletCtiy(){
      this.cityShow = false;
    },
    addRegion(){
      this.regionShow = true;
    },
    deletRegion(){
      this.regionShow = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width: 100%;
  padding: 14px 0 0;
}
.header-cont{
  width: 1200px;
  margin: auto;
}
.header-logo{
  display: inline-block;
}
.address{
  width: 100px;
  display: inline-block;
}
.city,.region{
  position: relative;
  width: 80px;
  height: 28px;
  line-height: 22px;
  margin-bottom: 8px;
  border: 1px solid #e7e2df;
  color: #999;
  border-radius: 2px;
  
}
.city span,.region span{
  font-family: simsun;
  font-size: 12px;
  font-weight: normal;
  padding-left: 15px;
}
.city img,.region img{
  position: absolute;
  top:50%;
  right:10px;
  transform: translate(0,-50%)
}
.city .up{
  width: 460px;
  position: absolute;
  left: -1px;
  top: 26px;
  padding: 10px;
  background: #fff;
  border: 1px solid #e3e3e3;
  margin: 0;
  z-index: 99;
}
.city.active .up{
  display: block;
}
.city .up span {
    color: #ff8200;
    display: inline-block;
    width: 25px;
    padding-left: 0;
}
.city .up a {
    color: #999;
    margin-left: 15px;
    font-size: 12px;
}
.search{
  display: inline-block;
}
.search-box{
  position: relative;
  overflow: hidden;
}
.search-icon{
  position: absolute;
  left: 0;
  top:50%;
  transform: translate(0,-50%);
}
.search-input{
  border: 2px solid #ff8200;  
  height: 36px;
  line-height: 36px;
  width: 423px;
  padding: 0 3px 0 30px;
  display: inline-block;
  outline: none;
}
.submit{
  display: inline-block;
  background: #ff8200;
  cursor: pointer;
  border: none;
  height: 38px;
  line-height: 38px;
  text-align: center;
  color: #fff;
  width: 88px;
  font-size: 14px;
  margin: -5px;
}
.searchBar{
  margin-top: 4px;
}
.searchBar a{
  font-family: MicroSoft YaHei;
  color: #9b9b9b;
  padding: 0 8px;
  font-size: 12px;
}
.city .up a:hover{
  color: #FF8200;
}
.region .up {
    position: absolute;
    width: 240px;
    left: -1px;
    padding: 10px;
    background: #fff;
    border: 1px solid #e3e3e3;
    top: 26px;
    margin: 0;
    z-index: 99;
}
.region .up a {
    margin: 0 5px;
    display: inline-block;
    color: #999;
    font-size: 12px;
}
.region .up a:hover{
  color: #FF8200;
}
.menu{
  background: #ff8200;
  height: 45px;
  width: 100%;
  min-width: 1400px;
}
.menu-cont{
  width: 1200px;
  margin: auto;

}
.menu-title{
  position: relative;
  width: 190px;
  background: #ffad01;
  height: 45px;
  line-height: 45px;
  padding-left: 50px;
  float: left;
}
.menu-title span{
  color:#fff;
}
.menu-title img{
  position: absolute;
  left:20px;
  top:50%;
  transform: translate(0 , -50%);
}
.menu ul{
  float: left;
  border-left: 6px solid #F26802;
  height: 45px;
  line-height: 45px;
}
.menu ul li{
  float: left;
  width: 120px;
  text-align: center;  
}
.menu ul li a{
  position: relative;
  display: inline-block;
  color:#fff;
  padding-left:5px;
}
.menu ul li a div{
  width: 5px ;
  background: #fff;
  display: none;
  height:18px;
  position:absolute;
  top:50%;
  left:-5px;
  transform: translate(0 , -50%);
}
.menu ul li a.active div{
  display: block;
}
.menu ul li a:hover div{
  display: block;
}
</style>
