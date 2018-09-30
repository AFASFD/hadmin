<template>
  <div class="memberBill">
      <div class="form-wrap">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="号码：">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="提交时间：">
              <el-date-picker
                v-model="submitTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="付费类型：">
                <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="费用区间：" class="a">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                <span>-</span>
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                <span>元</span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
      </div>
      <h3 class="title">
          <img src="../../assets/icongl.png" alt="">
          付费列表
      </h3>
      <div class="table">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop=""
            label="月份"
            width="">
            </el-table-column>
            <el-table-column
            prop=""
            label="号码"
            width="130">
            </el-table-column>
            <el-table-column
            prop=""
            label="总费用(元)">
            </el-table-column>
            <el-table-column
            prop=""
            label="是否纳入企业代付">
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
  </div>
</template>

<script>
export default {
  name: "MemberBill",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      submitTime: ''
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
.memberBill {
  position: relative;
  padding: 20px 10px;
  .a {
    .el-input {
      width: 60px;
      float: left;
    }
    span {
      float: left;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
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
