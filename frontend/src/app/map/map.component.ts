import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'mine-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  @ViewChild('map')
  private map: ElementRef;
  public frame: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const l = window.location;
    this.frame = this.sanitizer.bypassSecurityTrustResourceUrl(`${l.protocol}//${l.hostname}:8123/`);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }


}
