<template>
  <div class="roleManagement">
      <div class="edit-wrap clearfix" :class="{active: isHidden}">
          <div class="edit">
              <h1 class="clearfix">创建或修改角色<span @click="hiddenEdit">X</span></h1>
              <ul>
                  <li class="clearfix">
                      <span>
                        角色名称:
                      </span>
                      <el-input v-model="editData.name"></el-input>
                  </li>
                  <li class="clearfix">
                      <span>
                        部门编号:
                      </span>
                      <el-input v-model="editData.number"></el-input>
                  </li>
                      <el-button type="primary">提交</el-button>
              </ul>
          </div>
      </div>
      <div class="form-wrap">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="角色名称：">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="createrole">新增角色</el-button>
            </el-form-item>
        </el-form>
      </div>
      <h3 class="title">
          <img src="../../assets/idao.png" alt="">
          角色列表
      </h3>
      <div class="table">
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop=""
            label="编号">
            </el-table-column>
            <el-table-column
            prop=""
            label="角色名称">
            </el-table-column>
            <el-table-column
            prop=""
            label="状态">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
      </div>
      <div class="pagination clearfix">
          <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
  name: "RoleManagement",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      currentPage: 1,
      editData: {},
      isHidden: false
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
    handleEdit(index, row) {
      this.editData = row;
      this.isHidden = true;
    },
    hiddenEdit() {
      this.isHidden = false;
    },
    createrole() {
      this.editData = {};
      this.isHidden = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.roleManagement {
  position: relative;
  padding: 20px 10px;
  .edit-wrap {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    &.active {
      display: block;
      z-index: 10;
    }
    .edit {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      height: 427px;
      border-radius: 5px;
      background-color: #ffffff;
      z-index: 5;
      h1 {
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #a0bdfd;
        span {
          cursor: pointer;
          float: right;
          margin-right: 10px;
        }
      }
      ul {
        padding-top: 30px;
        text-align: center;
        li {
          margin-bottom: 15px;
          margin-left: auto;
          margin-right: auto;
          width: 60%;
          span {
            float: left;
            line-height: 30px;
            margin-right: 20px;
          }
          .el-input {
            width: 200px;
            float: left;
          }
          .el-input__inner {
            height: 30px;
          }
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
