import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/app/_lib/data-service";

export default async function Reservation({ cabin }) {
  // const settings = await getSettings();
  //   const bookedDates = await getBookedDatesByCabinId(params.cabinId);
  const [settings, bookedDates] = await Promise.all([
    getCabin(cabin.id),
    getSettings(),
  ]);
  return (
    <div className="grid grid-cols-2 border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
