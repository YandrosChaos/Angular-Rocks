import { Injectable } from '@angular/core';
import { Band } from '../models/band';
import { BANDS } from '../commons/bands.json';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
            return this.renderBandFromCollection(item);
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
          return this.renderBandFromDocument(response);
        })
      );
  }

  createBand(band: Band): void {
    this.firestore
      .collection('bands')
      .doc(band.name.replace(/\s/g, ''))
      .set(JSON.parse(JSON.stringify(band)));
  }

  deleteBand(band: Band): void {
    this.firestore
      .collection<Band>('bands')
      .doc(band.name.replace(/\s/g, ''))
      .delete();
  }

  private renderBandFromCollection(item: any): Band {
    return item.payload.doc.data() as Band;
  }

  private renderBandFromDocument(item: any): Band {
    return {
      name: item.payload.get('name'),
      description: item.payload.get('description'),
      formedIn: item.payload.get('formedIn'),
      active: item.payload.get('active'),
      videoLink: item.payload.get('videoLink'),
      imgLink: item.payload.get('imgLink'),
    } as Band;
  }
}
