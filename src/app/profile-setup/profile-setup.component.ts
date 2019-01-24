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
  @ViewChild('friendsTab') friendsTab: ElementRef;
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


  constructor(public dialog: MatDialog, private apiService: ApiService) { }

  localOffsetisSet = false;
  localOffset = -1;
  step = 0;
  selectedTab = 2;
  infoTabStatus = 1;


  user = JSON.parse(localStorage.getItem('user'));

  firstName = this.upCaseFirstL(this.user.firstName);
  lastName = this.upCaseFirstL(this.user.lastName);
  fullName = this.firstName + ' ' + this.lastName;
  city = this.upCaseFirstL(this.user.profile.city);
  country = this.upCaseFirstL(this.user.profile.country);
  birhDate = this.user.birhDate;
  occupation = this.upCaseFirstL(this.user.profile.occupation);
  organisation = this.upCaseFirstL(this.user.profile.organisation);
  civilStatus = this.upCaseFirstL(this.user.profile.civilStatus);
  email = this.user.email;
  phone = this.user.phone;
  pwd = this.user.pwd;
  zip = this.user.profile.zip;
  profilePhoto = 'https://miro.medium.com/max/854/1*60gs-SFYyooZZBxatuoNJw.jpeg';
  userPosts = this.user.profile.posts;


  items = [0, 1, 2, 3, 4, 5, 6, 7];
  posts = [
    {
      owner: 'Hatem Bouhajja1', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://picsum.photos/200/800?image=249', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment for post 1' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja2', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'text', body: 'https://picsum.photos/400/500?image=289', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja3', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://picsum.photos/800/100?image=189', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja4', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://picsum.photos/800/400?image=889', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment for another post' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja5', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://picsum.photos/800/300?image=289', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja6', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://picsum.photos/900/950?image=209', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
    {
      owner: 'Hatem Bouhajja7', ownerPhoto: 'https://picsum.photos/1200/800?image=289', type: 'image', body: 'https://picsum.photos/900/950?image=209', date: '12/11/2018', comments: [
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'good' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'testing my comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'this is another comment' },
        { commenter: 'Hatem Bouhajja', commenterImage: 'https://picsum.photos/400/400?image=289', content: 'comments are being tested' }
      ], tempComment: ''
    },
  ];


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
      this.friendsTab.nativeElement.classList.remove('active');

    }
    if (this.infoTabStatus == 1) {
      this.postsTab.nativeElement.classList.remove('active');
      this.infoTab.nativeElement.classList.add('active');
      this.photosTab.nativeElement.classList.remove('active');
      this.friendsTab.nativeElement.classList.remove('active');
    }
    if (this.infoTabStatus == 2) {
      this.postsTab.nativeElement.classList.remove('active');
      this.infoTab.nativeElement.classList.remove('active');
      this.photosTab.nativeElement.classList.add('active');
      this.friendsTab.nativeElement.classList.remove('active');
    }
    if (this.infoTabStatus == 3) {
      this.postsTab.nativeElement.classList.remove('active');
      this.infoTab.nativeElement.classList.remove('active');
      this.photosTab.nativeElement.classList.remove('active');
      this.friendsTab.nativeElement.classList.add('active');
    }
  }


  openDialog(post): void {
    var postParam: any;
    this.user = JSON.parse(localStorage.getItem('user'));
    this.user.profile.posts.forEach(refPost => {
      if (refPost.id == post.id) {
        postParam = refPost;
      }
    });

    const dialogRef = this.dialog.open(DialogOverviewProfile, {
      width: 'auto',
      height: 'auto',
      minHeight: '0px',
      data: { post: postParam }
    });
  }



  ngOnInit() {
    this.updateInfoTabStatus();
    this.initUserInfo();
  }

  ngAfterViewInit() {
    if ((this.birhDate == undefined) || (this.birhDate == null) || (this.birhDate == "")) {
      this.birhDate = "Birthday";
    }
  }


  initUserInfo() {

    this.apiService.getUserByidApi(this.user.id).subscribe((userRep) => {
      localStorage.setItem('user', JSON.stringify(userRep));
    })

    this.user = JSON.parse(localStorage.getItem('user'));

    this.firstName = this.upCaseFirstL(this.user.firstName);
    this.lastName = this.upCaseFirstL(this.user.lastName);
    this.fullName = this.firstName + ' ' + this.lastName;
    this.city = this.upCaseFirstL(this.user.profile.city);
    this.country = this.upCaseFirstL(this.user.profile.country);
    this.birhDate = this.user.birhDate;
    this.occupation = this.upCaseFirstL(this.user.profile.occupation);
    this.organisation = this.upCaseFirstL(this.user.profile.organisation);
    this.civilStatus = this.upCaseFirstL(this.user.profile.civilStatus);
    this.email = this.user.email;
    this.phone = this.user.phone;
    this.pwd = this.user.pwd;
    this.zip = this.user.profile.zip;
    this.profilePhoto = this.user.profile.profilePhoto;

  }

  addfriend() {
    Swal({
      title: 'Request sent!',
      text: 'You will be friends soon',
      type: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3f51b5',
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
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#F75676',
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


  changePhoto() {

    Swal({
      title: 'Profile photo',
      text: 'Choose a photo from library or upload it',
      confirmButtonText: 'Upload',
      cancelButtonText: 'From library',
      width: '400px',
      showCloseButton: true,
      confirmButtonColor: '#3f51b5',
      cancelButtonColor: '#3f51b5',
      focusConfirm: false,
      showCancelButton: true,

    }).then((result) => {
      if (result.value != undefined) {
        alert('upload')
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        alert('librar')
      }
    })

  }

  upCaseFirstL(string) {
    if (string != "") {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }



  updateUser() {


    let newProfile = {
      city: this.city,
      civilStatus: this.civilStatus,
      country: this.country,
      id: this.user.profile.id,
      occupation: this.occupation,
      organisation: this.organisation,
      posts: this.user.profile.posts,
      profilePhoto: this.profilePhoto,
      zip: this.zip
    }

    this.apiService.updateProfileApi(newProfile).subscribe((rep) => {
      if (rep == 'updated') {

        var newUser = {
          birhDate: this.birhDate,
          creationDate: this.user.creationDate,
          email: this.email,
          firstName: this.firstName,
          gender: this.user.gender,
          id: this.user.id,
          lastName: this.lastName,
          phone: this.phone,
          pwd: this.pwd,
          updateDate: this.user.updateDate,
          userName: this.firstName + "_" + this.lastName,
        }

        console.log(newUser);
        this.apiService.updateUserApi(newUser).subscribe((response) => {
          if (response == 'updated') {

            this.apiService.getUserByidApi(this.user.id).subscribe((userRep) => {
              localStorage.setItem('user', JSON.stringify(userRep));
            })
            this.profileUpdated();

          } else {
            this.profileUpdateError();
          }
        }, (error) => {
          console.log(error);
          this.profileUpdateError();
        })

      } else {
        this.profileUpdateError();
      }
    }, (error) => {
      console.log(error);
      this.profileUpdateError();
    })

    console.log(newProfile);

  }


  profileUpdated() {

    Swal({
      title: 'Profile update',
      text: 'Your profile has been updated!',
      type: 'success',
      confirmButtonText: 'Ok',
      width: '400px',
      showCloseButton: true,
      confirmButtonColor: '#3f51b5',
      focusConfirm: false,
      showCancelButton: false,
      showConfirmButton: true
    }).then((result) => {
      window.location.href = "http://localhost:4200/myprofile";
    })
  }

  profileUpdateError() {

    Swal({
      title: 'Profile update',
      type: 'error',
      text: 'An error occured while updating!',
      confirmButtonText: 'Ok',
      width: '400px',
      showCloseButton: true,
      confirmButtonColor: '#3f51b5',
      focusConfirm: false,
      showCancelButton: false,
      showConfirmButton: true
    })
  }


  tabClick(tab) {
    if (tab.index == 2) {
      setTimeout(() => { window.location.href = "http://localhost:4200/myprofile"; }, 200);
    }

    if (tab.index == 1) {
      setTimeout(() => { window.location.href = "http://localhost:4200/home"; }, 200);
    }

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
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log('comments updated');
      console.log(this.user.profile.posts);

    })
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
export class DialogOverviewProfile {

  constructor(private apiService: ApiService,
    public dialogRef: MatDialogRef<DialogOverviewProfile>,
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
      this.updateLocalPost(post.ownerId, post);

    })

  }

  updateLocalPost(id, postToUpdate) {
    this.apiService.getAllPostsByUserIdApi(id).subscribe((rep) => {
      var oldUser = JSON.parse(localStorage.getItem('user'));
      console.log(rep);
      oldUser.profile.posts = rep;
      localStorage.setItem('user', JSON.stringify(oldUser));
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log('comments updated');
      console.log(this.user.profile.posts);
      this.user.profile.posts.forEach(post => {
        if (postToUpdate.id == post.id) {
          console.log('updating view');
          console.log(post);
          console.log(post.body);
          console.log(this.dialogRef.componentInstance.data);
          this.dialogRef.componentInstance.data = { post: post };

          console.log('view updated');
          console.log(this.dialogRef.componentInstance.data);
        }
      });

    })
  }

  upCaseFirstL(string) {
    if (string != "") {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}


