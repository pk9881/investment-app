/**
 * @fileoverview HeaderComponent is a part of the investment-app Angular project.
 * This component is responsible for rendering the header section of the application.
 *
 * @component
 * @selector app-header
 * @templateUrl ./header.component.html
 * @styleUrl ./header.component.css
 *
 * @description
 * The HeaderComponent is used to display the header section of the application.
 * It includes the navigation bar and other elements that are part of the header.
 *
 * @example
 * <app-header></app-header>
 *
 * @remarks
 * This component is a part of the header module and is used across the application
 * to provide a consistent header layout.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
