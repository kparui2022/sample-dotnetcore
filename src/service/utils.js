import {
    basePath,
} from "./Base";

const paginators_page = (total_pages, active) => {
    var arr = []
    for (let i = 1; i <= total_pages; i++) {
        arr.push(i);
    }

    var last = arr[arr.length - 1];
    
    if (active <= 3) {
        // eslint-disable-next-line no-redeclare
        var pages = arr.filter((m) => m <= 5);
    } else if (active >= (last - 2)) {
        // eslint-disable-next-line no-redeclare
        var pages = arr.filter((m) => m > (last - 5));
    } else {
        // eslint-disable-next-line no-redeclare
        var pages = arr.filter((m) => m === (active + 1) || m === (active + 2) || m === active || m === (active - 1) || m === (active - 2));
    }
    return pages;
}

const utils = {
    _clear: (obj) => Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object') return obj[key].length = 0;
        else return obj[key] = ''
    }),
    formatDate: (value) => {
        const date = new Date(value);
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return (value = yyyy + '.' + mm + '.' + dd + ' ' + ' ' + hr + ':' + min + ':' + sec);
    },
    imageBasePath: basePath,
    paginate: paginators_page
}


export default utils;