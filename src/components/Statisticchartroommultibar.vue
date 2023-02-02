<template>
  <div id="chart">
      <apexchart width="100%" :options="options" :series="series"></apexchart>
  </div>
</template>


<script>
import VueApexCharts from 'vue3-apexcharts';
// import Newloginchart from '../service/API/Newloginchart';

export default {
    name: 'DynamicLoadedChart',
    props:{
      dates :{
        type: Array,
        required : false
      },
      generalData :{
        type: Array,
        default: function () {
        return []
      },
        required : false
      },
      regionData :{
        type: Array,
        default: function () {
        return []
      },
        required : false
      }
    },
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [
                {
                    name: '새로운 일반 대화방',
                    data: this.generalData,
                },
                {
                    name: '새로운 지역 기반 채팅방',
                    data: this.regionData,
                },
            ],
            options : {
        chart: {
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
      },
      // stroke: {
      //   show: true,
      //   width: 2,
      //   colors: ['transparent']
      // },
      xaxis: {
        title: {
          text: ''
        },
        categories: this.dates,
      },
      yaxis: {
        title: {
          text: ''
        },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      }
      }
        };
    },
    // created() {
    //     this.newloginchart = new Newloginchart();
    // },
    // mounted() {
    //     this.newloginchart.getchatroomchart(this.$route.params).then((res) => {
    //         console.log(res.data.newLoginCounts);
    //         res.data.newLoginCounts.map((m) => this.date.push(m.date));
    //         res.data.newLoginCounts.map((m) => this.general_count.push(m.general_count));
    //         res.data.newLoginCounts.map((m) => this.region_count.push(m.region_count));
    //         Array.from(res.data.newLoginCounts).forEach((item) => {
    //             this.series[0].data.push(item.general_count);
    //             this.series[1].data.push(item.region_count);
    //         });
    //     });
    // },
};
</script>