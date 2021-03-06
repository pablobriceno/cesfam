import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () => import("../views/VistaInicio.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/VistaLogin.vue"),
  },
  {
    path: "/prescripciones",
    name: "prescripciones",
    component: () => import("../views/VistaPrescripcion.vue"),
  },
  {
    path: "/pacientes",
    name: "Pacientes",
    component: () => import("../views/VistaPacientes.vue"),
  },
  {
    path: "/medicamentos",
    name: "Medicamentos",
    component: () => import("../views/VistaMedicamentos.vue"),
  },
  {
    path: "/detalle/:id",
    name: "Detalle prescripción",
    component: () => import("../views/VistaDetalle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (!sessionStorage.getItem("accessToken") && to.name !== "Login") {
    next({ name: "Login" });
  } else next();
});

export default router;
