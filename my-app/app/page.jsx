import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Pencil, Sparkles, Lock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from 'next/link';
import { getDailyPrompt } from "@/actions/public";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
const features = [
  {
    icon: Pencil,
    title: "Write Your Heart Out",
    description:
      "Document your thoughts, emotions, and reflections in a simple, secure journal.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with thought-provoking daily prompts.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "We prioritize your privacy. Your entries are secure and accessible only to you—anytime, anywhere.",
  },
];
export default async function Home() {
const advice = await getDailyPrompt()
  return (
    <div className="container mx-auto px-6 pt-8">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-2=8 lg:gap-4">
        <div className="w-full lg:w-3/5 text-left space-y-4 pl-6 lg:pl-12" >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl gradient-title leading-tight">
            Write. Reflect. Repeat.
          </h1>
          <p className="text-lg md:text-xl text-purple-800">
            Start Your Mindful Journey Today with this simple, secure and user-friendly journal.
          </p>
          {/* Daily Prompt Section */}
          <div className="relative">
            <div />
            <div className="bg-white rounded-2xl p-5 max-full mx-auto" >
              <div className="border-b border-purple-800 pb-4 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-800" />
                  <span className="text-purple-900 font-medium">
                    Today&rsquo;s Prompt
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-200 hover:bg-purple-300 transition-all cursor-pointer" />
                  <div className="h-3 w-3 rounded-full bg-purple-300 hover:bg-purple-400 transition-all cursor-pointer" />
                  <div className="h-3 w-3 rounded-full bg-purple-400 hover:bg-purple-500 transition-all cursor-pointer" />
                </div>
              </div>
              <div className="space-y-4 p-4">
                <h3 className="flex justify-center text-xl font-semibold text-purple-900">{advice}</h3>
                <Skeleton className="h-4 bg-purple-100 rounded w-3/4" />
                <Skeleton className="h-4 bg-purple-100 rounded w-full" />
                <Skeleton className="h-4 bg-purple-100 rounded w-2/3" />
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-center gap-4"><Link href="/dashboard"><Button variant="journal" className="px-8 py-6 rounded-full flex items-center gap-2">Start Journaling<ChevronRight className="h-5 w=5" /></Button></Link>
            <Link href="#features"><Button variant="outline" className="px-8 py-6 rounded-full border-purple-600 text-purple-600 hover:bg-purple-100">Learn More</Button></Link>
          </div>
        </div>

        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden">
            <Image
              src="/landing12.png"
              alt="Peaceful girl"
              width={700}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
      <div id="features" className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 ">
    {features.map((feature, index) => (
      <Card key={index} className="shadow-2xl rounded-2xl">
        <CardContent className="p-6" >
          {/* Feature Icon */}
          <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <feature.icon className="h-6 w-6 text-purple-600" />
          </div>
          {/* Feature Title */}
          <h3 className="text-xl font-semibold text-purple-900">{feature.title}</h3>
          {/* Feature Description */}
          <p className="text-sm text-purple-700 mt-2">{feature.description}</p>
        </CardContent>
      </Card>
    ))}
    
  </div>
  <div >
     <Card className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300">
      <CardContent className="p-12 text-center">
        <h3 className="text-3xl font-bold text-purple-900 mb-6">
          Start writing your daily thoughts here
        </h3>
        <p className="text-lg text-purple-700 mb-6">
        Reflect, grow, and organize your thoughts. Your private space awaits.
        </p>
        <Link href="/dashboard">
    <Button variant="journal" className="animate-bounce">
      Start Journaling for free <ChevronRight className="h-5 w-5" />
    </Button></Link>
      </CardContent>
     </Card>
     </div>
    </div>

  );
}
