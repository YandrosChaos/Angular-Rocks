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

  getBandByName(name?: string ): Band{
    let band = BANDS.filter(band => band.name?.replace(/\s/g, "").includes(name || ""));
    return band[0];
  }
}
