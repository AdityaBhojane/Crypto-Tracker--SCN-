import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useProductStore } from "@/zustandStore/store";
import { ModeToggle } from "../ModeToggle/ModeToogle";

export function NavigationBar() {
  const setCurrency = useProductStore((state) => state.setCurrency);

  return (
    <div className="flex w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        {/* Other Navigation Content */}
        <nav className="flex-col w-[50%] gap-6 text-xl font-bold md:flex md:flex-row md:items-center md:gap-5 md:text-md lg:gap-6">
          <h2 className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer">
            Crypto Tracker <span className="text-sm">SCN</span>
          </h2>
        </nav>

        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Change Currency</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={()=>setCurrency('INR')}>INR</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>setCurrency('USD')}>USD</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>setCurrency('EUR')}>EURO</DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle/>
        </div>
      </header>
    </div>
  );
}
