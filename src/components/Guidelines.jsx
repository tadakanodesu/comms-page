const Guidelines = () => {
  return (
    <>
      <section className="space-y-12">
        <h6 className="tracking-widest text-blue-900 font-normal">
          RECORDING GUIDELINES
        </h6>
        <div className="space-y-4">
          {[
            [
              "Send RAW vocals",
              "DO NOT put ANY KIND of effects on your vocals, i will handle the processing.",
            ],
            ["Vocal export", "Export the vocal as .wav [ 24-bit / 44.1 kHz ]."],
            [
              "Gain staging",
              "Re-record if there are clippings, loud noise, or mic pops. It can't be repaired.",
            ],
            [
              "Proper layering",
              "Separate and name the layers properly [ main, overlap, harmo, adlib ].",
            ],
            [
              "Vocal timing",
              "Roughly time the vocals to the instrumental, DO NOT separate it per lines/takes",
            ],
            [
              "Instrumental",
              "Send the same instrumental you recorded to. Don't send a different arrangement.",
            ],
            [
              "Reference track",
              "Link or attach a reference that helps me understand the direction we are going for.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="grid grid-cols-[140px_1fr] gap-6">
              <p className="text-sm  text-gray-400 pt-0.5 leading-relaxed">
                {title}
              </p>
              <p className="text-sm  text-mist-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Guidelines;
