import { BellRing, Check, Trash, Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useState } from "react";
type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({ className, ...props }: CardProps) {
  const cardScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll("#Card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 50%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  // const [cardTitles, setCardTitles] = useState([

  // ]);

  const handleRemoveCard = (index: number) => {
    setCardTitles(cardTitles.filter((_, i) => i !== index));
  };

  const [cardTitles, setCardTitles] = useState([
    {
      title: "Apex",
      price: "$100",
      description:
        "The Apex is a modern, minimalistic, and highly customizable Game",
    },
    {
      title: "Apex",
      price: "$9.99",
      description:
        "The Apex is a modern, minimalistic, and highly customizable Game",
    },
    {
      title: "Apex",
      price: "$0.13",
      description:
        "The Apex is a modern, minimalistic, and highly customizable Game",
    },
    {
      title: "Apex",
      price: "$0.11",
      description:
        "The Apex is a modern, minimalistic, and highly customizable Game",
    },
    {
      title: "Apex 2",
      price: "$99.99",
      description:
        "The Apex is a modern, minimalistic, and highly customizable Game",
    },
    {
      title: "Apex 2",
      price: "$9.99",
      description:
        "The Apex is a modern, minimalistic, and highly customizable Game",
    },
  ]);

  const [sortOrder, setSortOrder] = useState("desc"); // default to highest to lowest

  const handleSort = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  const sortedCardTitles = cardTitles.sort((a, b) => {
    if (sortOrder === "desc") {
      return (
        parseFloat(b.price.replace("$", "")) -
        parseFloat(a.price.replace("$", ""))
      );
    } else {
      return (
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
      );
    }
  });
  return (
    <div className=" mt-44 relative flex flex-wrap justify-center md:justify-between">
      <Button className="absolute -top-10" onClick={handleSort}>
        Sort by Price:{" "}
        {sortOrder === "desc" ? "Highest to Lowest" : "Lowest to Highest"}
      </Button>
      {sortedCardTitles.map((title, index) => (
        <Card
          ref={cardScrollRef}
          id="Card"
          className={cn("w-[380px]", className)}
          {...props}
          key={index}
        >
          <CardHeader>
            <CardTitle>{title.title}</CardTitle>
            <CardDescription>{title.description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">{title.price}</CardContent>
          <CardFooter>
            <Button
              className="w-full bg-slate-700"
              onClick={() => handleRemoveCard(index)}
            >
              {" "}
              <Trash2 className="text-red-600 relative right-1 pb-[2px] " />{" "}
              Remove this product
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
