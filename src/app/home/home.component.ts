import { Component, Inject, OnInit, ViewEncapsulation, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private apiService: ApiService) { }


  localOffsetisSet = false;
  localOffset = -1;
  step = 0;
  selectedTab = 1;
  infoTabStatus = 0;
  postTextContent = "";
  user = JSON.parse(localStorage.getItem('user'));

  @ViewChild('log') log: ElementRef;
  @HostListener("window:scroll", [])
  onWindowScroll() {

    if (this.infoTabStatus == 0) {

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
  }

  items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  posts = [
    {
      owner: 'Hatem Bouhajja1', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://cdn-images-1.medium.com/max/1200/1*3CXBOKNql4qS-lRyHT3pqw.png', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment for post 1' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja2', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'text', body: 'https://www.dac.com/sites/default/files/styles/template_header_image/public/machine-learning.jpeg?itok=zZ80GsGD', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja3', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://process.filestackapi.com/cache=expiry:max/resize=width:1050/compress/ucA4aHw9RXeAsmvDXRyL', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja4', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://cdn-images-1.medium.com/max/1600/1*7Kqu2b7kSmpj45g4X1_DKA.jpeg', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment for another post' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja5', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://s3.amazonaws.com/coursetro/posts/171-full.png', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja6', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'http://www.cegonsoft.co.in/img/projects/project-1.jpg', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja7', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://picsum.photos/900/950?image=88', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
  ];



  ngOnInit() {
    this.initUserInfo();
  }

  initUserInfo() {

    this.apiService.getUserByidApi(this.user.id).subscribe((userRep) => {
      localStorage.setItem('user', JSON.stringify(userRep));
    })

    this.user = JSON.parse(localStorage.getItem('user'));
  }

  tabClick(tab) {
    if (tab.index == 2) {
      setTimeout(() => { window.location.href = "http://localhost:4200/myprofile"; }, 200);
    }

    if (tab.index == 1) {
      setTimeout(() => { window.location.href = "http://localhost:4200/home"; }, 200);
    }

  }


  openDialog(post): void {
    const dialogRef = this.dialog.open(DialogOverviewHome, {
      width: 'auto',
      height: 'auto',
      minHeight: '0px',
      data: { post: post }
    });
  }


  createNewPost() {
    var newPost = {
      owner: this.upCaseFirstL(this.user.firstName) + " " + this.upCaseFirstL(this.user.lastName),
      ownerId: this.user.id,
      ownerPhoto: this.user.profile.profilePhoto,
      type: "text",
      body: this.postTextContent,
      date: moment()
    }

    this.apiService.createPostApi(newPost).subscribe((rep) => {
      console.log(rep);
      this.postCreatedAlert()
      this.postTextContent = "";


    }, (error) => {
      console.log(error);
    });


  }


  postCreatedAlert() {
    Swal({
      title: 'Post Published!',
      text: 'That means more valuable information for more people!',
      type: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3f51b5',
      width: '400px',
      showCloseButton: true,
      focusConfirm: false
    })
  }

  upCaseFirstL(string) {
    if (string != "") {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

}


//********************************************** */


export interface DialogData {
  post: Object;
}


@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
  styleUrls: ['./dialog-overview.scss'],
})
export class DialogOverviewHome {

  constructor(private apiService: ApiService,
    public dialogRef: MatDialogRef<DialogOverviewHome>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  user = JSON.parse(localStorage.getItem('user'));

  onNoClick(): void {
    this.dialogRef.close();
  }


  addComment(post) {

    var newComment = {
      commenter: this.upCaseFirstL(this.user.firstName) + " " + this.upCaseFirstL(this.user.lastName),
      commenterId: this.user.id,
      commenterImage: this.user.profile.profilePhoto,
      content: post.tempComment,
      idPost: post.id
    }
    this.apiService.addCommentApi(newComment).subscribe((rep) => {
      console.log(rep);
      post.tempComment = "";
      console.log('comment added')
      this.updateLocalPost(post.ownerId);

    })

  }

  updateLocalPost(id) {
    this.apiService.getAllPostsByUserIdApi(id).subscribe((rep) => {
      var oldUser = JSON.parse(localStorage.getItem('user'));
      console.log(rep);
      oldUser.profile.posts = rep;
      localStorage.setItem('user', JSON.stringify(oldUser));
      console.log('comments updated');
    })
  }

  upCaseFirstL(string) {
    if (string != "") {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

}

