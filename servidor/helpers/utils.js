export default function sortArrat(array) {
    return array.sort(function (a,b) {
        if(a.results > b.results) {
            return -1;
        }
        if (a.results < b.results) {
            return 1;
        }
        return 0;
    });
}

module.exports = {
    sortArray
};