import { inject, injectable } from 'inversify';

import { Injected } from './injected';

@injectable()
export class Main {
  @inject(Injected)
  injected: Injected;
}
