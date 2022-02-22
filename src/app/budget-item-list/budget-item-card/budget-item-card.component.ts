import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item!: BudgetItem
  constructor() { }

  ngOnInit(): void {
    // console.log("a", this.item)
  }

}