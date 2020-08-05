var request = new XMLHttpRequest();

  
  $(function(){
    $("#map-container").japanMap({
      onSelect : function(data){
        request.open('GET','https://covid19-japan-web-api.now.sh/api/v1/prefectures',true);
        request.responseType = 'json';
          
        request.onload = function () {
            var array = this.response;
            console.log(array);
            searchID = data.code;
            target = array.filter(function(object){
                return object.id == searchID;
            }).shift()
            console.log(target)
            console.log(target.name_ja)    
            var p_name = document.getElementById('name');
            p_name.innerHTML = '検索対象 : '+target.name_ja;
            var cases_n = document.getElementById('cases');
            cases_n.innerHTML = '感染者数 : '+target.cases+ '人';
            var pcr_n = document.getElementById('PCR');
            pcr_n.innerHTML = 'PCR検査数 : '+target.pcr+ '件';
        };

        
        
        
        request.send();

      }
    });
  });

 
