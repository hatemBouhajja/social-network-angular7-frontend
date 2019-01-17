import { Component, Inject, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileSetupComponent implements OnInit {

  @ViewChild('postsTab') postsTab: ElementRef;
  @ViewChild('infoTab') infoTab: ElementRef;
  @ViewChild('photosTab') photosTab: ElementRef;
  @ViewChild('log') log: ElementRef;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let scrollPosition = window.pageYOffset
    let componentPosition = this.log.nativeElement.offsetTop


    // console.log("Component: ", componentPosition, " -----  Scroll: ", scrollPosition);

    if ((scrollPosition > componentPosition) && (this.localOffsetisSet == false)) {
      this.log.nativeElement.classList.remove('log');
      this.log.nativeElement.classList.add('fixedLog');
      this.localOffset = componentPosition;
      console.log(this.localOffset);
      this.localOffsetisSet = true;

    }
    if ((scrollPosition < this.localOffset) && (this.localOffset > 0)) {
      this.log.nativeElement.classList.remove('fixedLog');
      this.log.nativeElement.classList.remove('log');
      this.log.nativeElement.classList.add('log');
      this.localOffset = -1;
      this.localOffsetisSet = false;
    }
  }


  constructor(public dialog: MatDialog, private apiService: ApiService) { }

  localOffsetisSet = false;
  localOffset = -1;
  step = 0;
  selectedTab = 2;
  infoTabStatus = 0;
  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  updateInfoTabStatus() {
    if (this.infoTabStatus == 0) {
      this.postsTab.nativeElement.classList.add('active');
      this.infoTab.nativeElement.classList.remove('active');
      this.photosTab.nativeElement.classList.remove('active');

    }
    if (this.infoTabStatus == 1) {
      this.postsTab.nativeElement.classList.remove('active');
      this.infoTab.nativeElement.classList.add('active');
      this.photosTab.nativeElement.classList.remove('active');
    }
    if (this.infoTabStatus == 2) {
      this.postsTab.nativeElement.classList.remove('active');
      this.infoTab.nativeElement.classList.remove('active');
      this.photosTab.nativeElement.classList.add('active');
    }
  }


  openDialog(url): void {
    const dialogRef = this.dialog.open(DialogOverview, {
      width: 'auto',
      height: 'auto',
      minHeight: '0px',
      data: { url: url }
    });
  }



  ngOnInit() {
    this.updateInfoTabStatus();
  }



  addfriend() {
    Swal({
      title: 'Request sent!',
      text: 'You will be friends soon',
      type: 'success',
      confirmButtonText: 'OK',
      width: '400px',
      showCloseButton: true,
      focusConfirm: false
    })
  }

  sendMessage() {

    Swal({
      title: 'Send a message!',
      text: 'They will read it soon',
      confirmButtonText: 'Send',
      width: '400px',
      showCloseButton: true,
      focusConfirm: false,
      input: 'textarea',
      inputPlaceholder: 'Type your message here...',
      showCancelButton: true
    }).then((result) => {
      if (result.value != undefined) {
        this.msgSent();
      }
    })

  }


  msgSent() {
    const toast = Swal.mixin({
      toast: true,
      position: 'top-left',
      showConfirmButton: false,
      timer: 3000
    });

    toast({
      type: 'success',
      title: 'Message sent successfully'
    })
  }






}


//********************************************** */


export interface DialogData {
  url: string;
}


@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
  styleUrls: ['./dialog-overview.scss'],
})
export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


