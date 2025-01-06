import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
export default function Home() {
  const hello = 1;

  return(
    <div className= "container mx-auto px-6 pt-8">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-2=8 lg:gap-4">
        <div className="w-full lg:w-3/5 text-left space-y-4 pl-6 lg:pl-12" >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl gradient-title whitespace-normal leading-tight">
            Write. Reflect. Repeat.
          </h1>
          <p className="text-lg md:text-xl text-purple-800">
          Start Your Mindful Journey Today with this simple, secure and user-friendly journal.
          </p>
          <div className="relative">
            <div/>
            <div className="bg-white rounded-2xl p-5 max-full mx-auto" >
              <div className="border-b border-purple-800 pb-4 mb-4 flex items-center justify-between">
               <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-800"/>
                <span className="text-purple-900 font-medium">
                  Today&rsquo;s Prompt
                </span>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-200 hover:bg-purple-300 transition-all cursor-pointer"/>
                  <div className="h-3 w-3 rounded-full bg-purple-300 hover:bg-purple-400 transition-all cursor-pointer"/>
                  <div className="h-3 w-3 rounded-full bg-purple-400 hover:bg-purple-500 transition-all cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>
    
        </div>
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
  <Image
    src="/landing12.png"
    alt="Peaceful girl"
    width={700}
    height={700}
    className="w-full h-auto max-w-xl mx-auto  rounded-lg"
    priority
  />
</div>

      </div>
    </div>
    
  );
}
