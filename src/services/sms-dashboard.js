import { request, config } from 'utils'

const { api, proxyApiName } = config
const { smsDashboard, smsDashboardTableFilter, smsDashboardNewAutograph, smsDashboardAutograph } = api

export async function query (params) {
  return request({
    url: smsDashboard,
    method: 'get',
    data: params,
  })
}

export async function queryTableFilter (params) {
  return request({
    url: smsDashboardTableFilter,
    method: 'get',
    data: params,
  })
}

export async function newAutograph (params) {
  return request({
    url: smsDashboardNewAutograph,
    method: 'get',
    data: params,
  })
}

export async function autograph (params) {
  return request({
    url: smsDashboardAutograph,
    method: 'get',
    data: params,
  })
}

export async function querySmsAccount (params) {
  return request({
    url: `${proxyApiName}/microservice/sms/account?pageNum=1&pageSize=2&accCriteria.tenantsId=3`,
    method: 'get',
  })
}
