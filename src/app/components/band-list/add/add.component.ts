import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Band } from '../../../models/band';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  band: Band = new Band();

  constructor(private dialogRef: MatDialogRef<AddComponent>) {}

  ngOnInit(): void {}

  onSave() {
    this.dialogRef.close(this.band);
  }
}
