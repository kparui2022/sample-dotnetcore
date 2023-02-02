<template>
    <div>
        <apexchart type="bar" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import Newloginchart from '../service/API/Newloginchart';

export default {
    name: 'DynamicLoadedChart',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            options: {
                chart: {
                    id: 'vuechart-example',
                    locales: [{ name: 'en', options: { toolbar: { exportToSVG: 'SVG 다운로드', exportToPNG: 'PNG 다운로드', "exportToCSV": "CSV 다운로드" } } }],
                },
                xaxis: {
                    //     title: {
                    //     text: "Days",
                    //     align: 'left'
                    //   },
                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                    // group: {
                    //     groups: [{ title: 'Days' }],
                    // },
                },

                title: {
                    text: '로그인',
                },
            },
            series: [
                {
                    name: 'series-1',
                    data: [],
                },
            ],
            date: [],
            count: [],
        };
    },
    created() {
        this.newloginchart = new Newloginchart();
    },
    mounted() {
        this.newloginchart.getnewloginchart(this.$route.params).then((res) => {
            console.log(res);
            res.data.newLoginCounts.map((m) => this.date.push(m.date));
            res.data.newLoginCounts.map((m) => this.count.push(m.count));
            Array.from(res.data.newLoginCounts).forEach((item) => {
                this.series[0].data.push(item.count);
            });
            // console.log(res.data.newLoginCounts);
            // console.log(this.date);
            // console.log(this.count);
            // console.log(item.count);
        });
    },
};
</script>
