<template>
  <div class="packageProcess">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="流量" name="first">
          <el-tabs type="border-card">
            <el-tab-pane label="套餐订购">
              <div class="top">
                <div class="snumber">
                  <h3 class="title">
                      <img src="../../assets/option_log_list_icon.png" alt="">
                      选号码
                  </h3>
                  <div class="form-wrap">
                      <el-form :inline="true" :model="formInline" class="demo-form-inline">
                          <el-form-item>
                              <el-select v-model="formInline.region" placeholder="生命周期状态">
                                  <el-option label="测试期" value="shanghai"></el-option>
                                  <el-option label="沉默期" value="shanghai"></el-option>
                                  <el-option label="库存期" value="shanghai"></el-option>
                                  <el-option label="正使用" value="beijing"></el-option>
                              </el-select>
                          </el-form-item>
                          <el-form-item>
                              <el-select v-model="formInline.region" placeholder="套餐">
                                  <el-option label="GPRS5元套餐（原子产品）" value="shanghai"></el-option>
                                  <el-option label="GPRS10元套餐（原子产品）" value="shanghai"></el-option>
                                  <el-option label="GPRS20元套餐（原子产品）" value="shanghai"></el-option>
                                  <el-option label="GPRS30元套餐（原子产品）" value="beijing"></el-option>
                              </el-select>
                          </el-form-item>
                          <el-form-item>
                              <el-select v-model="formInline.region" placeholder="APN通道">
                                  <el-option label="CMIOT" value="shanghai"></el-option>
                                  <el-option label="CMIOTTEST" value="beijing"></el-option>
                              </el-select>
                          </el-form-item>
                          <el-form-item>
                              <el-button type="primary" @click="onSubmit">查询</el-button>
                          </el-form-item>
                      </el-form>
                  </div>
                  <div class="table">
                    <el-table
                      ref="multipleTable"
                      :data="tableData3"
                      tooltip-effect="dark"
                      style="width: 100%"
                      border
                      @selection-change="handleSelectionChange">
                      <el-table-column
                      type="selection"
                      width="55">
                      </el-table-column>
                      <el-table-column
                      label="日期"
                      width="120">
                      <template slot-scope="scope">{{ scope.row.date }}</template>
                      </el-table-column>
                      <el-table-column
                      prop="name"
                      label="姓名"
                      width="120">
                      </el-table-column>
                      <el-table-column
                      prop="address"
                      label="地址"
                      show-overflow-tooltip>
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
                </div>
              </div>
              <div class="bottom">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    选套餐
                </h3>
                <el-tabs type="border-card">
                  <el-tab-pane label="长周期套餐">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item>
                                  <el-input v-model="formInline.user" placeholder="套餐名称/号码"></el-input>
                              </el-form-item>
                              <el-form-item>
                                  <el-button type="primary" @click="onSubmit">查询</el-button>
                              </el-form-item>
                          </el-form>
                      </div>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            label="选择"
                            width="50">
                              <template slot-scope="scope">
                                    <el-radio v-model="radio" :label="scope.row.radio" class="radio">&nbsp;</el-radio>
                              </template>
                            </el-table-column>
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
                      <div class="radioList">
                        新套餐生效时间：
                        <el-radio v-model="radio" label="1">下月</el-radio>
                        <el-radio v-model="radio" label="2">立即</el-radio>
                      </div>
                      <div class="nextbtn">
                        <el-button type="primary">下一步</el-button>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="加油包套餐">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item>
                                  <el-input v-model="formInline.user" placeholder="套餐名称/号码"></el-input>
                              </el-form-item>
                              <el-form-item>
                                  <el-button type="primary" @click="onSubmit">查询</el-button>
                              </el-form-item>
                          </el-form>
                      </div>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            label="选择"
                            width="50">
                              <template slot-scope="scope">
                                    <el-radio v-model="radio" :label="scope.row.radio" class="radio">&nbsp;</el-radio>
                              </template>
                            </el-table-column>
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
                      <div class="radioList">
                        新套餐生效时间：
                        <el-radio v-model="radio" label="1">下月</el-radio>
                        <el-radio v-model="radio" label="2">立即</el-radio>
                      </div>
                      <div class="nextbtn">
                        <el-button type="primary">下一步</el-button>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="月套餐">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item>
                                  <el-input v-model="formInline.user" placeholder="套餐名称/号码"></el-input>
                              </el-form-item>
                              <el-form-item>
                                  <el-button type="primary" @click="onSubmit">查询</el-button>
                              </el-form-item>
                          </el-form>
                      </div>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            label="选择"
                            width="50">
                              <template slot-scope="scope">
                                    <el-radio v-model="radio" :label="scope.row.radio" class="radio">&nbsp;</el-radio>
                              </template>
                            </el-table-column>
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
                      <div class="radioList">
                        新套餐生效时间：
                        <el-radio v-model="radio" label="1">下月</el-radio>
                        <el-radio v-model="radio" label="2">立即</el-radio>
                      </div>
                      <div class="nextbtn">
                        <el-button type="primary">下一步</el-button>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="营销包套餐">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item>
                                  <el-input v-model="formInline.user" placeholder="套餐名称/号码"></el-input>
                              </el-form-item>
                              <el-form-item>
                                  <el-button type="primary" @click="onSubmit">查询</el-button>
                              </el-form-item>
                          </el-form>
                      </div>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            label="选择"
                            width="50">
                              <template slot-scope="scope">
                                    <el-radio v-model="radio" :label="scope.row.radio" class="radio">&nbsp;</el-radio>
                              </template>
                            </el-table-column>
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
                      <div class="radioList">
                        新套餐生效时间：
                        <el-radio v-model="radio" label="1">下月</el-radio>
                        <el-radio v-model="radio" label="2">立即</el-radio>
                      </div>
                      <div class="nextbtn">
                        <el-button type="primary">下一步</el-button>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐修改">
              <div class="top">
                <div class="form-wrap">
                      <el-form :inline="true" :model="formInline" class="demo-form-inline">
                          <el-form-item label="号码信息：">
                              <el-input v-model="formInline.user" placeholder=""></el-input>
                          </el-form-item>
                          <el-form-item label="套餐名称：">
                              <el-input v-model="formInline.user" placeholder=""></el-input>
                          </el-form-item>
                          <el-form-item label="套餐编号：">
                              <el-input v-model="formInline.user" placeholder=""></el-input>
                          </el-form-item>
                          <el-form-item>
                              <el-button type="primary" @click="onSubmit">查询</el-button>
                          </el-form-item>
                      </el-form>
                </div>
                <h3 class="title">
                  <img src="../../assets/icongl.png" alt="">
                  号码套餐办理情况
                </h3>
              </div>
              <div class="bottom">
                <div class="table">
                  <el-table
                    ref="multipleTable"
                    border
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                      type="selection"
                      width="55">
                    </el-table-column>
                    <el-table-column
                      label="日期"
                      width="120">
                      <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="地址"
                      show-overflow-tooltip>
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
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐退订">
              <div class="top">
                <div class="form-wrap">
                      <el-form :inline="true" :model="formInline" class="demo-form-inline">
                          <el-form-item label="号码信息：">
                              <el-input v-model="formInline.user" placeholder=""></el-input>
                          </el-form-item>
                          <el-form-item label="套餐名称：">
                              <el-input v-model="formInline.user" placeholder=""></el-input>
                          </el-form-item>
                          <el-form-item label="套餐编号：">
                              <el-input v-model="formInline.user" placeholder=""></el-input>
                          </el-form-item>
                          <el-form-item label="套餐生效时间：">
                            <el-date-picker
                              v-model="value1"
                              type="datetime"
                              placeholder="选择日期时间">
                            </el-date-picker>
                          </el-form-item>
                          <el-form-item label="套餐失效时间：">
                            <el-date-picker
                              v-model="value2"
                              type="datetime"
                              placeholder="选择日期时间">
                            </el-date-picker>
                          </el-form-item>
                          <el-form-item>
                              <el-button type="primary" @click="onSubmit">查询</el-button>
                          </el-form-item>
                      </el-form>
                </div>
                <h3 class="title">
                  <img src="../../assets/icongl.png" alt="">
                  号码套餐办理情况
                </h3>
              </div>
              <div class="bottom">
                <div class="table">
                  <el-table
                    border
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                      type="selection"
                      width="55">
                    </el-table-column>
                    <el-table-column
                      label="日期"
                      width="120">
                      <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="地址"
                      show-overflow-tooltip>
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
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="语音" name="second">
          <el-tabs type="border-card">
            <el-tab-pane label="套餐订购">
              <div class="top">
                <div class="snumber">
                  <h3 class="title">
                      <img src="../../assets/option_log_list_icon.png" alt="">
                      选号码
                  </h3>
                  <div class="form-wrap">
                      <el-form :inline="true" :model="formInline" class="demo-form-inline">
                          <el-form-item>
                              <el-select v-model="formInline.region" placeholder="生命周期状态">
                                  <el-option label="测试期" value="shanghai"></el-option>
                                  <el-option label="沉默期" value="beijing"></el-option>
                                  <el-option label="库存期" value="beijing"></el-option>
                                  <el-option label="正使用" value="beijing"></el-option>
                              </el-select>
                              <el-select v-model="formInline.region" placeholder="套餐">
                                  <el-option label="物联网3元语音套餐" value="shanghai"></el-option>
                                  <el-option label="物联网5元语音套餐" value="shanghai"></el-option>
                                  <el-option label="物联网10元语音套餐" value="shanghai"></el-option>
                                  <el-option label="物联网20元语音套餐" value="beijing"></el-option>
                              </el-select>
                          </el-form-item>
                          <el-form-item>
                              <el-button type="primary" @click="onSubmit">查询</el-button>
                          </el-form-item>
                      </el-form>
                  </div>
                  <div class="table">
                    <el-table
                      ref="multipleTable"
                      :data="tableData3"
                      tooltip-effect="dark"
                      style="width: 100%"
                      border
                      @selection-change="handleSelectionChange">
                      <el-table-column
                      type="selection"
                      width="55">
                      </el-table-column>
                      <el-table-column
                      label="日期"
                      width="120">
                      <template slot-scope="scope">{{ scope.row.date }}</template>
                      </el-table-column>
                      <el-table-column
                      prop="name"
                      label="姓名"
                      width="120">
                      </el-table-column>
                      <el-table-column
                      prop="address"
                      label="地址"
                      show-overflow-tooltip>
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
                </div>
              </div>
              <div class="bottom">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    选套餐
                </h3>
                <el-tabs type="border-card">
                  <el-tab-pane label="加油包套餐">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item>
                                  <el-input v-model="formInline.user" placeholder="套餐名称/号码"></el-input>
                              </el-form-item>
                              <el-form-item>
                                  <el-button type="primary" @click="onSubmit">查询</el-button>
                              </el-form-item>
                          </el-form>
                      </div>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            label="选择"
                            width="50">
                              <template slot-scope="scope">
                                    <el-radio v-model="radio" :label="scope.row.radio" class="radio">&nbsp;</el-radio>
                              </template>
                            </el-table-column>
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
                      <div class="radioList">
                        新套餐生效时间：
                        <el-radio v-model="radio" label="1">下月</el-radio>
                        <el-radio v-model="radio" label="2">立即</el-radio>
                      </div>
                      <div class="nextbtn">
                        <el-button type="primary">下一步</el-button>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "PackageProcess",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          radio: "1",
          number: "1",
          name: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
          handle: "123"
        },
        {
          radio: "2",
          number: "2",
          name: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
          handle: "123"
        }
      ],
      currentPage4: 1,
      activeName: "first",
      radio: "",
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      value1: "",
      value2: ""
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
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.packageProcess {
  position: relative;
  padding: 20px 10px;
  .nextbtn {
    text-align: center;
  }
  .radioList {
    margin-top: 10px;
    font-size: 12px;
    color: #48546b;
  }
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
  .top {
    margin-bottom: 10px;
    .form-wrap {
      padding: 25px 10px 0 10px;
      background-color: #ecf0f8;
      margin-bottom: 10px;
    }
    ul {
      padding: 12px;
      li {
        &.active {
          border: 1px solid #6091fc;
        }
        color: #424e66;
        cursor: pointer;
        border: 1px solid #eaeaea;
        border-radius: 4px;
        float: left;
        padding: 5px 20px;
        font-size: 12px;
        background-color: #fff;
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
