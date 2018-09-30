<template>
  <div class="flowInquiry">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="流量查询" name="first">
            <div class="top">
                <el-tabs type="border-card">
                  <el-tab-pane label="按月查询">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder=""></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="请选择">
                                      <el-option label="GPRS5元套餐（原子产品）" value="shanghai"></el-option>
                                      <el-option label="GPRS10元套餐（原子产品）" value="shanghai"></el-option>
                                      <el-option label="GPRS20元套餐（原子产品）" value="shanghai"></el-option>
                                      <el-option label="GPRS30元套餐（原子产品）" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="请选择">
                                      <el-option label="CMIOT" value="shanghai"></el-option>
                                      <el-option label="CMIOTTEST" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="请选择">
                                      <el-option label="测试期" value="shanghai"></el-option>
                                      <el-option label="沉默期" value="beijing"></el-option>
                                      <el-option label="库存期" value="beijing"></el-option>
                                      <el-option label="正使用" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item>
                                  <el-button type="primary" @click="onSubmit">查询</el-button>
                              </el-form-item>
                          </el-form>
                      </div>
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          流量月查询结果(单位：MB)
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            prop=""
                            label="手机号码"
                            width="130">
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
                  <el-tab-pane label="按日查询">
                      <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder=""></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="请选择">
                                      <el-option label="GPRS5元套餐（原子产品）" value="shanghai"></el-option>
                                      <el-option label="GPRS10元套餐（原子产品）" value="shanghai"></el-option>
                                      <el-option label="GPRS20元套餐（原子产品）" value="shanghai"></el-option>
                                      <el-option label="GPRS30元套餐（原子产品）" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="请选择">
                                      <el-option label="CMIOT" value="shanghai"></el-option>
                                      <el-option label="CMIOTTEST" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="请选择">
                                      <el-option label="测试期" value="shanghai"></el-option>
                                      <el-option label="沉默期" value="shanghai"></el-option>
                                      <el-option label="库存期" value="shanghai"></el-option>
                                      <el-option label="正使用" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item>
                                  <el-button type="primary" @click="onSubmit">查询</el-button>
                              </el-form-item>
                          </el-form>
                      </div>
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          流量日查询结果(单位：MB)
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            prop=""
                            label="手机号码"
                            width="130">
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
                  <el-tab-pane label="实时按月查询">
                      <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder=""></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="请选择">
                                      <el-option label="GPRS5元套餐（原子产品）" value="shanghai"></el-option>
                                      <el-option label="GPRS10元套餐（原子产品）" value="shanghai"></el-option>
                                      <el-option label="GPRS20元套餐（原子产品）" value="shanghai"></el-option>
                                      <el-option label="GPRS30元套餐（原子产品）" value="shanghai"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="请选择">
                                      <el-option label="CMIOT" value="shanghai"></el-option>
                                      <el-option label="CMIOTTEST" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="请选择">
                                      <el-option label="测试期" value="shanghai"></el-option>
                                      <el-option label="沉默期" value="beijing"></el-option>
                                      <el-option label="库存期" value="beijing"></el-option>
                                      <el-option label="正使用" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item>
                                  <el-button type="primary" @click="onSubmit">查询</el-button>
                              </el-form-item>
                          </el-form>
                      </div>
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          流量实时结果（单位MB）
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            label="序号"
                            width="50"
                            type="index">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="号码"
                            width="130">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="本月总套餐流量">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="已用流量">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="剩余流量">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="套外流量">
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
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="实时套餐用量">
                      <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder=""></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item>
                                  <el-button type="primary" @click="onSubmit">查询</el-button>
                              </el-form-item>
                          </el-form>
                      </div>
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          实时套餐查询结果(单位：MB)
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            label="序号"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="手机号码"
                            width="130">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="套餐名称">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="套餐总流量（MB）">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="已使用流量（MB）">
                            </el-table-column>
                        </el-table>
                      </div>
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
                    </div>
                  </el-tab-pane>
                </el-tabs>
            </div>
        </el-tab-pane>
        <el-tab-pane label="短信查询" name="second">
            <div class="top">
                <el-tabs type="border-card">
                  <el-tab-pane label="按月查询">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
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
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          短信月查询结果(单位：条)
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            prop=""
                            label="手机号码"
                            width="130">
                            </el-table-column>
                        </el-table>
                      </div>
                      <div class="pagination clearfix">
                          <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage5"
                                :page-size="100"
                                layout="prev, pager, next, jumper"
                                :total="1000">
                            </el-pagination>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="按日查询">
                      <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
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
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          短信日查询结果(单位：条)
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            prop=""
                            label="手机号码"
                            width="130">
                            </el-table-column>
                        </el-table>
                      </div>
                      <div class="pagination clearfix">
                          <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage6"
                                :page-size="100"
                                layout="prev, pager, next, jumper"
                                :total="1000">
                            </el-pagination>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="实时按月查询">
                      <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
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
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          短信实时结果（单位：条）
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="号码"
                            width="130">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="本月总套餐用量(条)">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="已用用量(条)">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="剩余用量(条)">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="套外用量(条)">
                            </el-table-column>
                        </el-table>
                      </div>
                      <div class="pagination clearfix">
                          <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage7"
                                :page-size="100"
                                layout="prev, pager, next, jumper"
                                :total="1000">
                            </el-pagination>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="实时套餐用量">
                      <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
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
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          实时套餐查询结果(单位：条)
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            prop=""
                            label="序号"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="手机号码"
                            width="130">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="套餐名称">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="套餐总用量（条）">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="已使用流量（条）">
                            </el-table-column>
                        </el-table>
                      </div>
                      <div class="pagination clearfix">
                          <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage8"
                                :page-size="100"
                                layout="prev, pager, next, jumper"
                                :total="1000">
                            </el-pagination>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
            </div>
        </el-tab-pane>
        <el-tab-pane label="语音查询" name="third">
            <div class="top">
                <el-tabs type="border-card">
                  <el-tab-pane label="按月查询">
                    <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
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
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          语音月查询结果(单位：分钟)
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            prop=""
                            label="手机号码"
                            width="130">
                            </el-table-column>
                        </el-table>
                      </div>
                      <div class="pagination clearfix">
                          <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage9"
                                :page-size="100"
                                layout="prev, pager, next, jumper"
                                :total="1000">
                            </el-pagination>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="按日查询">
                      <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
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
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          语音日查询结果(单位：分钟)
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            prop=""
                            label="手机号码"
                            width="130">
                            </el-table-column>
                        </el-table>
                      </div>
                      <div class="pagination clearfix">
                          <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage10"
                                :page-size="100"
                                layout="prev, pager, next, jumper"
                                :total="1000">
                            </el-pagination>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="实时按月查询">
                      <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
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
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          语音实时结果（单位：分钟）
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="号码"
                            width="130">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="本月总套餐用量(分钟)">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="已用用量(分钟)">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="剩余用量(分钟)">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="套外用量(分钟)">
                            </el-table-column>
                        </el-table>
                      </div>
                      <div class="pagination clearfix">
                          <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage11"
                                :page-size="100"
                                layout="prev, pager, next, jumper"
                                :total="1000">
                            </el-pagination>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="实时套餐用量">
                      <div class="snumber">
                      <div class="form-wrap">
                          <el-form :inline="true" :model="formInline" class="demo-form-inline">
                              <el-form-item label="手机号码：">
                                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                              </el-form-item>
                              <el-form-item label="月份：">
                                <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="套餐名称：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="APN通道：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="生命周期：">
                                  <el-select v-model="formInline.region" placeholder="活动区域">
                                      <el-option label="区域一" value="shanghai"></el-option>
                                      <el-option label="区域二" value="beijing"></el-option>
                                  </el-select>
                              </el-form-item>
                              <el-form-item label="开户时间：">
                                <el-date-picker
                                v-model="value6"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                                </el-date-picker>
                              </el-form-item>
                              <el-form-item label="激活时间：">
                                <el-date-picker
                                v-model="value6"
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
                      <h3 class="title">
                          <img src="../../assets/icongl.png" alt="">
                          实时套餐查询结果(单位：分钟)
                      </h3>
                      <div class="table">
                        <el-table
                            :data="tableData"
                            border
                            style="width: 100%">
                            <el-table-column
                            type="index"
                            label="序号"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="手机号码"
                            width="130">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="套餐名称">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="套餐总用量（分钟）">
                            </el-table-column>
                            <el-table-column
                            prop=""
                            label="已使用用量（分钟）">
                            </el-table-column>
                        </el-table>
                      </div>
                      <div class="pagination clearfix">
                          <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage12"
                                :page-size="100"
                                layout="prev, pager, next, jumper"
                                :total="1000">
                            </el-pagination>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
            </div>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "FlowInquiry",
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
      currentPage4: 1,
      currentPage5: 1,
      currentPage6: 1,
      currentPage7: 1,
      currentPage8: 1,
      currentPage9: 1,
      currentPage10: 1,
      currentPage11: 1,
      currentPage12: 1,
      activeName: "first",
      radio: "",
      tableData3: [],
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
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.flowInquiry {
  .nextbtn {
    text-align: center;
  }
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
    margin-bottom: 10px;
    .form-wrap {
      padding: 25px 10px 0 10px;
      background-color: #ecf0f8;
      margin-bottom: 10px;
    }
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
