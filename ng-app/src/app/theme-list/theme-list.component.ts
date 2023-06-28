import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss'],
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (val) => {
        this.themeList = val;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
