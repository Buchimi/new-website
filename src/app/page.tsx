import MyCard from "@/components/specific/personcard";
import WorkExperience from "@/components/specific/workexperinece";
import SkillsCard from "@/components/specific/skills";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="sm:items-start"> {/* grid grid-cols-2 grid-rows-3*/}
        <div className="grid gap-6 items-start lg:grid-cols-2">
          <div className="grid gap-6 grid-cols-1">
            <MyCard />
            <SkillsCard />
          </div>
          <div className="grid grid-cols-1">
            <WorkExperience />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
