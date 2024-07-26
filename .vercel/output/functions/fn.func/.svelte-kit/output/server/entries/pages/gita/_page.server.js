import "../../../chunks/LiveSessions.js";
import { c as connect } from "../../../chunks/connection.js";
async function load({ fetch }) {
  await connect();
  const month = (/* @__PURE__ */ new Date()).getMonth() + 1;
  let mon = "0" + String(month);
  const sessionsRes = await fetch(`/api/liveSessions?month=${mon}`);
  const sessions = await sessionsRes.json();
  const numberOfSessions = sessions.length;
  const today = /* @__PURE__ */ new Date();
  function getNextSession(sessions2) {
    let sessionDates = sessions2.map((session) => session.date).sort();
    for (let date of sessionDates) {
      if (new Date(date) > today) {
        for (let s of sessions2) {
          if (s.date === date) {
            return s;
          }
        }
      }
    }
  }
  const nextSession = getNextSession(sessions);
  return {
    sessions,
    nextSession,
    numberOfSessions
  };
}
export {
  load
};
