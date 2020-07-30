var request = new XMLHttpRequest();

var name = document.querySelector('.name');
var desc = document.querySelector('.total');

$(function(){
    $("#map-container").japanMap({
      onSelect : function(data){
        request.open('GET','https://covid19-japan-web-api.now.sh/api/v1/statistics',true);
        request.responseType = 'json';
        
        request.onload = function () {
            var data = this.response;
            var nameValue = data['name_ja'];
            var totalValue = data['total_count'];
            
            name.innerHTML = nameValue;
            total.innerHTML = totalValue;
        };


        

        
      }
    });
  });