<template>
    <div>
        <apexchart type="heatmap" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'ThreatEvolution',
        data: function () {
            return {
                dictionaryCategoryInteger: {
                    "NE": -1,
                    "K": 0,
                    "DD": 0,
                    "LC": 10,
                    "NT": 20,
                    "R": 20,
                    "CD": 30,
                    "LR/cd": 30,
                    "T": 40,
                    "V": 40,
                    "VU": 40,
                    "EN": 50,
                    "E": 50,
                    "CR": 60,
                    "PEW": 70,
                    "EW": 80,
                    "LR/lc": 10,
                    "LR/nt": 20
                },
                listAnimal: [
                    "Gorilla",
                    "Sea Turtle",
                    "Orangutan",
                    "Bengal Tiger",
                    "Snow Leopard",
                    "Asian Elephant",
                    "Blue Whale",
                    "Giant Panda",
                    "Polar Bear",
                    "Red Panda",
                    "African Penguin",
                    "Black Rhino"
                ],
                dictionaryScientificNames: {
                    "Gorilla": "Gorilla gorilla",
                    "Sea Turtle": "Chelonia mydas",
                    "Orangutan": "Pongo pygmaeus",
                    "Bengal Tiger": "Panthera tigris",
                    "Snow Leopard": "Panthera uncia",
                    "Asian Elephant": "Elephas maximus",
                    "Blue Whale": "Balaenoptera musculus",
                    "Giant Panda": "Ailuropoda melanoleuca",
                    "Polar Bear": "Ursus maritimus",
                    "Red Panda": "Ailurus fulgens",
                    "African Penguin": "Spheniscus demersus",
                    "Black Rhino": "Diceros bicornis"
                },
                activeAnimal: null,
                series: [{
                    name: "Loading",
                    data: []
                }],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'heatmap'
                    },
                    plotOptions: {
                        heatmap: {
                            shadeIntensity: 0.5,
                            radius: 0,
                            useFillColorAsStroke: true,
                            colorScale: {
                                ranges: [{
                                    from: 0,
                                    to: 0,
                                    name: 'Data Deficient',
                                    color: '#AAAAAA'
                                },
                                {
                                    from: 10,
                                    to: 10,
                                    name: 'Least Concern',
                                    color: '#e2e82e'
                                },
                                {
                                    from: 20,
                                    to: 20,
                                    name: 'Near Threatened',
                                    color: '#fcf544'
                                },
                                {
                                    from: 30,
                                    to: 30,
                                    name: 'Conservation Dependent',
                                    color: '#18d7c5'
                                },
                                {
                                    from: 40,
                                    to: 40,
                                    name: 'Vulnerable',
                                    color: '#ffa703'
                                },
                                {
                                    from: 50,
                                    to: 50,
                                    name: 'Endangered',
                                    color: '#f96000'
                                },
                                {
                                    from: 60,
                                    to: 60,
                                    name: 'Critically Endangered',
                                    color: '#df0a00'
                                },
                                {
                                    from: 70,
                                    to: 70,
                                    name: 'Possibly Extinct in the Wild',
                                    color: '#bf0075'
                                },
                                {
                                    from: 80,
                                    to: 80,
                                    name: 'Extinct in the Wild',
                                    color: '#8c106e'
                                },
                                {
                                    from: 90,
                                    to: 90,
                                    name: 'Possibly Extinct',
                                    color: '#3111ba'
                                },
                                {
                                    from: 100,
                                    to: 100,
                                    name: 'Extinct',
                                    color: '#000482'
                                },
                                {
                                    from: -1,
                                    to: -1,
                                    name: 'Not Evaluated',
                                    color: '#555555'
                                }
                                ]
                            }
                        }
                    },
                    fill: {
                        type: 'solid',
                        opacity: 1,
                    },
                    dataLabels: {
                        enabled: false
                    },
                    tooltip: {
                        enabled: false
                    },
                    stroke: {
                        width: 1
                    },
                    title: {
                        text: 'Evolution of vulnerability by species',
                        align: 'center',
                        margin: 40,
                        style: {
                            fontWeight: '600',
                            fontSize: '20px'
                        }
                    },
                    legend: {
                        showForSingleSeries: true,
                        position: 'bottom',
                    },
                    states: {
                        normal: {
                            filter: {
                                type: 'none',
                                value: 0,
                            }
                        },
                        hover: {
                            filter: {
                                type: 'none',
                            }
                        },
                        active: {
                            allowMultipleDataPointsSelection: false,
                            filter: {
                                type: 'none',
                            }
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 768,
                            options: {
                                yaxis: {
                                    labels: {
                                        maxWidth: 30,
                                        rotate: -90
                                    }

                                },
                                title: {
                                    style: {
                                        fontSize: '14px'
                                    }
                                }
                            }
                        }
                    ],
                },
            }
        },
        methods: {
            updateChart() {
                this.activeAnimal = this.getActiveAnimal
                this.getInfoAnimal()
            },
            getInfoAnimal() {
                const allData = []
                for (var element in this.dictionaryScientificNames) {
                    allData.push({ name: element, data: [] });
                    if (allData.filter(obj => (this.getActiveAnimal==obj.name)).length > 0) {
                        this.series = allData.filter(obj => (this.getActiveAnimal==obj.name)).map(obj => {
                            return { name: obj.name + " (loading...)", data: [] };
                        })
                    }

                    fetch("http://apiv3.iucnredlist.org/api/v3/species/history/name/" + this.dictionaryScientificNames[element] + "?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee").then(res => res.json()).then(data => {
                        const currentCommonName = Object.keys(this.dictionaryScientificNames).find(key => this.dictionaryScientificNames[key] === data.name);
                        allData.find(obj => this.dictionaryScientificNames[obj.name] == data.name).data = data.result.map(el => (el.code != undefined) ? this.dictionaryCategoryInteger[el.code] : -1).reverse()

                        if (this.getActiveAnimal.length == 0) {
                            this.series = allData.filter(obj => (this.getActiveAnimal==obj.name))
                        }

                        if (this.getActiveAnimal==currentCommonName) {
                            this.series = allData.filter(obj => (this.getActiveAnimal==obj.name))
                            this.chartOptions = {
                                xaxis: {
                                    categories: data.result.map(el => el.year).sort((a, b) => (a - b))
                                }
                            }
                        }
                    });
                }
            },
        },
        computed: {
            ...mapGetters([
                'getActiveAnimal'
            ]),
        },
        mounted: function () {
            this.getInfoAnimal()
            this.$root.$on('ThreatEvolution', () => {
                this.updateChart()
            })
        }
    }
</script>