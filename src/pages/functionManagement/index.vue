<template>
  <div class="functionManagement">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="上网功能" name="first">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="号码信息：">
                        <el-input v-model="formInline.user" placeholder="号码"></el-input>
                    </el-form-item>
                    <el-form-item label="功能状态：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="启用" value="shanghai"></el-option>
                            <el-option label="停用" value="shanghai"></el-option>
                            <el-option label="禁用" value="beijing"></el-option>
                        </el-select>
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="APN通道" value="shanghai"></el-option>
                            <el-option label="CMIOT" value="beijing"></el-option>
                            <el-option label="CMIOTTEST" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="套餐名称：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="GPRS5元套餐（原子产品）" value="shanghai"></el-option>
                            <el-option label="GPRS10元套餐（原子产品）" value="shanghai"></el-option>
                            <el-option label="GPRS20元套餐（原子产品）" value="shanghai"></el-option>
                            <el-option label="GPRS30元套餐（原子产品）" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="开户时间：">
                        <el-date-picker
                        v-model="value13"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="激活时间：">
                        <el-date-picker
                        v-model="value13"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="生命周期：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
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
            </div>
            <h3 class="title">
                <img src="../../assets/icongl.png" alt="">
                号码状态列表
            </h3>
            <div class="table">
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    border
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="35">
                    </el-table-column>
                    <el-table-column
                    label="号码"
                    width="130">
                        <template slot-scope="scope">
                            <span class="number" @click.stop="handleEdit(scope.$index, scope.row)">{{scope.row.msisdn}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="ICCID"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="IMEI"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="IMSI"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="开户时间"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="生命周期"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="GRPS状态"
                    :formatter="formatStr">
                    </el-table-column>
                </el-table>
            </div>
            <ul class="btnlist clearfix">
                <li>批量GPRS上网功能启用</li>
                <li>批量GPRS上网功能禁用</li>
            </ul>
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
        <el-tab-pane label="短信功能" name="second">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="查询号码：">
                        <el-input v-model="formInline.user" placeholder="号码"></el-input>
                    </el-form-item>
                    <el-form-item label="生命周期：">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="测试期" value="beijing"></el-option>
                            <el-option label="沉默期" value="beijing"></el-option>
                            <el-option label="库存期" value="beijing"></el-option>
                            <el-option label="正使用" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="功能状态：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="启用" value="shanghai"></el-option>
                            <el-option label="禁用" value="beijing"></el-option>
                        </el-select>
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="APN通道" value="shanghai"></el-option>
                            <el-option label="CMIOT" value="beijing"></el-option>
                            <el-option label="CMIOTTEST" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="套餐名称：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="短信2元套餐（标准）（原子产品）" value="shanghai"></el-option>
                            <el-option label="短信3元套餐（标准）（原子产品）" value="shanghai"></el-option>
                            <el-option label="短信5元套餐（标准）（原子产品）" value="shanghai"></el-option>
                            <el-option label="短信10元套餐（标准）（原子产品）" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="开户时间：">
                        <el-date-picker
                        v-model="value13"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="激活时间：">
                        <el-date-picker
                        v-model="value13"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
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
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    border
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="35">
                    </el-table-column>
                    <el-table-column
                    label="号码"
                    width="130">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="ICCID"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="IMEI"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="IMSI"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="开户时间"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="生命周期"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="短信功能"
                    :formatter="formatStr">
                    </el-table-column>
                </el-table>
            </div>
            <ul class="btnlist clearfix">
                <li>批量短信功能启用</li>
                <li>批量短信功能禁用</li>
            </ul>
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
        <el-tab-pane label="语音功能" name="third">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="查询号码：">
                        <el-input v-model="formInline.user" placeholder="号码"></el-input>
                    </el-form-item>
                    <el-form-item label="生命周期：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="测试期" value="beijing"></el-option>
                            <el-option label="沉默期" value="beijing"></el-option>
                            <el-option label="库存期" value="beijing"></el-option>
                            <el-option label="正使用" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="功能状态：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="启用" value="shanghai"></el-option>
                            <el-option label="禁用" value="beijing"></el-option>
                        </el-select>
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="APN通道" value="shanghai"></el-option>
                            <el-option label="CMIOT" value="shanghai"></el-option>
                            <el-option label="CMIOTTEST" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="套餐名称：">
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="全部" value="shanghai"></el-option>
                            <el-option label="物联网3元套餐" value="shanghai"></el-option>
                            <el-option label="物联网5元套餐" value="shanghai"></el-option>
                            <el-option label="物联网10元套餐" value="shanghai"></el-option>
                            <el-option label="物联网20元套餐" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="开户时间：">
                        <el-date-picker
                        v-model="value13"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="激活时间：">
                        <el-date-picker
                        v-model="value13"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['00:00:00', '23:59:59']">
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
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    border
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="35">
                    </el-table-column>
                    <el-table-column
                    label="号码"
                    width="130">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="ICCID">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="IMEI">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="IMSI">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="套餐编码">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="开户时间">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="生命周期">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="语音控制">
                    </el-table-column>
                </el-table>
            </div>
            <ul class="btnlist clearfix">
                <li>批量语音功能启用</li>
                <li>批量语音功能禁用</li>
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
    </el-tabs>
  </div>
</template>

<script>
import { formatDate, formatStr, formatNbr } from "../../utils/format.js";
export default {
  name: "FunctionManagement",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      activeName: "first",
      tableData3: [],
      multipleSelection: [],
      value13: [],
      value3: false
    };
  },
  methods: {
    formatStr: formatStr,
    formatNbr: formatNbr,
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
.functionManagement {
  position: relative;
  padding: 20px 10px;
  .form-wrap {
    padding: 25px 10px 0 10px;
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
