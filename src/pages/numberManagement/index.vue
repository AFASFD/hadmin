<template>
  <div class="numberManagement">
      <div class="form-wrap">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="msisdn：">
                <el-input v-model="formInline.msisdn" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="iccid：">
                <el-input v-model="formInline.iccid" placeholder=""></el-input>
            </el-form-item>
            <!-- <el-form-item label="套餐名称：">
                <el-select v-model="formInline.name" placeholder="请选择">
                <el-option label="GPRS5元套餐（原子产品）" value="shanghai"></el-option>
                <el-option label="GPRS10元套餐（原子产品）" value="shanghai"></el-option>
                <el-option label="GPRS20元套餐（原子产品）" value="beijing"></el-option>
                <el-option label="GPRS30元套餐（原子产品）" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="卡类型：">
                <el-select v-model="formInline.card" placeholder="请选择">
                <el-option label="动力100" value="beijing"></el-option>
                <el-option label="物联网卡" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="APN通道：">
                <el-select v-model="formInline.apn" placeholder="请选择">
                <el-option label="CMIOT" value="beijing"></el-option>
                <el-option label="CMIOTTEST" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="生命周期：">
                <el-select v-model="formInline.life" placeholder="请选择">
                <el-option label="测试期" value="beijing"></el-option>
                <el-option label="沉默期" value="beijing"></el-option>
                <el-option label="库存期" value="beijing"></el-option>
                <el-option label="正使用" value="beijing"></el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="switchQuery">开停机查询</el-button>
            </el-form-item>
        </el-form>
      </div>
      <h3 class="title">
          <img src="../../assets/icongl.png" alt="">
          号码列表
      </h3>
      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="iccid"
            label="iccid"
            width="180">
          </el-table-column>
          <el-table-column
            prop="msisdn"
            label="msisdn"
            width="180">
          </el-table-column>
          <el-table-column
            prop="status"
            label="status">
          </el-table-column>
          <el-table-column
            prop="openTime"
            label="openTime">
          </el-table-column>
          <el-table-column
            prop="statusTime"
            label="statusTime">
          </el-table-column>
          <el-table-column
            prop="actTime"
            label="actTime">
          </el-table-column>
        </el-table>
      </div>
      <div v-if="pageCount>0" class="pagination clearfix">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="totalCount">
          </el-pagination>
      </div>
  </div>
</template>

<script>
import { member, getLocal } from "../../utils/api.js";

export default {
  name: "NumberManagement",
  data() {
    return {
      pageSize: 0,
      totalCount: 0,
      pageCount: 0,
      pageIndex: 0,
      hasNext: "",
      hasPrev: "",
      formInline: {
        msisdn: "",
        iccid: ""
      },
      tableData: [],
      currentPage: 1
    };
  },
  methods: {
    onSubmit() {
      if (this.formInline.iccid === "" && this.formInline.msisdn === "") {
        this.getMember("info.paged");
      } else {
        this.inquiryMember(this.formInline);
      }
    },
    switchQuery() {
      let obj = getLocal();
      obj = Object.assign({}, obj, this.formInline);
      obj.method = "switch.single";
      console.log(obj);
      member(obj, res => {
        console.log(res);
      });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getMember(fname, pagenum) {
      let ls = getLocal()
      let obj = {
        method: fname,
        pageNum: pagenum || 1,
        maxRows: 10
      };
      obj=Object.assign({},obj,ls)
      member(obj, res => {
        console.log(res);
        parseInt();
        let data = res.data.data;
        this.tableData = data.dataList;
        this.pageSize = parseInt(data.pageSize);
        this.totalCount = parseInt(data.totalCount);
        this.pageIndex = parseInt(data.pageIndex);
        this.pageCount = parseInt(data.pageCount);
        this.hasNext = data.hasNext;
        this.hasPrev = data.hasPrev;
        console.log(this.tableData);
      });
    },
    inquiryMember(data) {
      console.log(data);
      data = JSON.parse(JSON.stringify(data));
      Object.keys(data).forEach(key => {
        data[key] = data[key].replace(/\s+|&nbsp;/gi, "").replace(/，/gi, ",");
      });
      let obj = getLocal();
      if (
        (data.msisdn && data.msisdn.indexOf(",") !== -1) ||
        (data.iccid && data.iccid.indexOf(",") !== -1)
      ) {
        console.log("批量查询");
        data.method = "info.batch";
        data.msisdns = data.msisdn;
        data.iccids = data.iccid;
        delete data.msisdn;
        delete data.iccid;
        obj = Object.assign({}, obj, data);
        member(obj, res => {
          console.log(res);
          let data = res.data.data;
          this.tableData = data.dataList;
          this.pageSize = parseInt(data.pageSize);
          this.totalCount = parseInt(data.totalCount);
          this.pageIndex = parseInt(data.pageIndex);
          this.pageCount = parseInt(data.pageCount);
          this.hasNext = data.hasNext;
          this.hasPrev = data.hasPrev;
        });
      } else {
        console.log("单个查询");
        data.method = "info.single";
        obj = Object.assign({}, obj, data);
        member(obj, res => {
          console.log(res);
          let data = res.data.data;
          this.pageCount = 0;
          if (data) {
            this.tableData = [data];
          } else {
            this.tableData = [];
          }
          console.log(this.tableData);
        });
      }
      console.log(obj);
    }
  },
  mounted() {
    this.getMember("info.paged");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.numberManagement {
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
