import { Schemas } from 'ui/vis/editors/default/schemas';
import { AggGroupNames } from 'ui/vis/editors/default';
import { VisController } from './kbn_aframe_controller.js';


// define the new visualization
export const bubbleDefinition = {

    name: 'bubble_chart',
    title: 'VR Bubble 3D',
    icon: 'heatmap',
    description: 'Bubbles with data (VR Chart).',
    visualization: VisController,

    visConfig: {
      defaults: {
        type: 'bubble',
      },
    },

    editorConfig: {
      schemas: new Schemas([
        {
          group: AggGroupNames.Metrics,
          name: 'metric',
          title: 'Y-axis',
          min: 1,
          max: 2,
          aggFilter: ['sum', 'count', 'cardinality', 'top_hits'],
          defaults: [{ schema: 'metric', type: 'count' }],
        },
        {
          group: AggGroupNames.Buckets,
          name: 'segment',
          title: 'Split Chart',
          min: 0,
          max: 2,
          aggFilter: ['!geohash_grid', '!geotile_grid', '!filter'],
        },

      ]),
    }
  };
