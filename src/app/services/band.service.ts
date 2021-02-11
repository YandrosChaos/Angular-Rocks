import { Injectable } from '@angular/core';
import { Band } from '../models/band';
import { BANDS } from '../commons/bands.json';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  renderBandFromCollection,
  renderBandFromDocument,
  noSpacesBandName,
  bandToJson,
} from '../commons/utils';

const collection_name: string = 'bands';

@Injectable({
  providedIn: 'root',
})
export class BandService {
  constructor(private firestore: AngularFirestore) {}

  getAllBand(): Observable<Band[]> {
    return this.firestore
      .collection<Band[]>(collection_name)
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
      .collection<Band>(collection_name)
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
      .collection(collection_name)
      .doc(noSpacesBandName(band))
      .set(bandToJson(band));
  }

  deleteBand(band: Band): void {
    this.firestore
      .collection<Band>(collection_name)
      .doc(noSpacesBandName(band))
      .delete();
  }

  resetData(): void {
    BANDS.forEach((band) => this.createBand(band));
  }
}
