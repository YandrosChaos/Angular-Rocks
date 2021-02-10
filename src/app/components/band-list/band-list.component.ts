import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';
import { Data } from '../../commons/data';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent implements OnInit {

  bandsData : Array<Band> = Data.data;
  constructor() { }

  ngOnInit(): void {
  }

}
