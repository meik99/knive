import { Injectable } from '@angular/core';
import { PlaceService } from './place.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceApiService extends PlaceService {
}
