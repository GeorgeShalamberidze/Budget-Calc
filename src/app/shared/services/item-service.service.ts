import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BudgetItem } from '../models/budget-item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  private _budgetItems$: BehaviorSubject<BudgetItem[]> = new BehaviorSubject<BudgetItem[]>([
    {amount: 25, description: 'Test123'},
    {amount: -25, description: 'Test123'},
    {amount: -25, description: 'Test123'},
    {amount: -25, description: 'Test123'}
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
}
