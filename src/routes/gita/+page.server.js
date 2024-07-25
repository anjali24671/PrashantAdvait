import LiveSessions from "$lib/database/LiveSessions";
import connect from "$lib/database/connection";
import { differenceInDays } from "date-fns";

export async function load({fetch}) {
    await connect()

    // current month
    const month = new Date().getMonth() + 1
    let mon = '0' + String(month)
  
    const sessionsRes = await fetch(`/api/liveSessions?month=${mon}`);

    const sessions = await sessionsRes.json();
    const numberOfSessions = sessions.length
    const today = new Date()

    function getNextSession(sessions) {
        
        let sessionDates = sessions.map(session => session.date).sort()
        for (let date of sessionDates) {
        
            if (new Date(date) > today) {
                for (let s of sessions) {
                    if (s.date === date) {
                        return s
                    }
                }
            }
        } 
    }

    const nextSession = getNextSession(sessions)
   
    // const thatDay = new Date(sessions[0].date)
    // console.log(today<thatDay)

    return {
        sessions,
        nextSession,
        numberOfSessions
    }
    
}