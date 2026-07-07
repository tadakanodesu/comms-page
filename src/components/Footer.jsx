const Footer = () => {
  return (
    <>
      <div>
        <footer className="pt-4 border-t border-gray-300 flex justify-between text-gray-500">
          <p className="text-[12px]">
            By commissioning, you agree to all terms above.
          </p>
          <p
            className="text-[10px] "
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Last Updated - July 2026
          </p>
        </footer>
      </div>
    </>
  );
};
export default Footer;
