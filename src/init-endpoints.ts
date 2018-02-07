import { Endpoint } from '@stayer/interfaces';

import endpointRegister from './endpoint-register';

export default function initEndpoints(root: Function|Function[]): Endpoint[] {
  return endpointRegister;
}
