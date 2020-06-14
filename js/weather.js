/*実装未定:位置情報の取得の許可
window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
        });
    }
});*/