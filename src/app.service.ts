import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getProducts(): any[] {
    return [{test: 'asdgasdg'}];
  }
}
