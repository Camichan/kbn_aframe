import { VisTypesRegistryProvider } from 'ui/registry/vis_types';

import { pieDefinition } from './pie';
import { simpleBarDefinition } from './simple_bar';
import { geo3dBarDefinition } from './3d_bar';
import { bubbleDefinition } from './bubble';

VisTypesRegistryProvider.register(pieDefinition);
VisTypesRegistryProvider.register(simpleBarDefinition);
VisTypesRegistryProvider.register(geo3dBarDefinition);
VisTypesRegistryProvider.register(bubbleDefinition);
