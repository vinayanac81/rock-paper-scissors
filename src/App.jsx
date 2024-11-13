import { useState } from "react";
import "./App.css";
import img3 from "./images/image3.jpg"
import img2 from "./images/image2.jpg"
import img1 from "./images/image1.jpg"
import toast, { Toaster } from "react-hot-toast";
function App() {
  const [userWin, setuserWin] = useState(false);
  const [userPoint, setuserPoint] = useState(0);
  const [computerPoint, setcomputerPoint] = useState(0);
  const [resultSee, setresultSee] = useState(false);
  const [bothSame, setbothSame] = useState(false);
  const [userImage, setuserImage] = useState("");
  const [computerImage, setcomputerImage] = useState("");
  const [pickedOne, setpickedOne] = useState(false);
  const callSetTimeout = () => {
    setTimeout(() => {
      setpickedOne(false);
      setresultSee(false);
    }, 2000);
  };
  const handleClick = (value) => {
    let userClicked = value;
    let computerClicked = Math.floor(Math.random() * 3) + 1;
    if (userClicked === computerClicked) {
      setbothSame(true);
      setcomputerImage(`image${computerClicked}`);
      setuserImage(`image${userClicked}`);
      setuserWin(false);
      setpickedOne(true);
      setresultSee(true);
      toast.success("USER AND COMPUTER PICKED SAME");
      callSetTimeout();
    } else if (userClicked === 1 && computerClicked === 2) {
      setcomputerPoint(computerPoint + 1);
      setcomputerImage(`img${computerClicked}`);
      setuserImage(`img${userClicked}`);
      setuserWin(false);
      setbothSame(false);
      setpickedOne(true);
      setresultSee(true);
      toast.success("COMPUTER WIN");
      callSetTimeout();
    } else if (userClicked === 2 && computerClicked === 3) {
      setcomputerPoint(computerPoint + 1);
      setcomputerImage(`image${computerClicked}`);
      setuserImage(`image${userClicked}`);
      setuserWin(false);
      setbothSame(false);
      setpickedOne(true);
      setresultSee(true);
      toast.success("COMPUTER WIN");
      callSetTimeout();
    } else if (userClicked === 3 && computerClicked === 1) {
      setcomputerPoint(computerPoint + 1);
      setcomputerImage(`image${computerClicked}`);
      setuserImage(`image${userClicked}`);
      setuserWin(false);
      setbothSame(false);
      setpickedOne(true);
      setresultSee(true);
      toast.success("COMPUTER WIN");
      callSetTimeout();
    } else if (computerClicked === 1 && userClicked === 2) {
      setuserPoint(userPoint + 1);
      setcomputerImage(`img${computerClicked}`);
      setuserImage(`imag${userClicked}`);
      setuserWin(true);
      setbothSame(false);
      setpickedOne(true);
      setresultSee(true);
      toast.success("USER WIN");
      callSetTimeout();
    } else if (computerClicked === 2 && userClicked === 3) {
      setuserPoint(userPoint + 1);
      setcomputerImage(`image${computerClicked}`);
      setuserImage(`image${userClicked}`);
      setuserWin(true);
      setbothSame(false);
      setpickedOne(true);
      setresultSee(true);
      toast.success("USER WIN");
      callSetTimeout();
    } else {
      setuserPoint(userPoint + 1);
      setcomputerImage(`image${computerClicked}`);
      setuserImage(`image${userClicked}`);
      setuserWin(true);
      setbothSame(false);
      setpickedOne(true);
      setresultSee(true);
      toast.success("USER WIN");
      callSetTimeout();
    }
  };
  return (
    <>
      <Toaster />
      <div className=" h-screen bg-slate-900">
        <div className="">
          <h1 className="text-red-600 underline text-4xl p-4 text-center p font-mono tracking-wider">
            ROCK PAPER SCISSORS
          </h1>
        </div>
        <div className="flex w-full  justify-center">
          {resultSee && (
            <>
              <div className="w-1/4 px-20 pt-10 text-center">
                <h2 className="text-white border">USER SELECTED</h2>
                <div className="flex justify-center pt-5">
                  <img
                    className="w-20"
                    src={`../public/images/${userImage}.jpg`}
                    alt=""
                  />
                </div>
                <div className="w-full flex justify-center text-center">
                  <div className="w-16 pt-6">
                    {bothSame ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
                        </svg>
                      </>
                    ) : userWin ? (
                      <>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" />
                        </svg>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex w-1/2  justify-center">
            <div className=" w-1/3">
              <img
                onClick={() => handleClick(1)}
                src={img1}
                className="h-80 rounded cursor-pointer"
                alt=""
              />
            </div>
            <div className=" w-1/3  ">
              <img
                onClick={() => handleClick(2)}
                src={img2}
                className="h-80 rounded cursor-pointer"
                alt=""
              />{" "}
            </div>
            <div className="  w-1/3">
              <img
                onClick={() => handleClick(3)}
                src={img3}
                className="h-80 rounded cursor-pointer"
                alt=""
              />
            </div>
          </div>
          {resultSee && (
            <>
              <div className="w-1/4 px-20 pt-10 text-center">
                <h2 className="text-white border">COMPUTER SELECTED</h2>
                <div className="flex justify-center pt-5">
                  <img
                    className="w-20"
                    src={`../public/images/${computerImage}.jpg`}
                    alt=""
                  />
                </div>
                <div className="w-full flex justify-center text-center">
                  <div className="w-16 pt-6">
                    {bothSame ? (
                      <>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
                        </svg>
                      </>
                    ) : userWin ? (
                      <>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
                        </svg>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-full pt-6 flex justify-center">
          <div className="w-1/2 mr-6 flex   bg-black border">
            <div className="w-1/2">
              <div className="w-full border py-4 px-10 text-center text-white ">
                USER
              </div>
              <div className="w-full flex items-center justify-center border h-28 py-4 px-10 text-center text-white ">
                <h1 className="text-6xl">{userPoint}</h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full border py-4 px-10 text-center text-white ">
                COMPUTER
              </div>
              <div className="w-full h-28 flex items-center justify-center border py-4 px-10 text-center text-white ">
                <h1 className="text-6xl">{computerPoint}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-1/2 mr-6 flex justify-center p-4 text-white   bg-black border">
            <p className="text-center uppercase">
              {pickedOne === false
                ? "pick anyone from top"
                : bothSame
                ? "USER AND computer picked same"
                : userWin
                ? "USER WIN"
                : userWin === false
                ? "COMputer win"
                : "pick anyone from top"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* <div className="flex justify-center pb-4">
          <button className="bg-red-500 rounded text-white px-4 py-2">
            NEW GAME
          </button>
        </div> */
}
