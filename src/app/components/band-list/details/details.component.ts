import { Component, OnInit } from '@angular/core';
import { Band } from '../../../models/band';
import { ActivatedRoute } from '@angular/router';
import { BandService } from '../../../services/band.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  detailBand: Band = new Band();

  constructor(
    private bandService: BandService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.bandService
        .getBandByName(params.get('band') || '')
        .subscribe((response) => {
          this.detailBand = response;
        });
    });
  }
}
