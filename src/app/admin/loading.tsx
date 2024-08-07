import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div
      className="flex justify-center absolute "
      style={{ marginLeft: "680px", marginTop: "350px" }}
    >
      <Loader2 className="size-24 animate-spin text-sec-text" />
    </div>
  );
}
