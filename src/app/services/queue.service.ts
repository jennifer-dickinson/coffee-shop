import { Injectable } from '@angular/core';
import { Drink } from '../model/drink.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  queue_: Drink[];
  queue: BehaviorSubject<Drink[]>;
  constructor() {
    this.queue_ = [];
    this.queue = new BehaviorSubject(this.queue_);
  }
  getQueue() {
    return this.queue.asObservable();
  }

  pop() {
    const nextDrink = this.queue_.shift();
    this.queue.next(this.queue_);
    console.log(this.queue_);
    return nextDrink;
  }

  push(drink: Drink) {
    this.queue_.push(drink);
    console.log(this.queue_);
    this.queue.next(this.queue_);
  }

  top() {
    return this.queue_.length > 0 ? this.queue_[0] : null;
  }
}
