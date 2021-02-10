import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Band } from 'src/app/models/band';
import { DetailsComponent } from './details/details.component';
import { BandService } from '../../services/band.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss'],
})
export class BandListComponent implements OnInit {
  bandsData: Array<Band> = [];
  displayedColumns: string[] = ['name', 'year', 'active', 'remove'];
  dataSource = new MatTableDataSource(this.bandsData);
  constructor(private bandService: BandService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.bandsData = this.bandService.getAllBand();
    this.dataSource = new MatTableDataSource(this.bandsData);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetailsDialog(band: Band): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      data: band,
    };
    this.dialog.open(DetailsComponent, dialogConfig);
  }
}
