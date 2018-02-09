import { HttpMethod } from '@stayer/interfaces';

import MethodDecorator from '../interfaces/method-decorator';
import EndpointRecord from '../interfaces/endpoint-record';
import endpointRegister from './endpoint-register';

function decoratorFactory(method: HttpMethod, route: string): MethodDecorator {
  return (target: Function|object, propertyName: string) => {
    const record: EndpointRecord = {
      method,
      route,
      propertyName,
      service: (target instanceof Function) ? target : target.constructor,
    };
    endpointRegister.push(record);
  }
}

export default decoratorFactory;
