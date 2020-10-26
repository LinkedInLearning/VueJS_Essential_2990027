<script>
import { ref, computed } from "vue";
export default function useLikes() {
  const nbrLikes = ref(7);
  const message = ref("aime cette page");
  function addLikes() {
    nbrLikes.value++;
  }
  const info = computed(() => {
    return nbrLikes.value + " " + message.value;
  });
  return { nbrLikes, addLikes, message, info };
}
</script>