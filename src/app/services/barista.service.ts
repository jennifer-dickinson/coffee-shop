import { Injectable } from '@angular/core';
import { Drink } from '../model/drink.model';
import { QueueService } from '../services/queue.service';

@Injectable({
  providedIn: 'root'
})
export class BaristaService {
  queue: Drink[];
  busy = false;
  sub;
  constructor(private queueService: QueueService) {
    this.sub = queueService.getQueue().subscribe((queue) => {
      if (queue.length > 0) {
        this.prepareDrink();
      }
    });
  }

  // Prepare a drink from the queue if the queue is not empty or the barista is not busy.
  prepareDrink() {
    if (this.busy) {
      return;
    }
    this.busy = true;
    const drink = this.queueService.top();
    setTimeout(() => {
      console.log("Done with ", drink);
      this.busy = false;
      this.queueService.placeOnCounter();
    }, drink.time * 1000);
  }
}
