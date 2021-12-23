import axios from 'axios'

export const CategoryStore = {
  namespaced: true,
  state: {
    categories: null,
  },
  actions: {
    getCategories: async ({ commit }, data) => {
      const result = await axios.get('http://192.168.107.91:3000/api/category/all', {
        params: {
          skip:0, 
          limit:16, 
          orderby:['id','ASC'], 
        }
      })

      let categories = result.data.data
      commit("SET_CATEGORY", categories);
    },
  },
  mutations: {
    SET_CATEGORY(state, data) {
      state.categories = data;
    },
  },
};
