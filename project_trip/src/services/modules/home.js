import JKRequest from "@/services/request/index";

export function getHomeHotSuggests() {
  return JKRequest.get('/home/hotSuggests')
}

export function getHomeHotCategory() {
  return JKRequest.get('/home/categories')
}