<template>
  <div class="workOrder">
      <div class="form-wrap">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="工单编号：">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="工单标题：">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="工单类型：">
                <el-select v-model="formInline.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="工单状态：">
                <el-select v-model="formInline.region" placeholder="请选择">
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
          工单列表
      </h3>
      <div class="table">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop=""
            label="工单编号">
            </el-table-column>
            <el-table-column
            prop=""
            label="工单名称">
            </el-table-column>
            <el-table-column
            prop=""
            label="类型">
            </el-table-column>
            <el-table-column
            prop=""
            label="提交时间">
            </el-table-column>
            <el-table-column
            prop=""
            label="提交人">
            </el-table-column>
            <el-table-column
            prop=""
            label="当前处理人">
            </el-table-column>
            <el-table-column
            prop=""
            label="工单状态">
            </el-table-column>
            <el-table-column
            prop=""
            label="操作">
            </el-table-column>
        </el-table>
      </div>
  </div>
</template>

<script>
export default {
  name: "WorkOrder",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentPage4: 1
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
.workOrder {
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
