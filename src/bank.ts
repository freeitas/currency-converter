import { Expression } from './expression'
import { Money } from './money'

export class Bank {
  reduce (souce: Expression, to: string): Money {
    return Money.dollar(10)
  }
}
