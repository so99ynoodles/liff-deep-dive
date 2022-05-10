import { beforeAll, describe, expect, it } from "vitest";
import { DeepDivePlugin } from "./index";
import LiffMockPlugin from "@line/liff-mock";
import liff from "@line/liff";

describe("DeepDivePlugin.shareMessages", () => {
  beforeAll(async () => {
    liff.use(new LiffMockPlugin());
    await liff.init({ liffId: "xx", mock: true });
  });

  /**
   * shareTargetPicker APIが利用できないときにエラーを返すことを確認するテスト
   */
  it("should throw an error if shareTargetPicker API is disabled", () => {
    const plugin = new DeepDivePlugin();
    expect(plugin.shareMessages()).rejects.toThrow(
      "shareTargetPicker API is unavailable"
    );
  });

  /**
   * shareTargetPicker APIが利用できるときに正しくshareTargetPickerを呼び出し、
   * そのレスポンスを返却するかを確認するテスト
   */
  it("should call liff.shareTargetPicker and return status if shareTargetPicker API is available", async () => {
    liff.$mock.set((prev) => ({
      ...prev,
      isApiAvailable: true,
      shareTargetPicker: { status: "success" },
    }));
    const plugin = new DeepDivePlugin();
    liff.login();
    const response = await plugin.shareMessages();
    expect(response).toStrictEqual({ status: "success" });
  });
});
