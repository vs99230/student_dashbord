import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import ActivityTile from "@/components/ActivityTile";
import { fetchCourses } from "@/lib/fetchCourses";
import { Course } from "@/types/course";

export default async function DashboardPage() {
  const courses: Course[] = await fetchCourses();

  return (
    <main className="relative min-h-screen bg-[#09090b] text-white flex overflow-hidden">

      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 h-[420px] w-[420px] bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] bg-cyan-500/10 blur-[120px]" />
      </div>

      <Sidebar />

      <section className="flex-1 px-6 lg:px-10 py-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

          {/* Hero */}
          <div className="col-span-12 xl:col-span-8">
            <HeroTile />
          </div>

          {/* Activity */}
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <ActivityTile />
          </div>

          {/* Dynamic Courses */}
          {courses.map((course) => (
            <div
              key={course.id}
              className="col-span-12 md:col-span-6 xl:col-span-4"
            >
              <CourseCard
                title={course.title}
                progress={course.progress}
                icon_name={course.icon_name}
              />
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}