import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  ngOnInit(): void {
    this.updateTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateTable();
  }

  private updateTable(): void {
    if (this.data && this.data.length > 0) {
      this.displayedColumns = Object.keys(this.data[0]);
      this.dataSource.data = this.data;
    } else {
      this.displayedColumns = [];
      this.dataSource.data = [];
    }
  }

  formatHeader(key: string): string {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
  }
}
