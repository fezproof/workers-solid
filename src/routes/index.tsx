import { Title } from "@solidjs/meta";
import { useAction, useSubmission } from "@solidjs/router";
import { Show } from "solid-js";
import Counter from "~/components/Counter";
import { actionTest } from "~/lib/action";

export default function Home() {
  const submission = useSubmission(actionTest);

  const test = useAction(actionTest);
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <form method="post" action={actionTest}>
        <input type="hidden" name="wow" value="test" />
        <button type="submit">Form test</button>
      </form>

      <button
        type="button"
        onClick={() => {
          test();
        }}
      >
        Trigger test
      </button>

      <Show when={submission.pending}>
        <p>Sending...</p>
      </Show>
      <Show when={submission.result}>{(result) => <p>{result()}</p>}</Show>
    </main>
  );
}
