export default function SignIn() {
  return (
    <div className="flex flex-col h-screen w-1/2">
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <p className="text-2xl font-semibold">Get started with Studio</p>
        <p>
          Forget the old rules. Now, you can get design done
          <br />
          Faster, Reliably, In Budget and At Scale
        </p>
        <form action="">
          <div className="flex flex-grow gap-4 py-6 flex-col text-neutral-400">
            <div className="flex flex-row gap-2">
              <div className="flex-col flex items-start">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="border-neutral-400 border-[1px] rounded p-2"
                  placeholder="First Name"
                />
              </div>
              <div className="flex-col flex items-start">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="border-neutral-400 border-[1px] rounded p-2"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-neutral-400 border-[1px] rounded p-2 w-full"
              />
            </div>
            <button className="w-full bg-neutral-200 p-2 rounded-md text-neutral-500 font-semibold hover:bg-lime-200 hover:text-black transition-all">
              Create Account
            </button>
            <p className="text-xs">
              By clicking create account you&apos;re agreeing to our
              <br />
              <span>
                <a href="" className="underline">Terms and Conditions</a>
              </span>
              , and&nbsp;
              <span>
                <a href="" className="underline">Privacy Policy</a>
              </span>
            </p>
          </div>
        </form>
      </div>
      <footer className="text-center p-4">
        <p>Copyright DGS &copy; 2024. All Rights Reserved</p>
      </footer>
    </div>
  );
}
