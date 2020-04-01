
function getMetrics (table, type){
  var metrics = [];
  var id = [];

  if (table.columns.length == 1){
    //only one
    var name = table.columns[0].name;
    var size = table.rows[0][table.columns[0].id];
    metrics.push({
      "key": name,
      "size": size
    });
  } else {
    table.columns.forEach((column, i) => {
      var name = column.name;
      id.push(column.id);
    });

    table.rows.forEach(row => {
      let values = [];
      id.forEach(id => {
        if (row[id]){
          values.push(row[id]);
        };
      });
      // push metrics
      if ( type == '3d_bar'){
        metrics.push({
          "key": values[0].toString(),
          "key2": values[1].toString(),
          "size": values[2],
        });
      } else if ((type == 'simple_bar')||(type == 'pie')) {
        metrics.push({
          "key": values[0].toString(),
          "size": values[1],
        });
      } else if (type == 'bubble'){
        metrics.push({
          "key": values[0].toString(),
          "key2": values[1].toString(),
          "height": values[2],
          "radius": values[3],
        });
      };
    });
  }
  return metrics;
}

export { getMetrics };
