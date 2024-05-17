import Navbar from "./components/Navbar"
import SignUpScreen from "./components/svg/SignUpScreen"

function App() {

  return (
    <main className="w-full h-full min-h-screen">
      <div className="w-full max-w-[1300px] mx-auto">
        <Navbar title="Log in" link="/login" />
        <div className="flex justify-between gap-4">
          <div className="flex flex-col px-5 xl:px-[45px] w-1/2 max-[1024px]:hidden items-center justify-center">
            <SignUpScreen marginTop="-1rem" width="500px" maxHeight="500px" overflow="hidden" />
            <h3 className="text-[40px] leading-[52.08px] font-medium text-center">Royalty collections, <br/> simplified. It's next level!</h3>
            <p className="text-[22px] leading-[28.64px] text-center">Revenue based invoice collection <br/>to make royalty collection as easy as...</p>
          </div>
          <div className="px-8 max-lg:px-5 w-1/2 max-lg:w-full min-[644px]:max-w-[624px] mx-auto pt-[15px] md:pb-[200px] max-lg:pb-8 pb-[96px]">
            <p className="text-[35px] font-medium leading-[45.57px]">Get started with Franchain</p>
            <p className="leading-[26.04px] mt-1">Create an account in 5 minutes</p>
            <form className="flex flex-col gap-1" action="">
              <div className="flex flex-col gap-[6.05px] pt-[18.14px] md:pt-[30px]">
                <label htmlFor="firstName">First Name</label>
                <input autoComplete="name" className="h-[35px] md:h-[56px] px-1" type="text" name="firstName" id="firstName" />
              </div>
              <div className="flex flex-col gap-[6.05px] pt-[10px]">
                <label htmlFor="lastName">Last Name</label>
                <input autoComplete="name" className="h-[35px] md:h-[56px] px-1" type="text" name="lastName" id="lastName" />
              </div>
              <div className="flex flex-col gap-[6.05px] pt-[10px]">
                <label htmlFor="businessName">Business name and HQ loaction</label>
                <input className="h-[35px] md:h-[56px] px-1" type="text" name="businessName" id="businessName" />
              </div>
              <div className="flex flex-col gap-[6.05px] pt-[10px]">
                <label htmlFor="email">Work email</label>
                <input className="h-[35px] md:h-[56px] px-1" type="email" name="email" id="email" />
              </div>
              <div className="flex flex-col gap-[6.05px] pt-[10px]">
                <label htmlFor="password">Password</label>
                <input className="h-[35px] md:h-[56px] px-1" type="password" name="password" id="password" />
                <p className="text-[--app-colors-red]">Password must be at least 12 characters</p>
              </div>
              <button disabled className="py-[15px] px-10 text-white rounded-full my-5 font-bold self-start">
                Sign up
              </button>
            </form>
            <p className="text-sm leading-[18.23px] mt-[6.05px]">
              By clicking “Start Application“, I agree to Mercury's <a href="https://mercury.com/legal/terms" target="_blank">Terms of Use</a>, <a href="https://mercury.com/legal/privacy" target="_blank">Privacy Policy </a>and to receive electronic communication about my accounts and services per <a href="https://mercury.com/legal/esign" target="_blank">Mercury's Electronic Communications Agreement</a>, and acknowledge receipt of <a href="https://mercury.com/legal/patriot-act" target="_blank">Mercury's USA PATRIOT Act disclosure</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
