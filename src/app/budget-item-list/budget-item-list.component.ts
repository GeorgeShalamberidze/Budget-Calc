import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item.model';
import { ItemServiceService } from '../shared/services/item-service.service';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {
  public items!: BudgetItem[]

  constructor(private itemService: ItemServiceService) { }

  ngOnInit(): void {
    this.itemService.budgetItems$.subscribe((a) => {
      this.items = a
    })
  }

}
