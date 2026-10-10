import { FiYoutube } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="space-y-12">
        <h6 className="tracking-widest text-blue-900 font-normal">
          COMMISSION • OPEN
        </h6>
        <div className="text-5xl">Vocal Mix & Mastering</div>
        <div className="-mt-5= text-sm tracking-wider leading-normal text-gray-500">
          Hi~ im{" "}
          <a
            href="https://x.com/tadakanodesu"
            className="text-blue-900 font-normal hover:underline underline-offset-4"
          >
            Kano
          </a>
          , a youtaite and an audio engineer for other{" "}
          <b>youtaites, vtubers, and song coverist</b>. I started doing vocal
          mixes since 2021 and throughout the time, i experienced working on
          various project with different music genre, blending together vocals
          from solo up to a 19 people chorus.
          <br />
          <br />
          <b>
            Confident to bring the best out of your vocal and make your cover
            shine.
          </b>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.youtube.com/playlist?list=PLmmQ1I8l2bS4_W7bOjeMQOrjE1LqB24Ce"
            className="w-25 flex items-center gap-2 text-sm text-blue-800 hover:text-gray-500 hover:underline underline-offset-4 transition-colors"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <FiYoutube />
            portfolio
          </a>
          <p className="text-gray-500 text-sm">[ check out my works ]</p>
        </div>
      </header>
    </>
  );
};
export default Header;
