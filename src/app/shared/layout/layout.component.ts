import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    showSpinner: boolean = false;

    constructor(private changeDetectorRef: ChangeDetectorRef,
        public spinnerService: SpinnerService) {
    }

    ngOnInit() {

    }
}
