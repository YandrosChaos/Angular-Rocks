import { Injectable } from '@angular/core';
import { Band } from '../models/band';
import { BANDS } from '../commons/bands.json';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { renderBandFromCollection, renderBandFromDocument, noSpacesBandName, bandToJson } from '../commons/utils';

@Injectable({
  providedIn: 'root',
})
export class BandService {
  constructor(private firestore: AngularFirestore) {}

  getAllBand(): Observable<Band[]> {
    return this.firestore
      .collection<Band[]>('bands')
      .snapshotChanges()
      .pipe(
        map((response) => {
          return response.map((item) => {
            return renderBandFromCollection(item);
          });
        })
      );
  }

  getBandByName(documentId: string): Observable<Band> {
    return this.firestore
      .collection<Band>('bands')
      .doc(documentId)
      .snapshotChanges()
      .pipe(
        map((response) => {
          return renderBandFromDocument(response);
        })
      );
  }

  createBand(band: Band): void {
    this.firestore
      .collection('bands')
      .doc(noSpacesBandName(band))
      .set(bandToJson(band));
  }

  deleteBand(band: Band): void {
    this.firestore
      .collection<Band>('bands')
      .doc(noSpacesBandName(band))
      .delete();
  }

  createOrAddDefaultData():void{
    BANDS.forEach((band) => this.createBand(band));
  }
}
