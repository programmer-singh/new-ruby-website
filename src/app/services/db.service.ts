import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private afs: AngularFirestore) { }
  arryUnionQuery = firebase.firestore;

  collection$(path, query?): Observable<any> {
    return this.afs
      .collection(path, query)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data: any = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  doc$(path): Observable<any> {
    return this.afs
      .doc(path)
      .snapshotChanges()
      .pipe(
        map(doc => {
          const data: any = doc.payload.data();
          const id = doc.payload.id;
          return { id, ...data };
        })
      );
  }

  /**
   * @param path 'collection' or 'collection/docID'
   * @param data new data
   *
   * Creates or updates data on a collection or document.
   */

  updateAt(path: string, data: any): Promise<any> {
    const segments = path.split('/').filter(v => v);
    if (segments.length % 2) {
      // Odd is always a collection
      return this.afs.collection(path).add(data);
    } else {
      // Even is always document
      return this.afs.doc(path).set(data, { merge: true });
    }
  }

  // *******************     chat/applyHandworker/rating    ***************
  pushOn(path: string, docs: string, data: any): Promise<any> {
    return this.afs
      .collection(path)
      .doc(docs)
      .update(data);
  }

  /**
   * @param path path to document
   *
   * Deletes document from Firestore
   */
  delete(path) {
    return this.afs.doc(path).delete();
  }

  createDocRef(collection: string, docId: string) {
    return this.afs.collection(collection).doc(docId).ref;
  }

}
