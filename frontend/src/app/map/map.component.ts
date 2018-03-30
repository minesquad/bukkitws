import { Component, ElementRef, OnDestroy, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { ScriptLoaderService } from '../shared/script-loader.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'mine-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  @ViewChild('map')
  private container: ElementRef;

  private map: any;

  constructor(private scriptLoader: ScriptLoaderService) {
  }

  async ngOnInit() {

    const host = 'http://localhost:8123/';
    const w: any = <any>window;

    w.dynmapversion = '2.5-Dev201706100401';

    await this.scriptLoader.load('/assets/map/js/jquery-1.11.0.js?_=2.5-Dev201706100401');
    await this.scriptLoader.load('/assets/map/js/leaflet.js?_=2.5-Dev201706100401');
    await this.scriptLoader.load('/assets/map/js/custommarker.js?_=2.5-Dev201706100401');
    await this.scriptLoader.load('/assets/map/js/dynmaputils.js?_=2.5-Dev201706100401');
    await this.scriptLoader.load('/assets/map/js/jquery.json.js?_=2.5-Dev201706100401');
    await this.scriptLoader.load('/assets/map/js/jquery.mousewheel.js?_=2.5-Dev201706100401');
    await this.scriptLoader.load('/assets/map/js/minecraft.js?_=2.5-Dev201706100401');
    await this.scriptLoader.load('/assets/map/js/map.js?_=2.5-Dev201706100401');
    await this.scriptLoader.load('/assets/map/js/hdmap.js?_=2.5-Dev201706100401');

    w.dynmap = this.map = new w.DynMap({
      container: w.$(this.container.nativeElement),
      url: {
        configuration: host + 'up/configuration',
        update: host + 'up/world/{world}/{timestamp}',
        sendmessage: host + 'up/sendmessage',
        login: host + 'up/login',
        register: host + 'up/register',
        tiles: host + 'tiles/',
        markers: host + 'tiles/'
      }
    });

    const _loadjs: any = w.loadjs;
    const _loadcss: any = w.loadcss;

    w.loadjs = function (url: any, cb: any) {
      _loadjs('/assets/map/' + url, cb);
    };

    w.loadcss = function (url: any, cb: any) {
      _loadcss('/assets/map/css' + url, cb);
    };

    console.log(this.map);
  }

  ngOnDestroy() {
  }

}
