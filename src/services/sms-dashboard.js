import { request, config } from 'utils'

const { api } = config
const { smsDashboard } = api

export async function query (params) {
  return request({
    url: smsDashboard,
    method: 'get',
    data: params,
  })
}
