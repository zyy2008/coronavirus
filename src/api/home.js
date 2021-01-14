import request from '@/utils/request'

export function getCity(data) {
    return request({
        url: '/getCity',
        method: 'get',
        data
    })
}