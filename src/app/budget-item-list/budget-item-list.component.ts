import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BudgetItem } from '../shared/models/budget-item.model';
import { ItemServiceService } from '../shared/services/item-service.service';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit, OnDestroy {
  public items!: BudgetItem[]
  private itemSub!: Subscription

  constructor(private itemService: ItemServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.itemSub = this.itemService.budgetItems$.subscribe((a) => {
      this.items = a
    })
  }

  ngOnDestroy(): void {
      this.itemSub.unsubscribe()
  }
}
