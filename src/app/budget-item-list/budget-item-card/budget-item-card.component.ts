import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from 'src/app/shared/models/budget-item.model';
import { ItemServiceService } from 'src/app/shared/services/item-service.service';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item!: BudgetItem
  
  constructor(private itemService: ItemServiceService) { }

  ngOnInit(): void {

  }

  deleteButton(item: BudgetItem) {
    this.itemService.deleteItem(item)
  }
}
