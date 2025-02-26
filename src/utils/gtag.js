import googleAnalytics from "@analytics/google-analytics";
import Analytics from "analytics";
export const analytics = Analytics({
  app: "NonAcademy",
  version: 100,
  plugins: [
    googleAnalytics({
      trackingId: "GTM-P98C7ZRJ",
    }),
  ],
});
