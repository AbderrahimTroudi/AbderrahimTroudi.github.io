"use client";
import React from "react";
import { cn } from "@/utils/cn";

export const PinContainer = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
}) => {
   


    return (
        <div
            className={cn(
                "relative group/pin z-50  cursor-pointer",
                containerClassName
            )}
        >
            <div
                style={{
                    perspective: "1000px",
                }}
                className=" ml-[0.09375rem] mt-4"
            >
                <div
                  
                    className=" left-1/2 p-4 top-1/2  flex justify-start items-start rounded-2xl border border-purple bg-gray-400/20 overflow-hidden"
                >
                    <div className={cn(" relative z-50 ", className)}>{children}</div>
                </div>
            </div>
          
        </div>
    );
};


