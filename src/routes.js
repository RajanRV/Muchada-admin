import Index from "./views/index";
import Profile from "./views/examples/profile/";
// import Maps from "./views/examples/maps";
import Register from "./views/register";
import Login from "./views/login";
import Logout from './views/login/logout';
import Sellers from './views/sellers';
// import Users from './views/users';
// import Tables from "./views/examples/tables";
// import Icons from "./views/examples/icons";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    sidebar: true,
    protected: true
  },
  {
    path: "/sellers",
    name: "Sellers",
    icon: "ni ni-tv-2 text-primary",
    component: Sellers,
    layout: "/admin",
    sidebar: true,
    protected: true
  },
  // {
  //   path: "/users",
  //   name: "Users",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Users,
  //   layout: "/admin",
  //   sidebar: true,
  //   protected: true
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin",
  //   sidebar: true
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin",
  //   sidebar: true
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
    sidebar: true,
    protected: true
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  //   sidebar: true
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    sidebar: false,
    protected: false
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: Logout,
    layout: "/auth",
    sidebar: false,
    protected: false
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    sidebar: false
  }
];
export default routes;
