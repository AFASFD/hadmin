<template>
  <div class="setmealManagement">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="套餐配置" name="first">
            <div class="top">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    套餐配置情况
                </h3>
                <ul class="clearfix">
                    <li :class="{active: aname==='week'}" @click="getWeek">长周期包</li>
                    <li :class="{active: aname==='month'}" @click="getMonth">月包</li>
                    <li :class="{active: aname==='other'}" @click="getOther">加油包</li>
                    <li :class="{active: aname==='marketing'}" @click="getMarketing">营销包</li>
                </ul>
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
                    :current-page.sync="currentPage1"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
                </el-pagination>
            </div>
        </el-tab-pane>
        <el-tab-pane label="套餐查询" name="second">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="号码信息：">
                        <el-input v-model="formInline.user" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="套餐名称：">
                        <el-select v-model="formInline.region" placeholder="选择套餐名称">
                            <el-option label="短信2元套餐（标准）（原子产品）" value="shanghai"></el-option>
                            <el-option label="短信3元套餐（标准）（原子产品）" value="shanghai"></el-option>
                            <el-option label="短信5元套餐（标准）（原子产品）" value="shanghai"></el-option>
                            <el-option label="短信10元套餐（标准）（原子产品）" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="套餐编码：">
                        <el-input v-model="formInline.user" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="套餐通道：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="专用通道" value="shanghai"></el-option>
                            <el-option label="通用通道" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="套餐类型：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="测试期套餐" value="shanghai"></el-option>
                            <el-option label="闲时流量套餐" value="shanghai"></el-option>
                            <el-option label="月套餐" value="shanghai"></el-option>
                            <el-option label="季包" value="beijing"></el-option>
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
  name: "SetMealManagement",
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
      activeName: "first",
      aname: "week"
    };
  },
  watch: {
    aname: function(val) {}
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
    getWeek() {
      this.aname = "week";
    },
    getMonth() {
      this.aname = "month";
    },
    getOther() {
      this.aname = "other";
    },
    getMarketing() {
      this.aname = "marketing";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.setmealManagement {
  position: relative;
  padding: 20px 10px;
  .form-wrap {
    padding: 25px 10px 0 10px;
    background-color: #ecf0f8;
    margin-bottom: 10px;
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
