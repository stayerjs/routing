import { Endpoint, HttpMethod } from '@stayer/interfaces';

import endpointRegister from './endpoint-register';

export default function Post(route: string) {
  return (target: any, propertyName: string): void => {
    const endpoint: Endpoint = {
      method: HttpMethod.POST,
      route,
      propertyName,
      serviceName: target.name || target.constructor.name,
    }
    endpointRegister.push(endpoint);
  }
}
