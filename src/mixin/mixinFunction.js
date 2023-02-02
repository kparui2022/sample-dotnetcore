export default{
    methods: {
        formatDate(value) {
            // return value.toLocaleDateString('en-US', {
            //     year: 'numeric',
            //     month: '2-digit',
            //     day: '2-digit',
            // });
            const date = new Date(value);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = yyyy + '.' + mm + '.' + dd);
        },
        formatDateTime(value) {
            const date = new Date(value);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            var hr=date.getHours();
            var min=date.getMinutes();
            var sec=date.getSeconds();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            if (hr < 10) {
                hr = '0' + hr;
            }
            if (min < 10) {
                min = '0' + min;
            }
            if (sec < 10) {
                sec = '0' + sec;
            }
            return (value =`${yyyy}-${mm}-${dd} ${hr}:${min}:${sec}`);
        },
        addDay(val){
            const date = new Date(val);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            var hr=date.getHours();
            var min=date.getMinutes();
            var sec=date.getSeconds();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            if (hr < 10) {
                hr = '0' + hr;
            }
            if (min < 10) {
                min = '0' + min;
            }
            if (sec < 10) {
                sec = '0' + sec;
            }
            return (val = `${yyyy}-${mm}-${dd} ${hr}:${min}:${sec}`);
        },
    },
}