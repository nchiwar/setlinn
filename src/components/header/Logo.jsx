import logo from "@images/logo.png";

function Logo() {
  return (
    <div className="w-[45px] h-[45px] ">
      <img src={logo} alt="Logo" className="object-contain w-full h-full" />
    </div>
  );
}

export default Logo;
