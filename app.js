
new Vue({
  el: '#app',
  
  data: function(){
    return {
      city: '',
      format: true,
      img: {}
    }
  },

  methods: 
  {
    getData: function(){
      var self = this; 
      $.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+self.city+'&units=metric&appid=55e71b08f9edeb8c17b7eb7f381bf15d', function(data){
        self.$set('data', data);
      })
      $.ajax({
        type: "GET",
        
        url: "https://api.webcams.travel/rest?method=wct.webcams.list_by_tag&devid=0a4c346c97281912908108bbc20036e0&tag="+self.city+"&format=json",
        data: null
      })
      .success(function (data, textStatus, jqXHR) { self.$set('img', data) }.bind(this))
      .fail(function (data, err) { console.log(err)});
    },
    change: function(){
      var self = this;
      if(self.format){
        return self.format = false;
      }else {
        return self.format = true;
      }
    },
    background: function(){
      var self = this;
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