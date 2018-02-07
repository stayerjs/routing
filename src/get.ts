import { Endpoint, HttpMethod } from '@stayer/interfaces';

import endpointRegister from './endpoint-register';

export default function Get(route: string) {
  return (target: any, propertyName: string): void => {
    let service: Function;
    let serviceName: string;
    if (target instanceof Function) {
      service = target;
    } else {
      service = target.constructor;
    }
    const endpoint: Endpoint = {
      method: HttpMethod.GET,
      route,
      propertyName,
      serviceName: target.name || target.constructor.name,
      service: service,
    }
    endpointRegister.push(endpoint);
  }
}
