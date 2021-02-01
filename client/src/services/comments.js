import api from './apiConfig';

export const postComment = async (site_id, commentData) => {
  const resp = await api.post(`/sites/${site_id}/comments`, { comment: commentData });
  return resp.data;
}
export const putComment = async (site_id, id, commentData) => {
  const resp = await api.put(`/sites/${site_id}/comments/${id}`, { comment: commentData });
  return resp.data;
}
export const deleteComment = async(site_id, id) => {
  const resp = await api.delete(`/sites/${site_id}/comments/${id}`);
  return resp.data;
}