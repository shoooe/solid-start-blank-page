import { action } from "@solidjs/router";
import { OAuth2Client } from "google-auth-library";

const getUserFromGoogleCode = async (code: string) => {
  const client = new OAuth2Client({});
};

export const signInWithGoogle = action(async (code: string) => {
  "use server";

  const googleUser = await getUserFromGoogleCode(code);
});
