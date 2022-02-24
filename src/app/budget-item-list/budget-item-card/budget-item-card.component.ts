import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent } from 'src/app/modal-component/modal-component.component';
import { BudgetItem } from 'src/app/shared/models/budget-item.model';
import { ItemServiceService } from 'src/app/shared/services/item-service.service';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item!: BudgetItem
  
  constructor(private itemService: ItemServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  deleteButton(item: BudgetItem) {
    this.itemService.deleteItem(item)
  }
 
  onModalOpen() {
    let dialogRef = this.dialog.open(ModalComponentComponent, {
      data: this.item,
      width: '680px'
    })

    dialogRef.afterClosed().subscribe((res: BudgetItem) => {
        if (res) {
          this.itemService.editItem(this.item, res)
        }
    })
  }
}
