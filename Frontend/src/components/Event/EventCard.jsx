import React from "react";
import dateIcon from "../../assets/images/icons/icon-date.svg";
import locationIcon from "../../assets/images/icons/icon-location.svg";
import categoryIcon from "../../assets/images/icons/icon-category.svg";
import priceIcon from "../../assets/images/icons/icon-price.svg";
import Typography from "../utility/Typography/Typography";
import ButtonPrimary from "../utility/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import getImageURL from "../../utils/getImages-utils";

const EventCard = ({
  id,
  eventName,
  eventImg,
  eventDescription,
  date,
  location,
  category,
  hostName,
  hostRole,
  hostImage,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${id}`);
  };
  return (
    <div className="font-inter rounded-lg p-4 border border-[#C8C7FF] bg-[#FCFCFD] text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2 ">
      <img src={getImageURL(eventImg)} alt="event image" />
      <div className="max-h-8 overflow-hidden text-gray-900 dark:text-white">
      <Typography tag={"h2"} weight={"semiBold"} size={"lg"} type={"text"} >
          {eventName}
        </Typography>
      </div>
      <div className="flex flex-col justify-end gap-2 flex-grow">
        <div className="flex flex-col gap-2 ">
        <div className="flex flex-row flex-wrap items-center gap-2">
            <div className="flex flex-row items-center  gap-px">
              <img src={dateIcon} alt="date icon" />
              <Typography
                tag={"p"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#667085"
              >
                {date}
              </Typography>
            </div>
            <div className="flex flex-row items-center  gap-px">
              <img src={locationIcon} alt="location icon" />
              <Typography
                tag={"p"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#667085"
              >
                {location}
              </Typography>
            </div>
            <div className="flex flex-row items-center  gap-px">
              <img src={categoryIcon} alt="category icon" />
              <Typography
                tag={"p"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#667085"
              >
                {category}
              </Typography>
            </div>
          </div>
          <div className="max-h-16 overflow-hidden">
          <Typography
            tag={"p"}
            weight={"regular"}
            size={"sm"}
            type={"text"}
            color="#667085"
          >
            {eventDescription}
          </Typography>...
          </div>
          <div className="flex flex-row gap-2">
            <img src={priceIcon} alt="price icon" />
            <Typography
              tag={"p"}
              weight={"medium"}
              size={"xs"}
              type={"text"}
              color="#4b5563"
            >
              Prices Included
            </Typography>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center gap-y-2">
          <div className="flex flex-row items-center gap-2">
            <img
              src={getImageURL(hostImage)}
              alt="host"
              className="rounded-full w-10 h-10"
            />
            <div>
              <Typography
                tag={"h3"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#4b5563"
              >
                {hostName}
              </Typography>
              <Typography
                tag={"p"}
                weight={"normal"}
                size={"xs"}
                type={"text"}
                color="#667085"
              >
                {hostRole}
              </Typography>
            </div>
          </div>
          <ButtonPrimary size={"sm"} onClick={handleClick}>
            Register Now
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
