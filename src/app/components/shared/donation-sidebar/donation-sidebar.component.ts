import {Component} from '@angular/core';
import {DonationHelperService} from 'src/app/components/services/donation-helper.service';
import data from '../../data/actual.json';
import {Router} from '@angular/router';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-donation-sidebar',
  templateUrl: './donation-sidebar.component.html',
  styleUrls: ['./donation-sidebar.component.css']
})
export class DonationSidebarComponent extends DonationHelperService {
  actual = data;

  // constructor(private route: Router) {
  //   // @ts-ignore
  //   super();
  // }
  //
  // // tslint:disable-next-line:typedef
  // navigate(id: number) {
  //  this.route.navigate(['project/' + id]);
  // }
}
