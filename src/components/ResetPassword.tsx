import Navbar from "./Navbar"
import SignUpScreen from "./svg/SignUpScreen"

const ResetPassword = () => {
  return (
    <main className="w-full h-full min-h-[1116px]">
      <div className="w-full max-w-[1300px] mx-auto">
        <Navbar title="Return to login" link="/login" />
        <div className="flex justify-between gap-4 md:mt-[160px] xl:mt-[80px]">
          <div className="flex flex-col px-5 xl:px-[45px] w-1/2 max-[1024px]:hidden items-center justify-center">
            <SignUpScreen marginTop="-1rem" width="500px" maxHeight="500px" overflow="hidden" />
            <h3 className="text-[40px] leading-[52.08px] font-medium text-center">Royalty collections, <br/> simplified. It's next level!</h3>
            <p className="text-[22px] leading-[28.64px] text-center">Revenue based invoice collection <br/>to make royalty collection as easy as...</p>
          </div>
          <div className="flex flex-col justify-center px-8 max-lg:px-[36.28px] w-1/2 max-lg:w-full min-[644px]:max-w-[624px] mx-auto py-10">
            <form className="flex flex-col gap-1" action="">
              <p className="text-[30px] font-medium leading-[39.06px]">Reset password</p>
              <p className="text-[22px] leading-[28.64px] mt-1">Enter your email address to get instructions for resetting your password.</p>
              <div className="flex flex-col gap-[6.05px] pt-[18.14px] md:pt-[30px]">
                <label htmlFor="email">Email</label>
                <input autoComplete="name" className="h-[35px] md:h-[56px] px-1" type="text" name="email" id="email" />
                <p className="text-[--app-colors-red]">Hmmm. We couldn't find an account with that email.</p>
              </div>
              <button disabled className="py-[15px] px-10 text-white rounded-full my-5 font-bold self-start">
                Reset password
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ResetPassword