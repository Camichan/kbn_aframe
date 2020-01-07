//import $ from 'jquery';
import React from 'react';

import template from './index.html';
import box from './box.js'

// define class
class VisController {
   constructor(el, vis) {
      console.log('Creating...');
      this.el = el;
      this.vis = vis;
      console.log(this);
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
        this.container.innerHTML = '';
        console.log(visData);
      }

      const table = visData;
      const metrics = [];
      const axis = [];

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
        // add axis
        axis.push(value);
      });
      console.log(metrics);
      console.log(axis);

      //render metric in vis
      metrics.forEach((metric, i) => {
        var metricDiv = document.createElement('div');
        metricDiv.className = 'myvis-metric-div';
        metricDiv.innerHTML = `<b>${metric.name}:</b> ${metric.value}`;
        metricDiv.setAttribute('style', `font-size: ${this.vis.params.fontSize}pt`);
        this.container.appendChild(metricDiv);
      });

      //Creando escenario
      var escena = document.createElement('a-scene');
      escena.setAttribute('embedded', true);

      // entity primitive
      var entidad = document.createElement('a-entity');
      entidad.setAttribute('geometry', {
        primitive: 'sphere',
        radius: 1.25
      });
      entidad.setAttribute('position', {
        x: -2.5,
        y: 1,
        z: -5
      });
      entidad.setAttribute('material',{
        color: '#EF2D5E'
      });
      entidad.setAttribute('shadow', true);


      // entity con box.js
      var caja = document.createElement('a-entity');
      caja.setAttribute('box', {
        height: axis[0]/10, //0.5
        width: axis[1]/10, //0.25
        depth: axis[2]/10, //1
      });
      caja.setAttribute('position', {
        x: 0,
        y: 1,
        z: -5
      });
      caja.setAttribute('rotation', {
        x: 0,
        y: -45,
        z: 0
      });
      caja.setAttribute('material', 'color', '#4CC3D9');

      escena.appendChild(entidad);
      escena.appendChild(caja);
      this.container.appendChild(escena);

      console.log(escena);

        /*return new Promise(resolve => {
          resolve('when done rendering');
    });*/
   }
};

export { VisController };
