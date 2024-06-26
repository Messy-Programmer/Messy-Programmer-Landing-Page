import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookAppointment() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      calLink="messyprogrammer/project-meeting-1"
      style={{
        overflow: "scroll",
        scrollbarWidth: "none",
        height: "100%",
        width: "100%",
      }}
      config={{ layout: "month_view" }}
      className="p-2 h-full lg:max-h-[28rem] lg:px-16 xl:max-h-[30.5rem] "
    />
  );
}
