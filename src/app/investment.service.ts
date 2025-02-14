/**
 * @fileoverview This file contains the InvestmentService class which provides
 * methods to calculate investment results based on given input data.
 */

import { Injectable, signal } from '@angular/core';
import type { InvestmentInput } from './investment-input.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  /**
   * A signal that holds the result data of the investment calculation.
   * The result data is an array of objects, each representing the investment
   * details for a particular year.
   *
   * Each object in the array contains the following properties:
   * - year: The year number (starting from 1).
   * - interest: The interest earned in that year.
   * - valueEndOfYear: The total value of the investment at the end of the year.
   * - annualInvestment: The amount invested annually.
   * - totalInterest: The total interest earned up to that year.
   * - totalAmountInvested: The total amount invested up to that year.
   */
  resultData = signal<
    | {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[]
    | undefined
  >(undefined);

  /**
   * Calculates the investment results based on the provided input data.
   *
   * @param {InvestmentInput} data - The input data for the investment calculation.
   * The input data contains the following properties:
   * - initialInvestment: The initial amount of money invested.
   * - duration: The duration of the investment in years.
   * - expectedReturn: The expected annual return rate (as a percentage).
   * - annualInvestment: The amount of money invested annually.
   *
   * The method calculates the investment value for each year, including the
   * interest earned, the total value at the end of the year, the total interest
   * earned, and the total amount invested. The results are stored in the
   * `resultData` signal.
   */
  calculateInvestmentResults(data: InvestmentInput) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    //this.resultData = annualData;
    this.resultData.set(annualData);
  }
}
