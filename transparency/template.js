$(document).ready(function() {

  $('#table').render(table);


// for table 2, iterating over table rows and using an array to populate table headings

   var directive = {
    headings: {
      column: {
        text: function() {
          return this.value;
        }
      }
    }
  };

  $('#table2').render(tableData, directive);

});