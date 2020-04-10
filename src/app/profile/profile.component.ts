import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {RepositoryService} from '../repository.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  user:string;



  constructor(private profileService:ProfileService, private repositoryService:RepositoryService) {
    this.profileService.getProfileData().subscribe(profile=>{
      console.log(profile);
      this.profile=profile;
    });
    this.repositoryService.getUserRepo().subscribe(repos =>{
      console.log(repos);

      this.repos=repos;
    })
   }

  ngOnInit(){
  }

}
