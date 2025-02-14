/**
 * The main module of the Investment App.
 *
 * This module bootstraps the application and declares the main components used in the app.
 *
 * @module AppModule
 *
 * @description
 * The `AppModule` is the root module that Angular uses to bootstrap the application.
 * It imports necessary modules and declares the components that are part of this module.
 *
 * @imports
 * - BrowserModule: Provides services that are essential to launch and run a browser app.
 * - UserInputModule: Custom module that handles user input related components and services.
 *
 * @declarations
 * - AppComponent: The root component of the application.
 * - HeaderComponent: The header component that displays the application header.
 * - InvestmentResultsComponent: The component that displays the investment results.
 *
 * @bootstrap
 * - AppComponent: The root component that Angular creates and inserts into the index.html host web page.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
