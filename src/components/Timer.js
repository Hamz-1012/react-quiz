import { useEffect } from "react";

function Timer ( { dispatch, secondsRemaining } )
{
    const seconds = secondsRemaining % 60;
    const minutes = Math.floor( secondsRemaining / 60 );

    useEffect( function ()
    {
        const id = setTimeout( function ()
        {
            dispatch( { type: 'tick' } );
        }, 1000 );

        return () => clearTimeout( id );

    }, [ dispatch, secondsRemaining ] );

    return (
        <div className="timer">
            <div className="time-left">{ minutes >= 10 ? minutes : `0${ minutes }` }:{ seconds >= 10 ? seconds : `0${ seconds }` }</div>
        </div>
    );
}

export default Timer;
