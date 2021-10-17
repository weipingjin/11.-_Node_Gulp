function getData(callback) {
    callback('123')
}
getData(function(n) {
    console.log('callback函数调用了');
    console.log(n);
});