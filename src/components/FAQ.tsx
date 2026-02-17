"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[760px] mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-border">
          <button
            className="w-full flex items-center justify-between gap-4 py-6 text-left"
            onClick={() => toggleItem(index)}
          >
            <span className="text-[17px] font-semibold text-blue-dark leading-[1.4] hover:text-blue transition-colors">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full bg-bg flex items-center justify-center text-blue text-base transition-all duration-300 ${
                openIndex === index ? "bg-blue text-white rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-350 ${
              openIndex === index ? "max-h-[400px]" : "max-h-0"
            }`}
          >
            <div className="pb-6 text-[15px] text-muted leading-[1.7]">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
