import { Component, OnInit } from '@angular/core';
import { FaqTemplate } from '../model/template.model';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  public faqTemplate: FaqTemplate[];

  constructor(private _utilService: UtilService) {}

  ngOnInit() {
    this._utilService.getTemplateData().subscribe((faqTemplate: FaqTemplate[]) => {
      this.faqTemplate = faqTemplate;
    });
  }

  public scrollToTop() {
    window.scroll(0, 0); // scroll to the top of the page
  }
}
