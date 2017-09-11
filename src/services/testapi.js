import { request, config } from 'utils'

const { api } = config
const { mockapi, testapi } = api

export async function testapi1 (params) {
  return request({
    url: testapi,
    method: 'get',
    data: params,
  })
}

export async function mockapi1 (params) {
  return request({
    url: mockapi,
    method: 'get',
    data: params,
  })
}
