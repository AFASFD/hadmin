<template>
  <div class="flowaManagement">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="流量共享池1" name="first">
            <div class="top">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    基本信息
                </h3>
                <ul class="clearfix">
                    <li><span class='left'>共享池编号：</span><span>50114000007</span></li>
                    <li><span class='left'>总成员数：</span><span>2</span></li>
                    <li><span class='left'>组池成员数：</span><span>50114000007</span></li>
                    <li><span class='left'>套餐编号：</span><span>50114000007</span></li>
                    <li><span class='left'>组池套餐：</span><span>GPRS中小流量新3元套餐（原子产品）</span></li>
                    <li><span class='left'>APN通道：</span><span>50114000007</span></li>
                    <li><span class='left'>总流量：</span><span>50114000007</span></li>
                    <li><span class='left'>已使用流量：</span><span>50114000007</span></li>
                    <li><span class='left'>剩余流量：</span><span>50114000007</span></li>
                    <li><span class='left'>开启扩容包：</span><span>50114000007</span></li>
                    <li><span class='left'>使用扩容包：</span><span>50114000007</span></li>
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
                          <el-input v-model="formInline.user" placeholder="套餐名称/号码"></el-input>
                      </el-form-item>
                      <el-form-item label="生命周期状态：">
                          <el-select v-model="formInline.region" placeholder="请选择">
                              <el-option label="测试期" value="shanghai"></el-option>
                              <el-option label="沉默期" value="shanghai"></el-option>
                              <el-option label="库存期" value="shanghai"></el-option>
                              <el-option label="正使用" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="组池成员：">
                          <el-select v-model="formInline.region" placeholder="请选择">
                              <el-option label="是" value="shanghai"></el-option>
                              <el-option label="否" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item>
                          <el-button type="primary" @click="onSubmit">查询</el-button>
                      </el-form-item>
                  </el-form>
              </div>
            </div>
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
        <el-tab-pane label="流量共享池2" name="second">
            <div class="top">
                <h3 class="title">
                    <img src="../../assets/option_log_list_icon.png" alt="">
                    基本信息
                </h3>
                <ul class="clearfix">
                    <li><span class='left'>共享池编号：</span><span>50114000007</span></li>
                    <li><span class='left'>总成员数：</span><span>2</span></li>
                    <li><span class='left'>组池成员数：</span><span>50114000007</span></li>
                    <li><span class='left'>套餐编号：</span><span>50114000007</span></li>
                    <li><span class='left'>组池套餐：</span><span>GPRS中小流量新3元套餐（原子产品）</span></li>
                    <li><span class='left'>APN通道：</span><span>50114000007</span></li>
                    <li><span class='left'>总流量：</span><span>50114000007</span></li>
                    <li><span class='left'>已使用流量：</span><span>50114000007</span></li>
                    <li><span class='left'>剩余流量：</span><span>50114000007</span></li>
                    <li><span class='left'>开启扩容包：</span><span>50114000007</span></li>
                    <li><span class='left'>使用扩容包：</span><span>50114000007</span></li>
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
                          <el-input v-model="formInline.user" placeholder="套餐名称/号码"></el-input>
                      </el-form-item>
                      <el-form-item label="生命周期状态：">
                          <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="测试期" value="shanghai"></el-option>
                            <el-option label="沉默期" value="shanghai"></el-option>
                            <el-option label="库存期" value="shanghai"></el-option>
                            <el-option label="正使用" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item label="组池成员：">
                          <el-select v-model="formInline.region" placeholder="请选择">
                              <el-option label="是" value="shanghai"></el-option>
                              <el-option label="否" value="beijing"></el-option>
                          </el-select>
                      </el-form-item>
                      <el-form-item>
                          <el-button type="primary" @click="onSubmit">查询</el-button>
                      </el-form-item>
                  </el-form>
              </div>
            </div>
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
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "FlowaManagement",
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
      activeName: "first",
      aname: "week"
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
    getWeek() {
      this.aname = "week";
    },
    getMonth() {
      this.aname = "month";
    },
    getOther() {
      this.aname = "other";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.flowaManagement {
  position: relative;
  padding: 20px 10px;
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
  .bottom {
    .form-wrap {
      margin-top: 10px;
      padding: 25px 10px 0 10px;
      background-color: #ecf0f8;
      margin-bottom: 10px;
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
