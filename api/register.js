const PLATTFORM_URI = "http://localhost:4000";

module.exports = (req, res) => {
  try {
    const { email, password, params } = req.body;

    if (email && password) {
      const digitalPlatformId = params.find(
        ({ key }) => key === "dp_referall_id"
      );

      if (digitalPlatformId) {
        // Platform special-cased sign-up
        res.status(200).json({
          status: "success",
          data: {
            email,
            password,
            digitalPlatformId,
          },
        });
      } else {
        // Normal sign-up
        res.status(200).json({
          status: "success",
          data: {
            email,
            password,
          },
        });
      }
    } else {
      throw Error("No credentials provided");
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: error.message,
    });
  }
};
