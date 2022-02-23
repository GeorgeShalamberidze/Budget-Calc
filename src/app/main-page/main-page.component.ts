import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetItem } from '../shared/models/budget-item.model';
import { ItemServiceService } from '../shared/services/item-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  public totalBudget!: number 
  private itemSub!: Subscription
  constructor(private itemsService: ItemServiceService) { }

  ngOnInit(): void {
    this.itemSub = this.itemsService.budgetItems$.subscribe((a) => {
      this.totalBudget = a.map(({amount}) => amount).reduce((a, b) => a + b, 0)
    })
  }

  ngOnDestroy(): void {
      this.itemSub.unsubscribe()
  }
}
