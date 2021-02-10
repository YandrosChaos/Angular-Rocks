import { Component, OnInit } from '@angular/core';
import { Band } from '../../../models/band';
import { ActivatedRoute, Router } from '@angular/router';
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
      console.log(params.get('band'))
      this.detailBand = this.bandService.getBandByName(params.get('band') || "")
    });
  }
}
