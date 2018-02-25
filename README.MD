# ngx-medium-editor

by [@ysfMag](https://twitter.com/ysfMag)

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

// Import ngxMediumModule
import { ngxMediumModule } from 'ngx-medium-editor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // Specify this Module as an import
    ngxMediumModule
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



In your component :


```HTML
    <medium-editor
    [(editorModel)]="textVar"
    [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}"
    [editorPlaceholder]="placeholderVar"></medium-editor>
```




## License

MIT © [youssef-mag](mailto:youssefmaghzaz@gmail.com)
