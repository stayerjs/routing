import { HttpMethod } from '@stayer/interfaces';

export default interface EndpointRecord {
  method: HttpMethod,
  route: string,
  propertyName: string,
  service: Function,
}
