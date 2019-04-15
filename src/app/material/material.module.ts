//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular material
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
