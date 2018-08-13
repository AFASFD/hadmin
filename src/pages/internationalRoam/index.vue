<template>
  <div class="internationalRoam">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="功能管理" name="first">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="查询号码：">
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="APN通道：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="套餐选择：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="生命周期：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="国漫功能状态：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="开户时间：">
                    <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    </el-form-item>
                    <el-form-item label="激活时间：">
                    <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                号码状态列表
            </h3>
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
                    <el-table-column
                    label="国漫功能"
                    width="80">
                    <template slot-scope="scope">
                        <el-switch
                        v-model="scope.row.value"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        @change="handleChange(scope.row)">
                        </el-switch>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="上网功能"
                    width="80">
                    <template slot-scope="scope">
                        <el-switch
                        v-model="scope.row.value"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        @change="handleChange(scope.row)">
                        </el-switch>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="短信功能"
                    width="80">
                    <template slot-scope="scope">
                        <el-switch
                        v-model="scope.row.value"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        @change="handleChange(scope.row)">
                        </el-switch>
                    </template>
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
        <el-tab-pane label="套餐配置" name="second">
            <h3 class="title">
                <img src="../../assets/option_log_list_icon.png" alt="">
                套餐配置情况
            </h3>
            <div class="table">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    type="index"
                    width="50"
                    label="序号">
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
        <el-tab-pane label="套餐查询" name="third">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="查询号码：">
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="APN通道：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="套餐选择：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="生命周期：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="套餐状态：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="开户时间：">
                    <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    </el-form-item>
                    <el-form-item label="激活时间：">
                    <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                号码套餐列表
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
        <el-tab-pane label="套餐订购" name="fourth">
            <div class="top">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    选号码
                </h3>
                <div class="form-wrap">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item>
                            <el-select v-model="formInline.region" placeholder="生命周期状态">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="formInline.region" placeholder="套餐">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="formInline.region" placeholder="APN通道">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
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
            <div class="bottom">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    选套餐
                </h3>
                <el-tabs type="border-card">
                  <el-tab-pane label="定向流量月包">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item>
                                  <el-input v-model="formInline.user" placeholder="套餐编号/名称"></el-input>
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
                        <div class="radioList">
                            新套餐生效时间：
                            <el-radio v-model="radio" label="1">下月</el-radio>
                            <el-radio v-model="radio" label="2">立即</el-radio>
                        </div>
                        <div class="nextbtn">
                            <el-button type="primary">订购</el-button>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="通用流量月包">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item>
                                  <el-input v-model="formInline.user" placeholder="套餐编号/名称"></el-input>
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
                        <div class="radioList">
                            新套餐生效时间：
                            <el-radio v-model="radio" label="1">下月</el-radio>
                            <el-radio v-model="radio" label="2">立即</el-radio>
                        </div>
                        <div class="nextbtn">
                            <el-button type="primary">订购</el-button>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="流量月包">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item>
                                  <el-input v-model="formInline.user" placeholder="套餐编号/名称"></el-input>
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
                        <div class="radioList">
                            新套餐生效时间：
                            <el-radio v-model="radio" label="1">下月</el-radio>
                            <el-radio v-model="radio" label="2">立即</el-radio>
                        </div>
                        <div class="radioList">
                            新套餐有效期至：
                            <el-radio v-model="radio1" label="1">永久</el-radio>
                            <el-radio v-model="radio1" label="2">自定义</el-radio>
                        </div>
                        <div class="nextbtn">
                            <el-button type="primary">订购</el-button>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
            </div>
        </el-tab-pane>
        <el-tab-pane label="套餐修改" name="fifth">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="号码信息：">
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="套餐编号：">
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="生命周期：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="生效时间：">
                    <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    </el-form-item>
                    <el-form-item label="失效时间：">
                    <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                套餐配置情况
            </h3>
            <div class="table">
                <el-table
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
        </el-tab-pane>
        <el-tab-pane label="套餐退订" name="sixth">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="号码信息：">
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="套餐编号：">
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="生命周期：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="生效时间：">
                    <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    </el-form-item>
                    <el-form-item label="失效时间：">
                    <el-date-picker
                    v-model="value6"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
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
            <div class="table">
                <el-table
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
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "InternationalRoam",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData3: [
        {
          number: "1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          handle: "123",
          value: true
        }
      ],
      currentPage4: 1,
      activeName: "first",
      radio: "",
      radio1: ""
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
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.internationalRoam {
  position: relative;
  padding: 20px 10px;
  .form-wrap {
    padding: 25px 10px 0 10px;
    background-color: #ecf0f8;
  }
  .nextbtn {
    text-align: center;
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
  .radioList {
    margin-top: 10px;
    font-size: 12px;
    color: #48546b;
  }
  .table {
    margin-bottom: 10px;
  }
  .el-pagination {
    float: right;
  }
}
</style>
