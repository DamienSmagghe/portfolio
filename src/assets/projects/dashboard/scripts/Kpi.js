import { animateValue } from './animateValue.js'

export default class Kpi {
    constructor({ _element = document.body, _beginningValue = 0, _color = '#ffffff', _notificationText = 'Nouvel action', _fontAwesomeLogo = 'fa fa-question', _notificationLimit = 5 }) {
        this.element = _element
        this.value = _beginningValue
        this.logo = _fontAwesomeLogo
        this.color = _color
        this.notificationText = _notificationText
        this.notificationLimit = _notificationLimit

        this.element.textContent = this.value
    }
    updateValue(_iteration) {
        animateValue(this.element, this.value, this.value + _iteration, 750)
        this.value += _iteration

        this.addNotification()
    }
    addNotification() {
        
        let notification = d3.select('.notification__container')
            .insert('div', ':first-child')
            .attr('class', 'notification')

        let DOMnotification = document.querySelector('.notification__container')
        if( DOMnotification.childElementCount > this.notificationLimit ) {
            DOMnotification.removeChild(DOMnotification.lastChild)
            
        }
        d3.selectAll('.notification').attr('class', 'notification animated')

        notification.append('i')
            .attr('class', this.logo)
            .style('color', this.color)

        notification.append('p')
            .html(this.notificationText)

        notification.append('span')
            .attr('class', 'notification__date')
            .html(this.getDate())
    }
    getDate() {
        let today = new Date()
        let dd = today.getDate()
        let mm = today.getMonth() + 1
        let HH = today.getHours()
        let MM = today.getMinutes()
        let yy = today.getFullYear()


        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        if (HH < 10) {
            HH = '0' + HH
        }
        if (MM < 10) {
            MM = '0' + MM
        }

        today = `${dd}/${mm}/${yy} <span class="bold"> ${HH}:${MM}</span>`
        return today
    }
}