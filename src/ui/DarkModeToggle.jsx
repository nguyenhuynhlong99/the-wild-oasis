import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon';
import { useDarkMode } from '../contexts/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <ButtonIcon onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </ButtonIcon>
    </div>
  );
}

export default DarkModeToggle;
