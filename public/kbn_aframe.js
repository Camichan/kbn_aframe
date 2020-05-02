import { setup as visualizations } from '../../../src/legacy/core_plugins/visualizations/public/np_ready/public/legacy';

import { pieDefinition } from './pie';
import { simpleBarDefinition } from './simple_bar';
import { geo3dBarDefinition } from './3d_bar';
import { bubbleDefinition } from './bubble';

visualizations.types.createBaseVisualization(pieDefinition);
visualizations.types.createBaseVisualization(simpleBarDefinition);
visualizations.types.createBaseVisualization(geo3dBarDefinition);
visualizations.types.createBaseVisualization(bubbleDefinition);
