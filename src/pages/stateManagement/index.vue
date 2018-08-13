<template>
  <div class="stateManagement">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="生命周期状态变更" name="first">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="号码信息：">
                        <el-input v-model="formInline.user"></el-input>
                    </el-form-item>
                    <el-form-item label="生命周期状态：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="测试期" value="beijing"></el-option>
                            <el-option label="沉默期" value="beijing"></el-option>
                            <el-option label="库存期" value="beijing"></el-option>
                            <el-option label="正使用" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
                <ul class="btnlist clearfix">
                    <li>批量测试期激活</li>
                    <li>批量沉默期激活</li>
                    <li>批量库存期激活</li>
                </ul>
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                号码状态列表
            </h3>
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
            <ul class="btnlist clearfix">
                <li>测试期变更为沉默期</li>
                <li>测试期变更为库存期</li>
                <li>沉默期变更为正使用</li>
                <li>库存期变更为正使用</li>
            </ul>
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
        <el-tab-pane label="号码停开机" name="second">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="号码信息：">
                        <el-input v-model="formInline.user"></el-input>
                    </el-form-item>
                    <el-form-item label="生命周期状态：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="停开状态：">
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
                号码状态列表
            </h3>
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
            <ul class="btnlist clearfix">
                <li>停开</li>
            </ul>
            <div class="pagination clearfix">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage4"
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
  name: "StateManagement",
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
      currentPage3: 1,
      currentPage4: 1,
      activeName: "first",
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
      multipleSelection: []
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.stateManagement {
  position: relative;
  padding: 20px 10px;
  .form-wrap {
    padding: 25px 10px;
    background-color: #ecf0f8;
  }
  .btnlist {
    li {
      float: left;
      margin-right: 10px;
      border: 1px solid #e2e2e2;
      border-radius: 4px;
      color: #666;
      background-color: #fbfbfb;
      text-align: center;
      cursor: pointer;
      font-size: 12px;
      line-height: 24px;
      padding: 0 9px;
    }
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
