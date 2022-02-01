import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Grid, Paper } from "@material-ui/core";
import useStyles from "./styles";
import CheckboxSelect from "../../components/SelectComponent/CheckboxSelect";
import CategoryCheckbox from "../../components/SelectComponent/CategoryCheckbox";
import ProfilePaper from "../../components/PaperComponent/ProfilePaper";
import AskQuestionPaper from "../../components/PaperComponent/AskQuestionPaper";
import { askQuestion } from "../../services/PostServices";
import Button from "../../components/Button/Button";
import pics from "../../assets/image/question.png";
import img from "../../assets/image/img.png";
import more from "../../assets/image/more.png";
import redo from "../../assets/image/redo.png";
import undo from "../../assets/image/undo.png";
import quote from "../../assets/image/quote.png";
import { useHistory } from "react-router-dom";
// import LinkIcon from '@mui/icons-material/Link';

const AskQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");
  const [codePreview, setCodePreview] = useState(true);
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [responseData, setResponseData] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("dracula");
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const classes = useStyles();
  const history = useHistory();
  const handlePreview = (e) => {
    e.preventDefault();
    setCodePreview(!codePreview);
  };
  // imageUrl:"https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setUrl(event.target.files[0]);
      //  setUrl(URL.createObjectURL(event.target.files[0]));
      return;
    }
  };

  const imagePicker = () => {
    imageRef.current.click();
  };
  console.log(`imageUrl`, imageUrl);

  const postGetImageUrl = (e) => {
    e.preventDefault();

    setLoading(true);
    let data = new FormData();
    data.append("file", url);
    data.append("upload_preset", "tech-semester");
    data.append("cloud_name", "dftv6emep");

    fetch("https://api.cloudinary.com/v1_1/dftv6emep/image/upload", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("response", res);
        // setLoading(false);
        if (res) {
          setImageUrl(res?.url);
          handleSubmits(res?.url);
        }
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  };

  const handleSubmits = (img) => {
    const data = {
      imageUrl: img,

      body,
      user: 1,
      tags: [1],
    };
    askQuestion(data)
      .then((res) => {
        console.log("result", res);
        history.push("/question-feeds");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <div className="w-6/12 shadow-md py-5 px-5 rounded-md bg-white mt-20">
          {/* ********************avatar and username*********************** */}
          <div className="flex items-center justify-start ">
            <img
              src={pics}
              alt="profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <p className="">Adeniyi</p>
          </div>
          <h2 className="text-4xl font-semibold mb-6 space-x-1 mt-5 leading-4 text-textPrimary">
            Ask your Question!
          </h2>
          <p className="font-bold ">Body</p>
          <p className="">
            Input all the information needed to answer your question
          </p>

          <div className="shadow-md w-full  rounded-md  mx-auto mt-3">
            {/* ***************hide formatting button section************************* */}
            <div className="w-full flex items-center justify-between pl-3 mb-1">
              {codePreview && (
                <div className="w-5/12  flex items-center justify-between ">
                  <button className="font-bold text-lg"> B</button>
                  <button className="font-bold italic text-lg"> I</button>
                  <button className="font-bold italic text-lg">{"{}"}</button>
                  <button className="font-bold italic" onClick={imagePicker}>
                    <img src={img} alt="" className="" />
                  </button>
                  <input
                    type="file"
                    ref={imageRef}
                    onChange={onImageChange}
                    style={{ display: "none" }}
                  />
                  <button className="font-bold italic">
                    <img src={more} alt="" className="" />
                  </button>
                  <button className="font-bold italic">
                    <img src={more} alt="" className="" />
                  </button>
                  <button className="font-bold italic">
                    <img src={quote} alt="" className="" />
                  </button>
                </div>
              )}

              <div
                className={`${
                  !codePreview && "w-full"
                } w-5/12 flex items-center justify-end  `}
              >
                <button className="font-bold italic mx-5">
                  <img
                    src={undo}
                    alt="undo"
                    className="w-18 h-18 object-contain"
                  />
                </button>
                <button className="font-bold italic mr-5">
                  <img
                    src={redo}
                    alt="redo"
                    className="w-108h-18 object-contain"
                  />
                </button>
                <Button sm onClick={handlePreview}>
                  Hide formatting tips
                </Button>
              </div>
            </div>

            {/* ***************textarea container input field************************* */}
            <div className="w-full bg-lightGray flex items-center justify-start py-2 px-3">
              <button className="mr-3 text-base text-textPrimary capitalize font-semibold">
                Links
              </button>
              <button className=" mr-3 text-base text-textPrimary capitalize font-semibold">
                Image
              </button>
              <p className=" mr-3 text-base text-textPrimary capitalize font-semibold">
                Stylings/headers
              </p>
              <button className=" mr-3 text-base text-textPrimary capitalize font-semibold">
                lists
              </button>
              <button className=" mr-3 text-base text-textPrimary capitalize font-semibold">
                code
              </button>
              <button className=" mr-3 text-base text-textPrimary capitalize font-semibold">
                blockquote
              </button>
            </div>
            <textarea
              className=" h-44 w-full outline-none p-5"
              type="text"
              placeholder=""
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>

          <p className="font-bold text-textPrimary mt-5 text-2xl">Tags</p>
          <div className="flex items-center justify-between mb-2">
            <p className="text-base text-textPrimary ">
              Add up to 5 tags to describe what your question is all about
            </p>

            <div className="w-7 h-7 rounded-full bg-googleBlue flex items-center justify-center">
              <p className="font-light text-2xl text-white">?</p>
            </div>
          </div>

          {/* ***************tags input field************************* */}
          <input
            type="text"
            placeholder="e.g. (mySql, html)"
            className="outline-none border-none rounded-sm shadow-md w-full p-4 my-3 font"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <Button rounded onClick={postGetImageUrl}>
            {loading ? (
              <div className="animate-spin  border-2 border-dotted  border-white w-7 h-7 rounded-full" />
            ) : (
              <p className="">Post your question</p>
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

export default AskQuestion;
