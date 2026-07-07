const Pricing = () => {
  return (
    <>
      <section className="space-y-8">
        <h6 className="tracking-widest text-[10px] text-blue-900 font-normal">
          PAYMENT
        </h6>
        <div className="space-y-8">
          {/* USD */}
          <div className="space-y-2">
            <h6 className="text-[10px] tracking-[0.18em]  text-gray-500">
              INTERNATIONAL · USD
            </h6>
            <p className="text-sm text-gray-700">PayPal</p>
          </div>

          {/* IDR */}
          <div className="space-y-2">
            <h6 className="text-[10px] tracking-[0.18em]  text-gray-500">
              LOCAL · IDR
            </h6>
            <p className="text-sm text-gray-700">Keb Hana / Hana Bank</p>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            IDR rate is calculated at the current USD/IDR exchange rate on the
            day of commission. I will confirm the exact amount when we agree to
            proceed.
          </p>
          <div className="border-l-2 border-blue-900 pl-2 space-y-1">
            <p className="text-[13px] text-blue-900 font-medium">
              Full payment is required upfront
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              Work does not begin until payment and all files are received. No
              exceptions.
            </p>
          </div>

          <div className="space-y-2">
            <h6 className="text-[10px] tracking-[0.18em]  text-gray-500">
              HOW TO COMMISSION
            </h6>
            <div className="space-y-2">
              {[
                ["1.", "Read this page in full."],
                [
                  "2.",
                  "Reach out either on my twitter or discord [ @tadakanodesu ]",
                ],
                [
                  "3.",
                  "I confirm availability and you can send the project files.",
                ],
                [
                  "4.",
                  "I will check the files, and inform the payment informations.",
                ],
                ["5.", "Work starts after the payment is done."],
              ].map(([num, content]) => (
                <div className="flex gap-2 text-[12px]  text-gray-600">
                  <div className="leading-relaxed">{num}</div>
                  <div className="leading-relaxed">{content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Pricing;
