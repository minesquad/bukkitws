import { Injectable } from '@angular/core';

export interface ScriptLoaderOptions {
  windowCallback?: string;
}

@Injectable()
export class ScriptLoaderService {

  private promises: {
    [propName: string]: Promise<any>;
  } = {};

  public load(script, options: ScriptLoaderOptions = {}): Promise<any> {

    if (!this.promises[script]) {
      this.promises[script] = new Promise((resolve) => {
        const scriptElement: HTMLScriptElement = document.createElement('script');
        scriptElement.src = script;
        scriptElement.type = 'text/javascript';

        if (options.windowCallback) {
          window[options.windowCallback] = resolve;
        } else {
          scriptElement.onload = resolve;
        }

        document.body.appendChild(scriptElement);
      });
    }

    return this.promises[script];
  }
}
