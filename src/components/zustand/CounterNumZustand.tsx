
import { useCounterStore } from "@/zustand-store/store"

function CounterNumZustand() {
  const {value} = useCounterStore()
  return (
    <div className="text-8xl">{value}</div>
  )
}

export default CounterNumZustand