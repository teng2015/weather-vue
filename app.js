new Vue({
  el: '#app',
  data: {
    city: '',
    format: true
  },
  methods: {
    getData: function(){
      var self = this; 
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+self.city+'&units=metric&appid=55e71b08f9edeb8c17b7eb7f381bf15d', function(data){
        self.$set('data', data);
      })
    },
    change: function(){
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