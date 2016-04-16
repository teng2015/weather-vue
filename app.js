
new Vue({
  el: '#app',
  
  data: function(){
    return {
      city: '',
      format: true,
      lat: '',
      lon: ''
    }
  },
  ready: function(){
    this.getData();
  },
  methods: 
  {
    getData: function()
    {
      $('.uil-sunny.css').show();
      var self = this;
      function success(pos){
        var latitude  = pos.coords.latitude;
        var longitude = pos.coords.longitude;
      $.getJSON('http://api.openweathermap.org/data/2.5/find?lat='+latitude+'&lon='+longitude+'&cnt=10&appid=55e71b08f9edeb8c17b7eb7f381bf15d&units=metric', function(data){
        self.$set('data', data);
      })
      }
      navigator.geolocation.getCurrentPosition(success);
      $('.uil-sunny.css').hide();
    },
    change: function()
    {
      var self = this;
      if(self.format){
        return self.format = false;
      }else {
        return self.format = true;
      }
    }
  }
})

Vue.filter('celcius', function(value){
  return value + '°C';
})
Vue.filter('fahrenheit', function(value){
  return Math.round( (value * 9)/5 + 32 ) + '°F'
})
$('.css-input').focus(
  function(){
    $(this).val('');
  });