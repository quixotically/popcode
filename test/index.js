/* eslint-env commonjs */
/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */

import '../src/init';
import '../src/validations/linters';

const testsContext = require.context('./unit');
testsContext.keys().forEach(testsContext);
