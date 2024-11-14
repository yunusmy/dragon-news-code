import moment from 'moment';
import Logo from '../assets/logo.png';

const Header = () => {
    return (
        <>
         <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <div className='logo'>
            <img className='w-[300px]' src={Logo}/>
            </div>
            <h2 className='text-balck-300 font-poppins'>Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
        
        </>
    );
};

export default Header;