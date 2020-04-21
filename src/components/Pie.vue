<template>
    <div class="d-flex justify-content-center">
        <apexchart ref="donut" width="400" type="donut" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    export default {
        name: 'DonutExample',
        data: function () {
            return {
                chartOptions: {
                    labels: [],
                    title: {
                        text: "Number of species by threat category",
                        align: 'center',
                        margin: 40,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                            fontSize: '20px',
                            fontWeight: '600',
                            fontFamily: undefined,
                            color: 'black'
                        },
                    },
                    responsive: [
                        {
                            breakpoint: 768,
                            options: {
                                title: {
                                    style: {
                                        fontSize: '14px'
                                    }
                                }
                            }
                        }
                    ],
                    legend: {
                        position: 'bottom',
                    },
                    colors: [function ({ value }) {
                        if (value < 82) {
                            return '#8c106e' // EW
                        }
                        else if (value >= 82 && value < 916) {
                            return '#000482' // EX
                        }
                        else if (value >= 916 && value < 6338) {
                            return '#fcf544' // NT
                        }
                        else if (value >= 6338 && value < 6842) {
                            return '#df0a00' // CR
                        }
                        else if (value >= 6842 && value < 11487) {
                            return '#f96000' // EN
                        }
                        else if (value >= 11487 && value < 14092) {
                            return '#ffa703' // VU
                        }
                        else if (value >= 14092 && value < 17407) {
                            return '#AAAAAA' // DD
                        }
                        else if (value >= 17407 && value < 59860) {
                            return '#e2e82e' // LC
                        }
                        else {
                            return '#ffffff'
                        }
                    }]
                },
                series: [{
                    data: []
                }],
            }
        },
        methods: {
            updateChart() {
                this.getInfoAnimal();
            },
            getInfoAnimal() {
                this.chartOptions = { labels: [], }
                this.series = [];
                const arrayOfId = ["EX", "EW", "CR", "EN", "VU", "NT", "LC", "DD"];
                const arrayOfName = ["Extinct", "Extinct in the Wild", "Critically Endangered", "Endangered", "Vulnerable", "Near Threatened", "Least Concern", "Data Deficient"];
                for (let i = 0; i < arrayOfId.length; i++) {
                    fetch('http://apiv3.iucnredlist.org/api/v3/species/category/' + arrayOfId[i] + '?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee').then(res => res.json()).then(data => {
                        const result = data;
                        this.chartOptions.labels.push(arrayOfName[i]);
                        this.series.push(result.count);
                    });
                }
            }
        },
        mounted: function () {
            this.updateChart()
            this.$root.$on('Pie', () => {
                this.updateChart()
            })


        }
    }
</script>