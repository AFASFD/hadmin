<template>
  <div class="operationLog">
      <div class="form-wrap">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="登录账号：">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="用户名称：">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="开始时间(≥):">
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间(≤):">
                <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
      </div>
      <h3 class="title">
          <img src="../../assets/option_log_list_icon.png" alt="">
          操作日志列表
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
  </div>
</template>

<script>
export default {
  name: "OperationLog",
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.operationLog {
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
}
</style>
