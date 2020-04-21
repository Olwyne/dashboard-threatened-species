<template>
    <div class="d-flex justify-content-center">
        <apexchart ref="donut" width="400" type="donut" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    export default {
        name: 'Donut',
        data: function () {
            return {
                chartOptions: {
                    labels: [],
                    title: {
                        text: "Species by region",
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
                    legend: {
                        show: true
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
                const arrayOfId = ["eastern_africa", "northeastern_africa", "western_africa", "northern_africa", "central_africa", "pan-africa", "southern_africa", "mediterranean", "europe"];
                const arrayOfName = ["Eastern Africa", "Northeastern Africa", "Western Africa", "Northern Africa", "Central Africa", "Pan Africa", "Southern Africa", "Mediterranean", "Europe"];
                for (let i = 0; i < arrayOfId.length; i++) {
                    fetch('http://apiv3.iucnredlist.org/api/v3/speciescount/region/' + arrayOfId[i] + '?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee').then(res => res.json()).then(data => {
                        const result = data;
                        this.chartOptions.labels.push(arrayOfName[i]);
                        this.series.push(parseInt(result.count));
                    });
                }
            }
        },
        mounted: function () {

            this.updateChart()
            this.$root.$on('Pie2', () => {
                this.updateChart()
            })


        }
    }
</script>