import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumEditorDirective } from './meduim.directive';
export * from './meduim.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MediumEditorDirective
  ],
  exports: [
    MediumEditorDirective
  ]
})
export class ngxMediumModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ngxMediumModule,
      providers: []
    };
  }
}
