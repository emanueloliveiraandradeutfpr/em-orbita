import { Component, inject, Input } from '@angular/core';
import {MatDialog, MatDialogModule} from "@angular/material/dialog"
type BtnVariant = "primary" | "secondary"

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText!:string;
  @Input() disable!: boolean;
  @Input() variant: BtnVariant ="primary"


  readonly dialog = inject(MatDialog);

  openDialog() {
    console.log("oi");
    
    const dialogRef = this.dialog.open(BtnPrimaryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
