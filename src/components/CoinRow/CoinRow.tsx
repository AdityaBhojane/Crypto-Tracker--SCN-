

import { Badge } from "@/components/ui/badge"

import { TableCell, TableRow } from "../ui/table"
import { useProductStore } from "@/zustandStore/store";

interface CoinDataProps {
    name: string;
    image: string;
    price: number;
    lowPrice: number;
    highPrice: number;
  }

function CoinRow({image, name, price, lowPrice, highPrice}:CoinDataProps) {

    const currency = useProductStore((state) => state.currency);

    return (
        <>
            <TableRow>
                <TableCell className="hidden sm:table-cell">
                    <img
                        alt="Product img"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={image}
                        width="64"
                    />
                </TableCell>
                <TableCell className="font-medium">
                    {name}
                </TableCell>

                <TableCell className="hidden md:table-cell">
                    {currency == "USD"? "$":currency== "INR"?  "₹": "€"} {price}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                {currency == "USD"? "$":currency== "INR"?  "₹": "€"} {lowPrice}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                {currency == "USD"? "$":currency== "INR"?  "₹": "€"} {highPrice}
                </TableCell>
                <TableCell >
                    <Badge variant="outline" className="px-5 py-2 cursor-pointer">Show Details</Badge>
                </TableCell>
            </TableRow>

        </>
    )
}

export default CoinRow