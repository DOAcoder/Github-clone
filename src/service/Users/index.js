import api from "../axios";

const useUsersApi = {
 saerchProfile: async (data="mukhriddin-dev") => api.get(`/users/${data}`, { cache: 'force-cache' }),
  allfollowers: async (data = "mukhriddin-dev") => api.get(`/users/${data}/followers?per_page=2000`),
  paginateFollowers: async (data = "mukhriddin-dev",num=1) => api.get(`mukhriddin-dev/${data}/followers?page=${num}`),
  following: async (data = "DOAcoder") => api.get(`/users/${data}/following`),
  repositories: async (data = "DOAcoder") => api.get(`/users/${data}/repos`),
  stars: async (data = "DOAcoder") => api.get(`/users/${data}/starred`),





}

export default useUsersApi;