var directive = {
  'li':{
    'i<-context':{
      '@class+':function(arg){
        var oddEven = (arg.pos % 2 === 0) ? ' odd' : ' even';
        var first = (arg.pos === 0) ? ' first' : '';
        return oddEven + first;
      },
      '.':'i'
    }
  }
};


// var directive = {
//     //trigger a loop
//     'tr' : {
//       // loop on the property animals in the JSON
//       'animal<-animals' : { 
//         // add(+) the return value of the function to the class
//         '@class+':function(arg){ 
//           var oddEven, firstLast;
//           oddEven = (arg.pos % 2 == 0) ? ' even' : ' odd';
//           firstLast = (arg.pos == 0) ? 
//             ' first' : 
//             (arg.pos == arg.animal.items.length - 1) ? 
//               ' last' : 
//               '';
//           return oddEven + firstLast;
//        },
//        'td':'animal.name'
//        }
//      }
//     };


$(document).ready(function() { 
  $('ul').render(array, directive); 
});