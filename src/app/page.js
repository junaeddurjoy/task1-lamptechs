
const page = () => {
  return (
    <div>
      <header>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl font-bold">
              <img className="h-10 w-10" src="https://i.ibb.co/yhmJjmS/Screenshot-2024-07-06-122225-removebg-preview.png"/>
              LampTechs</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="font-bold hover:underline"><a>Home</a></li>
              <li className="font-bold hover:underline"><a>Programs</a></li>
              <li className="font-bold hover:underline"><a>Dashboard</a></li>
              <li className="font-bold hover:underline"><a>Profile</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 p-2 border-2 hover:bg-gray shadow">
                <li><a>Settings</a></li>
                <hr />
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* banner-1 */}
        <div className="bg-[#131313] text-white">
          <p className="text-center pt-20 text-[30px] md:text-[60px] lg:text-[90px] font-bold">now <span className="text-[#FFDA00]">LampTechs</span> will earn <br />cash rewards for <br /> planning <span className="text-[#FFDA00]">Travel.</span></p>
          <p className="text-center py-5 text-[14px] md:text-[24px] lg:text-[32px] font-thin">stay ahead of the money game, plan purchase for less</p>
          <div className="text-center pb-28">
            <button className="btn btn-warning rounded-3xl px-8 bg-[#FFDA00] font-bold hover:underline hover:bg-[#FFDA00]">Marketplace</button>
          </div>
        </div>
        {/* banner-1 */}

        {/* banner-2 */}
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.webbikeworld.com/wp-content/uploads/2021/02/2021-Yamaha-YZ450F-16-1446x813.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-white  lg:-ml-[400px]">
            <p className="pt-20  text-[35px] md:text-[60px] lg:text-[90px] font-bold">
              we take your money <br /> matters seriously.
            </p>
            <p className="pt-3  text-[15px] md:text-[20px] lg:text-[30px] font-bold gap-0">
              so that you don’t get ruined by <br /> inflation or interest.
            </p>
            <p className="py-5 text-[13px] md:text-[15px] lg:text-[20px] font-thin">
              never again save money in banks to buy your dream wedding or <br /> travel to a distant place. never again pay interest on your desires.
            </p>
            <div className="pb-28">
              <button className="btn btn-warning rounded-3xl px-8 bg-white font-bold hover:underline hover:bg-white">Tell me more</button>
            </div>
          </div>
        </div>
        {/* banner-2 */}

        {/* banner-3 start */}
        <div className="bg-black text-white px-10 py-20">
          <p className="text-center text-3xl md:text-4xl lg:text-6xl font-bold">always play for the winning team</p>
          <p className="text-center md:text-xl lg:text-3xl font-thin pt-1 md:pt-2 lg:pt-4 pb-5">get up to 20% discount on your purchasing plans</p>
          {/* grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-5">
            {/* img 1 */}
            <div className="hero h-[18rem] rounded-2xl col-span-2" style={{ backgroundImage: 'url(https://i.ibb.co/0c5vThH/banner-grid-1.jpg)' }}>
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <p className="mb-5 text-2xl text-white drop-shadow-xl pb-16 md:pb-24 lg:pb-24">Discount upto <br /> <span className="text-3xl font-bold">18%</span></p>
                  <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-xl">Travel anywhere</h1>
                </div>
              </div>
            </div>
            {/* img 2 */}
            <div className="hero rounded-2xl col-span-2 row-span-2" style={{ backgroundImage: 'url(https://i.ibb.co/N2Nqqy7/banner-grid-4.jpg)' }}>
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <p className="mb-5 text-2xl text-white drop-shadow-xl pb-96">Discount upto <br /> <span className="text-3xl font-bold">8%</span></p>
                  <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-xl">Dream bike</h1>
                </div>
              </div>
            </div>
            {/* img 3 */}
            <div className="hero h-[18rem] rounded-2xl col-span-2" style={{ backgroundImage: 'url(https://i.ibb.co/ZRsYCC3/banner-grid-5.jpg)' }}>
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <p className="mb-5 text-2xl text-white drop-shadow-xl pb-20">Discount upto <br /> <span className="text-3xl font-bold">10%</span></p>
                  <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-xl">Wedding</h1>
                </div>
              </div>
            </div>
            {/* img 4 */}
            <div className="hero h-[18rem] rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/yy4Qj4w/banner-grid-2.jpg)' }}>
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <p className="mb-5 text-xl text-white drop-shadow-xl pb-28">Discount upto <br /> <span className="text-2xl font-bold">20%</span></p>
                  <h1 className="mb-5 text-4xl font-bold text-white drop-shadow-xl">Gadgets</h1>
                </div>
              </div>
            </div>
            {/* img 5 */}
            <div className="hero h-[18rem] rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/1TptHkZ/banner-grid-3.jpg)' }}>
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <p className="mb-5 text-xl text-white drop-shadow-xl pb-28">Discount upto <br /> <span className="text-2xl font-bold">6%</span></p>
                  <h1 className="mb-5 text-4xl font-bold text-white drop-shadow-xl">Gifts</h1>
                </div>
              </div>
            </div>
            {/* img 6 */}
            <div className="hero h-[18rem] rounded-2xl col-span-2" style={{ backgroundImage: 'url(https://i.ibb.co/60V70wP/banner-grid-6.jpg)' }}>
              <div className="hero-overlay bg-opacity-20"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <p className="mb-5 text-2xl text-white drop-shadow-xl pb-28">Discount upto <br /> <span className="text-3xl font-bold">12%</span></p>
                  <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-xl">Date night</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* banner-3 end */}

        {/* registration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-[url('https://i.ibb.co/pPdpM5V/background-2.jpg')] p-10 bg-opacity-30">
          <div className="text-3xl md:text-5xl lg:text-7xl text-white font-semibold md:p-10 lg:p-10">
            welcome to the club, champ! <span className="text-yellow-400 font-bold hover:underline">register now!!!</span>
          </div>
          <div className="bg-gradient-to-t from-[#222222] to-[#050505] shadow-2xl rounded-2xl ">
            <div className="text-3xl md:text-5xl lg:text-5xl px-10 pt-10 text-white font-semibold">
              verify your details and <span className="text-[#E1E1E161]">claim what’s yours</span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#B3B3B3] pl-10 pt-5">already a member? </p>
              <input type="checkbox" defaultChecked className="checkbox checkbox-warning mt-5" />
            </div>
            <label className="form-control w-full max-w-xs mx-auto pt-10">
              <div className="label">
                <span className="label-text text-white text-xl">Phone Number</span>
              </div>
              <input type="text" placeholder="Email" className="input input-bordered bg-black text-white input-warning w-full max-w-xs" />

              <button className="btn btn-outline btn-warning w-28 rounded-3xl hover:font-bold mx-auto mt-4 mb-10">Send OTP</button>
            </label>
          </div>
        </div>
        {/* registration */}
      </main>

      <footer>
        <footer className="footer footer-center bg-black text-white rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © ${new Date().getFullYear()} - All right reserved by LampTechs</p>
          </aside>
        </footer>
      </footer>
    </div>
  );
};

export default page;