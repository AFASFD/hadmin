<template>
  <div class="messageSend">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="短信发送" name="first">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="号码：">
                        <el-input v-model="formInline.nbr" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="短信内容：">
                        <el-input v-model="formInline.cnt" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="发送状态：">
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
                发送列表
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
                    label="短信类型">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="短信内容">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="发送时间">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="发送状态">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="终端接收状态">
                    </el-table-column>
                </el-table>
            </div>
        </el-tab-pane>
        <el-tab-pane label="短信接收" name="second">
            <div class="form-wrap">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="号码：">
                        <el-input v-model="formInline.nbr" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="短信内容：">
                        <el-input v-model="formInline.cnt" placeholder=""></el-input>
                    </el-form-item>
                    <el-form-item label="接收时间：">
                        <el-date-picker
                        v-model="value1"
                        type="daterange"
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
                    label="回复号码"
                    width="130">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="短信内容">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="接收时间">
                    </el-table-column>
                </el-table>
            </div>
        </el-tab-pane>
        <el-tab-pane label="接入配置" name="third">
            <div class="setConfig">
                <div class="form-wrap">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="短信接入码：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="业务代码：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="短信签名：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="短信登录名：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="短信密码：">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="短信内容：">
                            <el-select v-model="form.region" placeholder="请选择">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <p>* 除短信内容外,其他信息首次确定后不能修改,请确保信息无误再提交</p>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">确定</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "MessageSend",
  data() {
    return {
      formInline: {
        nbr: "",
        cnt: ""
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      tableData: [],
      activeName: "first",
      value1: []
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
<style lang='scss'>
.messageSend {
  position: relative;
  padding: 20px 10px;
  .form-wrap {
    padding: 25px 10px 25px 10px;
    background-color: #ecf0f8;
    p {
      font-size: 12px;
      margin-left: 100px;
      margin-bottom: 10px;
      color: #ff0002;
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
  .setConfig {
    .el-form-item__label {
      width: 100px !important;
      text-align: right;
    }
    .el-input__inner {
      width: 500px;
    }
    .el-form-item__content {
      float: left;
      margin-left: 0 !important;
    }
    .el-button {
      margin-left: 100px;
    }
  }
}
</style>
