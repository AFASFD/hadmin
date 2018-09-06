<template>
  <div class="flowCount">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="月报表" name="first">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="统计月份：">
                        <el-date-picker
                        v-model="value1"
                        type="month"
                        placeholder="从">
                        </el-date-picker>
                        <el-date-picker
                        v-model="value2"
                        type="month"
                        placeholder="为止">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                统计情况
            </h3>
            <div class="table">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="number"
                    label="预警号码"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="预警名称"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="content"
                    label="预警内容">
                    </el-table-column>
                    <el-table-column
                    prop="handle"
                    label="操作">
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination clearfix">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
                </el-pagination>
            </div>
        </el-tab-pane>
        <el-tab-pane label="日报表" name="second">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="统计日期：">
                        <el-date-picker
                        v-model="value3"
                        type="date"
                        placeholder="从">
                        </el-date-picker>
                        <el-date-picker
                        v-model="value4"
                        type="date"
                        placeholder="为止">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                统计情况
            </h3>
            <div class="table">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="number"
                    label="预警号码"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="预警名称"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="content"
                    label="预警内容">
                    </el-table-column>
                    <el-table-column
                    prop="handle"
                    label="操作">
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination clearfix">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
                </el-pagination>
            </div>
        </el-tab-pane>
        <el-tab-pane label="可视化" name="third">
            <div class="status">
                <div class="charts-warp clearfix">
                    <div class="chart">
                        <h3 class="title">
                            <img src="../../assets/sy2.png" alt="">
                            流量使用月趋势
                        </h3>
                        <div id="memberMonthTrend" style="width: 100%;height: 250px;"></div>
                    </div>
                    <div class="chart">
                        <h3 class="title">
                            <img src="../../assets/sy4.png" alt="">
                            流量使用日趋势
                        </h3>
                        <div id="memberDayTrend" style="width: 100%;height: 250px;"></div>
                    </div>
                    <div class="chart">
                        <h3 class="title clearfix">
                            <div class="left">
                                <img src="../../assets/sy4.png" alt="">
                                套餐流量使用top
                            </div>
                            <div class="right">
                                <el-select v-model="bvalue" placeholder="选择月份">
                                  <el-option
                                    v-for="item in boptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                            </div>
                        </h3>
                        <div id="memberHealth" style="width: 100%;height: 250px;">
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
                          <div class="r_out">
                              <div class="r_in">
                                  <div class="r_c c3" style="height: 0%;"></div>
                                  <div class="r_num">70%</div>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div class="chart">
                        <h3 class="title clearfix">
                            <div class="left">
                                <img src="../../assets/sy3.png" alt="">
                                各类套餐办理数占比
                            </div>
                            <div class="right">
                                <el-select v-model="avalue" placeholder="选择月份">
                                  <el-option
                                    v-for="item in aoptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                                </el-select>
                            </div>
                        </h3>
                        <div id="memberTop" style="width: 100%;height: 250px;"></div>
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
  name: "FlowCount",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          number: "1",
          name: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
          handle: "123"
        }
      ],
      currentPage4: 1,
      activeName: "first",
      aoptions: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        },
        {
          value: "选项4",
          label: "4"
        },
        {
          value: "选项5",
          label: "5"
        }
      ],
      boptions: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        },
        {
          value: "选项4",
          label: "4"
        },
        {
          value: "选项5",
          label: "5"
        }
      ],
      avalue: "",
      bvalue: "",
      value1: "",
      value2: "",
      value3: "",
      value4: ""
    };
  },
  watch: {
    activeName: function(newactive) {
      if (newactive === "third") {
        setTimeout(() => {
          this.setMonthTrend();
          this.setDayTrend();
          this.setMemberTop();
          this.setMemberHealth();
        }, 1);
      }
    }
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
    handleClick(tab, event) {},
    setMonthTrend() {
      var monthTrend = echarts.init(
        document.getElementById("memberMonthTrend")
      );
      monthTrend.setOption({
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
            areaStyle: { normal: {} },
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "测试期",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "沉默期",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "预约销户",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "停机",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            smooth: true,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    },
    setDayTrend() {
      var dayTrend = echarts.init(document.getElementById("memberDayTrend"));
      dayTrend.setOption({
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
            areaStyle: { normal: {} },
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "测试期",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "沉默期",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "预约销户",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "停机",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            smooth: true,
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    },
    setMemberTop() {
      var ms = echarts.init(document.getElementById("memberTop"));
      ms.setOption({
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
            name: "成员流量使用",
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
    setMemberHealth() {
      $(".c1").animate(
        {
          height: "30%"
        },
        1000
      );
      $(".c2").animate(
        {
          height: "70%"
        },
        1000
      );
      $(".c3").animate(
        {
          height: "70%"
        },
        1000
      );
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.flowCount {
  position: relative;
  padding: 20px 10px;
  #memberHealth {
    padding-left: 20px;
    padding-top: 30px;
    :nth-child(even) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  .r_out {
    width: 150px;
    height: 150px;
    border: 8px solid #d9d9d9;
    background: #fff;
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
    width: 130px;
    height: 130px;
    border: 10px solid #fff;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms_border-radius: 50%;
    overflow: hidden;
    position: relative;
  }

  .r_c {
    width: 130px;
    height: 130px;
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

  .c3 {
    background: #00adc7;
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
  .form-wrap {
    padding: 25px 10px 0 10px;
    background-color: #ecf0f8;
  }
  .title {
    .left {
      float: left;
    }
    .right {
      float: right;
    }
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
  .status {
    width: 1058px;
    margin: 0 auto;
    .charts-warp {
      width: 100%;
      .chart {
        float: left;
        width: 49%;
        border: 1px solid #92b4fd;
        border-radius: 4px;
        margin-bottom: 20px;
        &:nth-child(odd) {
          margin-right: 2%;
        }
        .title {
          width: 100%;
          padding: 10px;
          border-bottom: 1px solid #eaeaea;
          img {
            line-height: 24px;
            vertical-align: middle;
          }
        }
        .el-input__inner {
          height: 24px;
          line-height: 24px;
        }
        .el-input__icon {
          line-height: 24px;
        }
      }
    }
  }
}
</style>
