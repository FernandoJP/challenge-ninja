import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpinnerService } from '../core/services/spinner.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    showSpinner: boolean = false;

    constructor(private changeDetectorRef: ChangeDetectorRef,
        public spinnerService: SpinnerService) {
    }

    ngOnInit() {

    }
}
