import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";

const NewPoll = ({ dispatch }) => {
    const navigate = useNavigate();
    const [firstOption, setFirstOption] = useState("");
    const [secondOption, setSecondOption] = useState("");

    const handleFirstOptionChange = (e) => {
        const value = e.target.value;
        setFirstOption(value);
    };

    const handleSecondOptionChange = (e) => {
        const value = e.target.value;
        setSecondOption(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(firstOption, secondOption));
        navigate("/");
    };

    return (
        <div className='newpoll-container'>
            <h1 className="newpoll-heading mt-9">New Poll</h1>
            <form onSubmit={handleSubmit}>

                <div className="mt-3">
                    <label htmlFor="firstOption"
                        data-testid="firstOptionLabel"
                        className="block password-heading">First Option</label>
                    <div className="mt-1">
                        <input
                            value={firstOption}
                            onChange={handleFirstOptionChange}
                            type="text"
                            name="firstOption"
                            id="firstOption"
                            data-testid="firstOption"
                            className="invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500" />
                    </div>
                </div>

                <div className="mt-3">
                    <label htmlFor="secondOption"
                        data-testid="secondOptionLabel"
                        className="block password-heading">Second Option</label>
                    <div className="mt-1">
                        <input
                            value={secondOption}
                            onChange={handleSecondOptionChange}
                            type="text"
                            name="secondOption"
                            id="secondOption"
                            data-testid="secondOption"
                            className="border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none px-3 py-2 bg-white" />
                    </div>
                </div>

                <div className="mt-6 text-right">
                    <button type="submit"
                        data-testid="submit-poll"
                        className="bg-sky-700 px-5 py-3 login-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                        </svg>Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default connect()(NewPoll);
