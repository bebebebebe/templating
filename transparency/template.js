$(document).ready(function() {

  $('#table').render(tableData);


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

  $('#table2').render(table, directive);

});