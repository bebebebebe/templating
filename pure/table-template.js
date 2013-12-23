var directive = {
  "thead th": {
    "title<-headings": {
      ".": "title"
    }
  },
  "tbody tr": {
    "row<-rows": {
      "td.left": "row.col1",
      "td.right": "row.col2"
    }
  }
};

$(document).ready(function() { 
  $('.table').render(tableData, directive);
});