import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-by-barcode",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./by-barcode.component.html",
  styleUrl: "./by-barcode.component.scss",
})
export class ByBarcodeComponent implements OnInit {
  devices: MediaDeviceInfo[] = [];
  selectedId: string = "";
  error: string = "";

  stream?: MediaStream;

  async ngOnInit() {
    // iOS and some browsers don’t reveal device labels until permission granted
    await this.ensurePermissionOnce();
    await this.refreshDevices();

    if (!this.selectedId && this.devices.length > 0) {
      this.selectedId = this.devices[0].deviceId;
    }

    console.log(this.selectedId)

    const video = document.getElementById("webcamVideo") as HTMLVideoElement;
    video.srcObject = await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: {
          exact: this.selectedId
        }
      }
    });

    console.log(video.srcObject)

    // Some browsers need a play() call after assigning srcObject
    video.play?.().catch(() => {
      /* autoplay may be blocked without user gesture if not muted */
    });
  }

  private async ensurePermissionOnce() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
  }

  private async refreshDevices() {
    this.devices = await navigator.mediaDevices.enumerateDevices();
    this.devices = this.devices.filter((device) => device.kind == "videoinput");
  }
}
