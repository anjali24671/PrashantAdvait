import { c as connect } from "../../../../chunks/connection.js";
import { U as Users } from "../../../../chunks/Users.js";
async function POST({ request }) {
  try {
    const data = await request.json();
    await connect();
    const userResponse = await Users.create({ userFront_id: data.record.userUuid });
    return new Response(JSON.stringify(
      { status: 200, userResponse }
    ));
  } catch (e) {
    return new Response(JSON.stringify(
      { status: 401, message: e.message }
    ), { status: 401 });
  }
}
export {
  POST
};
