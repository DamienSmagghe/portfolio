export const animateValue = (_element, _start, _end, _duration) => {
    let obj = _element
    let range = _end - _start
    
    // no timer shorter than 50ms (not really visible any way)
    let minTimer = 50

    let stepTime = Math.abs(Math.floor(_duration / range))

    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer)

    // get current time and calculate desired end time
    let startTime = new Date().getTime()
    let endTime = startTime + _duration
    let timer

    const run = () => {
        let now = new Date().getTime()
        let remaining = Math.max((endTime - now) / _duration, 0)
        let value = Math.round(_end - (remaining * range))
        obj.innerHTML = value
        if (value == _end) {
            clearInterval(timer)
        }
    }

    timer = setInterval(run, stepTime)
    run()
}