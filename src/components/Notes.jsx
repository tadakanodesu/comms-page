const Notes = () => {
  return (
    <>
      <section className="space-y-12">
        <h6 className="tracking-widest text-blue-900 font-normal">
          COMMISSION NOTES
        </h6>
        <div className="space-y-4">
          {[
            [
              "Vocal work only",
              "I only do vocal mix and master. I don't do music production.",
            ],
            [
              "Modifications",
              "I don't allow any modifications to my work, whether the wip, or the final product.",
            ],
            [
              "Commercial use",
              "DM first, extra charge from 50% to 100% of the base price.",
            ],
            ["Credit", "Credit me as Kano with my yt and/or twitter link."],
            [
              "Revisions",
              "I have no limit for revisions as long as im capable of doing it.",
            ],
            [
              "Portfolio",
              "Clients works will be used as my portfolio, unless discussed otherwise.",
            ],
            [
              "Refunds",
              "I do not offer refunds, but i will finish the commission.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="grid grid-cols-[140px_1fr] gap-6">
              <p className="text-sm text-gray-400 pt-0.5 leading-relaxed">
                {title}
              </p>
              <p className="text-sm text-mist-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Notes;
