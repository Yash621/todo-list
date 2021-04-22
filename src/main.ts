import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import App from "./App.vue";
import store from "./store";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";
Vue.use(VueApollo);

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: "http://localhost:6969",
  }),
});
