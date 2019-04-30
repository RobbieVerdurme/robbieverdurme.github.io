//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular material
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatProgressSpinnerModule, MatTreeModule } from '@angular/material';
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
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTreeModule
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
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTreeModule
  ]
})
export class MaterialModule { }
