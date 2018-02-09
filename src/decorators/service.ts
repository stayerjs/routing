import 'reflect-metadata';

import ServiceRecord from '../interfaces/service-record';
import serviceRegister from '../service/service-register';


export default function Service() {
  return (constructor: Function) => {
    const dependencies: Function[] = 
      Reflect.getMetadata('design:paramtypes', constructor) || [];
    const record: ServiceRecord = { constructor, dependencies };
    serviceRegister.push(record);
  }
}
