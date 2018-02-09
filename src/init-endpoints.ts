import { Endpoint } from '@stayer/interfaces';

import Injector from './injector-interface';

import endpointRegister from './endpoint/endpoint-register';
import serviceRegister from './service/service-register';

export default function initEndpoints(
  services: Function[],
  injector: Injector,
): Endpoint[] {
  for (const record of serviceRegister) {
    injector.inject(record.constructor, record.dependencies);
  }
  return endpointRegister;
}
