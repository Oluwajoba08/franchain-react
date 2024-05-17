import Navbar from "./Navbar"
import SignUpScreen from "./svg/SignUpScreen"

const CheckEmail = () => {

  return (
    <main className="w-full h-[1116px]">
      <div className="w-full max-w-[1300px] mx-auto h-full">
        <Navbar title="Return to login" link="/login" />
        <div className="flex justify-between gap-4 md:mt-[160px] xl:mt-[80px]">
          <div className="flex flex-col px-5 xl:px-[45px] w-1/2 max-[1024px]:hidden items-center justify-center">
            <SignUpScreen marginTop="-1rem" width="500px" maxHeight="500px" overflow="hidden" />
            <h3 className="text-[40px] leading-[52.08px] font-medium text-center">Royalty collections, <br/> simplified. It's next level!</h3>
            <p className="text-[22px] leading-[28.64px] text-center">Revenue based invoice collection <br/>to make royalty collection as easy as...</p>
          </div>
          <div className="flex flex-col justify-center px-8 max-lg:px-[36.28px] w-1/2 max-lg:w-full min-[644px]:max-w-[624px] mx-auto py-10">
            <h3 className="text-[30px] font-medium leading-[39.06px]">Check your email</h3>
            <p className="text-[22px] leading-[28.64px] mt-1">Thanks! If email matches an email address we have on file, then we've sent you an email containing further instructions for resetting your password.</p>
            <h5 className="text-[22px] leading-[28.64px] mt-4">If you haven't received an email in 5 minutes, check your spam <a className="text-[#7D97FF]" href="#">resend</a> or <a className="text-[#7D97FF]" href="#">try a different email address</a>.</h5>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CheckEmail