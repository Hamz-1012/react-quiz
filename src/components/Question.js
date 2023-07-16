import Options from "./Options";

function Question ( { questionData, dispatch, answer } )
{
    console.log( questionData );
    return (
        <div>
            <h4>{ questionData.question }</h4>
            <Options
                dispatch={ dispatch }
                answer={ answer }
                questionData={ questionData }
            />
        </div>
    );
}

export default Question;
