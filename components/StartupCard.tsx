import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const StartupCard = ({
  item: {
    _id,
    author: { name, _id: authorId },
    views,
    _createdAt,
    title,
    description,
    image,
    category,
  },
}) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span>{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="startup-card_title">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-semibold text-xl">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            className="rounded-full"
            src={`https://images.pexels.com/photos/3784435/pexels-photo-3784435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            alt="profile"
            width={80}
            height={80}
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="" className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/query=${category.toLowerCase()}`}>
          <p>{category}</p>
        </Link>
        <Button variant={"default"} className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
