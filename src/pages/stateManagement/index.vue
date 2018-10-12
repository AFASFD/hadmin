<template>
  <div class="stateManagement">
    <div class="edit-wrap clearfix" :class="{active: isHidden}">
        <div class="edit">
            <h1 class="clearfix">号码查询<span class="close" @click.stop="hiddenEdit">X</span></h1>
            <div class="cc">  
                <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                    <el-tab-pane label="综合信息" name="first-child">
                        <h3 class="title">
                            <img src="../../assets/m03.png" alt="">
                            卡号信息
                        </h3>
                        <ul class="clearfix">
                        <li><span class='left'>卡号:</span><span>{{currentData.msisdn}}</span></li>
                        <li><span class='left'>ICCID:</span><span>{{currentData.iccid}}</span></li>
                        <li><span class='left'>生命周期:</span><span>{{currentData.status}}</span></li>
                        <li><span class='left'>IMEI:</span><span>{{currentData.imei}}</span></li>
                        <li><span class='left'>IMSI:</span><span>{{currentData.imsi}}</span></li>
                        <li><span class='left'>开户时间:</span><span>{{currentData.openTime}}</span></li>
                        <li><span class='left'>变更时间:</span><span>{{currentData.statusTime}}</span></li>
                        </ul>
                        <h3 class="title">
                            <img src="../../assets/m04.png" alt="">
                            功能状态
                        </h3>
                        <ul class="clearfix">
                        <li><span class='left'>GPRS功能:</span><span>{{currentData.msisdn}}</span></li>
                        <li><span class='left'>短信功能:</span><span>{{currentData.iccid}}</span></li>
                        <li><span class='left'>语音功能:</span><span>{{currentData.status}}</span></li>
                        </ul>
                        <h3 class="title">
                            <img src="../../assets/option_log_list_icon.png" alt="">
                            资费计划
                        </h3>
                        <p class="balance">可用余额: {{currentData.iccid}} 元</p>
                        <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop=""
                            label="资费类型"
                            width="130"
                            :formatter="formatStr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="本月总套餐资源"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="本月已用资源"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="本月剩余套餐内资源"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="本月套餐外使用资源"
                            :formatter="formatNbr">
                        </el-table-column>
                        </el-table>
                        <h3 class="title">
                            <img src="../../assets/member_lib.png" alt="">
                            用量套餐
                        </h3>
                        <el-tabs v-model="activeName3" type="card">
                            <el-tab-pane label="流量" name="firstcc">
                            <el-table
                                :data="tableData"
                                border
                                style="width: 100%">
                                <el-table-column
                                prop=""
                                label="序号"
                                width="50"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐名称"
                                :formatter="formatStr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐内免费资源（MB）"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="已用资源（MB）"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="剩余资源（MB）"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="APN名称"
                                :formatter="formatStr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐生效时间"
                                :formatter="formatStr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐失效时间"
                                :formatter="formatStr">
                                </el-table-column>
                            </el-table>
                            </el-tab-pane>
                            <el-tab-pane label="短信" name="secondcc">
                            <el-table
                                :data="tableData"
                                border
                                style="width: 100%">
                                <el-table-column
                                prop=""
                                label="序号"
                                width="50"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="编号"
                                width="50"
                                :formatter="formatStr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐名称"
                                width="150"
                                :formatter="formatStr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="总资源(条)"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="已用"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="剩余"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐生效时间"
                                :formatter="formatStr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐失效时间"
                                :formatter="formatStr">
                                </el-table-column>
                            </el-table>
                            </el-tab-pane>
                            <el-tab-pane label="语音" name="thirdcc">
                            <el-table
                                :data="tableData"
                                border
                                style="width: 100%">
                                <el-table-column
                                prop=""
                                label="序号"
                                width="50"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="编号"
                                width="50"
                                :formatter="formatStr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐名称"
                                width="150"
                                :formatter="formatStr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="总资源(Min)"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="已用"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="剩余"
                                :formatter="formatNbr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐生效时间"
                                :formatter="formatStr">
                                </el-table-column>
                                <el-table-column
                                prop=""
                                label="套餐失效时间"
                                :formatter="formatStr">
                                </el-table-column>
                            </el-table>
                            </el-tab-pane>
                        </el-tabs>
                    </el-tab-pane>
                    <el-tab-pane label="流量信息" name="second-child">
                        <h3 class="title">
                            <img src="../../assets/member_lib.png" alt="">
                            成员流量使用趋势
                        </h3>
                        <div id="flowMessage" style="width: 100%;height:300px;"></div>
                        <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop=""
                            label="月份"
                            width="70"
                            :formatter="formatStr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="通用APN已使用总流量"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="专用APN1已使用总流量"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="专用APN2已使用总流量"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="专用APN3已使用总流量"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="专用APN4已使用总流量"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="专用APN5已使用总流量"
                            :formatter="formatNbr">
                        </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="短信信息" name="third-child">
                        <h3 class="title">
                            <img src="../../assets/member_lib.png" alt="">
                            近六个月短信发送趋势
                        </h3>
                        <div id="SMS" style="width: 100%;height:300px;"></div>
                        <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop=""
                            label="月份"
                            :formatter="formatStr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="短信总条数"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="已发送短信条数"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="剩余短信条数"
                            :formatter="formatNbr">
                        </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="语音信息" name="fourth-child">
                        <h3 class="title">
                            <img src="../../assets/member_lib.png" alt="">
                            近六个月语音时长趋势（分钟）
                        </h3>
                        <div id="voiceMessage" style="width: 100%;height:300px;"></div>
                        <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop=""
                            label="月份"
                            :formatter="formatStr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="套餐通话总量"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="本月呼出时长"
                            :formatter="formatNbr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="本月呼入时长"
                            :formatter="formatNbr">
                        </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="APN详情" name="fifth-child">
                        <h3 class="title">
                            <img src="../../assets/icongl.png" alt="">
                            APN详情
                        </h3>
                        <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column
                            prop=""
                            label="APN名称"
                            :formatter="formatStr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="APN类型"
                            :formatter="formatStr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="ServiceCode名称"
                            :formatter="formatStr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="ServiceCode"
                            :formatter="formatStr">
                        </el-table-column>
                        <el-table-column
                            prop=""
                            label="ServiceCode使用量(MB)"
                            :formatter="formatNbr">
                        </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
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
                <!-- <ul class="btnlist clearfix">
                    <li>批量测试期激活</li>
                    <li>批量沉默期激活</li>
                    <li>批量库存期激活</li>
                </ul> -->
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
                    prop="imsi"
                    label="IMSI"
                    width="150"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop="iccid"
                    label="ICCID"
                    width="190"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="IMEI"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop="status"
                    label="生命周期状态"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop="openTime"
                    label="开户时间"
                    width="170"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop="actTime"
                    label="激活时间"
										width="170"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="测试期到期时间"
										width="170"
                    :formatter="formatStr">
                    </el-table-column>
                </el-table>
            </div>
            <!-- <ul class="btnlist clearfix">
                <li>测试期变更为沉默期</li>
                <li>测试期变更为库存期</li>
                <li>沉默期变更为正使用</li>
                <li>库存期变更为正使用</li>
            </ul> -->
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
                    prop="status"
                    label="生命周期状态"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="停开状态	"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop="openTime"
                    label="开户时间"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="激活时间"
                    :formatter="formatStr">
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
        <el-tab-pane label="预约停开管理" name="third">
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
                    prop="status"
                    label="生命周期状态"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="停开状态	"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="预约停开状态"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="预约生效时间"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="开户时间"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="激活时间"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="操作"
                    width="80"
                    :formatter="formatStr">
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
        <el-tab-pane label="预约日志" name="fourth">
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
                    prop="status"
                    label="生命周期状态"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="变更后状态"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="预约停开状态"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="预约生效时间"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="提交时间"
                    :formatter="formatStr">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="处理结果"
                    :formatter="formatStr">
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
var echarts = require("echarts");
import { member, getLocal } from "../../utils/api.js";
import { formatDate, formatStr, formatNbr } from "../../utils/format.js";

export default {
  name: "StateManagement",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      currentData: [],
      currentPage3: 1,
      currentPage4: 1,
      activeName: "first",
      activeName2: "first-child",
      activeName3: "firstcc",
      tableData: [],
      multipleSelection: [],
      isHidden: false
    };
  },
  watch: {
    activeName2: function(n) {
      if (n === "second-child") {
        setTimeout(() => {
          this.setFlowMessage();
        }, 1);
      } else if (n === "third-child") {
        setTimeout(() => {
          this.setSMS();
        }, 1);
      } else if (n === "fourth-child") {
        setTimeout(() => {
          this.setVoiceMessage();
        }, 1);
      }
    }
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
    },
    handleEdit(index, row) {
      this.currentData = row;
      this.isHidden = true;
      setTimeout(() => {
        $(document).one("click", () => {
          this.isHidden = false;
          this.activeName2 = "first-child";
        });
      }, 0);
    },
    hiddenEdit() {
      this.isHidden = false;
      this.activeName2 = "first-child";
    },
    bindEvents() {
      document.querySelector(".edit").addEventListener("click", e => {
        e.stopPropagation();
      });
		},
    getFirstMember(pagenum) {
      let ls = getLocal();
      let obj = {
        method: "info.paged",
        pageNum: pagenum || 1,
				maxRows: 10
      };
      obj = Object.assign({}, obj, ls);
      member(obj, res => {
        let data = res.data.data;
        if(data){
          for (let i = 0; i < data.dataList.length; i++) {
            data.dataList[i]["openTime"] = formatDate(
              data.dataList[i]["openTime"]
            );
            data.dataList[i]["statusTime"] = formatDate(
              data.dataList[i]["statusTime"]
            );
          }
          this.tableData = data.dataList;
          this.pageSize = parseInt(data.pageSize);
          this.totalCount = parseInt(data.totalCount);
          this.pageIndex = parseInt(data.pageIndex);
          this.pageCount = parseInt(data.pageCount);
          this.hasNext = data.hasNext;
					this.hasPrev = data.hasPrev;
        }
      });
    },
    setFlowMessage() {
			var fm = echarts.init(document.getElementById("flowMessage"));
      fm.setOption({
        title: {
          text: "流量MB"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            data: [0, 0, 0, 2, 0, 0, 0],
            smooth: true
          },
          {
            name: "联盟广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "视频广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "直接访问",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "搜索引擎",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          }
        ]
      });
    },
    setSMS() {
      var c = echarts.init(document.getElementById("SMS"));
      c.setOption({
        title: {
          text: "条数"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "联盟广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "视频广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "直接访问",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "搜索引擎",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          }
        ]
      });
    },
    setVoiceMessage() {
      var fm = echarts.init(document.getElementById("voiceMessage"));
      fm.setOption({
        title: {
          text: "分钟"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "联盟广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "视频广告",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "直接访问",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          },
          {
            name: "搜索引擎",
            type: "line",
            data: [0, 0, 0, 0, 0, 0, 0],
            smooth: true
          }
        ]
      });
    }
  },
  mounted() {
    this.getFirstMember();
    this.bindEvents();
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
  .number {
    color: #0921ea;
    cursor: pointer;
  }
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
      overflow-y: scroll;
      overflow-x: visible;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      height: 500px;
      border-radius: 5px;
      background-color: #ffffff;
      z-index: 5;
      h1 {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 10;
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid #a0bdfd;
        background: #ffffff;
        .close {
          cursor: pointer;
          float: right;
          margin-right: 10px;
        }
      }
      ul {
        font-size: 12px;
        li {
          float: left;
          width: 33.33%;
          padding: 15px 10px;
          height: 60px;
          .left {
            display: inline-block;
            width: 30%;
            text-align: right;
            margin-right: 10px;
          }
        }
      }
      .el-tabs {
        padding: 10px;
      }
      .cc {
        height: 100%;
        overflow-y: scroll;
        padding-top: 47px;
      }
      .balance {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
