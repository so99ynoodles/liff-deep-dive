import liff, { LiffPluginContext } from "@line/liff";
import { ShareTargetPickerResult } from "../types";

export class DeepDivePlugin {
  name: string;
  constructor() {
    this.name = "deepdive";
  }

  install(context: LiffPluginContext) {
    context.hooks.init.after(this.initAfter);
    return {
      shareMessages: this.shareMessages,
      readQrCode: this.readQrCode,
    };
  }

  initAfter() {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
    return Promise.resolve();
  }

  shareMessages(): Promise<ShareTargetPickerResult | void> {
    if (liff.isApiAvailable("shareTargetPicker")) {
      return liff.shareTargetPicker(
        [
          {
            type: "text",
            text: "https://linedevelopercommunity.connpass.com/event/242678/",
          },
        ],
        {
          isMultiple: true,
        }
      );
    }
    return Promise.reject(new Error("shareTargetPicker API is unavailable"));
  }

  readQrCode(): Promise<void> {
    if (liff.isApiAvailable("scanCodeV2")) {
      return liff.scanCodeV2().then((result) => {
        if (result.value) {
          location.href = result.value;
        }
      });
    }
    return Promise.reject(new Error("scanCodeV2 API is unavailable"));
  }
}
