//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//angular material
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatProgressSpinnerModule, MatDividerModule, MatProgressBarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialFileInputModule } from 'ngx-material-file-input';

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
    MaterialFileInputModule,
    MatDividerModule,
    MatProgressBarModule
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
    MaterialFileInputModule,
    MatDividerModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
