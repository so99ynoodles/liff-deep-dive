import { useEffect } from "react";
import liff, { LiffPluginContext } from "@line/liff";

class DeepDivePlugin {
  name: string;
  constructor() {
    this.name = "deepdive";
  }

  install(context: LiffPluginContext) {
    context.hooks.init.after(this.initAfter);
    return {
      shareMessages: this.shareMessages,
      readQrCode: this.readQrCode
    };
  }

  initAfter() {
    if (!liff.isLoggedIn()) {
      liff.login();
      return Promise.resolve();
    }
    return Promise.resolve();
  }

  shareMessages() {
    if (liff.isApiAvailable("shareTargetPicker")) {
      return liff.shareTargetPicker(
        [
          {
            type: "text",
            text: "https://linedevelopercommunity.connpass.com/event/242678/"
          }
        ],
        {
          isMultiple: true
        }
      );
    }
    return Promise.reject();
  }

  readQrCode() {
    if (liff.isApiAvailable("scanCodeV2")) {
      liff.scanCodeV2().then(result => {
        if (result.value) {
          location.href = result.value;
        }
      })
    }
  }
}

liff.use(new DeepDivePlugin());

const useLiff = () => {
  useEffect(() => {
    liff.init({
      liffId: import.meta.env.VITE_LIFF_ID
    });
  }, []);
};

export default useLiff;
