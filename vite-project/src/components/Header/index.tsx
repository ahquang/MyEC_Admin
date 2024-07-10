import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <div className="bg-brown text-white flex justify-between  w-full">
      <div className="flex w-1/2">
        <div className="py-2.5 px-5 font-logo font-semibold text-2xl flex items-center cursor-pointer">
          MyEC
        </div>
        <HeaderItem title="Dashboard" />
        <HeaderItem title="Resoure Management" />
        <HeaderItem title="Learning Activities" />
      </div>
      <div className="flex w1/2">
        <div className="flex items-center cursor-pointer">
            <img className='rounded-full w-8 h-8 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUem1ykMgZrm7P2GNRhID1fnipTWf1kQ1dA&s" alt="" />
            <span className="mx-2 text-sm">Chloe</span>
        </div>
        <HeaderItem title="Logout"/>
      </div>
    </div>
  );
};

export default Header;
