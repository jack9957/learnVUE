import { ref } from "vue"
export default  function useCounter() {
  const counter = ref(100)
    const incounter = () => {
      counter.value++
    }
    const decounter = () => {
      counter.value--
    }
    return {counter, incounter, decounter}
}