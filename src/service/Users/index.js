import api from "../axios";

const useUsersApi = {
 saerchProfile: async (date="") => api.get(`/users/${date}`, { cache: 'force-cache' }),


}

export default useUsersApi;