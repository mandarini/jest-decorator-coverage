import { Container } from 'inversify';

import { Injected } from './injected';
import { Main } from './main';

const container = new Container();

container.bind(Main).toSelf();
container.bind(Injected).toSelf();

export { container };
