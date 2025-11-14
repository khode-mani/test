import CounterRedux from "@/components/redux/CounterRedux";
import { CounterZustand } from "@/components/zustand/CounterZustand";

export default function Home() {
  return (

    <div className="w-screen h-screen  flex flex-col justify-center items-center">
      <CounterZustand/>
      
      <h2 className="text-bold text-3xl my-10">
        recorded that zustand is much better ( the top counter is zustand)
      </h2>

      <div className="w-8/9 h-10 bg-blue-500">
        <CounterRedux/>
      </div>

    </div>
  );
}
