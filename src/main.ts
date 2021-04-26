import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import App from "./App.vue";
import store from "./store";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:6969/",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);

new Vue({
  store,
  render: (h) => h(App),
  apolloProvider,
}).$mount("#app");
