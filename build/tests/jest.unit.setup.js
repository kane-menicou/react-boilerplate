const Enzyme = require('enzyme');
const EnzymeAdapter = require('@wojtekmaj/enzyme-adapter-react-17');

require('core-js/stable');
require('regenerator-runtime/runtime');

Enzyme.configure({adapter: new EnzymeAdapter()});
