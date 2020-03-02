import 'aframe';
import 'aframe-babia-components';
import 'aframe-extras';
import 'aframe-environment-component';
import './a-scene.js'

var old_data;

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

   }

   destroy() {
      this.el.innerHTML = '';
      console.log('Destroying...');
   }

   render(visData, status) {
     console.log("RENDER TIME");

      if (visData) {
        //
        console.log(visData);

        if ((!old_data)||(old_data != visData)){

          this.container.innerHTML = '';
          old_data = visData;
          var table = visData;
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
            //get metrics
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
              metrics.push({
                "key": values[0],
                "size": values[1]
              });
            });
          }

          console.log(metrics);

          //Creando escenario
          var escena = document.createElement('a-scene');
          escena.setAttribute('id', 'AframeScene');
          escena.setAttribute('embedded', true);

          // Environment
          var environment = document.createElement('a-entity');
          environment.setAttribute('environment', {
            preset: 'contact',
            skyType: 'gradient'
          });
          escena.appendChild(environment);

          // LIGHT
          var light = document.createElement('a-light');
          light.setAttribute('type', 'ambient');
          light.setAttribute('intensity', 1);
          light.setAttribute('position', { x:10, y:20, z:30 });
          escena.appendChild(light);

          // PIE CHART
          let data_json = JSON.stringify(metrics);
          //let data_json = '[{"key":"Kibana","size":9},{"key":"Andrea","size":18},{"key":"Elastic","size":7},{"key":"URCJ","size":26},{"key":"Cami","size":5}]';

          var pie = document.createElement('a-entity');
          pie.setAttribute('geopiechart', {
            legend: true,   // legend
            data: data_json //data
          });

          pie.setAttribute('position', { x: 0, y: 1, z: -4 });
          pie.setAttribute('rotation', { x: 90, y: -20, z: 0 });


          // CONTROLS
          var controls = document.createElement('a-entity');
          controls.setAttribute('movement-controls', {fly: true});

          var camera = document.createElement('a-entity');
          camera.setAttribute('camera', true);
          camera.setAttribute('look-controls', true);
          controls.appendChild(camera);

          var cursor = document.createElement('a-entity');
          cursor.setAttribute('cursor', {rayOrigin: "mouse"});
          controls.appendChild(cursor);

          var laser = document.createElement('a-entity');
          laser.setAttribute('laser-controls', {hand: "right"});
          //controls.appendChild(laser);

          escena.appendChild(controls);
          escena.appendChild(pie);

          this.container.appendChild(escena);

          console.log(escena);
        }
      }
   }
};

export { VisController };
