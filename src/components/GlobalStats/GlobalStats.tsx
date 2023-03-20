import { GlobalCards } from "./GlobalCards"

export const GlobalStats = () => {

  return (
    <div className="flex flex-col justify-center items-center gap-32 min-w-full">
       <div className="w-4/5 flex flex-col gap-10">
          <h1 className="text-3xl text-blue-400">Global Stats</h1>
          <section className="flex justify-between gap-10">
            <GlobalCards/>
          </section>
       </div>
    </div>
  )
}
