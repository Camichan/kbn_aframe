import template from './index.html';

// define class
class VisController {
   constructor(el, vis) {
      console.log('Creating...');
      this.el = el;
      this.vis = vis;
      console.log(this.el);
      console.log(this.vis);

      this.container = document.createElement('div');
      this.container.className = 'myvis-container-div';
      this.el.appendChild(this.container);

      //this.config = vis.type.editorConfig;
   }

   destroy() {
      this.el.innerHTML = '';
      console.log('Destroying...');
   }

   render(visData, status) {

      if (visData) {
        this.container.innerHTML = template;
        console.log(visData);
      }

      const table = visData;
      const metrics = [];

      //get metrics
      table.columns.forEach((column, i) => {
        var value;
        const name = column.name;
        const id = column.id;
        table.rows.forEach(row => {
          if (row[id]){
            value = Math.round(row[id]*100)/100;
          }
        });
        // push metrics
        metrics.push({
          name: name,
          value: value
        });
      });
      console.log(metrics);
      //render metric in vis
      metrics.forEach((metric, i) => {
        const metricDiv = document.createElement('div');
        metricDiv.className = 'myvis-metric-div';
        metricDiv.innerHTML = `<b>${metric.name}:</b> ${metric.value}`;
        metricDiv.setAttribute('style', `font-size: ${this.vis.params.fontSize}pt`);
        this.container.appendChild(metricDiv);
      });

        return new Promise(resolve => {
          resolve('when done rendering');
    });
   }
};

export { VisController };
