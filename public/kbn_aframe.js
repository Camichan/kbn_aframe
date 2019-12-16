
//import { VisFactoryProvider } from 'ui/vis/vis_factory'; -- Version Anterior a 7.x
//import { VisTypesRegistryProvider } from 'ui/registry/vis_types'; -- Version Anterior a 7.x

//import registerVisualization
import { visFactory } from 'ui/vis/vis_factory';
import { setup as visualizations } from '../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';
import { Schemas } from 'ui/vis/editors/default/schemas';
import { AggGroupNames } from 'ui/vis/editors/default';
import optionsTemplate from './options_template.html';
//import { TemplateVisTypeProvider } from 'ui/template_vis_type/template_vis_type';
//import aframe
const aframe = require('aframe');

//import box and template
import box from './box.js'
import template from './index.html';
import style from './aframe.less';

import { VisController } from './kbn_aframe_controller.js';



// define the new visualization
//function BoxVisTypeProvider(Private){ -- Version Anterior a 7.x
function BoxVisTypeProvider(Private) {
  //const VisFactory = Private(visFactory); //-- Version Anterior a 7.x
  return visFactory.createBaseVisualization({

    name: 'vis_aframe',
    title: 'VR Experience',
    icon: 'list',
    description: 'Only a BOX and a SPHERE',
    visualization: VisController,
    visConfig: {
      defaults: {
        // add default parameters
        fontSize: '15'
      },
    },

  /*  editor: 'default',
    stage: 'experimental',
    feedbackMessage: 'Hello World!',*/

    editorConfig: {
      optionsTemplate: optionsTemplate,
      schemas: new Schemas([
        {
          group: AggGroupNames.Metrics,
          name: 'metric',
          title: 'X-axis',
          min: 1,
          max: 1,
          aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'std_dev']
        },
        {
          group: AggGroupNames.Metrics,
          name: 'y-axis',
          title: 'Y-axis',
          min: 1,
          max: 1,
          aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'std_dev']
        },
        {
          group: AggGroupNames.Metrics,
          name: 'z-axis',
          title: 'Z-axis',
          min: 1,
          max: 1,
          aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'std_dev']
        }
      ]),
    }
  });
}

//Register the provider with the visType Register
visualizations.types.registerVisualization(BoxVisTypeProvider);
//VisTypesRegistryProvider.register(BoxVisTypeProvider); -- Version Anterior a 7.x
