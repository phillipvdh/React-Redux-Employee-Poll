import { connect } from "react-redux";
import Card from "./Card";

const Dashboard = ({ authedUser, questions, users }) => {

    const unanswered = (question) => (!question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id));

    const answered = (question) => (question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id));

    return (
        <div>
            <h1 className="mt-9 mb-9 dashboard-heading" data-testid="heading">Dashboard</h1>

            <h2 className="mt-10 mb-6 new-question">New Questions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions
                    .filter(unanswered)
                    .map((question) => (
                        <li key={question.id}>
                            <Card question={question} author={users[question.author]} />
                        </li>
                    ))}
            </ul>

            <h2 className="mt-20 mb-6 answered-question">Answered Questions</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions
                    .filter(answered)
                    .map((question) => (
                        <li key={question.id}>
                            <Card question={question} author={users[question.author]} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(Dashboard);
