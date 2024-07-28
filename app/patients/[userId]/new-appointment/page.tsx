import { AppointmentForm }from "@/components/form/AppointmentForm"
import { getPatient } from "@/lib/actions/patient.actions"
import Image from "next/image"

const Appointment = async ({ params: {userId}}: SearchParamProps) => {
  const patient = await getPatient(userId)
  
  return (
    <div className="flex max-h-screen h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-width-[860px] flex-1 justify-between">
          <Image 
            src="/assets/icons/logo-full.svg" 
            alt="logo" 
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm 
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image 
        src="/assets/images/appointment-img.png"
        width={1500}
        height={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  )
}
export default Appointment