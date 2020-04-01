import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { Schemas } from 'ui/vis/editors/default/schemas';
import { AggGroupNames } from 'ui/vis/editors/default';
import { VisController } from './kbn_aframe_controller.js';

export const simpleBarDefinition = (Private) => {
  const simpleBar_Vis = Private(VisFactoryProvider);

// define the new visualization
    return  simpleBar_Vis.createBaseVisualization({

      name: 'bar_chart',
      title: 'VR Vertical Bar',
      icon: 'visBarVertical',
      description: 'Assign a continuous variable to each axis (VR Chart).',
      visualization: VisController,

      visConfig: {
        defaults: {
          type: 'simple_bar',
        },
      },

      editorConfig: {
        schemas: new Schemas([
          {
            group: AggGroupNames.Metrics,
            name: 'metric',
            title: 'Y-axis',
            min: 1,
            max: 1,
            aggFilter: ['sum', 'count', 'cardinality', 'top_hits'],
            defaults: [{ schema: 'metric', type: 'count' }],
          },
          {
            group: AggGroupNames.Buckets,
            name: 'segment',
            title: 'Split Chart',
            min: 0,
            max: 1,
            aggFilter: ['!geohash_grid', '!geotile_grid', '!filter'],
          },
        ]),
      }
    });
  }
