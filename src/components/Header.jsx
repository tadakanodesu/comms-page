import { FiYoutube } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="space-y-12">
        <h6 className="tracking-widest text-blue-900 font-normal">
          COMMISSION • OPEN
        </h6>
        <div className="text-5xl">Vocal Mix & Mastering</div>
        <div className="-mt-5= text-sm tracking-wider leading-normal text-gray-400">
          Hello im{" "}
          <a
            href="https://x.com/tadakanodesu"
            className="text-blue-900 font-normal hover:underline underline-offset-4"
          >
            Kano
          </a>
          , a youtaite and audio engineer for song coverist. I have been doing
          mixes since 2021,
          <br /> with experiences working on various project with different
          genre, from solo to full 19 people chorus.
          <br />
          Confident to bring the best out of your vocal and make your cover
          shine
        </div>
        <a
          href="https://www.youtube.com/playlist?list=PLmmQ1I8l2bS4_W7bOjeMQOrjE1LqB24Ce"
          className="w-25 flex items-center gap-2 text-sm text-blue-800 hover:text-gray-500 hover:underline underline-offset-4 transition-colors"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          <FiYoutube />
          portfolio
        </a>
      </header>
    </>
  );
};
export default Header;
