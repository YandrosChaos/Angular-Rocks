import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Band } from 'src/app/models/band';
import { DetailsComponent } from './details/details.component';
import { BandService } from '../../services/band.service';
import { AddComponent } from './add/add.component';

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

  onAdd(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(AddComponent, dialogConfig)
    dialogRef.afterClosed()
      .subscribe((data) => {
        this.bandsData = this.dataSource.data;
        this.bandsData.push(data);
        this.dataSource = new MatTableDataSource(this.bandsData);
      });
  }

  removeAt(row: any): void {
    this.dataSource.data = this.dataSource.data.filter((i) => i != row);
  }
}
