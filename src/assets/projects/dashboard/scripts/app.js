import Kpi from './Kpi.js'
import Map from './Map.js'

/*
KPI default styling
*/
const costumerColor = '#2ECC71'
const photosColor = '#F1C40F'

/*
DOM ELEMENTS
*/

const $costumersData = document.querySelector('.js-costumerData')
const $photosData = document.querySelector('.js-photosData')
const $mapContainer = document.querySelector('.js-map')

/*
Init classes
*/

const costumerKpi = new Kpi({
    _element: $costumersData,
    _beginningValue: 113,
    _color: costumerColor,
    _notificationText: 'Nouvel utilisateur',
    _fontAwesomeLogo: 'fa fa-users'
})
const photosKpi = new Kpi({
    _element: $photosData,
    _beginningValue: 1213,
    _color: photosColor,
    _notificationText: 'Nouvelle photo',
    _fontAwesomeLogo: 'fa fa-camera'
})

const map = new Map($mapContainer)

const update = (_datas) => {
    if(!isNaN(_datas.costumersDataIteration)) {
        costumerKpi.updateValue(_datas.costumersDataIteration)
        map.popDot(costumerColor, _datas.location)
    }
    if(!isNaN(_datas.photosDataIteration)) {
        photosKpi.updateValue(_datas.photosDataIteration)
        map.popDot(photosColor, _datas.location)
    }
}


//Generate fake data for development
let counter = 0

window.setInterval(() => {

    let api =
    [
        {
            costumersDataIteration: Math.floor(Math.random() * 10) + 1,
            location: {
                latitude: 40.779897,
                longitude: -73.968565
            }
        },
        {
            photosDataIteration: Math.floor(Math.random() * 20) + 1,
            location: {
                latitude: 48.8534,
                longitude: 2.3488
            }
        },
        {
            costumersDataIteration: Math.floor(Math.random() * 10) + 1,
            location: {
                latitude: 35.709026,
                longitude: 139.731992
            }
        }
    ]

    counter >= 2 ? counter = 0 : counter++
    update(api[counter])
}, 5000)