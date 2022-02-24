import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItem } from '../shared/models/budget-item.model';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem,
    public dialogRef: MatDialogRef<ModalComponentComponent>
  ) { }

  ngOnInit(): void {
  }

  onModalClose(editedItem: BudgetItem) {
    this.dialogRef.close(editedItem)
  }
}
