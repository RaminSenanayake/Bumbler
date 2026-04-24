import { Avatar, AvatarImage } from './ui/avatar'
import logo from "@/assets/logo mini.png";
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '@/theme-provider';

function Toolbar() {

    const { theme, setTheme } = useTheme();

    return (
        <div className='flex items-center justify-between p-3 border-b'>
            <div className='flex gap-2'>
                <Avatar>
                    <AvatarImage src={logo} />
                </Avatar>
                <h1 className='text-3xl font-heading font-semibold'>
                    Bumbler
                </h1>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
        </div>
    )
}

export default Toolbar