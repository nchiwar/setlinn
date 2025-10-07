import logo from "@images/logo.png";

function Logo() {
  return (
    <div className="w-[147px] h-[40px]">
      <img src={logo} alt="Logo" className="object-contain w-full h-full" />
    </div>
  );
}

export default Logo;
