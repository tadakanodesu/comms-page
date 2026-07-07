import Guidelines from "./components/Guidelines";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Pricing from "./components/Pricing";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-mist-50">
        <div className="flex flex-col">
          <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 space-y-18">
            {/* HEADER */}
            <Header />

            {/* DIVIDER */}
            <div className="border-t border-gray-300" />

            {/* NOTES */}
            <Notes />

            {/* DIVIDER */}
            <div className="border-t border-gray-300" />

            {/* GUIDELINES */}
            <Guidelines />

            {/* DIVIDER */}
            <div className="border-t border-gray-300" />

            {/* PRICING */}
            <Pricing />

            {/* DIVIDER */}
            <div className="border-t border-gray-300" />

            {/* PAYMENT */}
            <Payment />

            {/* FOOTER */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
