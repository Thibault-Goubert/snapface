import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  
  btnText!: string;
  hasSnapped!: boolean;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
    ) {}

  ngOnInit() {
    this.btnText = "Oh Snap!";
    this.hasSnapped = false;
  }
  onSnap() {
    if(this.hasSnapped == false){
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.btnText = 'Oops, unSnap!';
    } else {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.btnText = 'Oh Snap!';
    }
  }
  onViewFaceSnap(){
    this.router.navigate(['facesnaps', this.faceSnap.id])
  }
}