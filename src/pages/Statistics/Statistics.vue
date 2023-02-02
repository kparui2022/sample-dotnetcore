<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>새로운 로그인</h5>
                    </div>

                    <div class="p-grid p-fluid">
                        <div class="p-formgrid p-grid">
                            <div class="p-field p-col-12 p-md-12" style="display: flex">
                                <label for="nameuser" style="margin-top: 8px">날짜 정렬:</label> &nbsp;&nbsp;
                                <Calendar :showIcon="true" :showButtonBar="false" v-model="date" @date-select="datechange(date)" placeholder="YYYY/MM/DD" :manualInput="false" :max-date="new Date()"></Calendar>&nbsp;&nbsp;
                                <label style="margin-top: 8px">To</label> &nbsp;&nbsp;
                                <Calendar :showIcon="true" :showButtonBar="false" v-model="date" @date-select="datechange(date)" placeholder="YYYY/MM/DD" :manualInput="false" :max-date="new Date()"></Calendar>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="p-grid p-formgrid p-mb-3"> -->
                    <div class="p-field p-col-12 p-md-12">
                        <div class="cardgraph">
                            <StatisticBarChart></StatisticBarChart>

                            <!-- <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart> -->
                            <!-- <Chart type="line" :width="1080" :height="720" :data="basicData" :options="basicOptions" /> -->
                        </div>
                    </div>
                <!-- </div> -->
            </div>
        </div>

        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>새로운 채팅방</h5>
                    </div>

                    <div class="p-grid p-fluid">
                        <div class="p-formgrid p-grid">
                            <div class="p-field p-col-12 p-md-12" style="display: flex">
                                <label for="pass" style="width: 17%; margin-top: 8px">채팅방 유형</label> &nbsp;&nbsp;
                                
                                <Dropdown v-model="chatroom_type" :options="dropdownchatroomtype" optionValue="code" optionLabel="name" placeholder="전체" @change="searchchatroomtype" style="width: 28%" />
                                &nbsp;&nbsp;
                                <label for="nameuser" style="width: 15%; margin-top: 8px">날짜 정렬:</label>
                                <Calendar :showIcon="true" :showButtonBar="false" v-model="startDate" @date-select="datechange(startDate)" placeholder="YYYY/MM/DD" :manualInput="false" :max-date="new Date()"></Calendar>&nbsp;&nbsp;
                                <label style="margin-top: 8px">To</label> &nbsp;&nbsp;
                                <Calendar :showIcon="true" :showButtonBar="false" v-model="endDate" @date-select="datechange(endDate)" placeholder="YYYY/MM/DD" :manualInput="false" :max-date="new Date()"></Calendar>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="p-grid p-formgrid p-mb-3"> -->
                    <div class="p-field p-col-12 p-md-12">
                        <div class="cardgraph">
                            <Statisticchartroommultibar></Statisticchartroommultibar>

                            <!-- <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart> -->
                            <!-- <Chart type="line" :width="1080" :height="720" :data="basicData" :options="basicOptions" /> -->
                        </div>
                    </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>


<script>
import StatisticBarChart from '../../components/StatisticBarChart.vue';
import Statisticchartroommultibar from '../../components/Statisticchartroommultibar.vue';
import Newloginchart from '../../service/API/Newloginchart';
import moment from 'moment';
export default {
    components: {
        StatisticBarChart,
        Statisticchartroommultibar
    },
    data() {
        return {

            dropdownchatroomtype: [
                { name: '모두', code: 'all' },
                { name: '새로운 일반 대화방', code: 'general' },
                { name: '새로운 지역 기반 채팅방', code: 'region' },
            ],
            chatroom_type:'',
            startDate:'',
            endDate:'',
        };
    },
    created() {
        this.newloginchart = new Newloginchart();
    },

    methods: {
        dateformatInput(date, format) {
            if (date) {
                return moment(String(date)).format(format);
            }
        },
    
        datechange(e) {
            console.log("EEEE", e);
            var search_date = this.dateformatInput(e, "YYYY-MM-DD");
            var search_enddate = this.dateformatInput(e, "YYYY-MM-DD");
            // console.log("search_date", search_date);
            this.newloginchart
                .getchatroomchart({startDate: search_date, endDate:search_enddate, chatroom_type : this.chatroom_type  })
                .then((res) => {
                console.log(res.data.newLoginCounts);
                this.date = res.data.newLoginCounts.date;
                this.general_count = res.data.newLoginCounts.general_count;
                this.region_count = res.data.newLoginCounts.region_count;
            })
                .catch((err) => console.log(err));
        },

        searchchatroomtype() {
           
            
            // console.log("search_date", search_date);
            this.newloginchart
                .getchatroomchart({ chatroom_type : this.chatroom_type  })
                .then((res) => {
                console.log(res.data.newLoginCounts);
                this.date = res.data.newLoginCounts.date;
                this.general_count = res.data.newLoginCounts.general_count;
                this.region_count = res.data.newLoginCounts.region_count;
            })
                .catch((err) => console.log(err));
        },
    }

}

</script>
