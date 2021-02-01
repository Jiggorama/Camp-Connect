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

export const visited = async (site_id, user_id) => {
  const resp = await api.post('/visited', { site_id, user_id })
  return resp.data
}

export const unvisited = async (site_id, user_id) => {
  const resp = await api.delete('/visited', {data: { site_id, user_id }})
  return resp.data
}