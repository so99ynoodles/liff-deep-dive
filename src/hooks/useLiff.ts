import liff from "@line/liff";
import LIFFInspectorPlugin from "@line/liff-inspector";
import { useEffect } from "react";
import { DeepDivePlugin } from "../plugin";

export const useLiff = () => {
  useEffect(() => {
    liff.use(new DeepDivePlugin());
    liff.use(new LIFFInspectorPlugin());
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {
        console.log("liff.init succeeded! liff id: ", liff.id);
      });
  }, []);
};
