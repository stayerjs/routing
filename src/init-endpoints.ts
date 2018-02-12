import { BehaviorSubject, Observable } from 'rxjs';
import { Endpoint, Injector } from '@stayer/interfaces';

import endpointRegister from './endpoint/endpoint-register';
import serviceRegister from './service/service-register';

function getFnPromised(fn$: Observable<Function>): Promise<Function> {
  return new Promise((resolve: any, reject: any) => {
    fn$.subscribe(fn => resolve(fn));
  });
}

export default function initEndpoints(
  injector: Injector,
  services?: Function[],
): Endpoint[] {
  for (const record of serviceRegister) {
    injector.inject(record.constructor, record.dependencies);
  }
  const endpoints: Endpoint[] = [];
  for (const record of endpointRegister) {
    const servicePromised = injector.getInstance(record.service);
    const service$ = injector.getInstanceObs(record.service);
    const fn$: Observable<Function> = service$.mergeMap(service => {
      const fn = ((service as any)[record.propertyName] as Function).bind(service);
      return new BehaviorSubject(fn);
    });
    const endpoint: Endpoint = {
      method: record.method,
      route: record.route,
      fn$: getFnPromised(fn$),
    };
    endpoints.push(endpoint);
  }
  return endpoints;
}
