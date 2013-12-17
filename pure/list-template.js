var directive = {
  'li':{
    'i<-context':{
      '.':'i'
    }
  }
};

var directive2 = {
  'li':{
    'i<-context':{
      '.':'i.item'
    }
  }
}


$(document).ready(function() { 
  $('ul').render(array, directive); 
  //$('ul').render(listData, directive2); // alternative, using listData
});