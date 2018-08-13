<template>
  <div class="APNManagement">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="CMIOT" name="first">
            <div class="top">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    基本信息
                </h3>
                <ul class="clearfix">
                    <li><span class='left'>共享池编号：</span><span>50114000007</span></li>
                    <li><span class='left'>总成员数：</span><span>2</span></li>
                    <li><span class='left'>组池成员数：</span><span>50114000007</span></li>
                </ul>
            </div>
            <div class="bottom">
                <h3 class="title">
                    <img src="../../assets/member_lib.png" alt="">
                    成员列表
                </h3>
                <div class="form-wrap">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="号码：">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="生命周期：">
                            <el-select v-model="formInline.region" placeholder="请选择">
                                <el-option label="全部" value="shanghai"></el-option>
                                <el-option label="测试期" value="shanghai"></el-option>
                                <el-option label="沉默期" value="shanghai"></el-option>
                                <el-option label="库存期" value="shanghai"></el-option>
                                <el-option label="正使用" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="APN状态：">
                            <el-select v-model="formInline.region" placeholder="请选择">
                                <el-option label="全部" value="shanghai"></el-option>
                                <el-option label="开" value="beijing"></el-option>
                                <el-option label="关" value="beijing"></el-option>
                            </el-select>
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
                        label="序号"
                        type="index"
                        width="50">
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
                        :current-page.sync="currentPage1"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                    </el-pagination>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="CMIOTTEST" name="second">
            <div class="top">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    基本信息
                </h3>
                <ul class="clearfix">
                    <li><span class='left'>共享池编号：</span><span>50114000007</span></li>
                    <li><span class='left'>总成员数：</span><span>2</span></li>
                    <li><span class='left'>组池成员数：</span><span>50114000007</span></li>
                </ul>
            </div>
            <div class="bottom">
                <h3 class="title">
                    <img src="../../assets/member_lib.png" alt="">
                    成员列表
                </h3>
                <div class="form-wrap">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="号码：">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="生命周期：">
                            <el-select v-model="formInline.region" placeholder="请选择">
                                <el-option label="全部" value="shanghai"></el-option>
                                <el-option label="测试期" value="shanghai"></el-option>
                                <el-option label="沉默期" value="shanghai"></el-option>
                                <el-option label="库存期" value="shanghai"></el-option>
                                <el-option label="正使用" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="APN状态：">
                            <el-select v-model="formInline.region" placeholder="请选择">
                                <el-option label="全部" value="shanghai"></el-option>
                                <el-option label="开" value="beijing"></el-option>
                                <el-option label="关" value="beijing"></el-option>
                            </el-select>
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
                        :current-page.sync="currentPage2"
                        :page-size="100"
                        layout="prev, pager, next, jumper"
                        :total="1000">
                    </el-pagination>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "APNManagement",
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
.APNManagement {
  position: relative;
  padding: 20px 10px;
  .top {
    ul {
      font-size: 12px;
      li {
        float: left;
        width: 33.33%;
        padding: 15px 10px;
        .left {
          display: inline-block;
          width: 30%;
          text-align: right;
        }
      }
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
