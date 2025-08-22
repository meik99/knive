import { Injectable } from '@angular/core';
import { Item } from '../Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class InventoryService {
  abstract findAll(): Promise<Observable<Item[]>>
}
