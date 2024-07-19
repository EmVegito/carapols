import Link from 'next/link'
import Image from 'next/image'

import PatientForm from '@/components/form/PatientForm'

const Home = () => {
  return (
    <div>
      <section className="remove-scrollbar container my-auto">
        <div>
          <Image
            src="/assets/icons/logo-full.svg"
            alt={'patient'}
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CaraPols
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        alt={'patient'}
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  )
}

export default Home
