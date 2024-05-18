import Navbar from "./Navbar"

const Onboarding = () => {
  return (
    <main className="w-full h-full min-h-[900px] fullscreen">
      <div className="w-full max-w-[1300px] mx-auto">
        <Navbar title="Skip to dashboard" link="/dashboard" />
        <div className="flex justify-between gap-4">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col gap-[10px] py-10 px-[20px] lg:py-[60px] items-center">
              <p className="text-center text-[22px] md:text-[30px] font-medium leading-[28.64px] md:leading-[39.06px]">What's your goal with Franchain?</p>
              <p className="text-center md:text-[22px] leading-[20.83px] md:leading-[28.64px] md:w-fit w-4/6">No wrong answers here. And it doesn't matter if you change your mind later.</p>
            </div>
            <form className="flex flex-col gap-[45px] md:gap-0 w-full" action="">
              <div className="flex flex-col md:flex-row flex-wrap md:gap-6 w-full md:px-10 justify-center md:mb-[60px]">
                <label htmlFor="choice1" className="md:w-[383px] md:h-[182px] flex md:bg-white md:rounded-[15px] md:border border-b border-[#E7E9F2] justify-between items-center p-4 md:p-10 md:hover:[box-shadow:_0px_4px_20px_0px_#7D97FF33]">
                  <img className="h-[76px] hidden md:block" src="/hourglass.png" alt="hourglass" />
                  <p className="md:text-[20px] md:leading-[26.04px] leading-[20.83px] font-medium md:font-bold">Reduce failed payments</p>
                  <input className="md:h-[23.91px] h-[22.21px] aspect-square" type="checkbox" name="choice1" id="choice1" />
                </label>                
                <label htmlFor="choice2" className="md:w-[383px] md:h-[182px] flex md:bg-white md:rounded-[15px] md:border border-b border-[#E7E9F2] justify-between items-center p-4 md:p-10 md:hover:[box-shadow:_0px_4px_20px_0px_#7D97FF33]">
                  <img className="h-[76px] hidden md:block" src="/hourglass.png" alt="hourglass" />
                  <p className="md:text-[20px] md:leading-[26.04px] leading-[20.83px] font-medium md:font-bold">Reduce failed payments</p>
                  <input className="md:h-[23.91px] h-[22.21px] aspect-square" type="checkbox" name="choice2" id="choice2" />
                </label>                
                <label htmlFor="choice3" className="md:w-[383px] md:h-[182px] flex md:bg-white md:rounded-[15px] md:border border-b border-[#E7E9F2] justify-between items-center p-4 md:p-10 md:hover:[box-shadow:_0px_4px_20px_0px_#7D97FF33]">
                  <img className="h-[76px] hidden md:block" src="/hourglass.png" alt="hourglass" />
                  <p className="md:text-[20px] md:leading-[26.04px] leading-[20.83px] font-medium md:font-bold">Reduce failed payments</p>
                  <input className="md:h-[23.91px] h-[22.21px] aspect-square" type="checkbox" name="choice3" id="choice3" />
                </label>                
                <label htmlFor="choice4" className="md:w-[383px] md:h-[182px] flex md:bg-white md:rounded-[15px] md:border border-b border-[#E7E9F2] justify-between items-center p-4 md:p-10 md:hover:[box-shadow:_0px_4px_20px_0px_#7D97FF33]">
                  <img className="h-[76px] hidden md:block" src="/hourglass.png" alt="hourglass" />
                  <p className="md:text-[20px] md:leading-[26.04px] leading-[20.83px] font-medium md:font-bold">Reduce failed payments</p>
                  <input className="md:h-[23.91px] h-[22.21px] aspect-square" type="checkbox" name="choice4" id="choice4" />
                </label>                
                <label htmlFor="choice5" className="md:w-[383px] md:h-[182px] flex md:bg-white md:rounded-[15px] md:border border-b border-[#E7E9F2] justify-between items-center p-4 md:p-10 md:hover:[box-shadow:_0px_4px_20px_0px_#7D97FF33]">
                  <img className="h-[76px] hidden md:block" src="/hourglass.png" alt="hourglass" />
                  <p className="md:text-[20px] md:leading-[26.04px] leading-[20.83px] font-medium md:font-bold">Reduce failed payments</p>
                  <input className="md:h-[23.91px] h-[22.21px] aspect-square" type="checkbox" name="choice5" id="choice5" />
                </label>                
                <label htmlFor="choice6" className="md:w-[383px] md:h-[182px] flex md:bg-white md:rounded-[15px] md:border border-b border-[#E7E9F2] justify-between items-center p-4 md:p-10 md:hover:[box-shadow:_0px_4px_20px_0px_#7D97FF33]">
                  <img className="h-[76px] hidden md:block" src="/hourglass.png" alt="hourglass" />
                  <p className="md:text-[20px] md:leading-[26.04px] leading-[20.83px] font-medium md:font-bold">Reduce failed payments</p>
                  <input className="md:h-[23.91px] h-[22.21px] aspect-square" type="checkbox" name="choice6" id="choice6" />
                </label>                
              </div>
              <button disabled className="hidden md:flex py-[15px] text-[18px] leading-[23.44px] px-10 text-white rounded-full my-5 font-bold self-center">
                Continue
              </button>
              <div className="border-t border-[#E7E9F2] px-4 md:mt-[60px] md:px-8 pt-[40px] md:pt-[100px] md:pb-[40px] flex flex-col gap-8 text-[14px] leading-[18.23px] md:text-[18px] md:leading-[23.44px]">
                <p className="">Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not limited to JP Morgan, Barclays and Credit Suisse.</p>
                <div className="flex flex-wrap gap-10 md:gap-16 ">
                  <p className="font-bold md:order-3">Terms</p>
                  <p className="font-bold md:order-4">Privacy policy</p>
                  <p className="font-bold md:order-1">Need help?</p>
                  <p className="font-bold md:order-5">Sign out and continue later</p>
                  <p className="font-bold md:order-2">Back to dashboard</p>
                </div>
              </div>
              <div className="flex md:hidden bg-[#EEEEF5] p-[20px]">
                <button className="py-[15px] text-[18px] leading-[23.44px] px-10 text-white rounded-full font-bold w-full">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Onboarding