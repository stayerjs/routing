import { Endpoint, Injector } from '@stayer/interfaces';

import endpointRegister from './endpoint/endpoint-register';
import serviceRegister from './service/service-register';

export default function initEndpoints(
  injector: Injector,
  services?: Function[],
): Endpoint[] {
  for (const record of serviceRegister) {
    injector.inject(record.constructor, record.dependencies);
  }
  const endpoints: Endpoint[] = [];
  for (const record of endpointRegister) {
    const service$ = injector.getInstance(record.service);
    const endpoint: Endpoint = {
      method: record.method,
      route: record.route,
      propertyName: record.propertyName,
      service: service$,
      fn$: service$.then(service => (service as any)[record.propertyName]),
    };
    endpoints.push(endpoint);
  }
  return endpoints;
}
