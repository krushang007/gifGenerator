import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  
  return <div className="background w-full min-h-screen flex flex-col gap-5 items-center">
    <h1 className="mt-5 w-10/12 bg-white py-3 rounded-xl font-bold text-xl text-center">GIF GENRATOR</h1>
     <div className="w-full flex flex-col items-center gap-4">
        <Random></Random>
        <Tag></Tag>
     </div>
     </div>;
}
