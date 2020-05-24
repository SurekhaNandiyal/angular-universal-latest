import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  public contactUsData;
  constructor(private _contactService: ContactService) {}

  ngOnInit() {
    this._contactService.getContactUsData().subscribe((contactUsData) => {
      this.contactUsData = contactUsData;
    });
  }
}
