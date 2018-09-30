<template>
  <div class="companyBill">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="账单数据" name="first">
            <div class="top">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    汇总信息
                </h3>
                <ul class="clearfix">
                    <li><span class='left'>当前集团成员数：</span><span>50114000007</span></li>
                    <li><span class='left'>上月企业代付(元)：</span><span>2</span></li>
                    <li><span class='left'>上月个人付费(元)： </span><span>50114000007</span></li>
                </ul>
            </div>
            <div class="bottom">
                <h3 class="title">
                    <img src="../../assets/member_lib.png" alt="">
                    近6月费用列表
                </h3>
                <div class="table">
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                        prop=""
                        label="月份"
                        >
                        </el-table-column>
                        <el-table-column
                        prop=""
                        label="总费用(元)"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop=""
                        label="企业代付(元)">
                        </el-table-column>
                        <el-table-column
                        prop=""
                        label="个人付费(元)">
                        </el-table-column>
                        <el-table-column
                        prop=""
                        label="操作">
                        </el-table-column>
                    </el-table>
                </div>
                <div class="pagination clearfix">
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="currentPage"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                    </el-pagination>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="可视化" name="second">
          <div class="status">
            <h1 class="viewTitle">
              <b>
              成员付费分析
              </b>
            </h1>
            <div class="charts-wrap clearfix">
              <div class="chart">
                <h3>
                  <img src="../../assets/sy2.png" alt="">
                    近期费用趋势
                </h3>
                <div id="costTrend" style="width: 500px;height:250px;"></div>
              </div>
              <div class="chart">
                <h3>
                    <img src="../../assets/sy4.png" alt="" width="24" height="24">
                    08月费用占比
                </h3>
                <div id="costRatioChart" style="width: 100%;height:250px;">
                  <div>
                    <div class="r_out">
                        <div class="r_in">
                            <div class="r_c c1" style="height: 0%;"></div>
                            <div class="r_num">70%</div>
                        </div>
                        <div class="c_t">企业代付</div>
                    </div>
                  </div>
                  <div>
                    <div class="r_out">
                        <div class="r_in">
                            <div class="r_c c2" style="height: 0%;"></div>
                            <div class="r_num">70%</div>
                        </div>
                        <div class="c_t">个人付费</div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
var echarts = require("echarts");

export default {
  name: "CompanyBill",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentPage: 1,
      activeName: "first",
      aname: "week"
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleClick() {},
    getWeek() {
      this.aname = "week";
    },
    getMonth() {
      this.aname = "month";
    },
    getOther() {
      this.aname = "other";
    },
    setCostTrend() {
      var ct = echarts.init(document.getElementById("costTrend"));
      ct.setOption({
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
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "测试期",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: { normal: {} },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "沉默期",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: { normal: {} },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "预约销户",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "停机",
            type: "line",
            stack: "总量",
            smooth: true,
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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
    }
  },
  watch: {
    activeName: function(newvalue) {
      if (newvalue === "second") {
        setTimeout(() => {
          this.setCostTrend();
          this.setCostRatioChart();
        }, 1);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.companyBill {
  position: relative;
  padding: 20px 10px;
  .title {
    color: #484848;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    img {
      line-height: 24px;
      vertical-align: middle;
    }
  }
  #costRatioChart {
    padding: 10px 20px;
  }
  .status {
    width: 1058px;
    margin-left: auto;
    margin-right: auto;
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
    .c_t {
      width: 100%;
      position: absolute;
      top: 110%;
      text-align: center;
    }
    .viewTitle {
      width: 100%;
      margin-top: 9px;
      margin-left: 12px;
      margin-bottom: 12px;
      line-height: 28px;
      border-bottom: 1px solid #c9c9c9;
      b {
        border-left: 4px solid #3587ff;
        padding-left: 10px;
        line-height: 24px;
      }
    }
    .charts-wrap {
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
  }
  .top {
    margin-bottom: 10px;
    ul {
      font-size: 12px;
      li {
        float: left;
        width: 33.33%;
        padding: 15px 10px;
        .left {
          display: inline-block;
          width: 40%;
          text-align: right;
        }
      }
    }
  }
  .table {
    margin-bottom: 10px;
  }
  .el-pagination {
    float: right;
  }
}
</style>
