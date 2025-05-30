import JKRequest from "@/services/request/index";

export function getCityAll() {
  return JKRequest.get('/city/all')
}

export function getHomeHotSuggests() {
  return JKRequest.get('/home/hotSuggests')
}

export function getHomeHotCategory() {
  return JKRequest.get('/home/categories')
}