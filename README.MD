# ngx-medium-editor

## Installation

To install this library, run:

```bash
$ npm install ngx-medium-editor --save
$ npm install  medium-editor --save
```

## Consuming ngx-medium-editor library


From your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import MediumEditorDirective
import { MediumEditorDirective } from 'ngx-medium-editor';

@NgModule({
  declarations: [
    AppComponent,
   // Specify this directive as an import
    MediumEditorDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You need to add css in your style:

```css
<!-- import meduim-editor style in styles.css -->
@import "~medium-editor/dist/css/medium-editor.min.css";
@import "~medium-editor/dist/css/themes/default.min.css"; 
```



## License

MIT © [youssef-mag](mailto:youssefmaghzaz@gmail.com)
