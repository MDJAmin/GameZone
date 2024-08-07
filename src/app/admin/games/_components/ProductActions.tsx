"use client";

import { DropdownMenu, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useTransition } from "react";
import {
  deleteProduct,
  toggleProductAvailability,
} from "../../_actions/products";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

export function ActiveToggleDropdownItem({
  id,
  isAvailableForPurchase,
}: {
  id: string;
  isAvailableForPurchase: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      className="flex gap-1 cursor-pointer ps-2"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailability(id, !isAvailableForPurchase);
          router.refresh();
        });
      }}
    >
      {isAvailableForPurchase ? "Deactivate" : "activate"}
      <VscActivateBreakpoints className="relative top-1" />
    </DropdownMenuItem>
  );
}
export function DeleteDropdownItem({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      className="Delete-drop-down text-red-600 cursor-pointer ps-2 pt-1 flex gap-1"
      disabled={disabled || isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteProduct(id);
          router.refresh();
        });
      }}
    >
      Delete
      <RiDeleteBin5Line className="relative top-1" />
    </DropdownMenuItem>
  );
}
