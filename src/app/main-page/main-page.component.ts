import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item.model';
import { ItemServiceService } from '../shared/services/item-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private itemsService: ItemServiceService) { }

  ngOnInit(): void {
  }

}
