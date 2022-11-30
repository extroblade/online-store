import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const removeOneType = async (id) => {
    const {data} = await $authHost.delete('api/type/'+id)
    return data
}

export const fetchTypes  = async () => {
    const {data} = await $host.get('api/type' )
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const removeOneBrand = async (id) => {
    const {data} = await $authHost.delete('api/brand/'+id)
    return data
}

export const fetchBrands  = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const removeOneDevice = async(id) => {
    const {data} = await $authHost.delete('api/device/'+id)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5, name) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit, name
        }})
    return data
}

export const fetchOneDevice  = async (id) => {
    const {data} = await $host.get('api/device/'+id)
    return data
}


