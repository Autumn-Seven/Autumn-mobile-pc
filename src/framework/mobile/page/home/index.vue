<template>
  <div class="mobile">
    <!-- 头部 -->
    <van-nav-bar left-arrow class="header">
        <div slot="left" class="header-left">
            <div class="logo">
                <img src="~~/mobile/ico_logo.png" alt="">   
            </div>
            <div class="city" @click="cityFn">
                {{city}} <van-icon class="icon" name="location" />
            </div>
        </div>
    </van-nav-bar>
    <div class="banner">
        <!-- :autoplay="3000" -->
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in banner" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="inform">
        <div class="inform-icon">
            <van-icon name="volume-o" />
        </div>
        <div class="inform-swipe">
            <van-swipe :autoplay="4000" :show-indicators="false" style="height: 2rem;text-align:left;" vertical>
                <van-swipe-item>目前支持携号转网服务受理的营业厅列表</van-swipe-item>
                <van-swipe-item>关于调整17909业务范围的公告</van-swipe-item>
                <van-swipe-item>携号转网服务受理流程</van-swipe-item>
                <van-swipe-item>sdfsdfsd携号转网服务受理流程</van-swipe-item>
            </van-swipe>
        </div>
        <div class="inform-more">
            更多>
        </div>
    </div>
    <div class="nav">
        <van-grid :column-num="5">
        <van-grid-item
            v-for="value in 10"
            :key="value"
            icon="photo-o"
            text="文字"
        />
        </van-grid>
    </div>

    



    <van-action-sheet v-model="show">
      <van-area :area-list="areaList" :columns-num="2" @confirm="confirmFn"/>
    </van-action-sheet>
  </div>
</template>

<script>
import {address} from "../js/shenzhenAddress.js"


export default {
    data () {
        return {
            show: false,
            areaList:address,
            city:"城市",
            banner:[
                "../../../../../static/mobile/wg1108.jpg",
                "../../../../../static/mobile/wgsjb1118.jpg",
                "../../../../../static/mobile/lllls1112.jpg",
                "../../../../../static/mobile/plus12161.jpg",
                "../../../../../static/mobile/qywk1202.jpg",                
                "../../../../../static/mobile/yxkd1112.jpg"
            ]
        }
    },
   methods: {
        cityFn(){
        this.show = true;
        // Toast(item.name);
        },
        confirmFn(code){
        let name = "";
        this.city = code[1].name;
        this.show = false;
        // Bus.$emit('city', this.city)
        }
    }
}
</script>

<style scoped>
.nav{
    margin-top:.5rem;
}
















.van-cell{
    padding:0 !important;
}
.van-nav-bar__title{
    padding: 8px;
}
.van-nav-bar{
    height: 50px;
    line-height: 50px;
}
.header{
    background:#fb9700;
}
.header-left{
    width: 11rem;
}
.logo{
    width:5.5rem;
    height: 50px;
    line-height: 66px;
    float: left;
}
.logo img{
    width:5.5rem;
}
.input{
    padding:5px 10px !important;
    border-radius: 20px;
}
.city{
    color:#fff;
    line-height: 50px;
    margin-left:1rem;
    float:right;
}
.icon{
    color:#fff;
}
.van-nav-bar__title{
    padding:0;
    color:#fff;
    font-size: .8rem;
}
.banner{
    font-size: 0;
}
.banner img{
    width: 100%;
}
.inform{
    height: 2rem;
    line-height: 2rem;
    background: #fff;
}
.inform-icon{
    width: 3rem;
    height: 2rem;
    line-height: 2.4rem;
    float: left;
    font-size: 1.3rem;
    color:#FF7A05;
}
.inform-swipe{
    float: left;
    width: calc(100% - 6rem);
    color:#333333;
    font-size: .9rem;
}
.inform-more{
    width: 3rem;
    float: left;
    height: 2rem;
    font-size: .9rem;
    color:#909090;
}

</style>
