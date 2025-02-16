import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Timestamp} from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TagProductModule {
  epc: string = '';
  tid: string = '';
  product_name: string = '';
  reader_location: string = '';
  last_seen: string = '';
  created_at: string = '';
}
