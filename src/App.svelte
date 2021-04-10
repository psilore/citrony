<script>
  import api from "../services/api";
  import { onMount } from "svelte";
  export let temp;

  export const getDeviceTemp = async () => {
      try {
        const response = await api.get("/device/a84041935182d48d/latest");
        return response.results;
      } catch (error) {
        console.error(error);
      }
  };
  onMount(async () => {
    const res = await getDeviceTemp();
    temp = res;
  });
</script>

<main>
  <h1>Citrony</h1>
  <p>{temp ? temp : 'Loading temp...'}</p>
</main>
