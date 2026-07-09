import { Fragment } from "react";
import { priceHead } from "../constants/";
import { priceIndo } from "../constants/";
import { useState } from "react";

const Pricing = () => {
  const [currency, setCurrency] = useState("USD");

  return (
    <>
      <section className="space-y-8 ">
        <div className="flex items-center justify-between">
          <h6 className="tracking-widest text-blue-900 font-normal">PRICING</h6>
          <button
            onClick={() => setCurrency(currency === "USD" ? "IDR" : "USD")}
            className="text-[10px] tracking-widest text-blue-900 border border-blue-900 rounded px-2 py-1 hover:bg-blue-50 transition"
          >
            USD | IDR
          </button>
        </div>
        <div className="grid grid-cols-[4fr_1fr_1fr] mt-12 gap-4 pb-2 border-b-2 border-gray-400">
          {priceHead.map((h) => (
            <p
              key={h}
              className="text-[12px] tracking-widest uppercase text-gray-800 text-center first:text-left last:text-right"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {h}
            </p>
          ))}
        </div>

        <div
          className="grid grid-cols-[4fr_1fr_1fr] gap-8 pb-10 border-b border-gray-300 text-[14px] tracking-wider text-gray-800"
          style={{ fontFamily: "Inter" }}
        >
          {priceIndo.map((value, index) => (
            <Fragment key={index}>
              <div className="flex flex-col">
                <p className="text-left">{value.service}</p>
                <p className="text-left text-gray-400">{value.include}</p>
              </div>
              <p className="pl-3 text-center text-gray-500">
                {currency === "USD" ? value.priceUsd : value.priceIdr}
              </p>
              <p className="text-right text-gray-500">
                {currency === "USD" ? value.addUsd : value.addIdr}
              </p>
            </Fragment>
          ))}
        </div>

        <ul className="list-disc ml-5 mt-12 text-sm text-gray-500 leading-relaxed space-y-1">
          <li>
            6 track limit per vocalist [ excluding overlap ], additional track
            will be charge <span className="text-blue-900">+$5</span> per track.
          </li>
          <li>
            For more than 1 singers, how you distribute the track count between
            vocalists is up to you.
          </li>
          <li>
            Turnover time is from{" "}
            <span className="font-semibold">1 to 3 weeks</span>, depending on my
            schedule and the project's track count.
          </li>
          <li>
            Rush orders (24–48 hr) available for an additional{" "}
            <span className="text-blue-900">+100% base price</span>. Message
            first to confirm availability.
          </li>
        </ul>
      </section>
    </>
  );
};
export default Pricing;
