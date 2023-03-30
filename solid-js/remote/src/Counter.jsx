import { createSignal } from "solid-js";

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <div>Count = {count()}</div>
      <button
        class="bg-blue-900 text-white p-2 mt-2 rounded"
        onClick={() => setCount(count() + 1)}
      >
        Increment
      </button>
    </div>
  );
};
