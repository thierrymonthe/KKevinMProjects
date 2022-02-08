import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StoryHelperService} from 'src/app/components/services/story-helper.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent extends StoryHelperService implements OnInit {
  constructor(private route: ActivatedRoute) {
    // @ts-ignore
    super();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    super.ngOnInit();
    this.route.paramMap.subscribe(params => {
      const data: {id?: number} = (params as any).params;
      if (data) {
        this.setPost(data.id as number);
      }
    });
  }
}
