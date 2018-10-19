<template>
  <div class="numberManagement">
    <div class="edit-wrap clearfix" :class="{active: isHidden}">
      <div class="edit">
          <h1 class="clearfix">号码查询<span class="close" @click.stop="hiddenEdit">X</span></h1>
          <div class="cc">  
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="综合信息" name="first">
                    <h3 class="title">
                        <img src="../../assets/m03.png" alt="">
                        卡号信息
                    </h3>
                    <ul class="clearfix">
                      <li><span class='left'>卡号:</span><span>{{currentData.msisdn}}</span></li>
                      <li><span class='left'>ICCID:</span><span>{{currentData.iccid}}</span></li>
                      <li><span class='left'>生命周期:</span><span>{{currentData.status}}</span></li>
                      <li><span class='left'>IMEI:</span><span>{{currentData.imei}}</span></li>
                      <li><span class='left'>IMSI:</span><span>{{currentData.imsi}}</span></li>
                      <li><span class='left'>开户时间:</span><span>{{currentData.openTime}}</span></li>
                      <li><span class='left'>变更时间:</span><span>{{currentData.statusTime}}</span></li>
                    </ul>
                    <h3 class="title">
                        <img src="../../assets/m04.png" alt="">
                        功能状态
                    </h3>
                    <ul class="clearfix">
                      <li><span class='left'>GPRS功能:</span><span>{{currentData.msisdn}}</span></li>
                      <li><span class='left'>短信功能:</span><span>{{currentData.iccid}}</span></li>
                      <li><span class='left'>语音功能:</span><span>{{currentData.status}}</span></li>
                    </ul>
                    <h3 class="title">
                        <img src="../../assets/option_log_list_icon.png" alt="">
                        资费计划
                    </h3>
                    <p class="balance">可用余额: {{currentData.iccid}} 元</p>
                    <el-table
                      :data="tableData"
                      border
                      style="width: 100%">
                      <el-table-column
                        prop=""
                        label="资费类型"
                        width="130"
                        :formatter="formatStr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="本月总套餐资源"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="本月已用资源"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="本月剩余套餐内资源"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="本月套餐外使用资源"
                        :formatter="formatNbr">
                      </el-table-column>
                    </el-table>
                    <h3 class="title">
                        <img src="../../assets/member_lib.png" alt="">
                        用量套餐
                    </h3>
                    <el-tabs v-model="activeName2" type="card">
                        <el-tab-pane label="流量" name="first-child">
                          <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                              prop=""
                              label="序号"
                              width="50"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐名称"
                              :formatter="formatStr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐内免费资源（MB）"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="已用资源（MB）"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="剩余资源（MB）"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="APN名称"
                              :formatter="formatStr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐生效时间"
                              :formatter="formatStr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐失效时间"
                              :formatter="formatStr">
                            </el-table-column>
                          </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="短信" name="second-child">
                          <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                              prop=""
                              label="序号"
                              width="50"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="编号"
                              width="50"
                              :formatter="formatStr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐名称"
                              width="150"
                              :formatter="formatStr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="总资源(条)"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="已用"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="剩余"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐生效时间"
                              :formatter="formatStr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐失效时间"
                              :formatter="formatStr">
                            </el-table-column>
                          </el-table>
                        </el-tab-pane>
                        <el-tab-pane label="语音" name="third-child">
                          <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                              prop=""
                              label="序号"
                              width="50"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="编号"
                              width="50"
                              :formatter="formatStr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐名称"
                              width="150"
                              :formatter="formatStr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="总资源(Min)"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="已用"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="剩余"
                              :formatter="formatNbr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐生效时间"
                              :formatter="formatStr">
                            </el-table-column>
                            <el-table-column
                              prop=""
                              label="套餐失效时间"
                              :formatter="formatStr">
                            </el-table-column>
                          </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="流量信息" name="second">
                    <h3 class="title">
                        <img src="../../assets/member_lib.png" alt="">
                        成员流量使用趋势
                    </h3>
                    <div id="flowMessage" style="width: 100%;height:300px;"></div>
                    <el-table
                      :data="tableData"
                      border
                      style="width: 100%">
                      <el-table-column
                        prop=""
                        label="月份"
                        width="70"
                        :formatter="formatStr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="通用APN已使用总流量"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="专用APN1已使用总流量"
                        :formatter="formatNbr">
                      </el-table-column>
                      <!-- <el-table-column
                        prop=""
                        label="专用APN2已使用总流量"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="专用APN3已使用总流量"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="专用APN4已使用总流量"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="专用APN5已使用总流量"
                        :formatter="formatNbr">
                      </el-table-column> -->
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="短信信息" name="third">
                    <h3 class="title">
                        <img src="../../assets/member_lib.png" alt="">
                        近六个月短信发送趋势
                    </h3>
                    <div id="SMS" style="width: 100%;height:300px;"></div>
                    <el-table
                      :data="tableData"
                      border
                      style="width: 100%">
                      <el-table-column
                        prop=""
                        label="月份"
                        :formatter="formatStr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="短信总条数"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="已发送短信条数"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="剩余短信条数"
                        :formatter="formatNbr">
                      </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="语音信息" name="fourth">
                    <h3 class="title">
                        <img src="../../assets/member_lib.png" alt="">
                        近六个月语音时长趋势（分钟）
                    </h3>
                    <div id="voiceMessage" style="width: 100%;height:300px;"></div>
                    <el-table
                      :data="tableData"
                      border
                      style="width: 100%">
                      <el-table-column
                        prop=""
                        label="月份"
                        :formatter="formatStr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="套餐通话总量"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="本月呼出时长"
                        :formatter="formatNbr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="本月呼入时长"
                        :formatter="formatNbr">
                      </el-table-column>
                    </el-table>
                </el-tab-pane>
                <!-- <el-tab-pane label="APN详情" name="fifth">
                    <h3 class="title">
                        <img src="../../assets/icongl.png" alt="">
                        APN详情
                    </h3>
                    <el-table
                      :data="tableData"
                      border
                      style="width: 100%">
                      <el-table-column
                        prop=""
                        label="APN名称"
                        :formatter="formatStr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="APN类型"
                        :formatter="formatStr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="ServiceCode名称"
                        :formatter="formatStr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="ServiceCode"
                        :formatter="formatStr">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="ServiceCode使用量(MB)"
                        :formatter="formatNbr">
                      </el-table-column>
                    </el-table>
                </el-tab-pane> -->
            </el-tabs>
          </div>
      </div>
    </div>
      <div class="form-wrap">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="号码:">
                <el-input v-model="formInline.msisdn" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="ICCID:">
                <el-input v-model="formInline.iccid" placeholder=""></el-input>
            </el-form-item>
            <!-- <el-form-item label="套餐名称：">
                <el-select v-model="formInline.name" placeholder="请选择">
                <el-option label="GPRS5元套餐（原子产品）" value="shanghai"></el-option>
                <el-option label="GPRS10元套餐（原子产品）" value="shanghai"></el-option>
                <el-option label="GPRS20元套餐（原子产品）" value="beijing"></el-option>
                <el-option label="GPRS30元套餐（原子产品）" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="卡类型：">
                <el-select v-model="formInline.card" placeholder="请选择">
                <el-option label="动力100" value="beijing"></el-option>
                <el-option label="物联网卡" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="APN通道：">
                <el-select v-model="formInline.apn" placeholder="请选择">
                <el-option label="CMIOT" value="beijing"></el-option>
                <el-option label="CMIOTTEST" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生命周期：">
                <el-select v-model="formInline.life" placeholder="请选择">
                <el-option label="测试期" value="beijing"></el-option>
                <el-option label="沉默期" value="beijing"></el-option>
                <el-option label="库存期" value="beijing"></el-option>
                <el-option label="正使用" value="beijing"></el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <!-- <el-form-item>
                <el-button type="primary" @click="switchQuery">开停机查询</el-button>
            </el-form-item> -->
        </el-form>
      </div>
      <h3 class="title">
          <img src="../../assets/icongl.png" alt="">
          号码列表
      </h3>
      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            label="号码"
            width="130">
            <template slot-scope="scope">
              <span class="number" @click.stop="handleEdit(scope.$index, scope.row)">{{scope.row.msisdn}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="iccid"
            label="ICCID"
            width="190"
            :formatter="formatStr">
          </el-table-column>
          <el-table-column
            prop="imsi"
            label="IMSI"
            width="150"
            :formatter="formatStr">
          </el-table-column>
          <el-table-column
            prop="imei"
            label="IMEI"
            :formatter="formatStr">
          </el-table-column>
          <el-table-column
            prop="status"
            label="生命周期"
            :formatter="formatStr">
          </el-table-column>
          <el-table-column
            prop="openTime"
            label="开户时间"
            width="170"
            :formatter="formatStr">
          </el-table-column>
          <el-table-column
            prop="statusTime"
            label="变更时间"
            width="170"
            :formatter="formatStr">
          </el-table-column>
          <el-table-column
            prop="actTime"
            label="激活时间"
            :formatter="formatStr">
          </el-table-column>
        </el-table>
      </div>
      <div v-if="pageCount>0" class="pagination clearfix">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="totalCount">
          </el-pagination>
      </div>
    </div>
</template>

<script>
var echarts = require("echarts");
import { member, getLocal } from "../../utils/api.js";
import { formatDate, formatStr, formatNbr } from "../../utils/format.js";

export default {
  name: "NumberManagement",
  data() {
    return {
      isHidden: false,
      currentData: {},
      pageSize: 0,
      totalCount: 0,
      pageCount: 0,
      pageIndex: 0,
      hasNext: "",
      hasPrev: "",
      formInline: {
        msisdn: "",
        iccid: ""
      },
      tableData: [],
      currentPage: 1,
      activeName: "first",
      activeName2: "first-child"
    };
  },
  watch: {
    activeName: function(n) {
      if (n === "second") {
        setTimeout(() => {
          this.setFlowMessage();
        }, 1);
      } else if (n === "third") {
        setTimeout(() => {
          this.setSMS();
        }, 1);
      } else if (n === "fourth") {
        setTimeout(() => {
          this.setVoiceMessage();
        }, 1);
      }
    }
  },
  methods: {
    formatStr: formatStr,
    formatNbr: formatNbr,
    onSubmit() {
      if (this.formInline.iccid === "" && this.formInline.msisdn === "") {
        this.getMember("info.paged");
      } else {
        this.inquiryMember(this.formInline);
      }
    },
    switchQuery() {
      let obj = getLocal();
      obj = Object.assign({}, obj, this.formInline);
      obj.method = "switch.single";
      console.log(obj)
      member(obj, res => {
        console.log(res);
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      console.log(this.currentPage);
    },
    handleEdit(index, row) {
      this.currentData = row;
      this.isHidden = true;
      setTimeout(() => {
        $(document).one("click", () => {
          this.isHidden = false;
          this.activeName = "first";
        });
      }, 0);
    },
    hiddenEdit() {
      this.isHidden = false;
      this.activeName = "first";
    },
    handleClick() {},
    getMember(fname, pagenum) {
      let ls = getLocal();
      let obj = {
        method: fname,
        pageNum: pagenum || 1,
        maxRows: 10
      };
      obj = Object.assign({}, obj, ls);
      member(obj, res => {
        let data = res.data.data;
        if (data) {
          for (let i = 0; i < data.dataList.length; i++) {
            data.dataList[i]["openTime"] = formatDate(
              data.dataList[i]["openTime"]
            );
            data.dataList[i]["statusTime"] = formatDate(
              data.dataList[i]["statusTime"]
            );
          }
          this.tableData = data.dataList;
          this.pageSize = parseInt(data.pageSize);
          this.totalCount = parseInt(data.totalCount);
          this.pageIndex = parseInt(data.pageIndex);
          this.pageCount = parseInt(data.pageCount);
          this.hasNext = data.hasNext;
          this.hasPrev = data.hasPrev;
          console.log(this.tableData);
        }
      });
    },
    inquiryMember(data) {
      console.log(data);
      data = JSON.parse(JSON.stringify(data));
      Object.keys(data).forEach(key => {
        data[key] = data[key].replace(/\s+|&nbsp;/gi, "").replace(/，/gi, ",");
      });
      let obj = getLocal();
      if (
        (data.msisdn && data.msisdn.indexOf(",") !== -1) ||
        (data.iccid && data.iccid.indexOf(",") !== -1)
      ) {
        console.log("批量查询");
        data.method = "info.batch";
        data.msisdns = data.msisdn;
        data.iccids = data.iccid;
        delete data.msisdn;
        delete data.iccid;
        obj = Object.assign({}, obj, data);
        member(obj, res => {
          let data = res.data.data;
          console.log(data);
          if (data) {
            for (let i = 0; i < data.dataList.length; i++) {
              data.dataList[i]["openTime"] = formatDate(
                data.dataList[i]["openTime"]
              );
              data.dataList[i]["statusTime"] = formatDate(
                data.dataList[i]["statusTime"]
              );
            }
            this.tableData = data.dataList;
            this.pageSize = parseInt(data.pageSize);
            this.totalCount = parseInt(data.totalCount);
            this.pageIndex = parseInt(data.pageIndex);
            this.pageCount = parseInt(data.pageCount);
            this.hasNext = data.hasNext;
            this.hasPrev = data.hasPrev;
          }
        });
      } else {
        console.log("单个查询");
        data.method = "info.single";
        obj = Object.assign({}, obj, data);
        member(obj, res => {
          let data = res.data.data;
          console.log(data);
          this.pageCount = 0;
          if (data) {
            data["openTime"] = formatDate(data["openTime"]);
            data["statusTime"] = formatDate(data["statusTime"]);
            this.tableData = [data];
          } else {
            this.tableData = [];
          }
          console.log(this.tableData);
        });
      }
    },
    setFlowMessage() {
      var fm = echarts.init(document.getElementById("flowMessage"));
      fm.setOption({
        title: {
          text: "流量MB"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "联盟广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "视频广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "直接访问",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "搜索引擎",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          }
        ]
      });
    },
    setSMS() {
      var c = echarts.init(document.getElementById("SMS"));
      c.setOption({
        title: {
          text: "条数"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "联盟广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "视频广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "直接访问",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "搜索引擎",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          }
        ]
      });
    },
    setVoiceMessage() {
      var fm = echarts.init(document.getElementById("voiceMessage"));
      fm.setOption({
        title: {
          text: "分钟"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "联盟广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "视频广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "直接访问",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "搜索引擎",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          }
        ]
      });
    },
    bindEvents() {
      document.querySelector(".edit").addEventListener("click", e => {
        e.stopPropagation();
      });
    }
  },
  mounted() {
    this.getMember("info.paged");
    this.bindEvents();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.numberManagement {
  position: relative;
  padding: 20px 10px;
  .form-wrap {
    padding: 25px 10px 0 10px;
    background-color: #ecf0f8;
  }
  .title {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    img {
      line-height: 24px;
      vertical-align: middle;
    }
  }
  .table {
    margin-bottom: 10px;
  }
  .el-pagination {
    float: right;
  }
  .number {
    color: #0921ea;
    cursor: pointer;
  }
  .edit-wrap {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    &.active {
      display: block;
      z-index: 10;
    }
    .edit {
      position: fixed;
      overflow-y: scroll;
      overflow-x: visible;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      height: 500px;
      border-radius: 5px;
      background-color: #ffffff;
      z-index: 5;
      h1 {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 10;
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #a0bdfd;
        background: #ffffff;
        .close {
          cursor: pointer;
          float: right;
          margin-right: 10px;
        }
      }
      ul {
        font-size: 12px;
        li {
          float: left;
          width: 33.33%;
          padding: 15px 10px;
          height: 60px;
          .left {
            display: inline-block;
            width: 30%;
            text-align: right;
            margin-right: 10px;
          }
        }
      }
      .el-tabs {
        padding: 10px;
      }
      .cc {
        height: 100%;
        overflow-y: scroll;
        padding-top: 47px;
      }
      .balance {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
