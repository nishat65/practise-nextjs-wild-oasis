import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { auth } from "@/app/_lib/auth";
import { getCabin, getSettings } from "@/app/_lib/data-service";
import LoginMessage from "./LoginMessage";

export default async function Reservation({ cabin, user }) {
  // const settings = await getSettings();
  //   const bookedDates = await getBookedDatesByCabinId(params.cabinId);
  const [settings, bookedDates] = await Promise.all([
    getCabin(cabin.id),
    getSettings(),
  ]);
  const session = await auth();
  return (
    <div className="grid grid-cols-2 border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
