import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Band } from 'src/app/models/band';
import { Data } from '../../commons/data';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent implements OnInit {

  bandsData : Array<Band> = Data.data;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDetailsDialog(band: Band):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      data: band
    }
    this.dialog.open(DetailsComponent, dialogConfig);
  }

}
