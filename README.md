# a4-http-overlay-interceptor
Angular 4 Http Overlay Interceptor

# How-To
## Install
```
npm install a4-http-overlay-interceptor
```

## app.module.ts
1. Add ```HttpOverlayModule``` to imports of the ```app.module.ts```.

```typescript

...
import { HttpOverlayModule } from 'a4-http-overlay-interceptor';
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...,
    HttpOverlayModule,
    ...
  ],
  ...
})
```

## Inject the service
```typescript
constructor(private httpOverlayService: HttpOverlayService) { }
```

## Show/Hide the Spinner
```typescript
this.httpOverlayService.setOverlayCallBacks(
    () => {
        ... // show spinner code
    }, () => {
        ... // hide spinner code
    }
);
```
