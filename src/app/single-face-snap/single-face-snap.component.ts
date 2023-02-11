import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  btnText!: string;
  hasSnapped!: boolean;
  
  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);

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
}
