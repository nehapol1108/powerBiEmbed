
// {
//   "accessLevel": "View"
// }

import React, { useState, useEffect } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import "./App.css";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [key, setKey] = useState(0); // Unique key to force re-render

  const getLayoutType = () =>
    screenWidth <= 576 ? models.LayoutType.MobilePortrait : models.LayoutType.Custom;

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (
        (screenWidth <= 576 && newWidth > 576) || // Transition to desktop
        (screenWidth > 576 && newWidth <= 576) // Transition to mobile
      ) {
        setScreenWidth(newWidth); // Update screen width
        setKey((prevKey) => prevKey + 1); // Force re-render by updating key
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PowerBIEmbed
        key={key} // Unique key to force re-render
        embedConfig={{
          type: "report", // Report type
          id: "0b990e17-28c6-4902-9ad1-f1cb573695c0",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=0b990e17-28c6-4902-9ad1-f1cb573695c0&groupId=365a215f-7d66-471f-8f7d-cc4a848da49d",
          accessToken: "H4sIAAAAAAAEAB2Ut66sBgBE_-W2WCInS68g55zpyHGBJYPlf_eV-zPN0cz882Nnzzhn5c_fPx27npKyn2Hs6OLt70Nb6soButMDKdpJUnC2rtTSq7g_h5xZRU1PgnYYbGZ4RVskr_wYdLbp5Xaen7cZNryUdr25MnUfaIbLMENj7Ly06KrohYWSP1E8AqSFMqciUV33RWOKZ2qPnDoFKGHB8qss0PHDIGL7mxHXb77DojJ_JCwUElWD20hXuHzutsOlHkGAcndDAJ9aQ4TZi3Xwx-1RhvGtGnj4eEw0MnuoK7izgKeVELbXC1D09Mzs9TIOMvfmDl3cEZlYQiqb7Jk2S_d4b7HYvEhDx2ZF2UBuOWzgj9JU90cbzinU1Nc0FM_7HrPVBfAVi3DDcYXH9oxmaIYMmJ-AS8E5syhxVVKykcZmYvOMReDaZQ68Yd7RxKLm0HkqEnRJbq2CDCQU8QDt3hrcPmEpVwb77Ap-Mo-sDggctGfjAGCgSvKDZhXdJ7G-VlRQntozOTomr1kvxpQhJsTN6MKhlrQ12d46yzV92Sn3i5qyS2fQGcvdQ5W3zhOZdO98eQ9PkXIW85pFwcaPe4EfYRlvzL9Xzsdq2nXvlJbUAXYnSHV1DG3YFNjOWm4N4BafjDuvIRz0GcLVHIowBAMKTsuJhrxosXRAFSVbhDktUBOaM07FlYJGkgsHsz874xZZARj9opXbg0L4PnDGb2N29OYLbZ2bAGJga69rMSdGaKw55EL2WJWvpo1Adu-GvVwKIJsuZRHDs9a5z7t4yVJ6R4Jgq9ExHkC5e2GoeTdx8kTZwZ-fv3649Vn2Waue3-qzdE6B67noH6ykz5nGkuDKbYOCfK0RP2wBwlaRJn3Pt6-RdiDHyRmmftvoeKnLEhz81iRqZQT-hMi4d76eY-TCIpavSl3GViJGZcQrDIHSVQluKhqpqJBeoJZSbnKaZLdJsgX3eQFgSrU-Tw6sRJlovYnY6_MpikolzdnVRgUxdOnEGKIDEV0rruLSk5sotEMGUlwUnW7D7XOgkDqEogGRBBAMMxpuvUX02u23GgeAFdYy1RunYQgoNyHU_ClbB_WmetGiHH_PqvJ7lPXeAwnVdB46NP7uXdHIuvG71S3ZU5JXROJN6VoAgcuWVJ7zjlmlg2f1XaAhZRtL6zn7BnEED9ef_zU_S1utSvhreSBuoxaeGm-uMmnPT_zliqD5n_K6Zsr2Y61-MdiR495muoi72BxwOItus9rYyMJGy7jyHVMSROpUNIiG3nNP94TzHfXzMeaALj_miWV0TANrt5jUwGcc5cxiFOq0_TK7ey2593zD9YBwBa6EyV-BMUwXUTNns1Hlz33nRMEQqLY2xFd0MF1sndLpN7AErZvk3W1E-2eYW84BuwUrsWfm6S6ps-7MMcW7Vc3efw_GPF4MZ1IUbEb0gnNbDK9E9tSQnceRDMADS-BjPwK-BZAku6UqLr_gJ_tiLGzPkwXaAvOZ2mTJkfCAVfbB1Jgo0MFqXM2CW-ujstCQBpcrA2mJGU7rNzxP5_Rzz17wfMD9uxw1l7AL9iBIbYtcwc1kz_xq_vc_dorCd-4FAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzMyNDM0Mzg1LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
          tokenType: models.TokenType.Embed,
          settings: {
            layoutType: getLayoutType(), // Dynamically apply layout based on screen size
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded with layout:", getLayoutType());
              },
            ],
            [
              "error",
              function (event) {
                console.error("Error loading report:", event.detail);
              },
            ],
          ])
        }
        cssClassName={"Embed-container"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  );
}

export default App;
