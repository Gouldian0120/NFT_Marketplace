import axios from 'axios'

export const CategoryStore = {
  namespaced: true,
  state: {
    categories: null,
  },
  actions: {
    getCategories: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/category/all";

      const result = await axios.get(url, {
        params: {
          skip:0, 
          limit:16, 
          orderby:['id','ASC']
        }
      })

      let categories = result.data.data
      commit("SET_CATEGORY", categories);
    },

    getCategoriesById: async ({ commit }, data) => {
      let url = process.env.VUE_APP_SERVER + "/api/category/all";

      const result = await axios.get(url, {
        params: {
          filter:{
            id:data.keysearch
          }
        }
      })

      return result.data.data[0];
    },
  },
  mutations: {
    SET_CATEGORY(state, data) {
      state.categories = data;
    },
  },
};
