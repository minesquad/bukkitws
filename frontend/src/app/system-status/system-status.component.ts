import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../shared/websocket.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'mine-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.scss']
})
export class SystemStatusComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public status: any;

  private static humanizeFileSize(fileSizeInBytes) {
    let i = -1;
    const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  }

  private static humanizeSeconds(seconds: number) {
    const h = Math.round(Math.floor(((seconds % 31536000) % 86400) / 3600));
    const min = Math.round(Math.floor((((seconds % 31536000) % 86400) % 3600) / 60));
    const sec = Math.round((((seconds % 31536000) % 86400) % 3600) % 60);

    const phrase = (h > 0 ? [h, min, sec] : [min, sec]).map((item) => {
      if (item < 10) {
        return '0' + item;
      }
      return item;
    });

    return phrase.join(':');
  }

  private static prepareMemoryData(info: any) {
    return {
      total: SystemStatusComponent.humanizeFileSize(info.total),
      free: SystemStatusComponent.humanizeFileSize(info.free),
      used: SystemStatusComponent.humanizeFileSize(info.total - info.free),
      usage: (100 - (info.free / (info.total / 100))).toFixed(2),
    };
  }

  constructor(private socket: WebsocketService) {
  }

  async ngOnInit() {
    await this.socket.join('system');
    this.subscription = this.socket.on('system', 'status').subscribe((status: any) => {
      this.status = {
        cpu: {
          arch: status.cpu.arch,
          uptime: SystemStatusComponent.humanizeSeconds(status.cpu.uptime / 1000),
          cores: status.cpu.cores,
          usage: ((status.cpu.usage * 100) / status.cpu.cores).toFixed(2),
        },
        ram: SystemStatusComponent.prepareMemoryData(status.ram),
        swap: SystemStatusComponent.prepareMemoryData(status.swap),
        disk: SystemStatusComponent.prepareMemoryData(status.disk),
      };
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
