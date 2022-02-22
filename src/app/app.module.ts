import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    EditItemModalComponent,
    MainPageComponent,
    BudgetItemCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
