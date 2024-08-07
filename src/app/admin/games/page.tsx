import { Button } from "@/components/ui/button";
import PageHeader from "../_components/PageHeader";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { useFormStatus } from "react-dom";
import db from "@/db/db";
import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuDownload } from "react-icons/lu";
import { FiEdit3 } from "react-icons/fi";
import {
  ActiveToggleDropdownItem,
  DeleteDropdownItem,
} from "./_components/ProductActions";
// import "./style.madule.css"
export default function games() {
  return (
    <>
      <div className=" px-[2rem] flex text-center flex-col  justify-center sm:flex sm:flex-row sm:justify-between ">
        <div className="mt-44">
          <PageHeader>Games</PageHeader>
        </div>

        <Button className="mt-44" asChild>
          <Link className="addnew bg-slate-800" href="/admin/games/new">
            Add New Game
          </Link>
        </Button>
      </div>
      <GamesTabel />
    </>
  );
}
async function GamesTabel() {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      _count: { select: { orders: true } },
    },
    orderBy: { name: "asc" },
  });

  if (products.length === 0) return <p>You have no game!</p>;
  return (
    <div className="px-[2rem]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-0">
              <span className="sr-only">Available For Purchase</span>
            </TableHead>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Price</TableHead>
            <TableHead className="text-white">Orders</TableHead>
            <TableHead className="w-0">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                {product.isAvailableForPurchase ? (
                  <div className="flex items-center">
                    <CheckCircle2 className="text-green-400" />
                    <span className="sr-only">Available</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <XCircle className="text-[#d80f45]" />
                    <span className="sr-only">Unavailable</span>
                  </div>
                )}
              </TableCell>
              <TableCell className="text-white">{product.name}</TableCell>
              <TableCell className="text-white">
                {formatCurrency(product.priceInCents / 100)}
              </TableCell>
              <TableCell className="text-white">
                {formatNumber(product._count.orders)}
              </TableCell>
              <TableCell className="text-white">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical />
                    <span className="sr-only">Actions</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <a
                        className="cursor-pointer flex gap-1"
                        download
                        href={`/admin/games/${product.id}/download`}
                      >
                        Download <LuDownload />
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        className="cursor-pointer flex gap-1"
                        href={`/admin/games/${product.id}/edit`}
                      >
                        Edit <FiEdit3 />
                      </Link>
                    </DropdownMenuItem>
                    <ActiveToggleDropdownItem
                      id={product.id}
                      isAvailableForPurchase={product.isAvailableForPurchase}
                    />
                    <DeleteDropdownItem
                      id={product.id}
                      disabled={product._count.orders > 0}
                    />
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
