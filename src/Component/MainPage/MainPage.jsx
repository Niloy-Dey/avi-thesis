import React, { useState } from 'react';

const MainPage = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        console.log('Input Value:', inputValue);

    };

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-6 bg-white p-4 rounded shadow">
                        <h2 className="text-center mb-4">Sentiment Analysis</h2>

                        <div className="form-group">
                            <label className='mb-2 fw-bolder' htmlFor="textArea">Input Your Comment</label>
                            <textarea
                                id="textArea"
                                className="form-control"
                                rows="3"
                                value={inputValue}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="form-group mt-3">
                            <label className='fw-bolder' htmlFor="outputText">Output Sentiment </label>
                            <div id="outputText" className="p-2"></div>
                        </div>

                        <div className="text-center mt-4">
                            <button
                                id="submitButton"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
