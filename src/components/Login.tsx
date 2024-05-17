import Navbar from "./Navbar"
import SignUpScreen from "./svg/SignUpScreen"

const Login = () => {
  return (
    <main className="w-full h-full min-h-[1116px]">
      <div className="w-full max-w-[1300px] mx-auto">
        <Navbar title="Create account" link="/" />
        <div className="flex justify-between gap-4 md:mt-[160px] xl:mt-[80px]">
          <div className="flex flex-col px-5 xl:px-[45px] w-1/2 max-[1024px]:hidden items-center justify-center">
            <SignUpScreen marginTop="-1rem" width="500px" maxHeight="500px" overflow="hidden" />
            <h3 className="text-[40px] leading-[52.08px] font-medium text-center">Royalty collections, <br/> simplified. It's next level!</h3>
            <p className="text-[22px] leading-[28.64px] text-center">Revenue based invoice collection <br/>to make royalty collection as easy as...</p>
          </div>
          <div className="flex flex-col justify-center px-8 max-lg:px-[24.17px] w-1/2 max-lg:w-full min-[644px]:max-w-[624px] mx-auto py-10">
            <form className="flex flex-col gap-1" action="">
              <p className="text-[30px] font-medium leading-[39.06px]">Login to Franchain</p>
              <div className="flex flex-col gap-[6.05px] pt-[18.14px] md:pt-[30px]">
                <label htmlFor="email">Email</label>
                <input autoComplete="name" className="h-[35px] md:h-[56px] px-1" type="text" name="email" id="email" />
              </div>
              <div className="flex flex-col gap-[6.05px] pt-[10px]">
                <label htmlFor="password">Password</label>
                <input className="h-[35px] md:h-[56px] px-1" type="password" name="password" id="password" />
                <p className="">Forgot your password? <a href="/reset">click here to reset.</a></p>
              </div>
              <button disabled className="py-[15px] px-10 text-white rounded-full my-5 font-bold self-start">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login