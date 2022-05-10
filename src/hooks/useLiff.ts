import liff from "@line/liff";
import { useEffect } from "react";
import { DeepDivePlugin } from "../plugin";

export const useLiff = () => {
  useEffect(() => {
    liff.use(new DeepDivePlugin());
    liff.init({
      liffId: import.meta.env.VITE_LIFF_ID,
    });
  }, []);
};
