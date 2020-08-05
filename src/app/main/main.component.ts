import { Component, OnInit } from '@angular/core';
import { BaristaService } from '../services/barista.service';
import { QueueService } from '../services/queue.service';
import { Drink } from '../model/drink.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit {

  drinkQueue;

  constructor(public barista: BaristaService, public queueService: QueueService) {
    this.drinkQueue = queueService.getQueue();
  }

  ngOnInit() {}

  addDrink(name, time) {
    const drink = new Drink();
    drink.name = name;
    drink.time = time;
    this.queueService.push(drink);
  }

}
