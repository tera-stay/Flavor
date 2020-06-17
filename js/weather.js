var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9d50df53ff80f789c405eb8fc44b522e')
  .then(response => response.json())
  .then(data => {
      var nameValue = data['name'];
      var tempValue = Math.floor(data['main']['temp'] - 273.15) + '℃';
      var descValue = data['weather'][0]['description'];

      name.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;
  })

.catch(err => alert("Wrong city name!"))
})