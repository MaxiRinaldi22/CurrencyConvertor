import logo from "../assets/images/logo.png"
function Header() {

    return (
        <section className="flex w-full items-center justify-around bg-[#00214A] mb-10 shadow-md  shadow-[#00152e]">
            <img src={logo} alt="" className="w-20 "/>
            <div className="flex gap-5">
                <button className="text-white font-[600]">Sign in</button>
            <button className="text-white font-[600] bg-[#00D37E] px-3 py-1 rounded-lg">Register</button>
            </div>
        </section>
    )

}

export default Header