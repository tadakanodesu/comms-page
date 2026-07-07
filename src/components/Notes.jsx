const Notes = () => {
  return (
    <>
      <section className="space-y-8">
        <h6 className="tracking-widest text-[10px] text-blue-900 font-normal">
          COMMISSION NOTES
        </h6>
        <div className="space-y-4">
          {[
            [
              "Vocal work only",
              "I only do vocal mix and master. I do not produce instrumentals or write lyrics.",
            ],
            [
              "Modifications",
              "I DO NOT allow any kinds of modifications to my works, whether in progress, or the final product.",
            ],
            [
              "Commercial use",
              "The prices already include commercial uses. Credit me as Kano with the link to my yt and/or twitter.",
            ],
            [
              "Revisions",
              "I have no limit for revisions as long as im capable of doing it.",
            ],
            ["Portfolio", "Clients works will be used as my portfolio."],
            [
              "Refunds",
              "I do not offer refunds, i will finish the commission.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="grid grid-cols-[140px_1fr] gap-6">
              <p className="text-xs text-gray-400 pt-0.5 leading-relaxed">
                {title}
              </p>
              <p className="text-xs text-mist-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Notes;
