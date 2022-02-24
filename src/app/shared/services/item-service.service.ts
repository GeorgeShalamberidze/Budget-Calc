import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BudgetItem } from '../models/budget-item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  private _budgetItems$: BehaviorSubject<BudgetItem[]> = new BehaviorSubject<BudgetItem[]>([
    { amount: -550, description: 'Rent1' },
    { amount: -550, description: 'Rent2' },
    // { amount: -550, description: 'Rent3' },
    // { amount: -550, description: 'Rent4' },
    // { amount: 1000, description: "Salary1" },
    // { amount: 1000, description: "Salary2" },
    // { amount: 1000, description: "Salary3" },
    // { amount: 1000, description: "Salary4" },
  ])
  constructor() { }

  get budgetItems$(): Observable<BudgetItem[]> {
    return this._budgetItems$.asObservable()
  }

  get budgetItems(): BudgetItem[] {
    return this._budgetItems$.getValue()
  }

  set budgetItems(value: BudgetItem[]) {
    this._budgetItems$.next(value)
  }

  deleteItem(item: BudgetItem) {
    let currItems: BudgetItem[] = this.budgetItems
    let index = currItems.indexOf(item)
    currItems.splice(index, 1)
    this.budgetItems = currItems
  }

  addItem(item: BudgetItem) {
    let newArr = [...this.budgetItems, item]
    this.budgetItems = newArr
  }

  editItem(oldValue: BudgetItem, newValue: BudgetItem) {
    let currArr = this.budgetItems
    let oldIndex = currArr.indexOf(oldValue)
    currArr.splice(oldIndex, 1, newValue)
    currArr.pop()
    this.budgetItems = currArr
  }
}
