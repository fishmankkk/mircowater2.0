import { request, config } from 'utils'

const { api } = config
const { smsDashboard, smsDashboardTableFilter, smsDashboardNewAutograph } = api

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
