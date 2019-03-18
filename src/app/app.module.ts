//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Componenten
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';

//Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatIconModule, MatFormFieldModule, MatButtonModule, MatInputModule  } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
