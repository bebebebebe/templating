$(document).ready(function() {

   var directive = {
    item: {
      html: function(arg) {
        console.log(arg);
        if (arg.index === 0) { // treat the first element of the data collection differently
          return '<b>' + this.value + '</b>'
        } else {
          return this.value;
        }
      }
    }
  };


$('#list').render(array, directive);

});