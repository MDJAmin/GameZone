import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaMedium } from "react-icons/fa";
export function CardWithForm() {
  return (
    <Card className="sm:w-[350px] mx-auto relative bottom-0 right-0 my-5 z-10 lg:absolute  lg:right-10  lg:bottom-10 ">
      <CardHeader className="invisible sm:visible">
        <CardTitle>Enter your comment</CardTitle>
        <CardDescription>Help us to get better by one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="mb-10 sm:mb-0">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Enter Your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">comment</Label>
              <Input id="name" placeholder="Your comment" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem
                    className="flex flex-row justify-between"
                    value="next"
                  >
                    <p className="cursor-pointer inline">
                      My experience was Good
                    </p>{" "}
                    <AiTwotoneLike className="inline" />
                  </SelectItem>
                  <SelectItem value="sveltekit">
                    <p className="cursor-pointer inline me-1">
                      My experience was Medium
                    </p>
                    <FaMedium className="inline" />
                  </SelectItem>
                  <SelectItem className="flex justify-between" value="astro">
                    <p className="cursor-pointer inline">
                      My experience was Bad{" "}
                    </p>
                    <AiTwotoneDislike className="inline" />
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button className="bg-green-500">Send</Button>
      </CardFooter>
    </Card>
  );
}
