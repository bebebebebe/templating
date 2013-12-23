$(document).ready(function() {


  $('#list').render(listData);

// below is for list 2, using an array of values to populate the list
  var directive = {
    item: {
      text: function() {
        return this.value;
      }
    }
  };

$('#list2').render(array, directive);



});