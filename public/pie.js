import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { Schemas } from 'ui/vis/editors/default/schemas';
import { AggGroupNames } from 'ui/vis/editors/default';
import { VisController } from './kbn_aframe_controller.js';

export const pieDefinition = (Private) => {
  const pie_Vis = Private(VisFactoryProvider);

// define the new visualization
    return  pie_Vis.createBaseVisualization({

      name: 'pie_chart',
      title: 'VR Pie',
      icon: 'visPie',
      description: 'Compare parts of a whole (VR Chart).',
      visualization: VisController,

      visConfig: {
        defaults: {
          type: 'pie',
        },
      },

      editorConfig: {
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
    });
  }
