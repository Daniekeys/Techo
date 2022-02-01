import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import AppContext from "../../context/app-context";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";
import SinglePostCard from "../../components/PostInfo/SinglePostCard";

import MediaCard from "../../components/MediaCard/MediaCard";
import ProfilePaper from "../../components/PaperComponent/ProfilePaper";
import AskQuestionPaper from "../../components/PaperComponent/AskQuestionPaper";
import PostCard from "../../components/PostCard/PostCard";
import ProfileSummary from "../../components/PaperComponent/ProfileSummary";

import TagsPaper from "../../components/PaperComponent/TagsPaper";

import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../reducers/actions/questions";

const QuestionFeed = () => {
  const dispatch = useDispatch();
  const { getQuestions } = useSelector((state) => state.getQuestions);

  console.log(`getQuestions`, getQuestions);
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  console.log(`getQuestions`, getQuestions);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { home, setHome } = useContext(AppContext);
  const classes = useStyles();
  const [profileShow, setProfileShow] = useState(false);

  return (
    <>
      <div className={classes.root}>
        <Navbar />

        <Grid className={classes.container} container>
          <Grid item md={3} className={classes.left}>
            <div className={classes.profileSection}>
              <ProfileSummary />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.center}>
            <AskQuestionPaper />

            {getQuestions.map((questions, index) => (
              <PostCard key={index} questions={questions} />
            ))}
          </Grid>
          <Grid item xs={0} md={3} className={classes.right}>
            {profileShow ? <ProfilePaper /> : <TagsPaper />}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default QuestionFeed;
