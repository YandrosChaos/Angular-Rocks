import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Band } from 'src/app/models/band';
import { DetailsComponent } from './details/details.component';
import { BandService } from '../../services/band.service';
import { AddComponent } from './add/add.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss'],
})
export class BandListComponent implements OnInit {
  bandsData: Array<Band> = [];
  displayedColumns: string[] = ['name', 'year', 'active','remove'];
  dataSource = new MatTableDataSource(this.bandsData);
  constructor(private bandService: BandService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.bandsData = this.bandService.getAllBand();
    this.dataSource = new MatTableDataSource(this.bandsData);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDetailsDialog(band: Band): void {
    this.router.navigate([`/details`, band.name?.replace(/\s/g, "")]);
  }

  onAdd(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    const dialogRef = this.dialog.open(AddComponent, dialogConfig)
    dialogRef.afterClosed()
      .subscribe((data) => {
        if(data){
          this.bandsData = this.dataSource.data;
          this.bandsData.push(data);
          this.dataSource = new MatTableDataSource(this.bandsData);
        }
      });
  }

  removeAt(row: any): void {
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
        popup: 'animate__animated animate__hinge',
      },
    }).then(result=>{
      if(result.isConfirmed){
        this.dataSource.data = this.dataSource.data.filter((i) => i != row);
      }
    })
    
  }
}
