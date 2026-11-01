app.get("/api/schedule-test", async (req, res) => {
  try {
    const url =
      "https://proxy.streamvideo.co.in/fetch/api.penpencil.co/v1/batches/698ad3519549b300a5e1cc6a/todays-schedule?isNewStudyMaterialFlow=true";

    const response = await fetch(url, {
      headers: {
        "accept": "application/json",
        "client-id": "5eb393ee95fab7468a79d189",
        "client-type": "WEB",
        "client-version": "2.2.7",
        "origin": "https://pwthor.live"
      }
    });

    const body = await response.text();

    res.status(200).json({
      success: response.ok,
      upstreamStatus: response.status,
      contentType: response.headers.get("content-type"),
      cloudflareRay: response.headers.get("cf-ray"),
      response: body.slice(0, 3000)
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});