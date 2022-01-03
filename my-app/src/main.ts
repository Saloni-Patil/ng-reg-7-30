// component -> UI
// module -> to handle/run component

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule); // entry module

/*
function sayHelo(){
    code
}


sayHello();

*/
