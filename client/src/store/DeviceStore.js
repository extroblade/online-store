import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Holod'},
            {id:2, name: 'Smart'},

        ]
        this._brands = [
            {id:1, name: 'Samsu'},
            {id:2, name: 'Aple'},
        ]

        this._devices = [
            {id:1, name: 'Iphon 12 pro', price: 25000, rating: 5, img: 'vk.com'},
            {id:2, name: 'Iphon 12 pro', price: 25000, rating: 5, img: 'vk.com'},
            {id:3, name: 'Iphon 12 pro', price: 25000, rating: 5, img: 'vk.com'},
            {id:4, name: 'Iphon 12 pro', price: 25000, rating: 5, img: 'vk.com'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

}