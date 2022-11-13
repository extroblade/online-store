import {makeAutoObservable} from "mobx";
const link = "https://sun9-61.userapi.com/impg/k8G6XLhIhWwzSuLYSsPz23sv2e0NdDAjzSasdA/kiDxTsSBdko.jpg?size=1080x907&quality=95&sign=42ff6a5fdd60a42588e5aaf9a1353251&type=album"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:0, name: 'All'},
            {id:1, name: 'Fridges'},
            {id:2, name: 'Smartphones'},
            {id:3, name: 'TVs'},
            {id:4, name: 'Laptops'},

        ]
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'},
        ]

        this._devices = [
            {id:1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},
            {id:5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: link},

        ]

        this._selectedType = {}

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

    setSelectedType(type){
        this._selectedType = type
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

    get selectedType(){
        return this._selectedType
    }

}