// import all exports and alias it to MyOtherScript
import * as MyOtherScript from './my-other-script';
// import default export
import sayHelloWorld from './my-other-script';
// import specific named exports
import { screamHelloWorld, default as sayHelloWorldAlias } from './my-other-script';

sayHelloWorld();
// Default is a restricted keyword, so we need a work around to trigger it
MyOtherScript['default']();
// When aliasing it during import, it works
sayHelloWorldAlias();

screamHelloWorld();
MyOtherScript.screamHelloWorld();
