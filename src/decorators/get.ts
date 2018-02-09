import { Endpoint, HttpMethod } from '@stayer/interfaces';

import MethodDecorator from '../interfaces/method-decorator';
import decoratorFactory from '../endpoint/decorator-factory';
//import endpointRegister from './endpoint/endpoint-register';

export default function Get(route: string): MethodDecorator {
  /*return (target: any, propertyName: string): void => {
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
  }*/
  return decoratorFactory(HttpMethod.GET, route);
}
