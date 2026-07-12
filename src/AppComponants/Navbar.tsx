import BeatMusicLogo from "./BeatMusicLogo"
import { Button } from "@/components/ui/button"
import { Bell, House, Search, Users } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Link } from "react-router-dom"
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"

const Navbar = () => {
  return (
  <div className="flex items-center">

    <div className="flex-1 flex justify-start">
      <BeatMusicLogo className="w-8" />
    </div>

    <div className="flex-1 flex justify-center items-center gap-2">
      <Button className="h-9 w-9 rounded-full">
        <House className="h-5 w-5" />
      </Button>

      <InputGroup className="max-w-[450px]">
        <InputGroupInput placeholder="Search..." /> 
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </div>

    <div className="flex-1 flex justify-end items-center gap-6">
      <Link to="/">Explore Premium</Link>

      <Link to="/">Install App</Link>

      <Bell className="cursor-pointer" />

      <Users className="cursor-pointer" />

      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
      </Avatar>
    </div>

  </div>
);
}

export default Navbar
