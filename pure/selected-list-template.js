var directive = {
  'li':{
    'i<-context':{
      // this adds css classes to list items, depending on their position in the data array
      '@class+':function(arg){
        var oddEven = (arg.pos % 2 === 0) ? ' odd' : ' even';
        var first = (arg.pos === 0) ? ' first' : '';
        return oddEven + first;
      },
      '.':'i'
    }
  }
};


$(document).ready(function() { 
  $('ul').render(array, directive); 
});