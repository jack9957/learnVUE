import JKRequest from "@/services/request/index";

export function getCityAll() {
  return JKRequest.get('/city/all')
}