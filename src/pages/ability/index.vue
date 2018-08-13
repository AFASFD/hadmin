<template>
  <div class="ability">
        <section>
            <img src="../../assets/vv.jpg" alt="">
            <p>您还未接入 OPEN API v3.0，您可以 <el-button type="primary">提交申请接入</el-button>或<el-button type="success">下载 OPEN API 帮助文档</el-button></p>
        </section>
        <section>
            <h3 class="title">
                <img src="../../assets/iclc.png" alt="">
                接入流程
            </h3>
            <img src="../../assets/vv4.png" alt="">
        </section>
        <section>
            <h3 class="title">
                <img src="../../assets/icjj.png" alt="">
                简介
            </h3>
            <p class="dsp">物联云平台提供API接口与企业应用进行对接集成，实现能力开放。“物联云”3.0版本共提供API接口48个，包括资产管理、资费计划、账务缴费等基础服务功能，支持实时查询接口和业务办理接口两种接口模式。</p>
            <ul>
                <li class="clearfix">
                    <div class="left">
                        <img src="../../assets/v1.png" alt="">
                    </div>
                    <div class="right">
                        <h3>
                            资产管理（共 22 个接口）
                        </h3>
                        <p>1、号码管理（ 5 个接口）：提供集团及成员的基本信息查询，包括企业成员数、号码开户信息、产品订购信息等。提供单个、批量、全量三类接口。</p>
                        <p>2、状态管理（ 7 个接口）：以号码为维度，提供企业成员的生命周期状态管理功能，包括状态查询、变更等。</p>
                        <p>3、功能管理（ 10 个接口）：以号码为维度，提供企业成员的功能状态管理功能，包括上网/语音/短信功能的查询、变更等。</p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="left">
                        <img src="../../assets/v2.png" alt="">
                    </div>
                    <div class="right">
                        <h3>
                            资费计划（共 21 个接口）
                        </h3>
                        <p>1、套餐管理（ 4 个接口）：以号码为维度，提供套餐办理功能，包括套餐订购、变更、退订等。</p>
                        <p>2、流量信息查询（	5 个接口）：以号码或集团为维度，提供月流量、日流量、历史月流量、历史日流量，支持分套餐查询已使用流量和剩余流量。</p>
                        <p>3、流量共享管理（ 6 个接口）：以集团为维度，提供集团流量共享产品订购信息、成员信息查询、流量信息查询功能。</p>
                        <p>4、流量池管理（ 6 个接口）：以集团为维度，提供集团流量池产品订购信息、成员信息查询、流量信息查询功能。</p>
                    </div>
                </li>
                <li class="clearfix">
                    <div class="left">
                        <img src="../../assets/v3.png" alt="">
                    </div>
                    <div class="right">
                        <h3>
                            账务缴费（共 5 个接口）
                        </h3>
                        <p>1、企业账单（ 1 个接口）：查询集团历史月账单信息查询。</p>
                        <p>2、号码账单（ 4 个接口）：以号码为维度，提供历史月账单、实时余额查询。</p>
                    </div>
                </li>
            </ul>
        </section>
  </div>
</template>

<script>
export default {
  name: "Ability",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.ability {
  padding: 15px;
  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
  .title {
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    line-height: 28px;
    img {
      vertical-align: middle;
      margin-bottom: 0;
    }
  }
  .dsp {
    width: 95%;
    text-indent: 2em;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 22px;
    font-size: 14px;
  }
  ul {
    li {
      background-color: #f4f4f4;
      padding: 10px;
      margin-bottom: 10px;
      .left {
        float: left;
        width: 120px;
        height: 120px;
        margin-right: 15px;
        img {
          vertical-align: middle;
        }
      }
      .right {
        float: left;
        height: 120px;
        width: 85%;
        h3 {
          line-height: 25px;
          color: #000;
          font-size: 18px;
        }
        p {
          margin-top: 5px;
          line-height: 14px;
          color: #666;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
