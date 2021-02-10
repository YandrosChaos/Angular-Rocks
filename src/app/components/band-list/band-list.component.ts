import { Component, OnInit } from '@angular/core';
import { Band } from 'src/app/models/band';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent implements OnInit {

  bandList : Array<Band> = [
    {
      name: 'The Rolling Stones',
      formedIn: 1962,
      released: [
        'The Rolling Stones',
        'The Rolling Stones No. 2',
        'Out of Our Heads',
        'Aftermath',
        'Between the Buttons'
      ],
      active: true
    },
    {
      name: 'The Rolling Stones',
      formedIn: 1962,
      released: [
        'The Rolling Stones',
        'The Rolling Stones No. 2',
        'Out of Our Heads',
        'Aftermath',
        'Between the Buttons'
      ],
      active: true
    },
    {
      name: 'Led Zeppelin',
      formedIn: 1968,
      released: [
        'Led Zeppelin',
        'Led Zeppelin II',
        'Led Zeppelin III',
        'Led Zeppelin IV',
        'Houses of the Holly'
      ],
      active: false
    },
    {
      name: 'Queen',
      formedIn: 1970,
      released: [
        'Queen',
        'Queen II',
        'Sheer Heart Attack',
        'A Night at the Opera',
        'A Day at the Races'
      ],
      active: true
    },
    {
      name: 'Pink Floyd',
      formedIn: 1965,
      released: [
        'The Piper at the Gates of Dawn',
        'A Saucerful of Secrets',
        'Music from the Film More',
        'Ummagumma',
        'Atom Heart Mother'
      ],
      active: false
    },
    {
      name: 'Deep Purple',
      formedIn: 1968,
      released: [
        'Shades of Deep Purple',
        'The Book of Taliesyn',
        'In Rock',
        'Fireball',
        'Machine Head'
      ],
      active: true
    },
    {
      name: 'AC/DC',
      formedIn: 1973,
      released: [
        'High Voltage',
        'T.N.T.',
        'Dirty Deeds Done Dirt Cheap',
        'Let There Be Rock',
        "If You Want Blood You've Got it"
      ],
      active: false
    },
    {
      name: 'The Ramones',
      formedIn: 1974,
      released: [
        'Ramones',
        'Leave Home',
        'Rocket to Russia',
        'Road to Ruin',
        'End of the Century'
      ],
      active: false
    },
    {
      name: 'Kiss',
      formedIn: 1973,
      released: [
        'Kiss',
        'Hotter Than Hell',
        'Dressed to Kill',
        'Destroyer',
        'Rock and Roll Over'
      ],
      active: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
