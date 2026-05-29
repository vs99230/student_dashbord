"use client";

export default function Loader() {
  return (
    <div className="min-h-[200px] flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-violet-400 animate-bounce" />
        <div className="h-3 w-3 rounded-full bg-violet-400 animate-bounce delay-100" />
        <div className="h-3 w-3 rounded-full bg-violet-400 animate-bounce delay-200" />
      </div>
    </div>
  );
}