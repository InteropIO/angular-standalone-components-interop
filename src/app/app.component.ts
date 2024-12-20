import { Component, OnInit } from "@angular/core";
import { InteropService } from "./interop.service";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-root",
    imports: [RouterOutlet],
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = 'my-app'


  constructor(private ioConnectService: InteropService) { }

  public ngOnInit(): void {
      if (!this.ioConnectService.ioConnectAvailable) {
          console.error("Error during io connect init")
          // There has been an error during the io.Connect initialization.
          return;
      }
      console.log(this.ioConnectService.ioConnectAvailable)
      // // io.Connect has been initialized without errors and is ready to use.
  }
}