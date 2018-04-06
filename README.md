# @stayer/routing

Routing module of the Stayer framework.

## Usage example

To create a service with some endpoints, first you need to declare a ```Service``` class, and then mark some of its methods as endpoints (```Get``` or ```Post```):

```
import { Get, Post, Service } from '@stayer/routing';

@Service()
export class SomeService {
  private items: object[] = [];

  @Get('/items')
  getAll(req, res, body, query) {
    return this.items; // these are returned in HTTP response with status 200
  }

  @Post('/item')
  createItem(req, res, body, query) {
    const newItem = body.item;
    this.items.push(newItem);
    res.statusCode = 201; // let's return a Created HTTP status
    return newItem; // returning newly created item in response
  }
}
```

## Public API

- Service() - a service class decorator. All classes containing endpoint decorators must be marked as ```@Service()```.

- Get(route: string) - a GET endpoint method decorator. Will be available via HTTP with your server base URL (in our example for all items: ```http://localhost:3000/items```).

- Post(route: string) - a POST endpoint method decorator. Will be available via HTTP with your server base URL (in our example for new item: ```http://localhost:3000/item``` (POST)).

All endpoint methods accept 4 parameters:

@Get('/')
async myEndpoint(req, res, body, query) {
  return await { foo: 'bar' };
}

- req: IncominMessage - a Node.js request object;
- res: ServerResponse - a Node.js response object;
- body?: object - a JSON-parsed request body, can be undefined;
- query?: object - parsed URL-query, can be undefined.

Note that an endpoint decorator is able to return values asynchronously.
