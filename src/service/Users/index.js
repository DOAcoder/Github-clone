import api from "../axios";

const useUsersApi = {
 saerchProfile: async (date) => api.get(`/search/users?q=${date}`, { cache: 'force-cache' }),


}

export default useUsersApi;