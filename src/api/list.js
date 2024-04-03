import axios from 'axios';
import { API_BASE_URL } from '@/config';

export function listRequest(numberUsers) {
  return axios.get(`${API_BASE_URL}/api/?results=${numberUsers}`);
}

export function listRequestPagination(page, perPage) {
  return axios.get(`${API_BASE_URL}/api/?page=${page}&results=${perPage}`);
}

export function userRequest(id) {
  return axios.get(`${API_BASE_URL}/api/?id.value=${id}`);
}
