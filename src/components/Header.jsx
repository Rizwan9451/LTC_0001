import ethlogo from '../assets/ethlogo.png'
import { connectWallet } from '../Adulam'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <img className="w-8 cursor-pointer" src={ethlogo} alt="Adulam Logo" />
        <span className="text-white text-2xl ml-2">Mintopia</span>
      </div>

      

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white 
          bg-[#35ad79] hover:bg-[#296bb7] md:text-xs p-2
        rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
        rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
