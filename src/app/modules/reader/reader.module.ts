import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReaderModule {
  private id: number = 0;
  private hostname: string = '';
  private port: number = 0;
  private is_connected: boolean = false;
  private use_tls: boolean = false;

}
