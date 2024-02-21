import { useContext } from "react";
import { ItemContext } from "../ItemContext/ItemContextProvider";

export function useItemContext() {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error("component should be used inside itemcontextprovider");
  }

  return context;
}