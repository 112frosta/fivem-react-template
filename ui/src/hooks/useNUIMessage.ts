import { useEffect } from "react";

/*  
    Usage of useNUIMessage hook:
    type NUIPayload = {someData: string};

    useNUIMessage<NUIPayload>("hud:Toggle", (payload) => {
        do some stuff...
    });

    You can define your own NUI actions for type safety.
    type NUIAction = "hud:Toggle" | "update:Health"
*/

type NUIAction = string;
type NUICallback<T> = (payload: T) => void;

export const useNUIMessage = <T>(
  action: NUIAction,
  callback: NUICallback<T>
) => {
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data.action === action) {
        callback(event.data.payload);
      }
    };

    window.addEventListener("message", handler);

    return () => window.removeEventListener("message", handler);
  }, [action, callback]);
};
