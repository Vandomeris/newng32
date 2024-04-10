import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../components/dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, DropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
