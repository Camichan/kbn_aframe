
//import { VisFactoryProvider } from 'ui/vis/vis_factory'; -- Version Anterior a 7.x
//import { VisTypesRegistryProvider } from 'ui/registry/vis_types'; -- Version Anterior a 7.x

//import registerVisualization
import { visFactory } from 'ui/vis/vis_factory';
import { setup as visualizations } from '../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';

import { Schemas } from 'ui/vis/editors/default/schemas'; //declarar schemas
import optionsTemplate from './options_template.html';

//import aframe
const aframe = require('aframe');
//import box and template
import box from './box.js'
import template from './index.html';
import style from './aframe.less';



// define class
class MyVisualization {
   constructor(el, vis) {
      this.el = el;
      this.vis = vis;
      this.container = document.createElement('div');
      this.container.className = 'myvis-container-div';
      this.el.appendChild(this.container);
      this.container.innerHTML = template;
      this.config = vis.type.editorConfig;
      console.log('Empezamos');

   }
   async render(visData, status) {
      console.log('Hola mundo');
      // update when data changed
      //this.container.innerHTML = template;
      return 'done rendering';
   }
   destroy() {
      this.el.innerHTML = '';
      console.log('destroying');
   }
};

// define the new visualization
//function BoxVisTypeProvider(Private){ -- Version Anterior a 7.x
function BoxVisTypeProvider(Private) {
  //const VisFactory = Private(VisFactoryProvider); -- Version Anterior a 7.x
  return visFactory.createBaseVisualization({
    name: 'my_new_vis',
    title: 'VR Experience',
    icon: 'list',
    description: 'Only a BOX and a SPHERE',
    visualization: MyVisualization,
    requestHandler: 'none',

    editor: 'default',
    stage: 'experimental',
    feedbackMessage: 'Hello World!',

    editorConfig: {
      optionsTemplate: optionsTemplate,
      schemas: new Schemas([
        {
          group: 'metrics',
          name: 'metric',
          title: 'Metric',
          min: 1,
          aggFilter: ['!derivative', '!geo_centroid'],
          defaults: [
            { type: 'count', schema: 'metric' }
          ]
        }
      ]),
    }

  });
}

//Register the provider with the visType Register
visualizations.types.registerVisualization(BoxVisTypeProvider);
//VisTypesRegistryProvider.register(BoxVisTypeProvider); -- Version Anterior a 7.x
