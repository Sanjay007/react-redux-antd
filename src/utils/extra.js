export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export const sortByField = (field) => {
    var reverse = false;
    var primer = function (a) { return a.toUpperCase() };
    var key = primer ?
        function (x) { return primer(x[field]) } :
        function (x) { return x[field] };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
        return [a = key(a), b = key(b), reverse * ((a > b) - (b > a))];
    }
}