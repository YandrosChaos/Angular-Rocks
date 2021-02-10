import { Injectable } from '@angular/core';
import { Band } from '../models/band';
import { BANDS } from '../commons/bands.json';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor() { }

  getAllBand(): Band[]{
    return BANDS;
  }
}
