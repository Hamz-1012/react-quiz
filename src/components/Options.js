function Options ( { questionData, dispatch, answer } )
{
    const hasAnswered = answer !== null;
    return (
        <div className="options">
            { questionData.options.map( ( option, index ) =>
            {
                return <button
                    key={ option }
                    className={ `btn btn-option ${ index === answer ? "answer" : "" } ${ hasAnswered ? index === questionData.correctOption ? "correct" : "wrong" : "" }` }
                    onClick={ () => dispatch( { type: "newAnswer", payload: index } ) }
                    disabled={ hasAnswered }
                >

                    { option }
                </button>;
            } )
            }
        </div>
    );
}

export default Options;
