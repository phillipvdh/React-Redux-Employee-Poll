import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ question, author }) => {
  return (
    <Link to={'questions/' + question.id}>
      <div className="m-3 p-4 max-w-sm mx-auto flex items-center space-x-4 cards">
        <div className="shrink-0">
          <img className="h-14 w-14" src={author?.avatarURL} alt="Author" />
        </div>
        <div>
          <div className="card-name">{question.author}</div>
          <p className="card-date">{new Date(question.timestamp).toDateString()}</p>
          <p className="show-button login-button px-5 py-3 mt-4 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
          </svg>Show</p>
        </div>
      </div>
    </Link>
  );
}

export default connect()(Card);