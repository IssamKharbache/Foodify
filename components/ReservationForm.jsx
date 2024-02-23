"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReservationForm = () => {
  const [date, setDate] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const showToastMessage = (e) => {
    e.preventDefault();
    if (firstName === "" && lastName === "") {
      toast.error("First and last name are required !");
    }
    if (firstName != "" && lastName != "")
      toast.success("Your table is ready !");
  };
  return (
    <form className="flex flex-col gap-y-10">
      <ToastContainer />
      <div className="grid gap-[30px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            />
          </div>
        </div>

        {/*   */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] ">
          {/* CALENDAR */}
          <div>
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"input"}
                  className={cn("w-full  justify-start text-left font-normal")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {/* SELECT  */}
          <div>
            <Label>Person</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="How many people ? " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>People</SelectLabel>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button
        onClick={showToastMessage}
        variant="orange"
        className="uppercase w-full xl:w-auto xl:self-end rounded-none"
      >
        Get a table
      </Button>
    </form>
  );
};

export default ReservationForm;
