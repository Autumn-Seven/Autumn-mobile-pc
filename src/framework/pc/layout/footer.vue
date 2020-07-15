<template>
  <div class="footer">

    <div class="guarantee">
      <div class="guarantee-all">
        <div>
          <div class="guarantee-img"> 
            <img src="~~/pc/ft_01.png" alt="">
          </div>
          <div class="guarantee-cont">
            <div class="guarantee-title">闪电响应</div>
            <div class="guarantee-details">24小时内快速装机</div>
          </div>
        </div>
        <div>
          <div class="guarantee-img">
            <img src="~~/pc/ft_02.png" alt="">
          </div>
          <div class="guarantee-cont">
            <div class="guarantee-title">正规渠道</div>
            <div class="guarantee-details">正品承诺，假一赔十</div>
          </div>
        </div>                   
        <div>
          <div class="guarantee-img">
            <img src="~~/pc/ft_03.png" alt="">
          </div>
          <div class="guarantee-cont">
            <div class="guarantee-title">品类齐全</div>
            <div class="guarantee-details">总有一款适合你</div>
          </div>
        </div>          
        <div>
          <div class="guarantee-img">
            <img src="~~/pc/ft_04.png" alt="">
          </div>
          <div class="guarantee-cont">
            <div class="guarantee-title">安全保障</div>
            <div class="guarantee-details">诚信商家，安全保障</div>
          </div>
        </div>
        <div>
          <div class="guarantee-img">
            <img src="~~/pc/ft_05.png" alt="">
          </div>
          <div class="guarantee-cont">
            <div class="guarantee-title">闪电响应</div>
            <div class="guarantee-details">24小时内快速装机</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-nav">
      <div class="footer-logo">
        <img src="~~/pc/logo189.png" alt="">
      </div>
      <div class="footer-list">
        <div>
          <div class="footer-list-title">新手指南</div>
          <div class="footer-list-nav">
            <div>下单流程</div>
            <div>实名认证</div>
          </div>
        </div>
        <div>
          <div class="footer-list-title">费用支付</div>
          <div class="footer-list-nav">
            <div>现金缴费</div>
            <div>在线支付</div>
          </div>
        </div>
        <div>
          <div class="footer-list-title">安装配送</div>
          <div class="footer-list-nav">
            <div>订单查询</div>
            <div>订单时效</div>
            <div>验货全收</div>
          </div>
        </div>
        <div>
          <div class="footer-list-title">售后服务</div>
          <div class="footer-list-nav">
            <div>退还政策</div>
            <div>保修服务</div>
            <div>退款时效</div>
          </div>
        </div>
      </div>
      <div class="code">
        <img src="~~/pc/xcx1014.png" alt="">
      </div>
    </div>
  
    <div class="jurisdiction"> 
      <div>深圳硕软技术有限公司 版权所有 | <span>粤ICP备12013458号</span> </div>
      <div class="jurisdiction-logo">
        <img src="~~/pc/cert_1.gif" alt="">
        <img src="~~/pc/cert_2.gif" alt="">
        <img src="~~/pc/cert_3.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
.footer{
  width: 100%;
  min-width: 1400px;
}
.guarantee{
  width: 1200px;
  margin: auto;
  overflow: hidden;
  padding:50px 0;
}
.guarantee-all{
  width: 1100px;
  margin: auto;
  overflow: hidden;
}
.guarantee-all>div{
  float: left;
  width: 220px;  
}
/* .guarantee>div:not(:last-child){
  margin-right: 36px;
} */
.guarantee-img{
  width: 55px;
  height: 55px;
  float: left;
}
.guarantee-img img{
  width: 100%;
  height: 100%;
}
.guarantee-cont{
  float: left;
  padding:7px 5px; 
}
.guarantee-title{
  font-size: 16px
}
.guarantee-details{
  font-size: 14px;
}
.footer-nav{
  width: 1200px;
  margin: auto;
  border-top:1px solid #E6E6E6;
  border-bottom:1px solid #E6E6E6;
  padding:20px 0; 
  overflow: hidden;
  
}
.footer-logo{
  float: left;
}
.footer-list{
  float: left;
  padding:0 40px;
}
.footer-list>div{
  float: left;
  width: 140px;
}
.footer-list-title{
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  line-height: 30px;
}
.footer-list-nav{
  font-size: 13px;
  line-height: 30px;
}
.code{
  width: 115px;
  height:150px;
  float: left;
}
.jurisdiction{
  width: 100%;
  min-width: 1400px;
  padding:20px 0;
}
.jurisdiction div{
  width: 1200px;
  text-align: center;
  margin: auto;
  padding:10px 0;
}
.jurisdiction .jurisdiction-logo{
  text-align: center;
  padding:20px 0 50px 0;
}
</style>