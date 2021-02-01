import api from './apiConfig';

export const getSites = async () => {
  const resp = await api.get('/sites');
  return resp.data;
}

export const getOneSite = async (id) => {
  const resp = await api.get(`/sites/${id}`);
  return resp.data;
}

export const putSite = async (id, siteData) => {
  const resp = await api.put(`/sites/${id}`, { food: siteData });
  return resp.data;
}
