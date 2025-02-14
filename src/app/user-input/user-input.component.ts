/**
 * @component UserInputComponent
 * @description
 * The UserInputComponent is responsible for capturing user inputs related to investment details
 * and submitting these details to the InvestmentService for calculation of investment results.
 *
 * @selector app-user-input
 * @templateUrl ./user-input.component.html
 * @styleUrl ./user-input.component.css
 *
 * @property {Signal<string>} enteredInitialInvestment - Signal to store the initial investment amount entered by the user.
 * @property {Signal<string>} enteredAnnualInvestment - Signal to store the annual investment amount entered by the user.
 * @property {Signal<string>} enteredExpectedReturn - Signal to store the expected return percentage entered by the user.
 * @property {Signal<string>} enteredDuration - Signal to store the investment duration in years entered by the user.
 *
 * @constructor
 * @param {InvestmentService} investmentService - The service used to calculate investment results.
 *
 * @method onSubmit
 * @description
 * This method is called when the user submits the investment details form. It sends the entered
 * investment details to the InvestmentService for calculation and then resets the input fields to their default values.
 */
import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredInitialInvestment = signal('0');
    this.enteredAnnualInvestment = signal('0');
    this.enteredExpectedReturn = signal('5');
    this.enteredDuration = signal('10');
  }
}
