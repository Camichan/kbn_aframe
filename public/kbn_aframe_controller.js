import 'aframe';
import 'aframe-babia-components';
import 'aframe-extras';
import 'aframe-environment-component';
import './aframe.less';

import { getMetrics } from './metrics';
import { createScene } from './a_scene';
import { createControls } from './a_controls';
import { createChart } from './a_charts';

var old_data;
class VisController {
   constructor(el, vis) {
      this.el = el;
      this.vis = vis;
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
      if (visData) {
        if ((!old_data)||(old_data != visData)){
          this.container.innerHTML = '';
          old_data = visData;
          let table = visData;
          let metrics = getMetrics(table, this.vis.params.type);
          console.log(metrics);

          let data_json = JSON.stringify(metrics);
          console.log(data_json);

          let escena = createScene();
          let chart = createChart(this.vis.params.type, data_json);
          let controls = createControls();

          escena.appendChild(controls);
          escena.appendChild(chart);
          this.container.appendChild(escena);
        }
      }
   }
};

export { VisController };
