import { Endpoint, Injector } from '@stayer/interfaces';

import endpointRegister from './endpoint/endpoint-register';
import serviceRegister from './service/service-register';

export default function initEndpoints(
  services: Function[],
  injector: Injector,
): Endpoint[] {
  for (const record of serviceRegister) {
    injector.inject(record.constructor, record.dependencies);
  }
  const endpoints: Endpoint[] = [];
  for (const record of endpointRegister) {
    const endpoint: Endpoint = {
      method: record.method,
      route: record.route,
      propertyName: record.propertyName,
      service: injector.getInstance(record.service),
    };
    endpoints.push(endpoint);
  }
  return endpoints;
}
