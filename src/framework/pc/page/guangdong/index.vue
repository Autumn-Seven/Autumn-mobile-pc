<template>
    <div>
        <div class="banner">
            <!-- 广告图 -->
            <!-- swiper -->
            <swiper :options="swiperBanner">
                <swiper-slide class="slide-1">
                    <a href="#">
                        <img src="~~/pc/cxll_1112.jpg" alt="">
                    </a>
                </swiper-slide>
                <swiper-slide class="slide-1">
                    <a href="#">
                        <img src="~~/pc/kdbnxy_03.06.jpg" alt="">
                    </a>
                </swiper-slide>
                <swiper-slide class="slide-1">
                    <a href="#">
                        <img src="~~/pc/plus1216.jpg" alt="">
                    </a>
                </swiper-slide>
                <swiper-slide class="slide-1">
                    <a href="#">
                        <img src="~~/pc/plus1216.jpg" alt="">
                    </a>
                </swiper-slide>
                <swiper-slide class="slide-1">
                    <a href="#">
                        <img src="~~/pc/wg1108.jpg" alt="">
                    </a>
                </swiper-slide>
                <swiper-slide class="slide-1">
                    <a href="#">
                        <img src="~~/pc/wghdb1115.jpg" alt="">
                    </a>
                </swiper-slide>
                <swiper-slide class="slide-1">
                    <a href="#">
                        <img src="~~/pc/xjfdyt1107.jpg" alt="">
                    </a>
                </swiper-slide>
                <swiper-slide class="slide-1">
                    <a href="#">
                        <img src="~~/pc/yxkd1016.jpg" alt="">
                    </a>
                </swiper-slide>
                <!-- <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
            </swiper>

            <div class="banner-menu">
                <div class="menu-group">
                    <div class="menu-list" @mousemove="navMouse(1)" @mouseout="navOut()" >
                        <div class="menu-list-img">
                            <img src="~~/pc/ico01.png" alt="">
                        </div>
                        <span>
                            手机/配件
                        </span>    
                        <div class="menu-list-nav" v-show="navShow==1">
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    1
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="menu-list" @mousemove="navMouse(2)" @mouseout="navOut()" >
                        <div class="menu-list-img">
                            <img src="~~/pc/ico02.png" alt="">
                        </div>
                        <span>
                            套餐/靓号
                        </span>      
                        <div class="menu-list-nav" v-show="navShow==2">
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    2
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                        </div>                       
                    </div>
                    <div class="menu-list" @mousemove="navMouse(3)" @mouseout="navOut()" >
                        <div class="menu-list-img">
                            <img src="~~/pc/ico03.png" alt="">
                        </div>
                        <span>
                            宽带
                        </span>       
                        <div class="menu-list-nav" v-show="navShow==3">
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    3
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                        </div>                       
                    </div>
                    <div class="menu-list" @mousemove="navMouse(4)" @mouseout="navOut()" >
                        <div class="menu-list-img">
                            <img src="~~/pc/ico04.png" alt="">
                        </div>
                        <span>
                            智能
                        </span>       
                        <div class="menu-list-nav" v-show="navShow==4">
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    4
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                        </div>                       
                    </div>
                    <div class="menu-list" @mousemove="navMouse(5)" @mouseout="navOut()">
                        <div class="menu-list-img">
                            <img src="~~/pc/ico05.png" alt="">
                        </div>
                        <span>
                            话费
                        </span>    
                        <div class="menu-list-nav" v-show="navShow==5">
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    5
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                            <div class="nav-list">
                                <div class="nav-list-title">本次热销</div>
                                <div class="nav-list-cont">
                                    <a href="#">华为麦芒7</a> | 
                                    <a href="#">华为 Mate20</a> | 
                                    <a href="#">领跑开学季 流量享不停</a> | 
                                    <a href="#">套餐/靓号</a> | 
                                    <a href="#">宽带</a> | 
                                    <a href="#">智能</a> | 
                                </div>
                            </div>
                        </div>                          
                    </div>                                       
                </div>
                <div class="topup">
                    <div class="topup-title">充值中心</div>
                    <div class="topup-cont">
                        <div class="topup-cont-title">充话费</div>
                        <div class="topup-cont-input">
                            <input type="text" placeholder="请输入手机号" >
                        </div>
                        <div class="topup-cont-cont">
                            <div>10元</div>
                            <div>20元</div>
                            <div>50元</div>
                            <div>100元</div>
                            <div>200元</div>
                            <div>500元</div>
                        </div>

                        <div class="topup-cont-title">宽带续费</div>
                        <div class="topup-cont-input">
                            <input type="text" placeholder="请输入身份证" >
                        </div>
                        <div class="topup-cont-btn">
                            查询办理
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="hot1 content-hot">
                <div class="hot1-left">
                    <img src="~~/pc/clxx0927.jpg" alt="">
                </div>
                <!-- swiper -->
                <div class="hot1-right">
                    <swiper :options="swiperHot1">
                        <swiper-slide>
                            <div class="hot1-img-group">
                                <div>
                                   <img src="~~/pc/cxtc0923.png" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/cxtc09231.png" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/cxtc09232.png" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/cxtc09233.png" alt="">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="hot1-img-group">
                                <div>
                                   <img src="~~/pc/yxkd0612.jpg" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/yxkd06121.jpg" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/yxkd06122.jpg" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/yxkd_0612.jpg" alt="">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="hot1-img-group">
                                <div>
                                   <img src="~~/pc/fk_1129.jpg" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/fk_1130.jpg" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/cxsj0731.jpg" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/jyz_0731.jpg" alt="">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="hot1-img-group">
                                <div>
                                   <img src="~~/pc/yxkd0612.jpg" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/yxkd06121.jpg" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/yxkd06122.jpg" alt="">
                                </div>
                                <div>
                                    <img src="~~/pc/yxkd_0612.jpg" alt="">
                                </div>
                            </div>
                        </swiper-slide>

                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
            <!-- 楼层区 -->
            <div class="hot2 hot-one content-hot">
                <div class="content-hot-title">
                    <div class="min-title">快乐e家 /</div>
                    <div class="minor-title">爱自己,爱家庭,爱生活</div>
                </div>
                <div class="hot-left">
                    <div class="hot-left1">
                        <img src="~~/pc/title.png" alt="">  
                    </div>
                    <div class="hot-left2">
                        <img src="~~/pc/jkcxll0821.png" alt="">  
                    </div>
                    <div class="hot-left3">
                        <div>畅享99元套餐</div>
                        <div>畅享199元套餐</div>
                        <div>手机副卡</div>                          
                    </div>
                </div>
                <div class="hot-swiper">
                    <!-- swiper -->
                    <swiper :options="swiperHot">
                        <swiper-slide>
                            <img src="~~/pc/cxtc0402.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="~~/pc/cxtc0402.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="~~/pc/cxtc0402.jpg" alt="">
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="hot-right">
                    <div class="hot-right1">
                        <div class="hot-right-top">
                            <div class="hot-title">畅享20G</div>
                            <div class="hot-sell1">通用流量</div>
                            <div class="hot-sell2">立即购买</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0909.png" alt="">
                            </div>
                        </div>
                        <div class="hot-right-bottom">
                            <div class="hot-title">畅享流量</div>
                            <div class="hot-sell2">20G通用流量</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0821.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hot-right2">
                        <div class="hot-right-top">
                            <div class="hot-title">畅享20G</div>
                            <div class="hot-sell1">通用流量</div>
                            <div class="hot-sell2">立即购买</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0909.png" alt="">
                            </div>
                        </div>
                        <div class="hot-right-bottom">
                            <div class="hot-title">畅享流量</div>
                            <div class="hot-sell2">20G通用流量</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0821.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hot-right3">
                        <div class="hot-right-top">
                            <div class="hot-title">畅享20G</div>
                            <div class="hot-sell1">通用流量</div>
                            <div class="hot-sell2">立即购买</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0909.png" alt="">
                            </div>
                        </div>
                        <div class="hot-right-bottom">
                            <div class="hot-title">畅享流量</div>
                            <div class="hot-sell2">20G通用流量</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0821.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hot2 hot-tow content-hot">
                <div class="content-hot-title">
                    <div class="min-title">极客炫耀 /</div>
                    <div class="minor-title">好宝贝,够任性,就是要炫耀</div>
                </div>
                <div class="hot-left">
                    <div class="hot-left1">
                        <img src="~~/pc/title.png" alt="">  
                    </div>
                    <div class="hot-left2">
                        <img src="~~/pc/jkcxll0821.png" alt="">  
                    </div>
                    <div class="hot-left3">
                        <div>畅享99元套餐</div>
                        <div>畅享199元套餐</div>
                        <div>手机副卡</div>                          
                    </div>
                </div>
                <div class="hot-swiper">
                    <!-- swiper -->
                    <swiper :options="swiperHot">
                        <swiper-slide>
                            <img src="~~/pc/cxll_11121.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="~~/pc/yxkd1229.jpg" alt="">
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="hot-right">
                    <div class="hot-right1">
                        <div class="hot-right-top">
                            <div class="hot-title">畅享20G</div>
                            <div class="hot-sell1">通用流量</div>
                            <div class="hot-sell2">立即购买</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0909.png" alt="">
                            </div>
                        </div>
                        <div class="hot-right-bottom">
                            <div class="hot-title">畅享流量</div>
                            <div class="hot-sell2">20G通用流量</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0821.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hot-right2">
                        <div class="hot-right-top">
                            <div class="hot-title">畅享20G</div>
                            <div class="hot-sell1">通用流量</div>
                            <div class="hot-sell2">立即购买</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0909.png" alt="">
                            </div>
                        </div>
                        <div class="hot-right-bottom">
                            <div class="hot-title">畅享流量</div>
                            <div class="hot-sell2">20G通用流量</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0821.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hot-right3">
                        <div class="hot-right-top">
                            <div class="hot-title">畅享20G</div>
                            <div class="hot-sell1">通用流量</div>
                            <div class="hot-sell2">立即购买</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0909.png" alt="">
                            </div>
                        </div>
                        <div class="hot-right-bottom">
                            <div class="hot-title">畅享流量</div>
                            <div class="hot-sell2">20G通用流量</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0821.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hot2 hot-three content-hot">
                <div class="content-hot-title">
                    <div class="min-title">出行必备 /</div>
                    <div class="minor-title">旅行,户外,健身,一个都不能少</div>
                </div>
                <div class="hot-left">
                    <div class="hot-left1">
                        <img src="~~/pc/title.png" alt="">  
                    </div>
                    <div class="hot-left2">
                        <img src="~~/pc/jkcxll0821.png" alt="">  
                    </div>
                    <div class="hot-left3">
                        <div>畅享99元套餐</div>
                        <div>畅享199元套餐</div>
                        <div>手机副卡</div>                          
                    </div>
                </div>
                <div class="hot-swiper">
                    <!-- swiper -->
                    <swiper :options="swiperHot">
                        <swiper-slide>
                            <img src="~~/pc/wg_1115.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="~~/pc/iptv1206.jpg" alt="">
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="hot-right">
                    <div class="hot-right1">
                        <div class="hot-right-top">
                            <div class="hot-title">畅享20G</div>
                            <div class="hot-sell1">通用流量</div>
                            <div class="hot-sell2">立即购买</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0909.png" alt="">
                            </div>
                        </div>
                        <div class="hot-right-bottom">
                            <div class="hot-title">畅享流量</div>
                            <div class="hot-sell2">20G通用流量</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0821.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hot-right2">
                        <div class="hot-right-top">
                            <div class="hot-title">畅享20G</div>
                            <div class="hot-sell1">通用流量</div>
                            <div class="hot-sell2">立即购买</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0909.png" alt="">
                            </div>
                        </div>
                        <div class="hot-right-bottom">
                            <div class="hot-title">畅享流量</div>
                            <div class="hot-sell2">20G通用流量</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0821.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="hot-right3">
                        <div class="hot-right-top">
                            <div class="hot-title">畅享20G</div>
                            <div class="hot-sell1">通用流量</div>
                            <div class="hot-sell2">立即购买</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0909.png" alt="">
                            </div>
                        </div>
                        <div class="hot-right-bottom">
                            <div class="hot-title">畅享流量</div>
                            <div class="hot-sell2">20G通用流量</div>
                            <div class="hot-sell-img">
                                <img src="~~/pc/cxll0821.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 行业新闻 -->
            <div class="move">
                <div class="content-hot-title">
                    <div class="min-title">精彩分享 /</div>
                    <div class="minor-title">好东西,就是要分享</div>
                </div>
                <div class="news">
                    <div class="move-title">行业新闻</div>
                    <div class="news-img">
                        <img src="~~/pc/cs_10.jpg" alt="">
                    </div>
                    <div class="news-cont">
                        <div class="news-list" @mouseover="newMouseover(0)">
                            <div class="news-list-title">展览搭建不能空有其表</div>
                            <div class="news-list-cont" v-show="news==0">
                                参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的实打实大苏打阿达大撒大苏打
                            </div>
                        </div>
                        <div class="news-list"  @mouseover="newMouseover(1)">
                            <div class="news-list-title">展会设计两大亮点</div>
                            <div class="news-list-cont" v-show="news==1">
                                参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的
                            </div>
                        </div>
                        <div class="news-list"  @mouseover="newMouseover(2)">
                            <div class="news-list-title">展厅装修都应该走哪些流程？</div>
                            <div class="news-list-cont" v-show="news==2">
                                参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的
                            </div>
                        </div>
                        <div class="news-list"  @mouseover="newMouseover(3)">
                            <div class="news-list-title">如何选择满意的展览搭建公司</div>
                            <div class="news-list-cont" v-show="news==3">
                                参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的
                            </div>
                        </div>
                        <div class="news-list"  @mouseover="newMouseover(4)">
                            <div class="news-list-title">展台设计中如何进行颜色搭配</div>
                            <div class="news-list-cont" v-show="news==4">
                                参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
                <div class="faq">
                    <div class="move-title">常见问题</div>
                    <div class="faq-cont">                        
                        <swiper :options="swiperMove">
                            <swiper-slide>
                                <div class="faq-list">
                                    <div class="faq-list-title">展览搭建不能空有其表</div>
                                    <div class="faq-list-cont">
                                        参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的实打实大苏打阿达大...
                                    </div>
                                    <div class="list-line"></div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="faq-list">
                                    <div class="faq-list-title">企业参展展会设计该注意有3个方</div>
                                    <div class="faq-list-cont">
                                        参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的实打实大苏打阿达大...
                                    </div>
                                    <div class="list-line"></div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="faq-list">
                                    <div class="faq-list-title">展厅设计施工安全管理哪家做的好</div>
                                    <div class="faq-list-cont">
                                        参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的实打实大苏打阿达大...
                                    </div>
                                    <div class="list-line"></div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="faq-list">
                                    <div class="faq-list-title">展厅设计施工安全管理哪家做的好</div>
                                    <div class="faq-list-cont">
                                        参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的实打实大苏打阿达大...
                                    </div>
                                    <div class="list-line"></div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="faq-list">
                                    <div class="faq-list-title">展览搭建不能空有其表</div>
                                    <div class="faq-list-cont">
                                        参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的实打实大苏打阿达大...
                                    </div>
                                    <div class="list-line"></div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="faq-list">
                                    <div class="faq-list-title">展览搭建不能空有其表</div>
                                    <div class="faq-list-cont">
                                        参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的实打实大苏打阿达大...
                                    </div>
                                    <div class="list-line"></div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="faq-list">
                                    <div class="faq-list-title">展览搭建不能空有其表</div>
                                    <div class="faq-list-cont">
                                        参见过展会的企业应该都知道，在企业定好展台之后就需要开始着手与展览设计大师傅似的实打实大苏打阿达大...
                                    </div>
                                    <div class="list-line"></div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        navShow:0, //显示子导航
        news:0, //新闻内容显示
        swiperBanner: {
          spaceBetween: 30,
          effect: 'fade',
        //   autoplay:true,
          autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          loop : true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },

        swiperHot1: {
          slidesPerView: 2,
          spaceBetween: 0,
          autoplay: {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          loop : true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },

        swiperHot: {
            effect : 'cube',
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 100,
                shadowScale: 0.6
            },
            loop : true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        },
        // 常见问题
        swiperMove: {
          // spaceBetween: 30,
          // centeredSlides: true,
          slidesPerView: 4,
          autoplay: {
            delay: 3500,
            // disableOnInteraction: false
          },
          direction: 'vertical',
          loop : true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    methods:{
        navMouse(show){
           this.navShow = show; 
        },
        navOut(){
            this.navShow = 0;
        },
        newMouseover(show){
            this.news = show;
        }
    }
  }
</script>

<style scoped>
.content-hot-title{
    overflow: hidden;
    width: 100%;
    padding:10px 0;
    
}
.min-title{
    font-size: 30px;
    float: left;
    color:#666666;
}
.minor-title{
    font-size: 14px;
    float: left;
    padding:15px 0 0 15px;
    color:#666666;
}

.content{
    width: 100%;
}
.swiper-container{
    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
    --swiper-navigation-color: #fff;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
}
.banner{
    position: relative;
    width: 100%;
    min-width: 1400px;
}
.banner .swiper-container {
    width: 100%;
    /* height: 300px; */
}  
.banner .swiper-container {
    width: 100%;
    height: 421px;
    min-width: 1400px;
    overflow: hidden;
} 
.banner .swiper-container img{
    width: 100%;
    height: 421px;
} 
.banner-menu{
    width: 1200px;
    margin:auto;
    position: absolute;
    top:0;
    left: 50%;
    transform: translate(-50% , 0);
    z-index: 98;
}
.menu-group{
    width: 190px;
    position: absolute;
    left: 0;
    top: 0;
    background:#fff;
    height: 421px;
}
.menu-list{
    height:84px;
    line-height: 84px;
    padding-left: 80px;
    text-align: left;
    color:#6D6D6D;
    cursor: pointer;
    background: #FAFAFA;
    position: relative;
}
.menu-list:hover{
    background: #fff;
    
}
.menu-list:hover span{
    color:#FFAE00;
}
.menu-list:not(:last-child){
    border-bottom: 1px solid #E8E8E8;
}
.menu-list .menu-list-img{
    width: 80px;
    height:84px;
    position: absolute;
    left: 0;
    top:0;
}
.menu-list img{
    display: block;
    position: absolute;
    left: 50%;
    top:50%;
    transform:translate(-50% , -50%);
    /* width: 100%; */
}
.topup {
    position: absolute;
    right: 0;
    width: 224px;
    height: 421px;
    background: #fff;
}
.topup-title{
   text-align: center;
   color:#FF8200;
   height: 50px;
   line-height: 50px; 
}
.topup-cont-title{
    font-size: 13px;
    padding-left:20px;
    color:#ff9425;
}
.topup-cont-cont{
    padding:10px 20px;
    overflow: hidden;
    width: 100%;
}
.topup-cont-cont div{
    float: left;
    width: 80px;
    height:30px;
    line-height: 30px;
    border:1px solid #ff9425;
    text-align: center;
    color:#ff9425;
    border-radius: px;
    margin:6px;
    cursor: pointer;
}
.topup-cont-input{
    padding:10px 20px;
}
.topup-cont-input input{
    width: 100%;
    font-size: 12px;
    height:30px;
    line-height: 30px;
    padding:0 10px;
}
.topup-cont-btn{
    font-size: 13px;
    width: 160px;
    height:30px;
    line-height: 30px;
    border-radius: 5px;
    margin: auto;
    text-align: center;
    background: #FF8201;
    color:#fff;
    cursor: pointer;
    margin-top:10px;
}
.menu-list-nav{
    position: fixed;
    height: 421px;
    width: 780px;
    background: #fff;
    top: 0;
    left:190px;
    overflow-y: auto;
}
.nav-list{
    min-height: 30px;
    border-bottom: #6D6D6D;
    line-height: 30px;
    border-bottom: 1px solid #d7d7d7;
   
}
.nav-list-title{
    display: inline-block;
    font-size: 12px;
    width: 90px;
    text-align: right;
    font-weight: bold;
    vertical-align:top;
}
.nav-list-cont{
    display: inline-block;
    font-size: 12px;
    width:calc(100% - 100px);
    padding-left:10px;
}
.nav-list-cont a{
    padding:0 5px;
}
.nav-list-cont a:hover{
    color:#FFAE00;
}
.content-hot{
    width: 1200px;
    margin: auto;    
    overflow: hidden;
    margin-top: 40px;
}
.hot1 .hot1-left{
    width: 190px;
    float: left;
    height: 218px;
}
.hot1 .hot1-left img{
    height: 100%;
    width: 100%;
}
.hot1-img-group{
    overflow: hidden;
    width: 100%;
}
.hot1-img-group div{
    float: left;
    width: calc(50% - 2px);
    height:108px;    
    margin-bottom: 2px;
    font-size: 0;
}
.hot1-img-group div:nth-child(odd){
    margin-right: 2px;
}
.hot1-img-group div img{
    width: 100%;
    height: 100%;
}
.hot-one .hot-left{
    background: #FEDA60;
}
.hot-tow .hot-left{
    background: #FF9767;
}
.hot-three .hot-left{
    background: #9DE090;
}
.hot-left{
    width: 190px;
    float: left;
    height: 420px;
}
.hot-left1{
    width: 100%;
    height:100px;
}
.hot-left1 img{
    width: 100%;
    height:100%; 
}
.hot-left2{
    width: 190px;
    height:190px;
    padding:10px;
    border-bottom: 1px solid #fff;
}
.hot-left2 img{
    width: 100%;
    height:100%; 
}
.hot-left3{
    overflow: hidden;
    padding-left:10px;
    padding-top: 10px;
}
.hot-left3 div{
    float: left;
    font-size: 12px;
    color:#fff;
    width: 85px;
    font-weight: bold;
    height:20px;
    line-height: 20px;
    margin-top:5px;
    cursor: pointer;
}
.hot-swiper{
    float: left;
}
.hot-swiper .swiper-container{
    width: 402px;
    height:420px;
}
.hot-swiper img{
    width: 100%;
    height:100%;
}
.hot-right{
    float: left;
    height: 420px;
    text-align: center;
    border-left:1px solid #E4E4E4;
}
.hot-right>div{
    float: left;
    width: 202px;
}
.hot-title{
    padding-top: 15px;
    font-size: 15px;
    font-weight: 600;
    color:#777777;
    line-height: 22px;
}
.hot-sell1{
    font-size: 13px;
    color:#777777;
    line-height: 22px;
}
.hot-sell2{
    font-size: 16px;
    color:#777777;
    line-height: 22px;
}
.hot-right-top .hot-sell-img{
    padding-top: 10px;
}
.hot-right-top .hot-sell-img img{
    width: 140px;
    height: 135px;
}
.hot-right-top{
    height:254px;
    border-top:1px solid #E4E4E4;
    border-right: 1px solid #E4E4E4;
}
.hot-right-bottom{
    height:166px;
    border-top:1px solid #E4E4E4;
    border-right: 1px solid #E4E4E4;
    border-bottom: 1px solid #E4E4E4;
}
.hot-right-bottom .hot-sell-img img{
    width: 130px;
    height: 95px;    
}
.move{
    width: 1200px;
    margin: 50px auto 0;   
    overflow: hidden; 
}
.news,.faq{
    width: 580px;
    border:1px solid #F0F0F0;
    height: 420px;
    padding:0 20px 20px 20px;
    float: left;
}
.move-title{
    padding-top:20px;
    border-top: 3px solid #C6161D;
    float: left;
    margin-top:-1px;
}
.news-img{
    width: 100%;
    float: left;
}
.news-img img{
    width: 100%;
    height:120px;
    padding:20px 0;
}
.news-cont{
    float: left;
    height: 250px;
    overflow-y: auto;
}
.news-list{
    border-bottom: 1px solid #F0F0F0;
    cursor: pointer;
}
.news-list-title{
    font-weight: 600;
    font-size: 15px;
    padding:8px 0;
}
.news-list-cont{
    font-size: 13px;
    line-height: 18px;
    padding:0 0 8px 0;
}
.line{
    width: 38px;
    float: left;
    height: 100px;
}
.move .swiper-container {
    width: 100%;
    height: 340px;
} 
.faq-list{
    cursor: pointer;
}
.faq-cont{
    padding:10px 20px;
    float: left;
}
.faq-cont .faq-list-title{
    font-size: 15px;
    color:#F0783D;
    font-weight: 600;
    padding:5px 0;
}
.faq-list-cont{
    font-size: 13px;
    color:#3A3A3A;
    line-height: 20px;
}
.list-line{
    width: 100%;
    height:20px;
}
</style>