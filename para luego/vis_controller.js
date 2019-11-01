class VisController {
  constructor(el, vis) {
    this.vis = vis;
    this.el = el;
    this.el.innerHTML = '<div> Hola Mundo </div>'

  }

  destroy() {
    this.el.innerHTML = '';
  }

  render(/*visData,*/ status) {
    this.container.innerHTML = '';
  //return new Promise(resolve => {.resolve('when done rendering');
  //});
  }
};
export { VisController };

/*
const table = visData.tables[0];
const metrics = [];
table.columns.forEach((column, i) => {
  const value = table.rows[0][i];
  metrics.push({
    title: column.title,
    value: value,
    formattedValue: column.aggConfig ? column.aggConfig.fieldFormatter('text')(value) : value,
    aggConfig: column.aggConfig
  });

  metrics.forEach(metric => {
    const metricDiv = document.createElement('div');
    metricDiv.className = 'myvis-metric-div';
    metricDiv.innerHTML = `<b>${metric.title}:</b> ${metric.formattedValue}`;
    this.container.appendChild(metricDiv);
  });

  metrics.forEach(metric => {
      const metricDiv = document.createElement('div');
      metricDiv.className = 'myvis-metric-div';
      metricDiv.innerHTML = `<b>${metric.title}:</b> ${metric.formattedValue}`;
      metricDiv.setAttribute('style', `font-size: ${this.vis.params.fontSize}pt`);
      this.container.appendChild(metricDiv);
  });

});*/
/*
const table2 = visData.tables[0];
const metrics2 = [];
let bucketAgg;
  table2.columns.forEach((column, i) => {
    // we have multiple rows … first column is a bucket agg
    if (table2.rows.length > 1 && i == 0) {
      bucketAgg = column.aggConfig;
      return;
    }
  table2.rows.forEach(row => {
    const value = row[i];
    metrics2.push({
      title: bucketAgg ? `${row[0]} ${column.title}` : column.title,
      value: row[i],
      formattedValue: column.aggConfig ? column.aggConfig.fieldFormatter('text')(value) : value,
      bucketValue: bucketAgg ? row[0] : null,
      aggConfig: column.aggConfig
    });
  });

  metrics2.forEach(metric => {
    const metricDiv = document.createElement('div');
    metricDiv.className = 'myvis-metric-div';
    metricDiv.innerHTML = `<b>${metric.title}:</b> ${metric.formattedValue}`;
    metricDiv.setAttribute('style', `font-size: ${this.vis.params.fontSize}pt`);

    metricDiv.addEventListener('click', () => {
     if (!bucketAgg) return;
     const filter = bucketAgg.createFilter(metric.bucketValue);
     this.vis.API.queryFilter.addFilters(filter);
    });
    this.container.appendChild(metricDiv);
  });
});*/
