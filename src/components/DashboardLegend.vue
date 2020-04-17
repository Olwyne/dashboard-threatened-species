<template>
    <div class="">
        <div class="dashboard-legend-box">
            <div class="legend-title">
                <p>Threat category with the classification of the International Union for Conservation of Nature</p>
            </div>
            <div class="dashboard-legend dashboard-align-center position-top">
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(170, 170, 170); color: rgb(170, 170, 170);"></span>
                    <span class="dashboard-legend-text">Data Deficient (DD)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(226, 232, 46); color: rgb(226, 232, 46);"></span>
                    <span class="dashboard-legend-text">Least Concern (LC)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(252, 245, 68); color: rgb(252, 245, 68);"></span>
                    <span class="dashboard-legend-text">Near Threatened (NT)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(24, 215, 197); color: rgb(24, 215, 197);"></span>
                    <span class="dashboard-legend-text">Conservation Dependent (CD)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(255, 167, 3); color: rgb(255, 167, 3);"></span>
                    <span class="dashboard-legend-text">Vulnerable (VU)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(249, 96, 0); color: rgb(249, 96, 0);"></span>
                    <span class="dashboard-legend-text">Endangered (EN)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(223, 10, 0); color: rgb(223, 10, 0);"></span>
                    <span class="dashboard-legend-text">Critically Endangered (CR)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(191, 0, 117); color: rgb(191, 0, 117);"></span>
                    <span class="dashboard-legend-text">Possibly Extinct in the Wild (PEW)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(140, 16, 110); color: rgb(140, 16, 110);"></span>
                    <span class="dashboard-legend-text">Extinct in the Wild (EW)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(49, 17, 186); color: rgb(49, 17, 186);"></span>
                    <span class="dashboard-legend-text">Possibly Extinct (PE)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(0, 4, 130); color: rgb(0, 4, 130);"></span>
                    <span class="dashboard-legend-text">Extinct (EX)</span>
                </div>
                <div class="dashboard-legend-series">
                    <span class="dashboard-legend-marker" style="background: rgb(85, 85, 85); color: rgb(85, 85, 85);"></span>
                    <span class="dashboard-legend-text">Not Evaluated (NE)</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'DashboardLegend',
        data: function () {
            return {
            }
        },
        methods: {

        },
        computed: {
        },
        mounted: function () {
        }
    }
</script>

<style scoped>
    .dashboard-legend-box {
        padding: 10px 0;
        background-color: white;
        border-top: solid #dc3545;
        padding: 5px 10px;
    }

    .dashboard-legend-series span {
        display: inline-block;
    }

    .dashboard-legend {
        flex-wrap: wrap;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
    }

    .dashboard-legend-series {
        margin: 5px;
    }

    .dashboard-legend-marker {
        margin-right: 5px;
        height: 15px;
        width: 15px;
        left: 0px;
        border-width: 0px;
        border-color: rgb(255, 255, 255);
        border-radius: 12px;
    }

    .dashboard-legend-text {
        color: rgb(55, 61, 63);
        font-size: 10px;
        font-weight: 400;
        font-family: Helvetica, Arial, sans-serif;
    }

    .legend-title {
        text-align: center;
        font-weight: 600;
    }

        .legend-title p {
            font-size: 12px;
            margin-bottom: 5px;
        }

    @media (min-width: 767.98px) {
        .dashboard-legend-text {
            font-size: 14px;
        }

        .dashboard-legend-box {
            position: fixed;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }
</style>
