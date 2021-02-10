import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public linkedin: string = 'https://www.linkedin.com/in/victor-develops/';
  public github: string = 'https://github.com/YandrosChaos';
  public udemy: string = 'https://www.udemy.com/user/elcadenas28/';

  constructor() {}

  ngOnInit(): void {}
}
