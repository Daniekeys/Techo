import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import commentIcon from "../../assets/comment.png";
import downvoteIcon from "../../assets/downvote.png";
import shareIcon from "../../assets/share.png";
import upvotetIcon from "../../assets/upvote.png";
import likeIcon from "../../assets/like.png";
import colorlike from "../../assets/colorlike.png";
import pics from "../../assets/intro.png";
import question from "../../assets/question.png";
import AskComment from "../Comment/AskComment";
import AddComments from "../AddComments";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import moment from "moment";

export default function PostCard({ questions }) {
  const [openComment, setOpenComment] = useState(false);
  // console.log(`questions`, questions?.user);
  const classes = useStyles();

  // create_date

  const handleCommet = () => {
    setOpenComment(!openComment);
  };
  return (
    <div>
      <div className="bg-white p-5 shadow-lg m-5">
        {/* <***********avatar name date upvote and down vote****************> */}
        <div className="flex items-center justify-between">
          {/* <***********avatar name and date ****************> */}
          <div className="flex items-center justify-center">
            <img src={pics} alt="" className="h-12 w-12 rounded-full mr-3" />
            <div className="">
              <p className="text-lg font-bold capitalize">{questions?.user?.first_name || "Ayeni"}</p>
              <p className="">
                {/* {moment(questions?.create_date).fromNow()} */}
               {/* { moment().format(questions?.create_date)} */}
               {moment(questions?.create_date).format('ll')}
                </p>
            </div>
          </div>

          {/* <***********upvote and down vote ****************> */}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center mr-7">
              <img src={upvotetIcon} alt="up vote" className="h-6 w-6 mx-1 " />
              <p className="text-lg ">10</p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={downvoteIcon}
                alt="down vote"
                className="h-6 w-6 mx-1  "
              />
              <p className="text-lg">10</p>
            </div>
          </div>
        </div>

        {/* <*******divider**********> */}
        <div className="h-px w-full opacity-50 bg-textPrimary my-6" />

        {/* <***********image number of comments ****************> */}
        <div className="">
          <p className="">
            {questions?.body ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, nibh dolor morbi elementum. Sed eu mauris ac viverra congue. Suspendisse mollis suspendisse volutpat ultricies commodo. Malesuada amet purus a eros porttitor ut nunc nisi, nisl."}
          </p>
        </div>

        <img
          src={questions?.imageUrl || question}
          alt=""
          className="w-full my-4"
        />
        <div className="flex items-center justify-start ">
          <img src={colorlike} alt="" className="h-4 w-4" />
          <p className="text-sm">172.4 comments</p>
        </div>

        {/* <*******divider**********> */}
        <div className="h-px w-full opacity-50 bg-textPrimary my-6" />

        {/* <***********like comments and share ****************> */}
        <div className="flex items-center cursor-pointer justify-between w-5/12 md:w-7/12">
          <div className="flex items-center justify-ce">
            <img src={likeIcon} alt="" className="h-5 w-5" />
            <p className="ml-2">like</p>
          </div>

          <div
            onClick={handleCommet}
            className="flex items-center cursor-pointer justify-center "
          >
            <img src={commentIcon} alt="" className="h-5 w-5" />
            <p className="ml-2">Comment</p>
          </div>

          <div className="flex items-center cursor-pointer justify-center ">
            <img src={shareIcon} alt="" className="h-5 w-5" />
            <p className="ml-2">Share</p>
          </div>
        </div>

        {openComment && <AddComments />}
      </div>
    </div>

  
  );
}
