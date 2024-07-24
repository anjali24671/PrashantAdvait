import LiveSessions from "$lib/database/LiveSessions";
import connect from "$lib/database/connection";

export async function load({fetch}) {
    await connect()

    // current month
    const month = new Date().getMonth() + 1
    let mon = '0' + String(month)
  
    const sessionsRes = await fetch(`/api/liveSessions?month=${mon}`);

    const sessions = await sessionsRes.json();
  

    return {
        sessions
    }
    
}