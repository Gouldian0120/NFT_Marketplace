import {
  successAlert,
  failAlert,
  customAlert,
  confirm,
  combineOptionWithFilter,
} from "../utils/ComponentUtils";
import { extractError } from "../utils/Request";

const GlobalFunctions = {
  install(Vue) {
    Vue.prototype.$loading = function (val) {
      this.$store.dispatch("global/setLoading", val);
    };
    Vue.prototype.$loadingModal = function (val) {
      this.$store.dispatch("global/setLoadingModal", val);
    };
    Vue.prototype.$successAlert = successAlert;
    Vue.prototype.$failAlert = failAlert;
    Vue.prototype.$customAlert = customAlert;
    Vue.prototype.$confirm = confirm;
    Vue.prototype.$combineOptionWithFilter = combineOptionWithFilter;
    Vue.prototype.$extractError = extractError;
  },
};
export default GlobalFunctions;
