import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Band } from 'src/app/models/band';
import { BandService } from '../../services/band.service';
import { AddComponent } from './add/add.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { noSpacesBandName, successSwal } from 'src/app/commons/utils';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss'],
})
export class BandListComponent implements OnInit {
  bandsData: Array<Band> = [];
  allBandsData: Array<Band> = [];

  constructor(
    private bandService: BandService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bandService.getAllBand().subscribe((response) => {
      this.bandsData = response;
      this.allBandsData = response;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.bandsData = this.allBandsData.filter((band) =>
      band.name
        .trim()
        .toLocaleLowerCase()
        .includes(filterValue.trim().toLocaleLowerCase())
    );
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToDetails(band: Band): void {
    this.router.navigate([`/details`, noSpacesBandName(band)]);
  }

  onAdd(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(AddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.bandService.createBand(data);
        successSwal();
      }
    });
  }

  onReset(): void {
    this.bandService.restoreData();
    successSwal();
  }

  removeAt(band: Band): void {
    Swal.fire({
      icon: 'warning',
      text: 'Are you sure?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
      position: 'top-end',
      showClass: {
        popup: 'animate__animated animate__rotateInUpRight',
      },
      hideClass: {
        popup: 'animate__animated animate__rotateOutDownRight',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.bandService.deleteBand(band);
      }
    });
  }
}
