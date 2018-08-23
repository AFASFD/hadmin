import Vue from 'vue'
import Router from 'vue-router'
import Web from '@/pages/home/index'
import Home from '@/pages/home/components/Home'
import NumberManagement from '@/pages/numberManagement/index'
import StateManagement from '@/pages/stateManagement/index'
import FunctionManagement from '@/pages/functionManagement/index'
import APNManagement from '@/pages/APNManagement/index'
import SetMealManagement from '@/pages/setmealManagement/index'
import PackageProcess from '@/pages/packageProcess/index'
import FlowaManagement from '@/pages/flowaManagement/index'
import FlowbManagement from '@/pages/flowbManagement/index'
import OrderInquiry from '@/pages/orderInquiry/index'
import FlowInquiry from '@/pages/flowInquiry/index'
import InternationalRoam from '@/pages/internationalRoam/index'
import CardManagement from '@/pages/cardManagement/index'
import CompanyBill from '@/pages/companyBill/index'
import MemberBill from '@/pages/memberBill/index'
import NumberRecharge from '@/pages/numberRecharge/index'
import Ability from '@/pages/ability/index'
import DailyRecord from '@/pages/dailyRecord/index'
import MemberCount from '@/pages/memberCount/index'
import SetMealCount from '@/pages/setmealCount/index'
import FlowCount from '@/pages/flowCount/index'
import FlowShareCount from '@/pages/flowShareCount/index'
import WorkOrder from '@/pages/workOrder/index'
import MessageSend from '@/pages/messageSend/index'
import RoleManagement from '@/pages/roleManagement/index'
import UserManagement from '@/pages/userManagement/index'
import OperationLog from '@/pages/operationLog/index'
import DepartmentalManagement from '@/pages/departmentalManagement/index'
import LogIn from '@/pages/login/index'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    component: Web,
    children: [{
      path: '',
      component: Home
    },
    {
      path: '/numbermanagement',
      component: NumberManagement
    },
    {
      path: '/statemanagement',
      component: StateManagement
    },
    {
      path: '/functionmanagement',
      component: FunctionManagement
    },
    {
      path: '/apnmanagement',
      component: APNManagement
    },
    {
      path: '/setmealmanagement',
      component: SetMealManagement
    },
    {
      path: '/packageprocess',
      component: PackageProcess
    },
    {
      path: '/flowamanagement',
      component: FlowaManagement
    },
    {
      path: '/flowbmanagement',
      component: FlowbManagement
    },
    {
      path: '/orderinquiry',
      component: OrderInquiry
    },
    {
      path: '/flowinquiry',
      component: FlowInquiry
    },
    {
      path: '/internationalroam',
      component: InternationalRoam
    },
    {
      path: '/cardmanagement',
      component: CardManagement
    },
    {
      path: '/companybill',
      component: CompanyBill
    },
    {
      path: '/memberbill',
      component: MemberBill
    },
    {
      path: '/numberrecharge',
      component: NumberRecharge
    },
    {
      path: '/ability',
      component: Ability
    },
    {
      path: '/dailyrecord',
      component: DailyRecord
    },
    {
      path: '/membercount',
      component: MemberCount
    },
    {
      path: '/setmealcount',
      component: SetMealCount
    },
    {
      path: '/flowcount',
      component: FlowCount
    },
    {
      path: '/flowsharecount',
      component: FlowShareCount
    },
    {
      path: '/workorder',
      component: WorkOrder
    },
    {
      path: '/messagesend',
      component: MessageSend
    },
    {
      path: '/rolemanagement',
      component: RoleManagement
    },
    {
      path: '/departmentalmanagement',
      component: DepartmentalManagement
    },
    {
      path: '/usermanagement',
      component: UserManagement
    },
    {
      path: '/operationlog',
      component: OperationLog
    }
    ]
  },
  {
    path: '/login',
    component: LogIn
  }
  ]
})

router.beforeEach((to, from, next) => {
  let isLogin = localStorage.getItem('token')
  if (isLogin) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
