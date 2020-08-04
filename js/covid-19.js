var request = new XMLHttpRequest();

request.open('GET','https://covid19-japan-web-api.now.sh/api/v1/statistics',true);
request.responseType = 'json';

request.onload = function () {
    var data = this.response;
    
    console.log(data);
};

request.send();