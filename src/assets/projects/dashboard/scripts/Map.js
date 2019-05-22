export default class Map {
    constructor(_element) {
        this.element = _element

        this.width = this.element.offsetWidth
        this.height = this.element.offsetHeight

        this.projection = d3.geoMercator()
            .center([0, 0])
            .scale(this.width / this.height * 80)
            .translate([this.width / 2, this.height / 1.5])
        this.path = d3.geoPath()
            .projection(this.projection)

        this.svg = d3.select('.map').append("svg")
            .attr("id", "svg")
            .attr("width", this.width)
            .attr("height", this.height)
            // .append('defs')
            // .append('pattern')
            //   .attr('id', 'texture1')
            //   .attr('patternUnits', 'userSpaceOnUse')
            //   .attr('width', 10)
            //   .attr('height', 10)
            // .append('circle')
            //   .attr('cx', 2)
            //   .attr('cy', 2)
            //   .attr('r', 3)
            //   .attr('fill', '#FFFFFF');
        this.locations = this.svg.append("svg:g")
            .attr("class", "locations")

        this.deps = this.svg.append("g")
        this.circle

        this.initMap()
        this.resizeMap()
    }

    initMap() {
        d3.json('../assets/custom.geo.json').then((_geojson) => {
            this.deps.selectAll("path")
                .data(_geojson.features)
                .enter()
                .append("path")
                .attr("d", this.path)
        })
        this.svg
            .append('defs')
            .append('pattern')
            .attr('id', 'texture1')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 4)
            .attr('height', 4)
            .append('circle')
            .attr('cx', 2)
            .attr('cy', 2)
            .attr('r', 1)
            .attr('fill', '#FFFFFF');
    }

    popDot(_color = '#ffffff', _location) {
        this.locations.selectAll('circle').remove()

        this.circle = this.locations
            .append("circle", )
            .attr("r", 0)
            .style('fill', _color)
            .attr("transform", () => {
                return "translate(" + this.projection([
                    _location.longitude,
                    _location.latitude
                ]) + ")"
            })
            .attr('class', 'ripple-effect')
    }

    resizeMap() {
        const resize = () => {
            this.width = this.element.offsetWidth
            this.height = this.element.offsetHeight

            this.projection
                .center([0, 0])
                .scale([this.width / this.height * 80])
                .translate([this.width / 2, this.height / 1.75])

            d3.select("article").attr("width", this.width).attr("height", this.height)
            d3.select("svg").attr("width", this.width).attr("height", this.height)

            d3.selectAll("path").attr('d', this.path)
        }

        window.addEventListener('resize', resize)
    }
}