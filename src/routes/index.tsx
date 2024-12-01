import { useAction } from "@solidjs/router";
import { onMount } from "solid-js";
import { signInWithGoogle } from "~/lib/x";

export default function Page() {
  // @todo Uncomment this line and you'll see that the below console.log is not shown.
  // const signIn = useAction(signInWithGoogle);

  onMount(() => {
    console.log("Never shown");
  });

  return <div>Title</div>;
}
