<template>
  <div class="userManagement">
      <div class="edit-wrap clearfix" :class="{active: detailsisHidden}">
            <div class="userdetails fix">
                <h1 class="clearfix">用户详情<span @click="hiddenDetails">X</span></h1>
                <ul class="clearfix">
                    <li><span class="left">登录账号</span><span class="right">{{details.number}}</span></li>
                    <li><span class="left">状态</span><span class="right">1231231231233</span></li>
                    <li><span class="left">用户名称</span><span class="right">{{details.name}}</span></li>
                    <li><span class="left">用户标记</span><span class="right">1231231231233</span></li>
                    <li><span class="left">移动电话</span><span class="right">1231231231233</span></li>
                    <li><span class="left">创建日期</span><span class="right">1231231231233</span></li>
                    <li><span class="left">电子邮箱</span><span class="right">1231231231233</span></li>
                    <li><span class="left">修改日期</span><span class="right">1231231231233</span></li>
                    <li><span class="left">性别</span><span class="right">1231231231233</span></li>
                    <li><span class="left">最近访问日期</span><span class="right">1231231231233</span></li>
                    <li><span class="left">备注</span><span class="right">1231231231233</span></li>
                </ul>
            </div>
      </div>
      <div class="edit-wrap clearfix" :class="{active: editisHidden}">
          <div class="edit fix">
              <h1 class="clearfix">创建或修改人员<span @click="hiddenEdit">X</span></h1>
              <ul>
                  <li class="clearfix">
                      <span>
                        部门名称:
                      </span>
                      <el-input v-model="editData.name"></el-input>
                  </li>
                  <li class="clearfix">
                      <span>
                        部门编号:
                      </span>
                      <el-input v-model="editData.number"></el-input>
                  </li>
                  <el-button type="primary" @click="addUser">提交</el-button>
              </ul>
          </div>
      </div>
      <div class="edit-wrap clearfix" :class="{active: powerisHidden}">
          <div class="power fix">
              <h1 class="clearfix">编辑部门权限<span @click="hiddenPower">X</span></h1>
              <ul>
                  <li class="clearfix">
                      <span class="left">登录账号:</span><span class="right">2000188888</span>
                  </li>
                  <li class="clearfix">
                      <span class="left">
                        部门编号:
                      </span>
                      <el-tree
                        class="right"
                        :data="data2"
                        show-checkbox
                        node-key="id"
                        ref="tree"
                        :props="defaultProps">
                        </el-tree>
                  </li>
                      <el-button type="primary" @click="powerSubmit">提交</el-button>
              </ul>
          </div>
      </div>
      <div class="edit-wrap clearfix" :class="{active: passwordisHidden}">
          <div class="password fix">
              <h1 class="clearfix">修改用户密码<span @click="hiddenPassword">X</span></h1>
              <ul>
                  <li class="clearfix">
                      <span class="left">登录账号:</span><span class="right">2000188888</span>
                  </li>
                  <li class="clearfix">
                      <span class="left">用户名称:</span><span class="right">陈艺蓝</span>
                  </li>
                  <li class="clearfix">
                      <span class="left">
                        新密码:
                      </span>
                      <el-input v-model="editPassword.number" class="right"></el-input>
                  </li>
                  <li class="clearfix">
                      <span class="left">
                        确认密码:
                      </span>
                      <el-input v-model="editPassword.confirmNumber" class="right"></el-input>
                  </li>
                  <el-button type="primary" @click="submitPassword">提交</el-button>
              </ul>
          </div>
      </div>
      <div class="form-wrap">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="登录账户">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="用户名称">
                <el-input v-model="formInline.user" placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="createuser">新增用户</el-button>
            </el-form-item>
        </el-form>
      </div>
      <h3 class="title">
          <img src="../../assets/member_lib.png" alt="">
          用户列表
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
            prop="number"
            label="登录账号"
            width="130">
            </el-table-column>
            <el-table-column
            prop="name"
            label="用户名称">
            </el-table-column>
            <el-table-column
            prop="bs"
            label="用户标识">
            </el-table-column>
            <el-table-column
            prop="phone"
            label="联系电话">
            </el-table-column>
            <el-table-column
            prop="email"
            label="电子邮箱">
            </el-table-column>
            <el-table-column 
            label="操作"
            width="440">
              <template slot-scope="scope">
                  <el-button
                  size="mini"
                  @click="handleDetails(scope.$index, scope.row)">用户详情</el-button>
                  <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                  size="mini"
                  @click="handlePower(scope.$index, scope.row)">部门权限</el-button>
                  <el-button
                  size="mini"
                  @click="handlePassword(scope.$index, scope.row)">修改密码</el-button>
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
  name: "UserManagement",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          number: 1,
          name: 2,
          bs: 3,
          phone: 4,
          eamil: 5
        },{
          number: 2,
          name: 2,
          bs: 3,
          phone: 4,
          eamil: 5
        }
      ],
      data2: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      currentPage: 1,
      addUserData: {},
      editData: {},
      details: {},
      editPassword: {},
      editisHidden: false,
      detailsisHidden: false,
      powerisHidden: false,
      passwordisHidden: false
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
      this.editisHidden = true;
    },
    hiddenEdit() {
      this.editisHidden = false;
    },
    handleDetails(index, row) {
      this.details = row;
      this.detailsisHidden = true;
    },
    hiddenDetails() {
      this.detailsisHidden = false;
    },
    handlePower() {
      this.powerisHidden = true;
    },
    handleDelete(index, row) {
      if(row===this.tableData[index]){
        this.tableData.splice(index,1)
      }
    },
    hiddenPower() {
      this.powerisHidden = false;
    },
    handlePassword(index,row) {
      this.passwordisHidden = true;
      this.editData=row
      this.editPassword={}
    },
    hiddenPassword() {
      this.passwordisHidden = false;
    },
    powerSubmit() {
      console.log(this.$refs.tree.getCheckedNodes());
    },
    createuser() {
      this.editData = {};
      this.editisHidden = true;
    },
    addUser() {
      this.tableData.push(JSON.parse(JSON.stringify(this.editData)));
      this.editData = {};
      this.editisHidden = false;
    },
    submitPassword(){
      console.log(this.editData)
      this.passwordisHidden = false;
      this.editPassword={}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.userManagement {
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
    .fix {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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
    }
    .edit {
      width: 500px;
      height: 427px;
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
            // width: 200px;
            height: 30px;
          }
        }
      }
    }
    .userdetails {
      width: 800px;
      height: 300px;
      ul {
        padding: 15px;
        li {
          width: 49%;
          float: left;
          &:nth-child(odd) {
            margin-right: 2%;
          }
          .left {
            display: inline-block;
            width: 50%;
            text-align: right;
            border: 1px solid #dcdcdc;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-right: 20px;
          }
          .right {
            display: inline-block;
            width: 50%;
            text-align: center;
            border: 1px solid #dcdcdc;
            border-left: none;
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      }
    }
    .power {
      width: 500px;
      height: 350px;
      overflow-y: scroll;
      text-align: center;
      ul {
        padding: 15px;
        li {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 15px;
          line-height: 40px;
          .left {
            width: 30%;
            text-align: right;
            float: left;
            margin-right: 2%;
          }
          .right {
            width: 68%;
            text-align: center;
            float: left;
          }
        }
      }
    }
    .password {
      width: 500px;
      height: 350px;
      text-align: center;
      ul {
        padding: 15px;
        li {
          width: 80%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 15px;
          line-height: 40px;
          .left {
            width: 30%;
            text-align: right;
            float: left;
            margin-right: 2%;
          }
          .right {
            width: 68%;
            text-align: center;
            float: left;
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
