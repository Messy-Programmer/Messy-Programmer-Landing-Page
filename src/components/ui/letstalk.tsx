import React from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
export default function LetsTalk({ className, text }: any) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#051405" },
          availabilityDatePicker: {
            backgroundColor: "green",
            color: "limegreen",
            background: "#051405",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <HoverBorderGradient>
      <button
        onClick={() => {
          (window as any).dataLayer.push("appointment_booked");
        }}
        data-cal-link="messyprogrammer/lead-meeting"
        data-cal-config='{"layout":"month_view"}'
        className={className}
      >
        {text}
      </button>
    </HoverBorderGradient>
  );
}
