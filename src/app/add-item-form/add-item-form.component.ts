import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../shared/models/budget-item.model';
import { ItemServiceService } from '../shared/services/item-service.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem = new BudgetItem(null, '')
  @Output() formSubmit = new EventEmitter<BudgetItem>()

  constructor(private itemService: ItemServiceService) { }

  ngOnInit(): void {
    console.log(this.item)
  }

  addItem(form: NgForm) {
    this.itemService.addItem(form.value)
    this.formSubmit.emit(form.value)
    form.reset()
  }
}
