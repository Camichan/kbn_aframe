
//import { VisFactoryProvider } from 'ui/vis/vis_factory'; -- Version Anterior a 7.x
//import { VisTypesRegistryProvider } from 'ui/registry/vis_types'; //-- Version Anterior a 7.x

//import registerVisualization
//import { visFactory } from 'ui/vis/vis_factory';
import { setup as visualizations } from '../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';
import { Schemas } from 'ui/vis/editors/default/schemas';
import { AggGroupNames } from 'ui/vis/editors/default';
//import optionsTemplate from './options_template.html';
import style from './aframe.less';
import { VisController } from './kbn_aframe_controller.js';


// define the new visualization
//function BoxVisTypeProvider(Private){ -- Version Anterior a 7.x
const BoxVisTypeProvider = {
  //const VisFactory = Private(visFactory); //-- Version Anterior a 7.x
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

    editorConfig: {
      //optionsTemplate: optionsTemplate,
      schemas: new Schemas([
        {
          group: AggGroupNames.Metrics,
          name: 'metric',
          title: 'Slice size',
          min: 1,
          max: 1,
          aggFilter: ['sum', 'count', 'cardinality', 'top_hits'],
          defaults: [{ schema: 'metric', type: 'count' }],
        },
        {
          group: AggGroupNames.Buckets,
          name: 'segment',
          title: 'Split slices',
          min: 0,
          max: 1,
          aggFilter: ['!geohash_grid', '!geotile_grid', '!filter'],
        },
      ]),
    }
  };


visualizations.types.createBaseVisualization(BoxVisTypeProvider);


//Register the provider with the visType Register
//visualizations.types.registerVisualization(BoxVisTypeProvider);
//VisTypesRegistryProvider.register(BoxVisTypeProvider); //-- Version Anterior a 7.x
