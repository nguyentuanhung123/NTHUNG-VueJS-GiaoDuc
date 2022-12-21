import { createRouter, createWebHistory } from "vue-router";
import TheOverview from "../views/overview/TheOverview.vue";
import BorrowAndPay from "../views/borrow/BorrowAndPay.vue";
import TheDevice from "../views/device/TheDevice.vue";
import TheReport from "../views/report/TheReport.vue";
import TheSetting from "../views/setting/TheSetting.vue";

const routes = [
  {
    path: "/overview",
    component: TheOverview,
  },
  {
    path: "/device",
    component: TheDevice,
  },
  {
    path: "/borrow",
    component: BorrowAndPay,
  },
  {
    path: "/report",
    component: TheReport,
  },
  {
    path: "/setting",
    component: TheSetting,
  },
];

//Khởi tạo vue router:
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
