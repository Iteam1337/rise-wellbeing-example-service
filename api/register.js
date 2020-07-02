import fetch from "isomorphic-fetch";

const APP_ID = "MF123";
const PLATFORM_URI = "http://localhost:4000";

module.exports = async (req, res) => {
  try {
    const { email, password, params } = req.body;

    if (email && password) {
      const { value: digitalPlatformId } = params.find(
        ({ key }) => key === "dp_referall_id"
      );

      if (digitalPlatformId) {
        // Platform special-cased sign-up
        const { data: validToken } = await fetch(
          `${PLATFORM_URI}/api/token/${digitalPlatformId}`
        ).then((res) => res.json());

        if (validToken) {
          const platformResult = await fetch(
            `${PLATFORM_URI}/api/registration/${APP_ID}`,
            {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                token: digitalPlatformId,
              }),
            }
          ).then((res) => res.json());

          console.debug("Platform Result:", platformResult);

          res.status(200).json({
            status: "success",
            data: {
              signUpType: "RISE",
              email,
              password,
              digitalPlatformId,
            },
          });
        } else {
          throw Error("The token provided was not valid.");
        }
      } else {
        // Normal sign-up
        res.status(200).json({
          status: "success",
          data: {
            signUpType: "REGULAR",
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
