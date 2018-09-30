<template>
  <div class="orderInquiry">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="按号码" name="first">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="输入号码：">
                        <el-input v-model="formInline.user" placeholder="请输入号码"></el-input>
                    </el-form-item>
                    <el-form-item label="订单编号：">
                        <el-input v-model="formInline.user" placeholder="请输入订单编号"></el-input>
                    </el-form-item>
                    <el-form-item label="订单类型：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="开GPRS" value="shanghai"></el-option>
                            <el-option label="停GPRS" value="shanghai"></el-option>
                            <el-option label="APN切换" value="shanghai"></el-option>
                            <el-option label="套餐修改" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="订单号码状态：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="成功" value="shanghai"></el-option>
                            <el-option label="失败" value="shanghai"></el-option>
                            <el-option label="执行中" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="提交时间：">
                        <el-date-picker
                        v-model="value13"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="办理途径：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="门户办理" value="shanghai"></el-option>
                            <el-option label="API办理" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                订单列表
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
                    prop=""
                    label="号码"
                    width="130">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单类型">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单编号">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单提交时间">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单结束时间">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单号码状态">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="办理途径">
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
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
                </el-pagination>
            </div>
        </el-tab-pane>
        <el-tab-pane label="按订单" name="second">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="订单编号：">
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="订单类型：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="开GPRS" value="shanghai"></el-option>
                            <el-option label="停GPRS" value="shanghai"></el-option>
                            <el-option label="APN切换" value="shanghai"></el-option>
                            <el-option label="套餐修改" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="订单状态：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="已完成" value="shanghai"></el-option>
                            <el-option label="执行中" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="提交时间：">
                        <el-date-picker
                        v-model="value13"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="办理途径：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="门户办理" value="shanghai"></el-option>
                            <el-option label="API办理" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                订单列表
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
                    prop=""
                    label="号码"
                    width="130">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单类型">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单编号">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单提交时间">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单结束时间">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="订单号码状态">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="办理途径">
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
                    :current-page.sync="currentPage2"
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
  name: "OrderInquiry",
  data() {
    return {
      value13: "",
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentPage1: 1,
      currentPage2: 1,
      activeName: "first"
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
    handleClick() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.orderInquiry {
  position: relative;
  padding: 20px 10px;
  .form-wrap {
    padding: 25px 10px 0 10px;
    background-color: #ecf0f8;
    margin-bottom: 10px;
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
}
</style>
