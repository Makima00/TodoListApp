import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  numberSub: Subscription | any;
  seconde: number = 0;
  constructor() { }

  ngOnInit(): void {
    const secondeObs = interval(1000);

    this.numberSub = secondeObs.subscribe(
      (value: any) => {
        this.seconde = value;
      }

    );
  }

  ngOnDestroy(): void {
    this.numberSub.unsubscribe();
  }

}
