import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SDialogComponent } from './components/s-dialog/s-dialog.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { SearchRoutingModule } from './search-routing.module';

import { SDialogCardsComponent } from './components/s-dialog-cards/s-dialog-cards.component';

import { SearchComponent } from './container/search/search.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SDialogComponent, SDialogCardsComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SearchRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [SDialogComponent],
  exports: [MaterialModule]
})
export class SearchModule {}
