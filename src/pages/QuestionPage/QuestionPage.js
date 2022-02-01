import React from 'react'
import AskQuestionPaper from '../../components/PaperComponent/AskQuestionPaper'
import ProfileSummary from '../../components/PaperComponent/ProfileSummary'
import PostCard from '../../components/PostCard/PostCard'

const getQuestions =[]

function QuestionPage() {
    return (
        <div>
            QuestionPage
QuestionPage
<div>
{getQuestions.map((questions, index) => (
              <PostCard key={index} questions={questions} />
            ))}
</div>
<div>
      {/* <***********avatar name date upvote and down vote****************> */}
      <div className="flex items-center justify-between">
          {/* <***********avatar name and date ****************> */}
          <div className="flex items-center justify-center">
            {/* <img src={pics} alt="" className="h-12 w-12 rounded-full mr-3" /> */}
            <div className="">
              <p className="text-lg font-bold ">Abdusalm Fatai</p>
              <p className="">sep 28, 2021</p>
            </div>
          </div>

          {/* <***********upvote and down vote ****************> */}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center mr-7">
              {/* <img src={upvotetIcon} alt="up vote" className="h-6 w-6 mx-1 " /> */}
              <p className="text-lg ">10</p>
            </div>

            <div className="flex items-center justify-center">
              {/* <img
                src={downvoteIcon}
                alt="down vote"
                className="h-6 w-6 mx-1  "
              /> */}
              <p className="text-lg">10</p>
            </div>
          </div>
        </div>
</div>
        </div>
    )
}

export default QuestionPage
