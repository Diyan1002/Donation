import React, { useState } from "react";
import handImage from "../assets/hand.png";

const DonationForm = () => {
  const [step, setStep] = useState(1);

  const [amount, setAmount] = useState("");
  const [donationFor, setDonationFor] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [terms, setTerms] = useState(true);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [walletMobile, setWalletMobile] = useState("");

  const donationOptions = [
    "Education",
    "Fitra",
    "Food",
    "Social Welfare",
    "Shelter",
    "Zakat",
    "Health",
    "Seher O Iftar",
  ];

  const formatAmount = Number(amount || 0).toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const StepBar = () => (
    <div className="flex justify-center mb-6">
      <div className="flex flex-wrap sm:flex-nowrap h-auto sm:h-[34px] text-[13px] sm:text-[15px]">

        {["1. Amount", "2. Details", "3. Payment"].map((item, index) => {
          const active = step === index + 1 || (step > 3 && index === 2);

          return (
            <div
              key={index}
              className={`relative w-full sm:w-[145px] flex items-center justify-center border border-[#123d89] py-2 sm:py-0 ${
                active
                  ? "bg-gradient-to-r from-[#0d3e9c] to-[#39206d] text-white"
                  : "bg-white text-[#1c2f5a]"
              }`}
            >
              {item}

              {index < 2 && (
                <>
                  <span className="hidden sm:block absolute -right-[18px] top-[-1px] w-0 h-0 border-t-[18px] border-b-[18px] border-l-[18px] border-t-transparent border-b-transparent border-l-[#123d89] z-20"></span>
                  <span
                    className={`hidden sm:block absolute -right-[16px] top-0 w-0 h-0 border-t-[17px] border-b-[17px] border-l-[17px] border-t-transparent border-b-transparent z-30 ${
                      active ? "border-l-[#39206d]" : "border-l-white"
                    }`}
                  ></span>
                </>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-start font-sans py-4 px-3">

      <section className="relative w-full max-w-[950px] bg-white rounded-[18px] shadow-[0_4px_18px_rgba(0,0,0,0.28)] overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-30 hidden md:block"
          style={{ backgroundImage: `url(${handImage})` }}
        ></div>

        <div className="relative z-10 px-4 sm:px-8 py-6 sm:py-7">

          {/* ================= STEP 1 ================= */}
          {step === 1 && (
            <>
              <h1 className="text-center text-[16px] sm:text-[18px] mb-5">
                <span className="text-[#050b4f] text-[22px] sm:text-[25px] font-extrabold">
                  You
                </span>{" "}
                keep Your Donations Money Alive by giving CHARITY and ZAKAT
              </h1>

              <StepBar />

              <div className="text-center">
                <label className="block text-[14px] sm:text-[16px] font-bold mb-3">
                  Enter Your Contribution Amount (PKR)
                </label>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full sm:w-[356px] h-[40px] border border-black rounded-[4px] px-3 text-center shadow-md outline-none"
                />
              </div>

              <h2 className="text-center font-bold mt-4 mb-2">
                Donations For
              </h2>

              {/* GRID FIX */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {donationOptions.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setDonationFor(item)}
                    className={`h-[32px] text-[13px] sm:text-[15px] ${
                      donationFor === item
                        ? "bg-[#39206d] text-white"
                        : "bg-[#d1d1d1] text-[#222]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex justify-center sm:justify-end mt-4">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#39206d] text-white px-6 sm:px-8 py-2 rounded font-bold"
                >
                  Next »
                </button>
              </div>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {step === 2 && (
            <>
              <StepBar />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-7">

                <input
                  name="name"
                  placeholder="First Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-[45px] border border-black rounded px-3"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full h-[45px] border border-black rounded px-3"
                />

                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-[45px] border border-black rounded px-3"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="bg-[#39206d] text-white px-6 py-2 rounded font-bold"
                >
                  « Back
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="bg-[#39206d] text-white px-6 py-2 rounded font-bold"
                >
                  Next »
                </button>
              </div>
            </>
          )}

          {/* ================= STEP 3 ================= */}
          {step === 3 && (
            <>
              <StepBar />

              <h1 className="text-center text-[22px] sm:text-[28px] font-bold mb-4">
                Your Donation
              </h1>

              <div className="border border-[#123d89] flex justify-between px-3 py-2 mb-6">
                <span className="font-bold">Donation Amount</span>
                <span className="font-bold">Rs {formatAmount}</span>
              </div>

              <div className="border-2 border-[#123d89] p-3">

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                  />
                  I agree to terms and conditions
                </label>

                <button
                  onClick={() => setStep(4)}
                  className="w-full mt-4 bg-[#182c6f] text-white py-3 rounded font-bold"
                >
                  Donate Now
                </button>

              </div>
            </>
          )}

        </div>
      </section>
    </div>
  );
};

export default DonationForm;