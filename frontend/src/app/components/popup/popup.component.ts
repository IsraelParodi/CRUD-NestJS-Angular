import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public popupRef: MatDialogRef<PopupComponent>) {
  }

  ngOnInit(): void {
  }

  closePopup() {
    this.popupRef.close(false)
  }

}
