import { request, config } from 'utils'

const { api } = config
const { userLogout } = api

export async function logout (data) {
  return request({
    url: userLogout,
    method: 'post',
    data,
  })
}
