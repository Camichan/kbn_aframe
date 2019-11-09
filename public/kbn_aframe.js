
//import { VisFactoryProvider } from 'ui/vis/vis_factory'; -- Version Anterior a 7.x
//import { VisTypesRegistryProvider } from 'ui/registry/vis_types'; -- Version Anterior a 7.x

//import registerVisualization
import { visFactory } from 'ui/vis/vis_factory';
import { setup as visualizations } from '../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';
//import aframe
const aframe = require('aframe');
//import box and template
import box from './box.js'
import template from './index.html';



// define class
class MyVisualization {
   constructor(el, vis) {
      this.el = el;
      this.vis = vis;
      this.container = document.createElement('div');
      this.container.className = 'myvis-container-div';
      this.el.appendChild(this.container);
      console.log('Empezamos');

   }
   async render(visData, status) {
      console.log('Hola mundo');
      this.container.innerHTML = template;
      return 'done rendering';
   }
   destroy() {
      this.el.innerHTML = '';
      console.log('destroying');
   }
};

// define the new visualization
//function BoxVisTypeProvider(Private){ -- Version Anterior a 7.x
function BoxVisTypeProvider() {
  //const VisFactory = Private(VisFactoryProvider); -- Version Anterior a 7.x

  return visFactory.createBaseVisualization({
    name: 'my_new_vis',
    title: 'EL BOX',
    icon: 'list',
    description: 'el cubo del averno',
    visualization: MyVisualization,
    requestHandler: 'none',

    editor: 'default',
    stage: 'experimental',
    feedbackMessage: '¡Bienvenida!'

  });
}

//Register the provider with the visType Register
visualizations.types.registerVisualization(BoxVisTypeProvider);
//VisTypesRegistryProvider.register(BoxVisTypeProvider); -- Version Anterior a 7.x
