import { ShareTargetPickerResult } from "./types";

declare module "@line/liff" {
  interface Liff {
    $deepdive: {
      shareMessages: () => Promise<ShareTargetPickerResult | void>;
      readQrCode: () => Promise<void>;
    };
  }
}
