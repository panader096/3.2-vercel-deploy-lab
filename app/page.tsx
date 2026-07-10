export default function Home() {
  const greeting = process.env.NEXT_PUBLIC_GREETING ?? "Hello from Vercel";

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          {greeting}
        </h1>
      </main>
    </div>
  );
}
