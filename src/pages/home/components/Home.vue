<template>
  <div class="home">
      <div class="status">
        <ul class="list clearfix">
            <li>
                <div class="item">
                    <span>本年总费用（元）</span>
                    <hr>
                    <span class="a1">{{money}}</span>
                </div>
            </li>
            <li>
                <div class="item">
                    <span>7月成员数（个）</span>
                    <hr>
                    <span class="a2">{{peoples}}</span>
                </div>
            </li>
            <li>
                <div class="item">
                    <span>7月流量数（GB）</span>
                    <hr>
                    <span class="a3">{{flow}}</span>
                </div>
            </li>
            <li>
                <div class="item">
                    <span>未处理预警数（条）</span>
                    <hr>
                    <span class="a4">{{unprocessed}}</span>
                </div>
            </li>
        </ul>
      </div>
      <div class="status">
          <h3 class="title"><b>成员状态分析</b></h3>
          <div class="charts-warp clearfix">
            <div class="chart">
                <h3>
                  <img src="../../../assets/sy2.png" alt="" width="24" height="24">
                    成员状态趋势
                </h3>
                <div id="peopleTrendChart" style="width: 500px;height:250px;"></div>
            </div>
            <div class="chart">
                <h3>
                  <img src="../../../assets/sy2.png" alt="" width="24" height="24">
                    成员状态情况
                </h3>
                <div id="peopleSituationChart" style="width: 100%;height:250px;"></div>
            </div>
          </div>
      </div>
      <div class="status">
          <h3 class="title"><b>成员付费分析</b></h3>
          <div class="charts-warp clearfix">
            <div class="chart">
                <h3>
                    <img src="../../../assets/sy3.png" alt="" width="24" height="24">
                    近期费用趋势
                </h3>
                <div id="costTrendChart" style="width: 100%;height:250px;"></div>
            </div>
            <div class="chart">
                <h3>
                    <img src="../../../assets/sy4.png" alt="" width="24" height="24">
                    06月费用占比
                </h3>
                <div id="costRatioChart" style="width: 100%;height:250px;">
                    <div class="r_out">
                        <div class="r_in">
                            <div class="r_c c1" style="height: 0%;"></div>
                            <div class="r_num">70%</div>
                        </div>
                    </div>
                    <div class="r_out">
                        <div class="r_in">
                            <div class="r_c c2" style="height: 0%;"></div>
                            <div class="r_num">70%</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div class="status">
        <h3 class="title"><b>成员用量分析</b></h3>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="流量统计" name="first">
                    <div class="flow clearfix">
                        <div class="flowChart">
                            <div id="trafficStatistics" style="width: 100%;height:300px;"></div>
                        </div>
                        <div class="flowChart">
                            <div id="trafficRankings" style="width: 100%;height:300px;"></div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="短信统计" name="second">
                    <div class="flow clearfix">
                        <div class="flowChart">
                            <div id="message" style="width: 100%;height:300px;"></div>
                        </div>
                        <div class="flowChart">
                            <div id="messageTop" style="width: 100%;height:300px;"></div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="语音统计" name="third">
                    <div class="flow clearfix">
                        <div class="flowChart">
                            <div id="voice" style="width: 100%;height:300px;"></div>
                        </div>
                        <div class="flowChart">
                            <div id="voiceTop" style="width: 100%;height:300px;"></div>
                        </div>
                    </div>
                </el-tab-pane>
          </el-tabs>
      </div>
      <div class="status">
          <h3 class="title"><b>待办提醒</b></h3>
          <el-tabs v-model="activeName1" type="card" @tab-click="handleClick">
                <el-tab-pane label="新增预警" name="first">
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                        align="center"
                        prop="number"
                        label="预警号码"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="name"
                        label="预警名称"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="content"
                        label="预警内容">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="a"
                        label="预警时间">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="handle"
                        label="操作">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="待办工单" name="second">
                  <el-table
                        :data="tableData2"
                        border
                        style="width: 100%">
                        <el-table-column
                        align="center"
                        prop="number"
                        label="提交时间"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="name"
                        label="工单类型"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="content"
                        label="工单标题">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="handle"
                        label="工单状态">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="系统公告" name="third">
                  <el-table
                        :data="tableData3"
                        border
                        style="width: 100%">
                        <el-table-column
                          align="center"
                          label="编号"
                          type="index"
                          width="50">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="number"
                        label="公告标题"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="name"
                        label="公告内容"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        align="center"
                        prop="content"
                        label="发布时间">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
          </el-tabs>
      </div>
  </div>
</template>
<script>
var echarts = require("echarts");

import { group, clearLocal, getLocal } from "../../../utils/api.js";

export default {
  name: "Home",
  data() {
    return {
      stateTrend: {},
      activeName: "first",
      activeName1: "first",
      money: "0.00",
      peoples: 0,
      flow: 0,
      unprocessed: 0,
      tableData: [],
      tableData2: [],
      tableData3: []
    };
  },
  watch: {
    activeName: function(n) {
      if (n === "second") {
        setTimeout(() => {
          this.setMessage();
          this.setMessageTop();
        }, 1);
      } else if (n === "third") {
        setTimeout(() => {
          this.setVoice();
          this.setVoiceTop();
        }, 1);
      }
    }
  },
  methods: {
    setPeopleTrendChart() {
      var peopleTrendChart = echarts.init(
        document.getElementById("peopleTrendChart")
      );
      peopleTrendChart.setOption({
        title: {
          text: "成员数",
          textStyle: {
            color: "#000",
            fontSize: "12"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["正使用", "测试期", "沉默期", "预约销户", "停机"],
          x: "right",
          textStyle: {
            fontSize: "12"
          },
          itemWidth: 20,
          itemHeight: 10,
          itemGap: 10,
          icon: "rect"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "正使用",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: { normal: {} },
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "测试期",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: { normal: {} },
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "沉默期",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: { normal: {} },
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "预约销户",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: { normal: {} },
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "停机",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: { normal: {} },
            data: [0, 0, 0, 0, 0, 0, 0]
          }
        ]
      });
    },
    setPeopleSituationChart(xdata, ydata) {
      var peopleSituationChart = echarts.init(
        document.getElementById("peopleSituationChart")
      );
      peopleSituationChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "category",
          data: xdata,
          axisTick: {
            alignWithLabel: true,
            interval: 0
          }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: ydata,
            type: "bar"
          }
        ]
      });
    },
    setCostTrendChart() {
      var costTrendChart = echarts.init(
        document.getElementById("costTrendChart")
      );
      costTrendChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["企业代付", "个人付费"],
          x: "right",
          textStyle: {
            fontSize: "12"
          },
          itemWidth: 20,
          itemHeight: 10,
          itemGap: 10,
          icon: "rect"
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
            name: "企业代付",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "个人付费",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [0, 0, 0, 0, 0, 0, 0]
          }
        ]
      });
    },
    setCostRatioChart() {
      $(".c1").animate(
        {
          height: "70%"
        },
        1000
      );
      $(".c2").animate(
        {
          height: "70%"
        },
        1000
      );
    },
    setTrafficStatistics() {
      var ts = echarts.init(document.getElementById("trafficStatistics"));
      ts.setOption({
        title: {
          text: "流量GB",
          textStyle: {
            color: "#000",
            fontSize: "12"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["通用APN通道", "专用APN通道"],
          x: "right",
          textStyle: {
            fontSize: "12"
          },
          itemWidth: 20,
          itemHeight: 10,
          itemGap: 10,
          icon: "rect"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "通用APN通道",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: "专用APN通道",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [0, 0, 0, 0, 0, 0, 0]
          }
        ]
      });
    },
    setTrafficRankings() {
      var tr = echarts.init(document.getElementById("trafficRankings"));
      tr.setOption({
        title: {
          text: "流量使用Top",
          textStyle: {
            color: "#000",
            fontSize: "12"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: []
        },
        series: [
          {
            name: "成员流量使用",
            type: "bar",
            data: []
          }
        ]
      });
    },
    setMessage() {
      var m = echarts.init(document.getElementById("message"));
      m.setOption({
        title: {
          text: "短信次数",
          textStyle: {
            color: "#000",
            fontSize: "12"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["短信用量"],
          x: "right",
          textStyle: {
            fontSize: "12"
          },
          itemWidth: 20,
          itemHeight: 10,
          itemGap: 10,
          icon: "rect"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "短信用量",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      });
    },
    setMessageTop() {
      var mt = echarts.init(document.getElementById("messageTop"));
      mt.setOption({
        title: {
          text: "短信使用Top",
          textStyle: {
            color: "#000",
            fontSize: "12"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: [
            "中国",
            "中国2",
            "中国3",
            "中国4",
            "中国5",
            "中国6",
            "中国7",
            "中国8",
            "中国9",
            "中国10"
          ]
        },
        series: [
          {
            name: "成员短信使用",
            type: "bar",
            data: [
              131744,
              131744,
              131744,
              131744,
              131744,
              131744,
              131744,
              131744,
              131744,
              131744
            ]
          }
        ]
      });
    },
    setVoice() {
      var v = echarts.init(document.getElementById("voice"));
      v.setOption({
        title: {
          text: "语音分钟",
          textStyle: {
            color: "#000",
            fontSize: "12"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["语音用量"],
          x: "right",
          textStyle: {
            fontSize: "12"
          },
          itemWidth: 20,
          itemHeight: 10,
          itemGap: 10,
          icon: "rect"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "语音用量",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      });
    },
    setVoiceTop() {
      var vt = echarts.init(document.getElementById("voiceTop"));
      vt.setOption({
        title: {
          text: "语音使用Top",
          textStyle: {
            color: "#000",
            fontSize: "12"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: [
            "中国",
            "中国2",
            "中国3",
            "中国4",
            "中国5",
            "中国6",
            "中国7",
            "中国8",
            "中国9",
            "中国10"
          ]
        },
        series: [
          {
            name: "成员语音使用",
            type: "bar",
            data: [
              131744,
              131744,
              131744,
              131744,
              131744,
              131744,
              131744,
              131744,
              131744,
              131744
            ]
          }
        ]
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getGroup(fname) {
      let obj = getLocal();
      obj.method = fname;
      group(obj, res => {
        console.log(res);
        let data = res.data.data;
        if (data) {
          this.stateTrend = data;
          let ydata = [
            this.stateTrend.testCount,
            this.stateTrend.silentCount,
            this.stateTrend.inventoryCount,
            this.stateTrend.normalCount,
            this.stateTrend.stopCount,
            this.stateTrend.preCloseCount,
            this.stateTrend.bespeakCloseCount
          ];
          let xdata = [
            "测试期",
            "沉默期",
            "库存期",
            "正使用",
            "停机",
            "销户",
            "预约销户"
          ];
          console.log(ydata);
          console.log(xdata);
          this.setPeopleSituationChart(xdata, ydata);
        }
      });
    }
  },
  mounted() {
    this.setPeopleTrendChart();
    this.setPeopleSituationChart();
    this.setCostTrendChart();
    this.setCostRatioChart();
    this.setTrafficStatistics();
    this.setTrafficRankings();
    this.getGroup("info.query");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  padding: 20px 15px;
  #costRatioChart {
    padding: 10px 20px;
  }
  .list {
    li {
      float: left;
      width: 166px;
      height: 70px;
      padding: 8px 20px;
      background: url("../../../assets/kuang.png") no-repeat center;
      .item {
        text-align: center;
        span {
          font-size: 14px;
          line-height: 24px;
        }
        hr {
          border: 1px solid transparent;
          border-bottom: 1px solid #3587ff;
          margin: 0;
        }
        .a1 {
          font-size: 18px;
          color: #6493fc;
          padding-top: 3px;
        }
        .a2 {
          font-size: 18px;
          color: #9dc818;
          padding-top: 3px;
        }
        .a3 {
          font-size: 18px;
          color: #eb6ea3;
          padding-top: 3px;
        }
        .a4 {
          font-size: 18px;
          color: #ff0002;
          padding-top: 3px;
        }
      }
    }
  }
  .status {
    width: 1058px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    &:first-child{
      margin-top: 0;
    }
    .r_out {
      width: 200px;
      height: 200px;
      border: 8px solid #d9d9d9;
      background: #fff;
      box-shadow: 3px 3px 5px #bfbfbf;
      -webkit-box-shadow: 3px 3px 5px #bfbfbf;
      -moz-box-shadow: 3px 3px 5px #bfbfbf;
      -ms-box-shadow: 3px 3px 5px #bfbfbf;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms_border-radius: 50%;
      display: inline-block;
      position: relative;
    }

    .r_out p {
      position: absolute;
      bottom: -50px;
      color: #000;
      text-align: center;
      margin: 0 auto;
      width: 100%;
      font-size: 16px;
      line-height: 1.5;
      font-weight: bold;
    }

    .r_in {
      width: 180px;
      height: 180px;
      border: 10px solid #fff;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms_border-radius: 50%;
      overflow: hidden;
      position: relative;
    }

    .r_c {
      width: 180px;
      height: 180px;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0;
    }

    .c1 {
      background: #fbad4c;
    }

    .c2 {
      background: #87d7a5;
    }

    .r_num {
      color: #404040;
      font-size: 40px;
      line-height: 1.5;
      font-weight: bold;
      position: absolute;
      top: 50%;
      margin-top: -25px;
      text-align: center;
      width: 100%;
    }

    h3 {
      width: 100%;
      margin-top: 9px;
      margin-left: 12px;
      margin-bottom: 12px;
      line-height: 28px;
      border-bottom: 1px solid #c9c9c9;
      img {
        margin-right: 10px;
        vertical-align: middle;
      }
    }
    .title {
      b {
        border-left: 4px solid #3587ff;
        padding-left: 10px;
        line-height: 24px;
      }
    }
    .charts-warp {
      :nth-child(1) {
        float: left;
      }
      :nth-child(2) {
        float: right;
      }
      .chart {
        h3 {
          width: 100%;
          margin-top: 9px;
          margin-left: 12px;
          margin-bottom: 12px;
          line-height: 28px;
          border-bottom: 1px solid #c9c9c9;
          img {
            margin-right: 10px;
            vertical-align: middle;
          }
        }
        border: 1px solid #92b4fd;
        border-radius: 4px;
        width: 49%;
        margin-top: 12px;
        padding-top: 0.1px;
        overflow: hidden;
      }
    }
    .flow {
      :nth-child(1) {
        float: left;
      }
      :nth-child(2) {
        float: right;
      }
      .flowChart {
        width: 49%;
      }
    }
  }
  .el-tab-pane {
    width: 100%；;
  }
}
</style>
