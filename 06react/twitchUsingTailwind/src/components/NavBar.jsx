import TwitchLogo from "./TwitchLogo";

export default function NavBar() {
  return (
    <nav className="col-start-1 col-end-3 grid grid-cols-[20%_1fr_20%] border-b-[1px] border-[#131111] bg-[#1b1b1d]" >
      <section className=" col-start-1 col-end-2 grid grid-cols-[20%_10%_1fr] m-3">
        <TwitchLogo className=" h-7 w-7 p-0" />
        <p className="text-[#bf94ff]">Explorar</p>
        <button>M</button>
      </section>

      <section>
        <input type="text" placeholder="Buscar" />
      </section>

      <section>
        <button>Amazon</button>
        <button>Login</button>
        <button>Sign In</button>
        <button>Profile</button>
      </section>
    </nav>
  );
}
