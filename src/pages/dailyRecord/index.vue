<template>
  <div class="orderInquiry">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="API调用日志" name="first">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="审批人">
                        <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="API类型：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="API方法名：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                API调用类型分析
            </h3>
            <div class="table">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop=""
                    label="月份">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="API 类型">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="API名称">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="API方法名">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="调用次数">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="失败次数(含客户原因)">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="失败次数(不含客户原因)">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="成功率（含客户原因）">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="成功率（不含客户原因）">
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
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
            </div>
        </el-tab-pane>
        <el-tab-pane label="号码调用日志" name="second">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="号码：">
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="起止时间：">
                        <el-date-picker
                        v-model="value4"
                        type="datetimerange"
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
                号码级调用日志列表
            </h3>
            <div class="table">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop=""
                    label="序号"
                    width="50">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="号码"
                    width="130">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="IP">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="API名称">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="调用时间">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="返回时间">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="调用参数">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="返回消息">
                    </el-table-column>
                </el-table>
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
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentPage4: 1,
      activeName: "first",
      value1: "",
      value4: ""
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
