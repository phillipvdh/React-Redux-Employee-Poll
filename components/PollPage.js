import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";


const PollPage = ({ dispatch, authedUser, question, author }) => {
    const navigate = useNavigate();

    if (!authedUser || !question || !author) {
        return <Navigate to="/404" />;
    }

    const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

    const handleOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
    };

    const calcPercentage = (option, question) => {
        const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length / numberVotesTotal * 100 + " %";
            case "optionTwo":
                return question.optionTwo.votes.length / numberVotesTotal * 100 + " %";
            default:
                return "";
        }
    };

    return (
        <div>
            <h1 className="pollpage-heading mt-9">Poll by {author.id}</h1>

            <div className="flex justify-center">
                <img src={author.avatarURL} alt="Profile" className="h-24 w-24" />
            </div>

            <div className="flex justify-center">
                <h2 className="poll-question-heading mt-6 mb-10">Would you rather?</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

                <button onClick={handleOptionOne} disabled={hasVoted}
                    className={"p-4 rounded-xl bg-zinc-100 hover:shadow-xl transition " + (hasVotedForOptionOne ? "bg-lime-400" : "")}>
                    <div className={hasVotedForOptionOne ? "chosen" : ""}>
                        <p className="poll-question mb-2">{question.optionOne.text}</p>
                        {!hasVoted &&
                            <p className="show-button bg-sky-700 login-button px-5 py-3 mt-4 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                                <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                            </svg>Click</p>
                        }
                        {hasVoted &&
                            <p className="poll-question">Votes: {question.optionOne.votes.length} ({calcPercentage("optionOne", question)})</p>
                        }
                    </div>
                </button>

                <button onClick={handleOptionTwo} disabled={hasVoted}
                    className={"p-4 rounded-xl bg-zinc-100 hover:shadow-xl transition " + (hasVotedForOptionTwo ? "bg-lime-400" : "")}>
                    <p className="poll-question mb-2">{question.optionTwo.text}</p>
                    {!hasVoted &&
                        <p className="show-button bg-sky-700 login-button px-5 py-3 mt-4 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                        </svg>Click</p>
                    }
                    {hasVoted &&
                        <p className="poll-question">Votes: {question.optionTwo.votes.length} ({calcPercentage("optionTwo", question)})</p>
                    }
                </button>


            </div>


        </div>
    );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return { authedUser, question, author };
    } catch (e) {
        return <Navigate to="/404" />;
        // throw new Error(`Question or user is not found.\n ${e}`);
    }
};

export default connect(mapStateToProps)(PollPage);
