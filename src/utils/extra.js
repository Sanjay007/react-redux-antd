export const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min)

export const sleep = (time) => (new Promise((resolve) => setTimeout(resolve, time)))

export const sortByField = (field, reverse, primer) => {

    var key = primer ?
        function (x) { return primer(x[field]) } :
        function (x) { return x[field] };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}

